import mongoose,{Schema} from "mongoose";

const schema = mongoose.Schema;

const blogSchema = new schema({
    title:{
        type:String,
        reqiured:true
    },
    content:{
        type:String,
        reqiured:true
    },
    
});
const Blog = mongoose.model("Blog",blogSchema);
export default Blog;