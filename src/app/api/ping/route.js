import responder from "../../../../utils/responder.js"



function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}


export const GET = async(req)=>{
      try {
        return responder("Server api is running healthy",null,200,true);
      } catch (error) {
        return responder(error.message,null,500,false);
      }
      
  }


  // OPTIONS handler for preflight
  export async function OPTIONS() {
    return new Response(null, { status: 200, headers: corsHeaders() });
  }
  