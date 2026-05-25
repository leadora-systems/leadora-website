import { NextResponse } from "next/server";
import { appendToGoogleSheet } from "@/lib/google-sheets";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, company, service, message } = parsed.data;

    await appendToGoogleSheet("contact", {
      name,
      email,
      company: company ?? "",
      service: service ?? "",
      message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      { error: "Failed to save your message. Please try again." },
      { status: 500 }
    );
  }
}
