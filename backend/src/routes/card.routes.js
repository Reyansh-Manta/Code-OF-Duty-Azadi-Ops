import { upload } from "../middleware/multer.middleware.js"
import { Router } from "express";
import { createPost } from "../controllers/card.controller.js";

const router = Router()

router.route("/post").post(upload.fields([
    {
        name: "ContentImage",
        maxCount: 1
    },
    {
        name: "coverImage",
        maxCount: 1
    }
]),
    createPost)

export default router