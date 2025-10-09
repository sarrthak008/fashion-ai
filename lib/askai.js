import OpenAI from "openai";

const askAi = async () => {
    try {

        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: process.env.OPEN_AI_KEY
        })

        const answer = await openai.chat.completions.create({
            model: "deepseek/deepseek-v3.2-exp",
            messages: [
                {
                    "role": "user",
                    "content": "create python code for sum"
                }
            ]
        })

     console.log(answer.choices[0].message);

    } catch (error) {
     console.log(error)
    }
}

export default askAi;