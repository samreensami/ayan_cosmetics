import HeroWrapper from "@/components/HeroWrapper";
import TrustSignals from "@/components/TrustSignals";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import ShopGallery from "@/components/ShopGallery";
import RibbonInterlude from "@/components/RibbonInterlude";
import HomeStage from "@/components/HomeStage";

export default function HomePage() {
  return (
    <>
      <HomeStage />
      <HeroWrapper />
      <TrustSignals />
      <RibbonInterlude />
      <CategoryGrid />
      <FeaturedProducts title="New in and bestsellers" limit={8} showViewAll />
      <ShopGallery />
    </>
  );
}
