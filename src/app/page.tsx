import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import TrendingProducts from "@/components/home/TrendingProducts";
import BestSellersSection from "@/components/home/BestSellersSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import CODInfoSection from "@/components/home/CODInfoSection";
import SpecialOfferBanner from "@/components/home/SpecialOfferBanner";
import CustomerReviews from "@/components/home/CustomerReviews";
import FAQSection from "@/components/home/FAQSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import WhatsAppSupportSection from "@/components/home/WhatsAppSupportSection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <TrustStrip />
      <FeaturedCategories />
      <TrendingProducts />
      <SpecialOfferBanner />
      <BestSellersSection />
      <NewArrivalsSection />
      <CODInfoSection />
      <CustomerReviews />
      <FAQSection />
      <NewsletterSection />
      <WhatsAppSupportSection />
    </main>
  );
}
