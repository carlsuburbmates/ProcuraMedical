import { notFound } from "next/navigation";
import { SystemIntro } from "@/components/systems/system-intro";
import { CuratedProductGrid } from "@/components/systems/curated-product-grid";
import Link from "next/link";

// SSOT CONTENT MAPPING
const SYSTEMS_DATA: Record<string, { name: string; descriptor: string; description: string }> = {
  hygiene: {
    name: "Hygiene",
    descriptor: "Bathroom and Toilet Infrastructure",
    description: "Hygiene equipment built for stability, clearance, and cleanability—spec-led, fit-checked, procurement-ready.",
  },
  mobility: {
    name: "Mobility",
    descriptor: "Mobility and Transfer Infrastructure",
    description: "Mobility equipment selected for load, geometry, and adjustability—built to reduce friction in daily movement.",
  },
  rehab: {
    name: "Rehab",
    descriptor: "Rehabilitation and Tech Systems",
    description: "Rehab tools chosen for repeatability and safety—clear requirements, clear limits, no inflated claims.",
  },
};

// MOCK PRODUCT DATA (To be replaced by real DB fetch later)
// Aligns with SSOT Section P (Initial 6-SKU slate)
const MOCK_PRODUCTS = {
  hygiene: [
    { id: "h1", name: "Tilt-in-Space Shower Commode", slug: "shower-commode", price_base: 2450, lead_time: "In Stock - Dispatch 48h", image_placeholder: "Commode" },
    { id: "h2", name: "Height-Adjustable Over-Toilet Aid", slug: "toilet-aid", price_base: 420, lead_time: "In Stock", image_placeholder: "Toilet Aid" },
  ],
  mobility: [
    { id: "m1", name: "Forearm Support Walker", slug: "forearm-walker", price_base: 890, lead_time: "In Stock", image_placeholder: "Walker" },
    { id: "m2", name: "Manual Tilt-in-Space Wheelchair", slug: "tilt-wheelchair", price_base: 3200, lead_time: "Lead Time: 2 Weeks", image_placeholder: "Wheelchair" },
    { id: "m3", name: "Premium Transfer Board", slug: "transfer-board", price_base: 180, lead_time: "In Stock", image_placeholder: "Transfer Board" },
  ],
  rehab: [
    { id: "r1", name: "Upper-Limb Home Therapy Device", slug: "therapy-device", price_base: 1200, lead_time: "In Stock", image_placeholder: "Upper Limb" },
    { id: "r2", name: "Balance Training Platform", slug: "balance-platform", price_base: 1850, lead_time: "Lead Time: 1 Week", image_placeholder: "Balance" },
  ],
};

// Correct Next.js 15+ Params handling
type Props = {
  params: Promise<{ system: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SystemPage(props: Props) {
  const params = await props.params;
  const systemKey = params.system.toLowerCase();
  const systemData = SYSTEMS_DATA[systemKey];
  const products = MOCK_PRODUCTS[systemKey as keyof typeof MOCK_PRODUCTS] || [];

  if (!systemData) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SystemIntro
        name={systemData.name}
        descriptor={systemData.descriptor}
        description={systemData.description}
      />

      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Section 4: Light Filters (Placeholder for now, keeping generic as per SSOT "Light filters") */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="border border-black/5 p-6 bg-white sticky top-24">
              <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4">Specifications</h3>
              <div className="space-y-4">
                <p className="text-sm text-muted">Filter by Specification:</p>
                {/* Mock Filters */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm text-black">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>SWL &gt; 150kg</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-black">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Narrow Width</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <h2 className="text-[13px] font-medium text-muted uppercase tracking-wide mb-6">
              Available Systems ({products.length})
            </h2>
            <CuratedProductGrid products={products} />

            {/* Section 5: Guidance Prompt */}
            <div className="mt-16 p-8 bg-alabaster border border-black/5">
              <h3 className="h2 text-xl mb-2">Need guidance on {systemData.name}?</h3>
              <p className="text-muted mb-4">Review our decision frameworks to ensure fit and suitability.</p>
              <Link href={`/guidance`} className="text-sm font-bold border-b border-black pb-0.5 hover:opacity-70">
                View Guidance Hub
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
