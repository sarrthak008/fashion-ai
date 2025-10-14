import { NextResponse } from "next/server";

const allowedOrigins = [
  "http://localhost:5173",
  "https://vastrraa.vercel.app",
];

export default function responder(
  message = "fashion x ai",
  data = null,
  status = 200,
  success = true,
  req // we’ll use this to read the origin later
) {
  // Get request origin
  const origin = req?.headers?.get("origin");

  // Determine if origin is allowed
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return NextResponse.json(
    { message, data, success },
    {
      status,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
      },
    }
  );
}
