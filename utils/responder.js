import { NextResponse } from "next/server";

export default function responder(message = "fashio x ai", data = null, status = 200, success = true) {
    return NextResponse.json({
        message,
        data,
        success
    }, { status });
}
