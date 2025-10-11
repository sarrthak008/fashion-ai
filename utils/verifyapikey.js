import connectToDB from "../lib/connectdb.js";
import ApiKey from "../models/apikey.js";
import bcrypt from "bcrypt";

const verifyApiKey = async (userApiKey) => {
  await connectToDB();
  const hashedApis = await ApiKey.find();
  for (let api of hashedApis) {
    const isMatch = await bcrypt.compare(userApiKey, api.apiKey);
    if (isMatch) {
      return true;
    }
  }
  return false;
};

export default verifyApiKey;
