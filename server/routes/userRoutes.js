import express from "express";
import { getAllSliders , booksImages,blogImages, blogContent,relatedBlog, register, login, changePassword, getProfile} from "../controllers/userController.js";
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





export default router;
