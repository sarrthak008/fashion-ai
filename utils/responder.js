import { NextResponse } from "next/server";

export default function responder(
  message = "fashion x ai",
  data = null,
  status = 200,
  success = true
) {
  return NextResponse.json(
    { message, data, success },
    {
      status,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
