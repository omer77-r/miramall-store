import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import TrendingProducts from "@/components/home/TrendingProducts";
import BestSellersSection from "@/components/home/BestSellersSection";
import SpecialOfferBanner from "@/components/home/SpecialOfferBanner";
import CODInfoSection from "@/components/home/CODInfoSection";
import CustomerReviews from "@/components/home/CustomerReviews";
import WhatsAppSupportSection from "@/components/home/WhatsAppSupportSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      <TrustStrip />
      <TrendingProducts />
      <SpecialOfferBanner />
      <BestSellersSection />
      <CODInfoSection />
      <CustomerReviews />
      <WhatsAppSupportSection />
    </div>
  );
}
