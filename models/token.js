import mongoose, { model, Schema } from "mongoose";

const apiKeySchema =  new Schema({
    apiKey:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true});

let apikey = mongoose.models.apikey || model("apikey",apiKeySchema)
export default apikey;