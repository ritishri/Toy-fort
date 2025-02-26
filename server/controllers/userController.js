import { connectToDatabase } from "../config/db.js";

const getAllSliders = async (req, res) => {
    try {
        const connection = await connectToDatabase();
        const [rows] = await connection.execute("SELECT id, link, image FROM slider");      

        res.json(rows);
    } catch (error) {
        console.error("Error fetching sliders:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const booksImages = async(req,res) => {
    try
    {
        const connection = await connectToDatabase();
        const [rows] = await connection.execute("SELECT product_id, image_default FROM images");

        res.json(rows);

    }catch(error)
    {
        console.log("Error in fetching the books images:",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}


const blogImages = async (req, res) => {
    try {
        const connection = await connectToDatabase();
        const [rows] = await connection.execute("SELECT * from blog_images WHERE id BETWEEN 1 AND 10 OR ID BETWEEN 11 AND 13 OR ID BETWEEN 14 AND 16 OR ID BETWEEN 19 AND 20 OR ID BETWEEN 63 AND 71 OR ID=60 ORDER BY id DESC");

        res.json(rows)

    } catch (error) {
        console.error("Error fetching sliders:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

};

const blogContent = async (req, res) => {
    try {
        const connection = await connectToDatabase();
        const [rows] = await connection.execute("SELECT id, title, slug, summary, created_at from blog_posts");

        res.json(rows)

    } catch (error) {
        console.error("Error fetching sliders:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

};


export {getAllSliders,booksImages, blogImages, blogContent}