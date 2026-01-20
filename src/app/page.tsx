import { Hero } from "@/components/home/hero";
import { SystemsOverview } from "@/components/home/systems-overview";
import { WellnessGuidance } from "@/components/home/wellness-guidance";
import { FeaturedProducts } from "@/components/home/featured-products";
import { ProcurementProcess } from "@/components/home/procurement-process";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <SystemsOverview />
      <WellnessGuidance />
      <FeaturedProducts />
      <ProcurementProcess />
    </div>
  );
}
