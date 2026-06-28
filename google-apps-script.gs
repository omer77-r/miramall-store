/**
 * ========================================================
 *  MiraMall — استقبال الطلبات فـ Google Sheet (نسخة PRO)
 * ========================================================
 *
 * إلا سبق و لصقتي نسخة قديمة:
 *   1. مسح الكود القديم كامل و لصق هادا.
 *   2. Deploy ‹ Manage deployments ‹ ✏️ Edit ‹ Version: "New version" ‹ Deploy.
 *      (l URL ما يتبدلش، غير الكود كيتحدث.)
 *
 * إعدادات الـ Deploy خاصهم يكونو:
 *   - Execute as: Me
 *   - Who has access: Anyone (Tout le monde)
 */

var HEADERS = [
  "رقم الطلب", "التاريخ", "الاسم", "الهاتف", "المدينة",
  "العنوان", "المنتج", "الكمية", "الثمن (درهم)", "الحالة",
];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Orders");
  if (!sheet) sheet = ss.insertSheet("Orders");

  // أول مرة: نزينو l header و نضبطو l جدول
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);

    var header = sheet.getRange(1, 1, 1, HEADERS.length);
    header
      .setBackground("#FF6B00")
      .setFontColor("#FFFFFF")
      .setFontWeight("bold")
      .setFontSize(11)
      .setHorizontalAlignment("center")
      .setVerticalAlignment("middle");

    sheet.setRowHeight(1, 34);
    sheet.setFrozenRows(1);

    // اتجاه من اليمين لليسار (عربية)
    sheet.setRightToLeft(true);

    // عرض الأعمدة
    var widths = [130, 150, 150, 120, 110, 220, 220, 70, 100, 90];
    for (var i = 0; i < widths.length; i++) {
      sheet.setColumnWidth(i + 1, widths[i]);
    }

    // عمود الهاتف = نص (باش مايطيحش l صفر)
    sheet.getRange("D2:D").setNumberFormat("@");
    // عمود التاريخ = تاريخ + وقت
    sheet.getRange("B2:B").setNumberFormat("dd/MM/yyyy HH:mm");
  }
  return sheet;
}

function doPost(e) {
  try {
    var sheet = getSheet_();
    var d = JSON.parse(e.postData.contents);

    var row = sheet.getLastRow() + 1;

    var values = [[
      d.id || "",
      d.date ? new Date(d.date) : new Date(),
      d.fullName || "",
      "'" + (d.phone || ""),          // ' باش الرقم يبقى نص و الصفر مايطيحش
      d.city || "",
      d.address || "",
      d.product || "",
      Number(d.quantity) || "",
      Number(d.totalPrice) || "",
      d.status || "جديد",
    ]];

    sheet.getRange(row, 1, 1, HEADERS.length).setValues(values);

    // تنسيق الصف: محاذاة + حدود + لون متناوب
    var range = sheet.getRange(row, 1, 1, HEADERS.length);
    range.setVerticalAlignment("middle");
    range.setBorder(true, true, true, true, true, true, "#E5E5E5", SpreadsheetApp.BorderStyle.SOLID);
    if (row % 2 === 0) range.setBackground("#FFF6EF");

    // وسّط الأعمدة القصيرة: رقم الطلب، الهاتف، الكمية، الثمن، الحالة
    [1, 4, 8, 9, 10].forEach(function (c) {
      sheet.getRange(row, c).setHorizontalAlignment("center");
    });

    // الحالة "جديد" بلون مميز
    sheet.getRange(row, 10)
      .setBackground("#FFE08A")
      .setFontWeight("bold");

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, row: row }))
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
        id: "MM-TEST-0001",
        date: new Date().toISOString(),
        fullName: "تجربة",
        phone: "0612345678",
        city: "الدار البيضاء",
        address: "شارع التجربة",
        product: "منتج تجريبي",
        quantity: 2,
        totalPrice: 250,
        status: "جديد",
      }),
    },
  });
}
