import { connectToDatabase } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

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
  // console.log(req.body);

  try {
    const connection = await connectToDatabase();
    const [rows] = await connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      return res.status(409).json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await connection.query(
      "INSERT INTO users (first_name, last_name, email, password, phone_number) VALUES (?, ?, ?, ?, ?)",
      [first_name, last_name, email, hashedPassword, phone_number]
    );

    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async(req,res) =>{
    const {email, password,first_name} = req.body
    console.log("Login", req.body);

    try {
       const db = await connectToDatabase()
       const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email])
      //  console.log(rows)

       if(rows.length === 0){
        return res.status(404).json({message:"User not existed"})
       }
    
        const isMatch = await bcrypt.compare(password,rows[0].password)

        if(!isMatch){
            return res.status(401).json({message:"Wrong Password"})
        }

        // If password is correct generate the token and return to the frontend

        const token = jwt.sign({ id: rows[0].id, email: rows[0].email },process.env.JWT_KEY,{expiresIn:'5h'})
        // console.log(token)

       
       res.status(201).json({token: token})
    } catch (error) {
       res.status(500).json({error:error.message})  
    }
}

export {
  getAllSliders,
  booksImages,
  blogImages,
  blogContent,
  relatedBlog,
  register,
  login
};

// SELECT * from blog_images WHERE id BETWEEN 1 AND 10 OR ID BETWEEN 11 AND 13 OR ID BETWEEN 14 AND 16 OR ID BETWEEN 19 AND 20 OR ID BETWEEN 63 AND 71 OR ID=60 ORDER BY id DESC
