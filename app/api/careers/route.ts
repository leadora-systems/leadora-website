import { NextResponse } from "next/server";
import { appendToGoogleSheet } from "@/lib/google-sheets";
import { careersSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = careersSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, position, message } = parsed.data;

    await appendToGoogleSheet("careers", {
      name,
      email,
      phone: phone ?? "",
      position,
      message: message ?? "",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[careers]", err);
    return NextResponse.json(
      { error: "Failed to save your application. Please try again." },
      { status: 500 }
    );
  }
}
