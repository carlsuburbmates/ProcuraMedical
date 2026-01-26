import { Hero } from "@/components/home/hero";
import { SystemsOverview } from "@/components/home/systems-overview";
import { DecisionFramework } from "@/components/home/decision-framework";
import { FeaturedProducts } from "@/components/home/featured-products";
import { ProcurementProcess } from "@/components/home/procurement-process";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <SystemsOverview />
      <DecisionFramework />
      <FeaturedProducts />
      <ProcurementProcess />
    </div>
  );
}
