import mongoose from 'mongoose';
import { type } from 'os';

const UserSchema = new mongoose.Schema({
    username:String,
    GoogleId:{
        type:String,
        default:null
    },
    image:{
        type:String,
        default:null
    },
    password:{
        type:String,
        default:null
    },
    email:{
        type:String,
        unique:true
    }
})

export const User =  mongoose.models.User || mongoose.model('User',UserSchema)