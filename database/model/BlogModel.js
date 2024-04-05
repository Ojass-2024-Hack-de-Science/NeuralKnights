import mongoose from "mongoose"
import { type } from "os"

const BlogSchema = new mongoose.Schema({
    user:{
        type:String
    },
    title:{
        type:String,
        default:"",
    },
    email:{
        type:String,
        default:""
    },
    image:{
        type:String,
        default:""
    },
    content:{
        type:String,
        default:""
    },
    comment:{
        type:Array,
        default:[]
    },
}, { timestamps: true })

export const BlogModel  = mongoose.models.Blog || mongoose.model('Blog',BlogSchema)