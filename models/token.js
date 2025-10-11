import mongoose, { model, Schema } from "mongoose";

const apiKey =  new Schema({
    apiKey:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true});

let apikey = mongoose.models.apiKey || model("apikey",apiKey)
export default apikey;