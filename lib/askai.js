import OpenAI from "openai";

const askAi = async (que = "act like fashion x ai ") => {
    try {

        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: process.env.OPEN_AI_KEY
        })

        const answer = await openai.chat.completions.create({
            //model: "deepseek/deepseek-v3.2-exp",
            model: "mistralai/mistral-7b-instruct",
            messages: [
                {
                    "role": "user",
                    "content": que
                }
            ]
        })

     return(answer.choices[0].message);

    } catch (error) {
     console.log(error)
    }
}

export default askAi;