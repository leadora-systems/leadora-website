import { NextResponse } from "next/server";
import { appendToGoogleSheet } from "@/lib/google-sheets";
import { careersSchema } from "@/lib/validations";

export const runtime = "nodejs";

const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const ALLOWED_EXTENSIONS = new Set(["pdf", "doc", "docx"]);
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

function getExtension(name: string): string {
  const idx = name.lastIndexOf(".");
  if (idx === -1) return "";
  return name.slice(idx + 1).toLowerCase();
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const resume = form.get("resume");

    const body = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: form.get("phone") ? String(form.get("phone")) : undefined,
      position: String(form.get("position") ?? ""),
      message: form.get("message") ? String(form.get("message")) : undefined,
    };

    const parsed = careersSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, position, message } = parsed.data;

    if (!(resume instanceof File)) {
      return NextResponse.json(
        { error: { resume: ["Resume file is required"] } },
        { status: 400 }
      );
    }

    const ext = getExtension(resume.name);
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      return NextResponse.json(
        { error: { resume: ["Only PDF/DOC/DOCX files are allowed"] } },
        { status: 400 }
      );
    }

    if (!ALLOWED_MIME_TYPES.has(resume.type)) {
      return NextResponse.json(
        { error: { resume: ["Invalid resume file type"] } },
        { status: 400 }
      );
    }

    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: { resume: ["Resume must be 5MB or smaller"] } },
        { status: 400 }
      );
    }

    const bytes = Buffer.from(await resume.arrayBuffer());
    const resumeBase64 = bytes.toString("base64");

    await appendToGoogleSheet("careers", {
      name,
      email,
      phone: phone ?? "",
      position,
      message: message ?? "",
      resumeName: resume.name,
      resumeMimeType: resume.type,
      resumeBase64,
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
