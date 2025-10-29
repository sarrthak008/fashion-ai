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
        return new Response(JSON.stringify({message:"server running healthyy",data:null,success:true}))
      } catch (error) {
        return new Response(JSON.stringify({message:error.message + "hii" ,data:null,success:false}))
      }
      
  }


  // OPTIONS handler for preflight
  export async function OPTIONS() {
    return new Response(null, { status: 200, headers: corsHeaders() });
  }
  