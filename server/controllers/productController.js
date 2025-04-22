import { connectToDatabase } from "../config/db.js";

const brandProducts = async (req, res) => {
  try {
    const { brand } = req.query;
    // console.log(brand);

    const connection = await connectToDatabase();
    const [rows] = await connection.execute(
      "SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id where attribute2_value = ? AND images.is_main = 1 ORDER BY image_default DESC",
      [brand]
    );

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const productsDetails = async (req, res) => {
  try {
    // console.log("Received params:", req.params);

    const { attribute2_value, slug } = req.params;

    const connection = await connectToDatabase();

    const [rows] = await connection.execute(
      "SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.slug = ? ORDER BY images.image_default DESC",
      [slug]
    );

    // console.log(rows[0]);

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const productDiscount = async (req, res) => {
  try {
    const { discount } = req.query;
    // console.log(discount)

    const db = await connectToDatabase();
    const [rows] = await db.query(
      "SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.attribute3_value = ? AND images.is_main = 1 ORDER BY images.image_default DESC",
      [discount]
    );

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const filterProductOnAge = async (req, res) => {
  try {
    const { age } = req.query;
    // console.log(age)

    const db = await connectToDatabase();
    const [rows] = await db.query(
      "SELECT images.*, products.*, product_details.* FROM images INNER JOIN products ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE products.attribute1_value = ? AND images.is_main = 1 ORDER BY images.image_default DESC",
      [age]
    );

    res.json(rows);
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const sideBarFilter = async (req, res) => {
  try {
    const { category } = req.params;
    console.log("Sidebar cat:",category);

    // const category = req.params.category;
    // const brand = req.query.brand;
    // console.log("Sidebar cat1:",category);
    // console.log("Sidebar brand1:",brand);

    const db = await connectToDatabase();


    const [rows] = await db.query(
      "SELECT  categories.*, products.*, product_details.*, images.*  from categories INNER JOIN products on categories.id = products.category_id INNER JOIN images ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id where categories.slug= ? AND images.is_main = 1 ORDER BY images.image_default DESC;",
      [category]
    )
    
    res.json(rows)
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const sideBarBrandFilter = async (req, res) => {
  try {
    const category = req.params.category
    const brand = req.query.brand
    console.log("Sidebar cat:",category)
    console.log("Sidebar brand:",brand)

    const db = await connectToDatabase();
    const [rows] = await db.query(
      "SELECT  categories.*, products.*, product_details.*, images.*  from categories INNER JOIN products on categories.id = products.category_id INNER JOIN images ON images.product_id = products.id INNER JOIN product_details ON products.id = product_details.product_id WHERE categories.slug = ? AND attribute2_value = ? AND images.is_main = 1 ORDER BY images.image_default DESC;",
      [category, brand]
    )
    
    res.json(rows)
  } catch (error) {
    console.log("Error in fetching the products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  brandProducts,
  productsDetails,
  productDiscount,
  filterProductOnAge,
  sideBarFilter,
  sideBarBrandFilter
};
