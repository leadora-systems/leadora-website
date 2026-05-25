/**
 * Appends form rows via Google Apps Script Web App (see docs/google-sheets-setup.md).
 * No email — data only lands in your spreadsheet.
 */

export type SheetFormType = "contact" | "careers";

export async function appendToGoogleSheet(
  formType: SheetFormType,
  payload: Record<string, string | undefined>
): Promise<void> {
  const url = process.env.GOOGLE_SHEETS_WEB_APP_URL;

  if (!url) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("GOOGLE_SHEETS_WEB_APP_URL is not configured");
    }
    console.info(`[${formType}] GOOGLE_SHEETS_WEB_APP_URL not set`, payload);
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formType,
      secret: process.env.GOOGLE_SHEETS_SECRET ?? "",
      ...payload,
    }),
  });

  const text = await res.text();
  let json: { success?: boolean; error?: string } = {};
  try {
    json = JSON.parse(text) as { success?: boolean; error?: string };
  } catch {
    /* Apps Script may return plain text */
  }

  if (!res.ok || json.error) {
    throw new Error(json.error ?? `Sheet append failed (${res.status})`);
  }
}
