import connectToDB from "../../../../lib/connectdb.js";
import verifyApiKey from "../../../../utils/verifyapikey.js";
import askAi from "../../../../lib/askai.js";
import ganarateSuggestions from "../../../../utils/suggestionGanarator.js";


function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

// GET handler
export async function GET(request) {
  try {
    await connectToDB();

    const url = new URL(request.url);
    const userApiKey = url.searchParams.get("apikey");
    const userprompt = url.searchParams.get("userprompt");

    if (!userApiKey) {
      return new Response(JSON.stringify({ message: "API key missing", success: false }), { status: 400, headers: corsHeaders() });
    }

    if (!(await verifyApiKey(userApiKey))) {
      return new Response(JSON.stringify({ message: "Invalid API key", success: false }), { status: 401, headers: corsHeaders() });
    }

    if (!userprompt) {
      return new Response(JSON.stringify({ message: "Prompt missing", success: false }), { status: 400, headers: corsHeaders() });
    }

    const prompt = ganarateSuggestions(userprompt);
    const answer = await askAi(prompt);

    return new Response(JSON.stringify({ message: "Success", success: true, data: answer }), { status: 200, headers: corsHeaders() });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message, success: false }), { status: 500, headers: corsHeaders() });
  }
}

// OPTIONS handler for preflight
export async function OPTIONS() {
  return new Response(null, { status: 200, headers: corsHeaders() });
}
