import { connectToDatabase } from "../config/db.js";



const getAllSliders = async (req, res) => {
    try {
        const connection = await connectToDatabase();
        const [rows] = await connection.execute("SELECT id, link, image FROM slider WHERE id BETWEEN 29 AND 37");

        res.json(rows);
    } catch (error) {
        console.error("Error fetching sliders:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const blogImages = async (req, res) => {
    try {
        const connection = await connectToDatabase();
        const [rows] = await connection.execute("SELECT bc.name as category_name, bc.slug as category_slug, bp.* from blog_posts bp INNER JOIN blog_categories bc ON bp.category_id = bc.id ORDER BY bp.created_at DESC");

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



export {getAllSliders, blogImages, blogContent}


// SELECT * from blog_images WHERE id BETWEEN 1 AND 10 OR ID BETWEEN 11 AND 13 OR ID BETWEEN 14 AND 16 OR ID BETWEEN 19 AND 20 OR ID BETWEEN 63 AND 71 OR ID=60 ORDER BY id DESC