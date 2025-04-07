import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("🔹 API Route Hit!"); // Check if this logs

  try {
    const { name, email } = await req.json();

    console.log("🔹 Received Data:", { name, email });

    if (!name || !email) {
      console.log("❌ Missing name or email");
      return NextResponse.json({ success: false, message: "Missing name or email" }, { status: 400 });
    }

    const API_KEY = process.env.CONVERTKIT_API_KEY;
    const FORM_ID = process.env.CONVERTKIT_FORM_ID;

    console.log("🔹 CONVERTKIT_API_KEY:", API_KEY);
    console.log("🔹 CONVERTKIT_FORM_ID:", FORM_ID);

    if (!API_KEY || !FORM_ID) {
      console.log("❌ Missing API credentials");
      return NextResponse.json({ success: false, message: "Missing API credentials" }, { status: 500 });
    }

    const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: API_KEY,
        first_name: name,
        email,
      }),
    });

    const data = await response.json();
    console.log("🔹 ConvertKit API Response:", data);

    if (response.ok) {
      return NextResponse.json({ success: true, data }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, error: data }, { status: 400 });
    }
  } catch (error) {
    console.log("❌ Error:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
