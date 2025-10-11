import connectToDB from "../../../../lib/connectdb";
import user from "../../../../models/user";
import responder from "../../../../utils/responder"
import getApiKey from "../../../../utils/ganarateToken";

export const POST = async (request)=>{
      try {
       connectToDB() //  connect to the datbase before every operation of database ..

         let {username , password} = await request.json()

           if(!username && !password) {
             return responder("to ganarate token username and password must be provided",null,404,false);
           }

           let findeduser = await user.findOne({
             username:username,
             password:password
           })

          if(!findeduser){
            return responder("send me password and username",null,404,false);
          }

       

      } catch (error) {
        return responder(error.message,null,404,false)
      }
}