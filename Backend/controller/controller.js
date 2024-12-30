import { title } from "process";
import Blog from "./model/blogSchema.js";



const createBlog = async (req,res) =>{
    try{
        const blog = new Blog({
            title:req.body.title,
            content:req.body.content,
        })
        await blog.save().
            then(blog =>{
                res.status(201).json({
                    message:"Blog added successfully",
                    blog:{
                        ...blog,
                        id:blog._id
                    }
                })
            })
    }
    catch(error){
        console.log(error);
    }
}

const getBlogByCreator = async (req, res) => {
    try {
      const blogs = await Blog.find({ creator: req.userData.userId });
      if (blogs) {
        res.status(200).json({
          message: "Posts fetched successfully!",
          blogs: blogs,
        });
      } else {
        res.status(404).json({
          message: "No blogs found for this user.",
        });
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({
        message: "Fetching blogs failed. Please try again later.",
      });
    }
  };
  
const updateBlog = async (req,res) =>{
    const blog = new Blog({
        _id: req.body.id,
        title: req.body.title,
        content: req.body.content,
    });
    try{
        const result = await Blog.updateOne(
            {_id:req.params.id},
            req.body
        );
        if(result.modifiedCount > 0){
            res.status(200).json({message:"Updated successful!"});
        }else{
            res.status(404).json({message:" Blog not found or no changes made."});
        }
    }
    catch(error){
        console.error("Error updating blog: ",error);
        res.status(500).json({ message: "Error updating post. Please try again later." });

    }
};

const deleteBlog = async (req,res) => {
    try {
      const blogId = req.params.id;
      console.log(`Passed Id: ${blogId}`);
      
      const result = await Post.deleteOne({ _id: blogId, creator: req.userData.userId });
  
      if (result.deletedCount > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized or blog not found!" });
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      res.status(500).json({ message: "Error deleting blog. Please try again later." });
    }
  };
  
export {createBlog,updateBlog,deleteBlog,getBlogByCreator} ;