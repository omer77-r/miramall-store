/**
 * ========================================================
 *  MiraMall — استقبال الطلبات فـ Google Sheet
 * ========================================================
 *
 * الخطوات (دير غير هكا مرة وحدة):
 *
 * 1. سير ل https://sheets.google.com وصاوب Google Sheet جديد.
 *    سميه مثلا: "MiraMall Orders".
 *
 * 2. من القائمة فوق: Extensions ‹ Apps Script.
 *
 * 3. مسح أي كود كاين، و لصق هاد الكود كامل.
 *
 * 4. كليك على "Deploy" (فوق على اليمين) ‹ New deployment.
 *    - Select type: كليك على ⚙️ و اختار "Web app".
 *    - Description: MiraMall orders
 *    - Execute as: Me
 *    - Who has access: "Anyone"   ← مهم بزاف
 *    - كليك Deploy، و اقبل الأذونات (Authorize).
 *
 * 5. غادي يعطيك رابط "Web app URL" — كوبيه.
 *    هو هاداك اللي غادي نحطو فـ المتجر (GOOGLE_SHEETS_WEBHOOK_URL).
 *
 * ملاحظة: ملي تبدل الكود، خاص Deploy ‹ Manage deployments ‹ Edit ‹ Version: New.
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Orders");
    if (!sheet) {
      sheet = ss.insertSheet("Orders");
    }

    // العناوين (مرة وحدة)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "رقم الطلب", "التاريخ", "الاسم", "الهاتف", "المدينة",
        "العنوان", "المنتج", "الكمية", "الثمن", "الحالة",
      ]);
    }

    var d = JSON.parse(e.postData.contents);

    sheet.appendRow([
      d.id || "",
      d.date ? new Date(d.date) : new Date(),
      d.fullName || "",
      d.phone || "",
      d.city || "",
      d.address || "",
      d.product || "",
      d.quantity || "",
      d.totalPrice || "",
      d.status || "جديد",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// باش تجرب من Apps Script (اختياري)
function testAppend() {
  doPost({
    postData: {
      contents: JSON.stringify({
        id: "MM-TEST-0001",
        date: new Date().toISOString(),
        fullName: "تجربة",
        phone: "0612345678",
        city: "الدار البيضاء",
        address: "شارع التجربة",
        product: "منتج تجريبي",
        quantity: 1,
        totalPrice: 250,
        status: "جديد",
      }),
    },
  });
}
