import askAi from "../../../lib/askai"
import connectToDB from "../../../lib/connectdb"

export const GET = async ()=>{
    try {
        await askAi()
        connectToDB()
        return Response.json({name:"sarthak"})
    } catch (error) {
        console.log(error)
    }
}