import { connectToDatabase } from "../config/db.js";

const brandProducts = async (req, res) => {
  try {
    const { brand } = req.query;
    console.log(brand)

    const connection = await connectToDatabase();
    const [rows] = await connection.execute(
      "SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id where attribute2_value = ? ORDER BY image_default DESC",[brand]
    );
        
    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const productsDetails = async (req, res) => {
  
  try {
    console.log("Received params:", req.params)

    const { attribute2_value,slug } = req.params

    const connection = await connectToDatabase()

    const [rows] = await connection.execute(
      "SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.slug = ? ORDER BY images.image_default DESC",
      [slug]
    )

    // console.log(rows[0]);
    
    res.json(rows)
  } catch (error) {
    console.log("Error in fetching the products:", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
}




export{brandProducts, productsDetails}