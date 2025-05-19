import { connectToDatabase } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getAllSliders = async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const [rows] = await connection.execute(
      "SELECT id, link, image FROM slider"
    );

    res.json(rows);
  } catch (error) {
    console.error("Error fetching sliders:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const booksImages = async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const [rows] = await connection.execute(
      "SELECT product_id, image_default FROM images"
    );

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the books images:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const blogImages = async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const [rows] = await connection.execute(
      "SELECT bc.name as category_name, bc.slug as category_slug,YEAR(bp.created_at) as year_val, MONTH(bp.created_at) as month_val, bp.* from blog_posts bp INNER JOIN blog_categories bc ON bp.category_id = bc.id ORDER BY bp.created_at DESC"
    );

    res.json(rows);
  } catch (error) {
    console.error("Error fetching sliders:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const blogContent = async (req, res) => {
  try {
    const { id, category_slug } = req.params;
    const connection = await connectToDatabase();
    const [rows] = await connection.execute(
      `SELECT bc.name as category_name, bc.slug as category_slug,bp.id,bp.image_default, bp.content from blog_posts bp INNER JOIN blog_categories bc ON bp.category_id = bc.id WHERE bp.id=? AND bc.slug=? ORDER BY bp.created_at DESC`,
      [id, category_slug]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "No blog found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error in fetching content:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const relatedBlog = async (req, res) => {
  try {
    // const {id, category_slug} = req.params;
    const connection = await connectToDatabase();
    const [rows] = await connection.execute(
      `SELECT bc.name as category_name, bc.slug as category_slug,YEAR(bp.created_at) as year_val, MONTH(bp.created_at) as month_val, bp.* from blog_posts bp INNER JOIN blog_categories bc ON bp.category_id = bc.id ORDER BY RAND() LIMIT 3`
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "No blog found" });
    }

    res.json(rows);
  } catch (error) {
    console.error("Error in fetching content:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  const { first_name, last_name, email, password, phone_number } = req.body;
  // console.log("Registration", req.body);

  try {
    const connection = await connectToDatabase();
    const [rows] = await connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    const user = rows[0];

    if (rows.length > 0) {
      return res.status(409).json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const slug = first_name + "-" + last_name;
    const newSlug = slug.toLocaleLowerCase();
    // console.log(newSlug);

    await connection.query(
      "INSERT INTO users (first_name, last_name, email, password, phone_number,slug) VALUES (?, ?, ?, ?, ?, ?)",
      [first_name, last_name, email, hashedPassword, phone_number, newSlug]
    );

    const [newUser] = await connection.query(
      "SELECT id, first_name, last_name, email, phone_number, slug FROM users WHERE email = ?",
      [email]
    );

    // console.log("New user", newUser[0].id);

    const token = jwt.sign(
      { id: newUser[0].id, email: newUser[0].email },
      process.env.JWT_KEY,
      { expiresIn: "10h" }
    );

    // console.log(token)

    res.status(201).json({
      message: "User created",
      token,
      user: newUser[0],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log("Login", req.body);

  try {
    const db = await connectToDatabase();
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    // console.log(rows[0]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not existed" });
    }

    const user = rows[0];
    // console.log("Details", user);

    const isMatch = await bcrypt.compare(password, rows[0].password);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong Password" });
    }
    const slug = user.slug;
    const newSlug = slug.toLocaleLowerCase();
    // console.log(user.id);
    // console.log(user.email);
    // console.log(newSlug);

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_KEY,
      { expiresIn: "8h" }
    );

    // console.log(token);

    res.status(201).json({
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        slug: newSlug,
      },
      token: token,
    });
    // res.status(201).json({token: token})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { old_password, password, confirm_password } = req.body;
    // console.log(req.body);

    // console.log(req.user);

    const userEmail = req.user.email;
    // console.log("UserEmail",userEmail);

    if (!userEmail) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      userEmail,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(old_password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect old password" });
    }

    if (password !== confirm_password) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query("UPDATE users SET password = ? WHERE email = ?", [
      hashedPassword,
      userEmail,
    ]);

    return res.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("UserId", userId);
    console.log(req.user);

    const db = await connectToDatabase();

    const useId = req.user.id;
    // console.log(userEmail);

    const rows = await db.query(
      "SELECT id, first_name, last_name,email,phone_number FROM users WHERE id = ?",
      [userId]
    );

    // console.log(rows[0]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { id, first_name, last_name, email, phone_number } = req.body;

    if (!id) {
      res.status(400).json({ message: "UserId is required" });
    }

    const currentUser = await db.query("SELECT * from users where id = ? ", [
      id,
    ]);
    //  console.log("Current user",currentUser);

    if (currentUser.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    await db.query(
      "UPDATE users SET email = ?, first_name = ?, last_name = ?, phone_number = ? WHERE id = ?",
      [email, first_name, last_name, phone_number, id]
    );

    return res.status(200).json({ success: true, message: "Profile Updated" });
  } catch (error) {
    console.log("Error in updating profile", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { imageUrl, title, originalPrice, discountedPrice, slug, discount } =
      req.body;
    const userId = req.user?.id;
    console.log("discount", discount);

    if (!userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user ID found" });
    }

    const db = await connectToDatabase();

    // if (rows.length > 0) {
    //   return res.status(409).json({ message: "Item already in wishlist" });
    // }

    const [result] = await db.query(
      "INSERT INTO wishlists (user_id, image, title, original_price, discounted_price, slug, discount) VALUES (?,?,?,?,?,?,?)",
      [userId, imageUrl, title, originalPrice, discountedPrice, slug, discount]
    );

    console.log(result);

    const [rows] = await db.query(
      "SELECT * FROM wishlists WHERE title = ? AND user_id = ?",
      [title, userId]
    );

    console.log("rows", rows);

    res.status(201).json({
      message: "Product added successfully",
      insertId: result.insertId,
      result: rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error in adding product to wishlist",
      error: error.message,
    });
  }
};

const removeFromWishlist = async (req, res) => {
  try {
    const { slug } = req.params;
    console.log("slug", slug);

    const db = await connectToDatabase();

    const [wishlist] = await db.query("SELECT * from wishlists where id = ?", [
      slug,
    ]);

    // console.log(wishlist);

    await db.query("DELETE from wishlists where slug = ?", [slug]);

    res.json({ message: "Item removed from wishlist" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in removing product from wishlist", error });
  }
};

const getWishlist = async (req, res) => {
  try {
    const id = req.user.id;
    // console.log("UserId:", id);
    // console.log("Request Body:", req.user)

    const db = await connectToDatabase();

    const [rows] = await db.query("SELECT * FROM wishlists WHERE user_id = ?", [
      id,
    ]);

    // console.log("Wishlist:", rows);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Wishlist is empty" });
    }

    res.json(rows);
  } catch (error) {
    console.error("Error fetching wishlist:", error.message);
    res.status(500).json({ error: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { imageUrl, title, originalPrice, discountedPrice, slug } = req.body;
    const userId = req.user?.id;
    // console.log(userId);

    if (!userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user ID found" });
    }

    const db = await connectToDatabase();

    const [rows] = await db.query(
      "SELECT * FROM cart WHERE title = ? AND user_id = ?",
      [title, userId]
    );

    console.log("rows", rows);

    const [result] = await db.query(
      "INSERT INTO cart (user_id, image, title, original_price, discounted_price, slug) VALUES (?,?,?,?,?,?)",
      [userId, imageUrl, title, originalPrice, discountedPrice, slug]
    );

    // console.log(result);

    res.status(201).json({
      message: "Product added successfully",
      insertId: result.insertId,
      result: rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error in adding product to wishlist",
      error: error.message,
    });
  }
};

const increaseProductQuantity = async (req, res) => {
  try {
    const { slug } = req.params;
    // console.log(slug);

    const db = await connectToDatabase();

    const [rows] = await db.query("SELECT quantity from cart where slug = ?", [
      slug,
    ]);

    const quantity = rows[0].quantity;

    const newQuantity = quantity + 1;

    await db.query("UPDATE cart set quantity = ? where slug = ?", [
      newQuantity,
      slug,
    ]);

    res.status(200).json({ message: "Quantity  updated", newQuantity });
  } catch (error) {
    console.log("Error in updating quantity", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const decreaseProductQuantity = async (req, res) => {
  try {
    const { slug } = req.params;
    // console.log(slug);

    const db = await connectToDatabase();

    const [rows] = await db.query("SELECT quantity from cart where slug = ?", [
      slug,
    ]);

    let newQuantity = rows[0].quantity;

    if (newQuantity > 1) {
      newQuantity = newQuantity - 1;
    }

    await db.query("UPDATE cart set quantity = ? where slug = ?", [
      newQuantity,
      slug,
    ]);

    res.status(200).json({ message: "Quantity  updated", newQuantity });
  } catch (error) {
    console.log("Error in updating quantity", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { slug } = req.params;
    // console.log("slug", slug);

    const db = await connectToDatabase();

    const [cart] = await db.query("SELECT * from cart where slug = ?", [slug]);

    if (cart.length === 0) {
      return res.status(401).json({ message: "Item not in cart" });
    }

    // console.log(cart)

    await db.query("DELETE from cart where slug = ?", [slug]);

    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in removing product from cart", error });
  }
};

const getCartProducts = async (req, res) => {
  try {
    const id = req.user.id;
    // console.log("UserId:", id);
    // console.log("Request Body:", req.user)

    const db = await connectToDatabase();

    const [rows] = await db.query("SELECT * FROM cart WHERE user_id = ?", [id]);

    // console.log("Cart Products:", rows);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    res.json(rows);
  } catch (error) {
    console.error("Error fetching Cart:", error.message);
    res.status(500).json({ error: error.message });
  }
};

const sendResetPasswordLink = async (email) => {
  try {
    const db = await connectToDatabase();

    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (!rows || rows.length === 0) {
      return { success: false, message: "User not found" };
    }

    const user = rows[0];

    const resetToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.RESET_JWT_KEY,
      { expiresIn: "8h" }
    );
    const resetLink = `http://localhost:5173/reset-password?token=${encodeURIComponent(
      resetToken
    )}`;

    return {
      success: true,
      message: "Reset Password email sent successfully",
      resetLink,
    };
  } catch (error) {
    console.error("Reset link error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};

const bcryptResetPassword = async (token, password) => {
  const RESET_JWT_KEY = process.env.RESET_JWT_KEY;

  try {
    const decoded = jwt.verify(token, RESET_JWT_KEY);
    // console.log("Decoded",decoded.id)

    const hashedPassword = await bcrypt.hash(password, 10);

    const db = await connectToDatabase();

    const rows = await db.query("UPDATE users SET password = ? where id=?", [
      hashedPassword,
      decoded.id,
    ]);

    return { success: true, message: "Password reset successfully" };
  } catch (error) {
    console.log("JWT error", error.message);

    return {
      success: false,
      message: "Error in reset password, Please try again. ",
    };
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  try {
    const response = await sendResetPasswordLink(email);

    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(401).json(response);
    }
  } catch (error) {
    console.log("Error in user login", error);
    res.status(500).json({
      success: false,
      message: "Login failed, Please try again later",
    });
  }
};

const resetPassword = async (req, res) => {
  const { token, password } = req.body;

  if (!token || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });
    y;
  }

  try {
    const response = await bcryptResetPassword(token, password);

    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(401).json(response);
    }
  } catch (error) {
    console.log("Error in reset password", error.message);
    res.status(500).json({
      success: false,
      message: "Login failed, Please try again later",
    });
  }
};

export {
  getAllSliders,
  booksImages,
  blogImages,
  blogContent,
  relatedBlog,
  register,
  login,
  changePassword,
  getProfile,
  updateProfile,
  addToWishlist,
  removeFromWishlist,
  getWishlist,
  addToCart,
  getCartProducts,
  removeFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  forgetPassword,
  resetPassword,
  bcryptResetPassword,
};

// const sendResetPasswordLink = async (email) => {
//   try {
//     const db = await connectToDatabase();

//     await db.query("SELECT * FROM users WHERE email = ?", [email]);

//     if (rows.length === 0) {
//       return { success: false, message: "User not found" };
//     }

//     const user = rows[0];
//     const resetToken = jwt.sign(
//       { id: user.id, email: user.email },
//       process.env.RESET_JWT_KEY,
//       { expiresIn: "8h" }
//     );

//     const resetLink = `http://localhost:5000/reset-password?token=${resetToken}`;

//     console.log(resetLink);

//     return {
//       success: true,
//       message: "Reset Password email sent successfully",
//       resetLink,
//     };
//   } catch (error) {
//     console.log("login error: ", error);
//     return { success: false, message: "Login failed, Please try again. " };
//   }
// }

// const forgetPassword = async (req,res) =>{
//   const { email } = req.body;

//   if (!email) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Email is required" });
//   }

//   try {
//     const response = await sendResetPasswordLink(email);

//     if (response.success) {
//       return res.status(200).json(response);
//     } else {
//       return res.status(401).json(response);
//     }
//   } catch (error) {
//     console.log("Error in user login", error);
//     res
//       .status(500)
//       .json({
//         success: false,
//         message: "Login failed, Please try again later",
//       });
//   }
// }
