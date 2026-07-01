import type { OrderRow } from "./orders";

/**
 * كيصيفط الطلب ل Google Sheet عبر Apps Script Web App.
 * كيخدم على serverless/containers حيت ماكيكتبش فأي ملف — كيدوز ديركت ل Google.
 *
 * خاص متغير البيئة GOOGLE_SHEETS_WEBHOOK_URL يكون فيه رابط الـ Web App.
 *
 * مهم: Apps Script كيرجع 200 حتى ملي كيطيح (صفحة error). على هادشي كنشيكيو
 * على { ok: true } فالرد الحقيقي، ماشي غير على HTTP status. و كنعاودو نحاولو.
 */
export async function appendOrderToSheet(order: OrderRow): Promise<boolean> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return false;

  const attempts = 3;
  for (let i = 1; i <= attempts; i++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      const text = await res.text();
      let ok = false;
      try {
        ok = JSON.parse(text)?.ok === true;
      } catch {
        ok = false; // رد ماشي JSON = صفحة error من Apps Script
      }

      if (ok) return true;
      console.error(
        `GOOGLE_SHEETS_FAIL (attempt ${i}/${attempts}) status=${res.status} body=${text.slice(0, 200)}`
      );
    } catch (err) {
      console.error(`GOOGLE_SHEETS_ERROR (attempt ${i}/${attempts}):`, err);
    }
    if (i < attempts) await new Promise((r) => setTimeout(r, 500 * i));
  }
  return false;
}
