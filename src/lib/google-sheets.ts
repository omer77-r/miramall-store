import type { OrderRow } from "./orders";

/**
 * كيصيفط الطلب ل Google Sheet عبر Apps Script Web App.
 * كيخدم على Vercel/serverless حيت ماكيكتبش فأي ملف — كيدوز ديركت ل Google.
 *
 * خاص متغير البيئة GOOGLE_SHEETS_WEBHOOK_URL يكون فيه رابط الـ Web App.
 */
export async function appendOrderToSheet(order: OrderRow): Promise<boolean> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return false;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    return res.ok;
  } catch (err) {
    console.error("GOOGLE_SHEETS_ERROR:", err);
    return false;
  }
}
