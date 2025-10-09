import mongoose from "mongoose";

const connectToDB = async () => {
     try {
         if(mongoose.connection.readyState == 1){
            console.log(`%c db is alredy connected`, "color: green;");
         }else{
            await mongoose.connect(process.env.MONGO_DB_URL)
            console.log("%c database connected successfully...", "color: green;");

         }
     } catch (error) {
        console.log(`%c something went wrong`, "color: red", error);
     }
}


export default connectToDB;