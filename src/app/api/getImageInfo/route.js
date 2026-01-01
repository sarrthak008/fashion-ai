import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPEN_AI_KEY
});


export const GET = async (req) => {
    try {

          const url = new URL(req.url);
          const imgurl = url.searchParams.get("img");
        
        const completion = await openai.chat.completions.create({
            model: "google/gemini-2.0-flash-exp:free",
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: "Given this clothing image, return a JSON with keys: type, color, pattern, sleeves, neckline. Only output valid JSON." 
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: `${imgurl}`
                            }
                        }
                    ]
                }
            ]
        })

        const result = completion.choices[0].message.content;
        return new Response(JSON.stringify({ message: "Success", success: true, data: result }), { status: 200, headers: corsHeaders() });

    } catch (error) {
        console.error("ImgtoTxt API Error:", error);
        return new Response(JSON.stringify({ message: error.message, success: false }), { status: 500, headers: corsHeaders() });
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

