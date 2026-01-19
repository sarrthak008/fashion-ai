// import connectToDB from "../../../../lib/connectdb";
// import user from "../../../../models/user";
// import responder from "../../../../utils/responder"
// import getApiKey from "../../../../utils/ganarateToken";
// import bcrypt from "bcrypt"
// import apikey from "../../../../models/apikey";
// import { NextResponse } from "next/server";
// import axios from "axios";
// import { GoogleGenAI } from "@google/genai";
// export const runtime = "nodejs"; 

// export const POST = async (request) => {
//   try {
//     connectToDB() //  connect to the datbase before every operation of database ..

//     let { username, password } = await request.json()

//     if (!username && !password) {
//       return responder("to ganarate token username and password must be provided", null, 404, false);
//     }

//     let findeduser = await user.findOne({
//       username: username,
//       password: password
//     })

//     if (!findeduser) {
//       return responder("send me password and username", null, 404, false);
//     }

//     let nanoapikey = getApiKey();
//     let hasedApikey = await bcrypt.hash(nanoapikey, 10);
//     let savedHashApiToDb = await apikey.create({
//       apiKey: hasedApikey
//     })

//     let CreatedsavedHashApiToDb = await savedHashApiToDb.save()

//     if (!CreatedsavedHashApiToDb) {
//       return responder("something went wrong please try later", null, 404, false);
//     }

//     return responder("congrates special one , api key ganarate sucessfully", nanoapikey, 200, true)

//   } catch (error) {
//     return responder(error.message, null, 404, false)
//   }
// }


// export async function GET(req) {
//   try {
//     if (!process.env.GEMINI_API_KEY) {
//       return NextResponse.json(
//         { error: "GEMINI_API_KEY is missing" },
//         { status: 500 }
//       );
//     }

//     const { searchParams } = new URL(req.url);
//     const prompt = searchParams.get("prompt");

//     if (!prompt) {
//       return NextResponse.json(
//         { error: "prompt is required" },
//         { status: 400 }
//       );
//     }

//     const ai = new GoogleGenAI({
//       apiKey: process.env.GEMINI_API_KEY,
//     });

//     const response = await ai.models.generateImages({
//       model: "models/imagen-4.0-generate-001",
//       prompt,
//       config: {
//         numberOfImages: 1,
//         outputMimeType: "image/jpeg",
//         personGeneration: "ALLOW_ALL", // ✅ FIX
//         aspectRatio: "1:1",
//         imageSize: "1K",
//       },
//     });

//     if (!response?.generatedImages?.length) {
//       return NextResponse.json(
//         { error: "No images generated" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       imageBase64: response.generatedImages[0].image.imageBytes,
//     });
//   } catch (err) {
//     console.error("Imagen error:", err);
//     return NextResponse.json(
//       { error: err.message || "Image generation failed" },
//       { status: 500 }
//     );
//   }
// }


// export const runtime = "nodejs";

// import axios from "axios";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const prompt = searchParams.get("prompt");

//     if (!prompt) {
//       return NextResponse.json(
//         { error: "prompt is required" },
//         { status: 400 }
//       );
//     }

//     const response = await axios.post(
//       "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
//       { inputs: prompt },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.HF_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         responseType: "arraybuffer",
//       }
//     );

//     const imageBase64 = Buffer.from(response.data).toString("base64");

//     return NextResponse.json({
//       success: true,
//       imageBase64,
//     });
//   } catch (err) {
//     console.error(err?.response?.data || err.message);
//     return NextResponse.json(
//       { error: "Image generation failed (model may be loading, retry)" },
//       { status: 500 }
//     );
//   }
// }






export const runtime = "nodejs";

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const prompt = searchParams.get("prompt");

    if (!prompt) {
      return NextResponse.json(
        { error: "prompt is required" },
        { status: 400 }
      );
    }

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/stabilityai/sdxl-turbo",
      {
        inputs: prompt,
        options: { wait_for_model: true },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
        timeout: 60000,
      }
    );

    const imageBase64 = Buffer.from(response.data).toString("base64");

    return NextResponse.json({
      success: true,
      imageBase64,
    });
  } catch (err) {
    console.error(err?.response?.data || err.message);
    return NextResponse.json(
      { error: "Model is loading, please retry" },
      { status: 503 }
    );
  }
}
