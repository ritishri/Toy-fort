import express from "express";
import { getAllSliders , blogImages, blogContent} from "../controllers/userController.js";

const router = express.Router()

router.get("/", getAllSliders)
router.get("/blog-image", blogImages)
router.get("/blog-content", blogContent)

export default router;
