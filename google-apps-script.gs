/**
 * ========================================================
 *  MiraMall — استقبال الطلبات فـ Google Sheet
 *  (يطابق جدولك: تاريخ الطلب ... آخر تحديث)
 * ========================================================
 *
 * كيفية التحديث:
 *   1. افتح Apps Script ‹ مسح الكود القديم ‹ لصق هادا.
 *   2. Deploy ‹ Manage deployments ‹ ✏️ Edit ‹ Version: "New version" ‹ Deploy.
 *      (l URL ما يتبدلش.)
 *
 * إعدادات الـ Deploy:
 *   - Execute as: Me
 *   - Who has access: Anyone
 *
 * ملاحظة: هاد الكود ما كيمسحش l header ديالك و لا l dropdown.
 * كيزيد غير صف جديد f كل طلب، و كيحط الحالة "طلب جديد".
 *
 * ترتيب الأعمدة المنتظر (A ‹ N):
 *   A تاريخ الطلب · B رقم الطلب · C الاسم الكامل · D رقم الهاتف ·
 *   E المدينة · F العنوان الكامل · G الكمية · H المنتج ·
 *   I ثمن الوحدة · J المجموع · K حالة الطلب · L ملاحظات ·
 *   M المسؤول · N آخر تحديث
 */

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  // نقلبو على l ورقة لي فيها l header "تاريخ الطلب"
  for (var i = 0; i < sheets.length; i++) {
    var a1 = String(sheets[i].getRange(1, 1).getValue() || "");
    if (a1.indexOf("تاريخ") !== -1) return sheets[i];
  }
  return sheets[0];
}

// كيرجع جميع الطلبات (كتستعملو صفحة /admin ديال المتجر)
function doGet() {
  try {
    var sheet = getSheet_();
    var values = sheet.getDataRange().getValues();
    var headers = values.shift() || [];
    var orders = values.map(function (row) {
      var o = {};
      headers.forEach(function (h, i) { o[h] = row[i]; });
      return o;
    });
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, orders: orders }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var sheet = getSheet_();
    var d = JSON.parse(e.postData.contents);

    var lastRow = sheet.getLastRow();      // الصف 1 = العناوين
    var newRow = lastRow + 1;
    var orderNum = lastRow;                // أول طلب = 1 (الصف 2)
    var orderNumStr = (orderNum < 10 ? "0" : "") + orderNum;  // 01, 02, ... 10, 11

    var now = new Date();
    var qty = Number(d.quantity) || 1;
    var total = Number(d.totalPrice) || 0;
    var unit = d.unitPrice != null ? Number(d.unitPrice) : (qty ? Math.round(total / qty) : total);

    // عنوان عمود المصدر (O) — كنزيدوه مرة وحدة إلا ماكانش
    if (!sheet.getRange(1, 15).getValue()) {
      sheet.getRange(1, 15)
        .setValue("المصدر")
        .setBackground("#FF6B00").setFontColor("#FFFFFF").setFontWeight("bold")
        .setHorizontalAlignment("center");
    }

    var row = [
      now,                       // A تاريخ الطلب
      orderNumStr,               // B رقم الطلب
      d.fullName || "",          // C الاسم الكامل
      "'" + (d.phone || ""),     // D رقم الهاتف (نص باش مايطيحش l صفر)
      d.city || "",              // E المدينة
      d.address || "",           // F العنوان الكامل
      qty,                       // G الكمية
      d.product || "",           // H المنتج
      unit,                      // I ثمن الوحدة
      total,                     // J المجموع
      "طلب جديد",                // K حالة الطلب
      "",                        // L ملاحظات
      "",                        // M المسؤول
      now,                       // N آخر تحديث
      d.source || "مباشر",       // O المصدر (TikTok / Meta / مباشر)
    ];

    sheet.getRange(newRow, 1, 1, row.length).setValues([row]);

    // تنسيق: التاريخ + الهاتف نص
    sheet.getRange(newRow, 1).setNumberFormat("dd/MM/yyyy HH:mm");   // A
    sheet.getRange(newRow, 4).setNumberFormat("@");                  // D
    sheet.getRange(newRow, 14).setNumberFormat("dd/MM/yyyy HH:mm");  // N
    sheet.getRange(newRow, 15).setHorizontalAlignment("center");     // O

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, order: orderNumStr, row: newRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// للتجربة من داخل Apps Script (اختياري)
function testAppend() {
  doPost({
    postData: {
      contents: JSON.stringify({
        fullName: "تجربة",
        phone: "0612345678",
        city: "الدار البيضاء",
        address: "شارع التجربة رقم 5",
        product: "آلة مساج",
        quantity: 2,
        unitPrice: 250,
        totalPrice: 460,
      }),
    },
  });
}
