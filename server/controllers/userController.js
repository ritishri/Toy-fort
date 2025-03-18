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
  console.log("Registration", req.body);

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

    await connection.query(
      "INSERT INTO users (first_name, last_name, email, password, phone_number) VALUES (?, ?, ?, ?, ?)",
      [first_name, last_name, email, hashedPassword, phone_number]
    );

    const [newUser] = await connection.query(
      "SELECT first_name, last_name, email, phone_number FROM users WHERE email = ?",
      [email]
    );

    console.log("New user", newUser);

    const token = jwt.sign(
      { id: newUser[0].id, email: newUser[0].email },
      process.env.JWT_KEY,
     
    )

    console.log(token.split(" ")[1])
    

    res.status(201).json({
      message: "User created",
      token,
      user: newUser[0],
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login", req.body);

  try {
    const db = await connectToDatabase();
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ])
    console.log(rows[0]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not existed" });
    }

    const user = rows[0];
    console.log("Details", user);

    const isMatch = await bcrypt.compare(password, rows[0].password);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong Password" });
    }

    res.status(201).json({
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      },
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

    // Get userId from authentication middleware
    console.log(req.user);
    
    const userEmail = req.user.email;
    console.log("UserEmail",userEmail);
    

    if (!userEmail) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Fetch user by userId
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [userEmail]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];

    // Compare old password with hashed password in DB
    const isMatch = await bcrypt.compare(old_password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect old password" });
    }

    // Check if new password and confirm password match
    if (password !== confirm_password) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query("UPDATE users SET password = ? WHERE email = ?", [
      hashedPassword,
      userEmail,
    ]);

    return res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};




const getProfile = async (req, res) => {
  console.log("Profile API called");

  try {
    const db = await connectToDatabase();
    console.log(req.body);

    const userId = req.user.id;
    console.log(userId);

    const rows = await db.query(
      "SELECT first_name, last_name,email,phone_number FROM users WHERE id = ?",
      [userId]
    );

    console.log(rows[0]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.log(error.message);

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
};

// SELECT * from blog_images WHERE id BETWEEN 1 AND 10 OR ID BETWEEN 11 AND 13 OR ID BETWEEN 14 AND 16 OR ID BETWEEN 19 AND 20 OR ID BETWEEN 63 AND 71 OR ID=60 ORDER BY id DESC
