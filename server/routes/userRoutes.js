import express from "express";
import { getAllSliders , booksImages,blogImages, blogContent} from "../controllers/userController.js";

const router = express.Router()

router.get("/", getAllSliders)
router.get("/books-images", booksImages)
router.get("/blog-image", blogImages)
router.get("/blog-content", blogContent)


export default router;
