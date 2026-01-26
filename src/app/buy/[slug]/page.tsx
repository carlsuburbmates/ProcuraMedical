import { notFound } from "next/navigation";
import { ProcurementLogicContainer } from "@/components/buy/procurement-logic-container";

interface Product {
  id: string;
  name: string;
  price: number;
}

// REUSING MOCK DB FOR CONSISTENCY (Ideally shared utils, but duplication is fine for Step 5 build speed)
const PRODUCTS_DB: Record<string, Product> = {
  "shower-commode": { id: "h1", name: "Tilt-in-Space Shower Commode", price: 2450 },
  "toilet-aid": { id: "h2", name: "Height-Adjustable Over-Toilet Aid", price: 420 },
  "forearm-walker": { id: "m1", name: "Forearm Support Walker", price: 890 },
  "tilt-wheelchair": { id: "m2", name: "Manual Tilt-in-Space Wheelchair", price: 3200 },
  "therapy-device": { id: "r1", name: "Upper-Limb Home Therapy Device", price: 1200 },
  "balance-platform": { id: "r2", name: "Balance Training Platform", price: 1850 },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BuyPage(props: Props) {
  const params = await props.params;
  const product = PRODUCTS_DB[params.slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="container-wide py-12 md:py-24 bg-alabaster min-h-screen">
      <ProcurementLogicContainer product={{ ...product, slug: params.slug }} />
    </div>
  );
}
