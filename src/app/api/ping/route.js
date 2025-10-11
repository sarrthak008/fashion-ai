import responder from "../../../../utils/responder.js"

export const GET = async()=>{
      try {
        return responder("Server api is running healthy",null,200,true);
      } catch (error) {
        return responder(error.message,null,500,false);
      }
      
  }