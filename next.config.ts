import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP فقط — AVIF ثقيل بزاف على CPU ديال سيرفر صغير
    formats: ["image/webp"],
    // كنكاشيو الصور المخفّفة 31 يوم — كل صورة كتتعالج مرة وحدة بس
    minimumCacheTTL: 2678400,
    // أحجام أقل = شغل أقل على المعالج (كافيين لمتجر mobile-first)
    deviceSizes: [360, 640, 828, 1080, 1200],
    imageSizes: [96, 160, 256, 384],
  },
  compress: true,
};

export default nextConfig;
