// كيعرف منين جا الزائر (TikTok / Meta / مباشر) و كيحتافظ بيه حتى يدير الطلب.

const KEY = "mm_attribution";

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const p = new URLSearchParams(window.location.search);
    const ttclid = p.get("ttclid");
    const fbclid = p.get("fbclid");
    const utmSource = (p.get("utm_source") || "").toLowerCase();
    const utmCampaign = p.get("utm_campaign") || "";

    let source = "";
    if (ttclid || utmSource.includes("tiktok")) source = "TikTok";
    else if (
      fbclid ||
      utmSource.includes("facebook") ||
      utmSource.includes("instagram") ||
      utmSource.includes("meta") ||
      utmSource === "fb" ||
      utmSource === "ig"
    )
      source = "Meta";
    else if (utmSource) source = utmSource;

    // ماكاين حتى مصدر فهاد الزيارة — كنخليو اللي مسجّل (إلا كان)
    if (!source) return;

    // last-touch: آخر إعلان جاب الزائر هو اللي كيتسجل
    localStorage.setItem(KEY, JSON.stringify({ source, campaign: utmCampaign, at: Date.now() }));
  } catch {
    /* تجاهل */
  }
}

export function getAttribution(): string {
  if (typeof window === "undefined") return "";
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return "مباشر";
    const a = JSON.parse(raw);
    return a.campaign ? `${a.source} · ${a.campaign}` : a.source;
  } catch {
    return "مباشر";
  }
}
