import HeroWrapper from "@/components/HeroWrapper";
import TrustSignals from "@/components/TrustSignals";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import ShopGallery from "@/components/ShopGallery";

export default function HomePage() {
  return (
    <div className="pt-14 bg-green-800">
      <HeroWrapper />
      <TrustSignals />
      <CategoryGrid />
      <FeaturedProducts title="Featured Products" limit={8} showViewAll />
      <ShopGallery />
    </div>
  );
}
