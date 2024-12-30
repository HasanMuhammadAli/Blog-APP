import express from "express";
const router = express.Router();
import {createBlog,deleteBlog, updateBlog, getBlogByCreator} from "../controller/controller.js";

router.get("/myblogs",getBlogByCreator);
router.post("",createBlog);
router.delete("/blog/delete/:id",deleteBlog);
//patch is used for update
router.patch("/:id",updateBlog);

export default router;