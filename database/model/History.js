import mongoose from "mongoose"
const HistorySchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    url:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
export const History = mongoose.models.History || mongoose.model('History',HistorySchema)