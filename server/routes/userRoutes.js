import express from "express";
import { getAllSliders , booksImages,blogImages, blogContent,relatedBlog, register, login, changePassword, getProfile, updateProfile, addToWishlist, removeFromWishlist, getWishlist} from "../controllers/userController.js";
import { brandProducts, productsDetails } from "../controllers/productController.js"
import verifyToken from '../middlware/auth.js'


const router = express.Router()



router.get("/", getAllSliders)
router.get("/books-images", booksImages)
router.get("/blog-image", blogImages)
router.get("/blog-image/:category_slug/:id", blogContent)
router.get("/related-posts", relatedBlog)
router.get("/brand-products", brandProducts)
router.get("/:slug", productsDetails)
router.post('/register',register)
router.post('/login',login)
router.post('/settings/change-password',verifyToken,changePassword)
router.get("/user/profile",verifyToken,getProfile)
router.put("/user/update-profile",verifyToken,updateProfile)
router.post("/add",verifyToken,addToWishlist)
router.delete("/remove/:id",verifyToken,removeFromWishlist)
router.get("/wishlist",verifyToken,getWishlist)


export default router;
