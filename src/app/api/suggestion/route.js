import askAi from "../../../../lib/askai.js";
import responder from "../../../../utils/responder.js";
import ganarateSuggestions from "../../../../utils/suggestionGanarator.js"
import connectToDB from "../../../../lib/connectdb.js";
import verifyApiKey from "../../../../utils/verifyapikey.js";

export const POST = async (request) => {
   try {

      await connectToDB();
      const { apikey: userApiKey, userprompt } = await request.json();

      let res = await verifyApiKey(userApiKey)

      if (!res) {
         return responder("invalid api key", null, 404, false);
      }

      if (!userprompt) {
         return responder("fashion x ai says prompt is missing", null, 404, false);
      }
      let prompt = ganarateSuggestions(userprompt);
      let answer = await askAi(prompt)
      return responder("load data", answer, 200, true)

   } catch (error) {
      return responder(error.message, null, 404, false)
   }
}

