import { customAlphabet } from "nanoid";

const getApiKey = () =>{
    let nanoid = customAlphabet(process.env.ALPHABETS_FOR_NANOID,30)
    return nanoid()
}

export default getApiKey