import responder from "../../../../utils/responder";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});


export async function GET(req) {
  try {
    const result = imagekit.getAuthenticationParameters();
    return new Response(JSON.stringify({ message: "Success", success: true, data: result }), { status: 200, headers: corsHeaders() });
  } catch (err) {
    console.error("ImageKit Auth Error:", err);
    return new Response(JSON.stringify({ message: err.message, success: false }), { status: 500, headers: corsHeaders() });
  }
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}


  export async function OPTIONS() {
    return new Response(null, { status: 200, headers: corsHeaders() });
  }
  
