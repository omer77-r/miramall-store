export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ميرا مول Mira Mall",
    alternateName: "Mira Mall",
    url: "https://miramall.ma",
    description:
      "متجر التسوق الأول في المغرب - الدفع عند الاستلام. توصيل سريع لجميع مدن المغرب. جودة مضمونة وأسعار تنافسية.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212-600000000",
      contactType: "customer service",
      availableLanguage: ["Arabic", "French"],
    },
    sameAs: [
      "https://instagram.com/miramall.ma",
      "https://facebook.com/miramall.ma",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "MA",
      addressRegion: "المغرب",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
