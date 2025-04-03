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
    const { imageUrl, title, originalPrice, discountedPrice, slug } = req.body;
    const userId = req.user?.id;
    console.log(userId);

    if (!userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user ID found" });
    }

    const db = await connectToDatabase();

    const [rows] = await db.query(
      "SELECT * FROM wishlist WHERE title = ? AND user_id = ?",
      [title, userId]
    );

    // if (rows.length > 0) {
    //   return res.status(409).json({ message: "Item already in wishlist" });
    // }

    const [result] = await db.query(
      "INSERT INTO wishlist (user_id, image, title, original_price, discounted_price, slug) VALUES (?,?,?,?,?,?)",
      [userId, imageUrl, title, originalPrice, discountedPrice, slug]
    );

    console.log(result);

    res.status(201).json({
      message: "Product added successfully",
      insertId: result.insertId,
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

    const [wishlist] = await db.query("SELECT * from wishlist where id = ?", [
      slug,
    ])
    
    // console.log(wishlist);

    await db.query("DELETE from wishlist where slug = ?", [slug]);

    res.json({ message: "Item removed from wishlist" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in removing product from wishlist", error });
  }
};

const getWishlist = async (req, res) => {
  console.log("Req-user", req.user);

  try {
    const id = req.user.id;
    console.log("UserId:", id);
    // console.log("Request Body:", req.user)

    const db = await connectToDatabase();

    const [rows] = await db.query("SELECT * FROM wishlist WHERE user_id = ?", [
      id,
    ]);

    console.log("Wishlist:", rows);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Wishlist is empty" });
    }

    res.json(rows);
  } catch (error) {
    console.error("Error fetching wishlist:", error.message);
    res.status(500).json({ error: error.message });
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
};
