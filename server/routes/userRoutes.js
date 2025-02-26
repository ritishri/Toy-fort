import express from "express";
import { getAllSliders , booksImages,blogImages, blogContent,relatedBlog} from "../controllers/userController.js";


const router = express.Router()



router.get("/", getAllSliders)
router.get("/books-images", booksImages)
router.get("/blog-image", blogImages)
router.get("/blog-image/:category_slug/:id", blogContent)
router.get("/related-posts", relatedBlog)




export default router;
