import express from "express";
import {
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
} from "../controllers/userController.js";
import {
  brandProducts,
  productsDetails,
  productDiscount,
  filterProductOnAge,
  sideBarFilter,
  sideBarBrandFilter,
  getBrand,
  getBrandProduct
  
} from "../controllers/productController.js";
import verifyToken from "../middlware/auth.js";

const router = express.Router();

router.get("/", getAllSliders);
router.get("/books-images", booksImages);
router.get("/blog-image", blogImages);
router.get("/blog-image/:category_slug/:id", blogContent);
router.get("/related-posts", relatedBlog);
router.get("/brand-products", brandProducts);
router.get("/:slug", productsDetails);
router.post("/register", register);
router.post("/login", login);
router.post("/settings/change-password", verifyToken, changePassword);
router.get("/user/profile", verifyToken, getProfile);
router.put("/user/update-profile", verifyToken, updateProfile);
router.post("/add", verifyToken, addToWishlist);
router.delete("/remove/:slug", verifyToken, removeFromWishlist);
router.get("/user/wishlist", verifyToken, getWishlist);
router.post("/addToCart", verifyToken, addToCart);
router.get("/user/getCartProducts", verifyToken, getCartProducts);
router.delete("/removeProduct/:slug", verifyToken, removeFromCart);
router.post("/increaseProductQuantity/:slug", increaseProductQuantity);
router.post("/decreaseProductQuantity/:slug", decreaseProductQuantity);
router.get("/products/discount", productDiscount);
router.get("/products/age", filterProductOnAge)

router.get("/category/:category", (req, res) => {
  if (req.query.brand) {
    return sideBarBrandFilter(req, res);
  } else {
    return sideBarFilter(req, res);
  }
})  

router.get("/getbrand/name", getBrand)
router.get("/brandProducts/products", getBrandProduct)


export default router;
