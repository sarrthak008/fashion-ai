import askAi from "../../../../lib/askai.js";
import responder from "../../../../utils/responder.js";
import ganarateSuggestions from "../../../../utils/suggestionGanarator.js"

export const POST = async(request)=>{
     try {
        let {userprompt} = await request.json()
           if(!userprompt){
            return responder("fashion x ai says prompt is missing",null,404,false);
           }
         let prompt = ganarateSuggestions(userprompt);
         let res = await askAi(prompt)
         return responder("load data",res,200,true)
     } catch (error) {
        return responder(error.message,null,404,false)
     }
}

