import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductGallery } from "@/components/pdp/product-gallery";
import { PurchaseModule } from "@/components/pdp/purchase-module";
import { SpecTable, FitGuardrails } from "@/components/pdp/spec-components";

// Product Interface
interface Product {
  id: string;
  name: string;
  system: string;
  price: number;
  lead_time: string;
  ndis_code: string | null;
  description: string;
  specs: Record<string, string>;
  fit_warnings: string[];
}

// MOCK DATA - SSOT Section P (Initial 6-SKU Slate)
const PRODUCTS_DB: Record<string, Product> = {
  // HYGIENE
  "shower-commode": {
    id: "h1",
    name: "Tilt-in-Space Shower Commode",
    system: "Hygiene",
    price: 2450,
    lead_time: "In Stock - Dispatch 48h",
    ndis_code: "05_091206111_0103_1_2",
    description: "A specialized hygiene chair offering tilt functionality for safe showering and toileting. Designed for users with reduced trunk control.",
    specs: {
      "Safe Working Load": "150kg",
      "Seat Width": "460mm",
      "Tilt Range": "0° to 35° posterior",
      "Material": "Stainless Steel / PU Foam",
      "Overall Width": "580mm"
    },
    fit_warnings: [
      "Requires minimal doorway clearance of 600mm.",
      "Not suitable for users >150kg.",
      "Ensure bathroom floor gradient <1:40 for safe tilting."
    ]
  },
  "toilet-aid": {
    id: "h2",
    name: "Height-Adjustable Over-Toilet Aid",
    system: "Hygiene",
    price: 420,
    lead_time: "In Stock",
    ndis_code: "05_120600055_0103_1_2",
    description: "Freestanding toilet support frame with adjustable height legs and contoured seat. Provides assistance for sit-to-stand transfers.",
    specs: {
      "Safe Working Load": "120kg",
      "Seat Width": "450mm",
      "Height Range": "450mm - 600mm",
      "Footprint": "550mm x 550mm"
    },
    fit_warnings: [
      "Ensure toilet bowl height is compatible with lowest setting.",
      "Check clearance between bathroom walls."
    ]
  },
  // MOBILITY
  "forearm-walker": {
    id: "m1",
    name: "Forearm Support Walker",
    system: "Mobility",
    price: 890,
    lead_time: "In Stock",
    ndis_code: "05_120600122_0103_1_2",
    description: "High-support mobility aid distributing weight through forearms. Reduces wrist strain and promotes upright posture.",
    specs: {
      "Safe Working Load": "130kg",
      "Forearm Height": "960mm - 1200mm",
      "Width": "640mm",
      "Braking": "Lockable Loop Brakes"
    },
    fit_warnings: [
        "User height must be >160cm for minimum forearm setting.",
        "Not for single-handed use."
    ]
  },
  "tilt-wheelchair": {
    id: "m2",
    name: "Manual Tilt-in-Space Wheelchair",
    system: "Mobility",
    price: 3200,
    lead_time: "Lead Time: 2 Weeks",
    ndis_code: "05_122409161_0105_1_2",
    description: "Configurable manual wheelchair with tilt-in-space for pressure redistribution and fatigue management.",
    specs: {
        "Safe Working Load": "140kg",
        "Seat Width": "40cm - 50cm (Adjustable)",
        "Seat Depth": "40cm - 50cm",
        "Weight (Total)": "28kg"
    },
    fit_warnings: [
        "Requires script/assessment for correct sizing.",
        "Transport weight exceeds 15kg without dismantling."
    ]
  },
  // REHAB
  "therapy-device": {
    id: "r1",
    name: "Upper-Limb Home Therapy Device",
    system: "Rehab",
    price: 1200,
    lead_time: "In Stock",
    ndis_code: "05_042118228_0124_1_2",
    description: "Tabletop exercise unit for improving range of motion and strength in upper extremities. Adjustable resistance.",
    specs: {
        "Dimensions": "500mm x 300mm",
        "Modes": "Passive / Active-Assist",
        "Power": "Battery / Mains"
    },
    fit_warnings: [
        "Consult physio/OT for protocol.",
        "Table surface must be stable."
    ]
  },
  "balance-platform": {
    id: "r2",
    name: "Balance Training Platform",
    system: "Rehab",
    price: 1850,
    lead_time: "Lead Time: 1 Week",
    ndis_code: null, // Unregistered
    description: "Unstable surface platform for proprioceptive training and balance rehabilitation.",
    specs: {
        "Safe Working Load": "180kg",
        "Surface": "Non-slip rubber",
        "Tilt-limit": "15 degrees"
    },
    fit_warnings: [
        "High fall risk: Use with supervision or support structure."
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProductPage(props: Props) {
  const params = await props.params;
  const product = PRODUCTS_DB[params.slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="container-wide py-12">
      <div className="flex flex-col gap-2 mb-8">
        <Link href={`/systems/${product.system.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-muted hover:text-black">
          System / {product.system}
        </Link>
        <h1 className="h1 md:text-5xl">{product.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Visuals & Details */}
        <div className="lg:col-span-7 space-y-12">
           <ProductGallery productName={product.name} />
           
           <div className="prose prose-neutral max-w-none">
             <h3 className="text-[13px] font-bold uppercase tracking-widest text-black mb-4">Description</h3>
             <p className="text-lg leading-relaxed text-muted">{product.description}</p>
           </div>

           <SpecTable specs={product.specs} />
           <FitGuardrails warnings={product.fit_warnings} />

           <div className="border border-black/5 p-6 bg-alabaster">
              <h3 className="text-[11px] font-bold uppercase tracking-widest mb-2">Support</h3>
              <p className="text-sm text-muted mb-4">Questions about this specification?</p>
              <Link href="/contact" className="text-sm font-medium border-b border-black pb-0.5">Contact Support</Link>
           </div>
        </div>

        {/* Right Column: Purchase Logic */}
        <div className="lg:col-span-5">
           <PurchaseModule 
             productSlug={params.slug}
             price={product.price}
             leadTime={product.lead_time}
             ndisCode={product.ndis_code}
           />
        </div>
      </div>
    </div>
  );
}
