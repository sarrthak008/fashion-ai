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
    return responder("Auth parameters generated", result,200,true);
  } catch (err) {
    console.error("ImageKit Auth Error:", err);
    return responder("imagekit fails try after some time",null,500,false)
  }
}


export async function OPTIONS(req) {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
