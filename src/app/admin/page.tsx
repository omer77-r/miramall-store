export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface OrderRecord {
  [key: string]: string | number;
}

const COLUMNS = [
  "رقم الطلب",
  "تاريخ الطلب",
  "الاسم الكامل",
  "رقم الهاتف",
  "المدينة",
  "العنوان الكامل",
  "المنتج",
  "الكمية",
  "ثمن الوحدة",
  "المجموع",
  "حالة الطلب",
];

async function getOrders(): Promise<{ ok: boolean; orders: OrderRecord[]; error?: string }> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return { ok: false, orders: [], error: "GOOGLE_SHEETS_WEBHOOK_URL غير مضبوط" };
  try {
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    if (!data?.ok) return { ok: false, orders: [], error: data?.error || "فشل قراءة الطلبات" };
    return { ok: true, orders: data.orders || [] };
  } catch (e) {
    return { ok: false, orders: [], error: String(e) };
  }
}

function fmt(v: string | number | undefined): string {
  if (v === undefined || v === null) return "";
  const s = String(v);
  // تنسيق التاريخ ISO
  if (/^\d{4}-\d{2}-\d{2}T/.test(s)) {
    const d = new Date(s);
    return d.toLocaleString("fr-MA", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  return s;
}

export default async function AdminPage() {
  const { ok, orders, error } = await getOrders();
  const total = orders.reduce((sum, o) => sum + (Number(o["المجموع"]) || 0), 0);

  return (
    <div dir="rtl" className="min-h-screen bg-[#faf8f5] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <h1 className="text-2xl font-black text-zinc-800">📦 لوحة الطلبات</h1>
          <div className="flex items-center gap-3 text-sm">
            <span className="rounded-full bg-primary/10 text-primary font-bold px-4 py-1.5">
              {orders.length} طلب
            </span>
            <span className="rounded-full bg-emerald-100 text-emerald-700 font-bold px-4 py-1.5">
              {total.toLocaleString()} درهم
            </span>
          </div>
        </div>

        {!ok && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 text-sm mb-4">
            وقع مشكل: {error}
          </div>
        )}

        <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <table className="w-full text-sm text-right">
            <thead>
              <tr className="bg-primary text-white">
                {COLUMNS.map((c) => (
                  <th key={c} className="px-3 py-3 font-bold whitespace-nowrap">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 && (
                <tr>
                  <td colSpan={COLUMNS.length} className="px-4 py-10 text-center text-zinc-400">
                    ماكاين حتى طلب دابا
                  </td>
                </tr>
              )}
              {orders.slice().reverse().map((o, i) => (
                <tr key={i} className="border-t border-zinc-100 hover:bg-zinc-50">
                  {COLUMNS.map((c) => (
                    <td
                      key={c}
                      className={
                        "px-3 py-2.5 whitespace-nowrap " +
                        (c === "رقم الهاتف" ? "font-mono " : "") +
                        (c === "المجموع" ? "font-bold text-primary " : "") +
                        (c === "حالة الطلب" ? "font-bold text-amber-600 " : "")
                      }
                      dir={c === "رقم الهاتف" ? "ltr" : "rtl"}
                    >
                      {fmt(o[c])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-zinc-400 mt-4 text-center">
          الطلبات كتتحدّث مباشرة من Google Sheet · الأحدث فوق
        </p>
      </div>
    </div>
  );
}
