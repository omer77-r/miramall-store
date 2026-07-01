"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

// كيلتقط مصدر الزائر (TikTok/Meta) من الرابط ملي يدخل الموقع
export default function AttributionTracker() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
