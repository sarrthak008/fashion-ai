import { Schema ,model,models} from "mongoose";

const keySchema = new Schema({
    apiKey:{
        type:String,
        required:true
    }
},{timestamps:true})

let apikey = models.apikey || model("apikey",keySchema)
export default apikey;