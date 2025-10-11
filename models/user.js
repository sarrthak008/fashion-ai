import { model, models, Schema } from "mongoose";


const userSchema = new Schema({
     username : {
        type: String,
        required: true
     },
     password:{
        type:String,
        required:true
     }
},{timestamps:true})


let user =  models.user || model("user",userSchema)
export default user;