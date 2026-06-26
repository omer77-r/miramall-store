import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ميرا مول | متجر التسوق الأول في المغرب",
    short_name: "ميرا مول",
    description:
      "تسوق أفضل المنتجات من ميرا مول. توصيل سريع لجميع مدن المغرب. الدفع عند الاستلام.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FF6B00",
    orientation: "portrait-primary",
    dir: "rtl",
    lang: "ar",
    categories: ["shopping", "ecommerce"],
    icons: [
      {
        src: "/pwa-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    // screenshots: optional, add later for better install experience
  };
}
