export interface Product {
  id: string;
  slug: string;
  name: string;
  system: string;
  ndisCode?: string; // Optional, only if known/confirmed
  price: number;
  description: string;
  features: string[];
  specs: Record<string, string>;
  leadTime: string;
  images: string[];
  fitGuardrails?: string[]; // New field for the exclusion block
}

export const PRODUCTS: Product[] = [
  // --- A) HYGIENE SYSTEM ---
  {
    id: "h1",
    slug: "tilt-in-space-shower-commode",
    name: "Tilt-in-Space Shower Commode",
    system: "hygiene",
    price: 2850, // Indicative pricing based on aluminium frame commodes
    description: "A high-need hygiene platform featuring a corrosion-resistant aluminium frame and gas-assisted tilt mechanism. Designed for safe, supported bathing and toileting in wet areas.",
    features: [
      "Corrosion-resistant aluminium frame",
      "Gas-assisted tilt-in-space (-5° to 40°)",
      "Height adjustable swing-away footrests",
      "4x braking castors for wet area safety"
    ],
    specs: {
      "Safe Working Load (SWL)": "150kg",
      "Overall Width": "540mm - 600mm",
      "Seat Width": "460mm (Standard)",
      "Tilt Range": "-5° to 40°",
      "Frame Material": "Aluminium",
      "Castors": "125mm Braking",
      "Product Weight": "Approx. 18kg",
      "Warranty": "2 Years (Frame)"
    },
    leadTime: "3-5 Business Days",
    images: ["https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2500&auto=format&fit=crop"], // Placeholder: White bathroom abstract
    fitGuardrails: [
      "User weight exceeds 150kg SWL",
      "Bathroom door width is less than 650mm",
      "Complex custom seating is required"
    ]
  },
  {
    id: "h2",
    slug: "adjustable-over-toilet-aid",
    name: "Height-Adjustable Over-Toilet Aid",
    system: "hygiene",
    price: 220,
    description: "A robust, height-adjustable aluminium frame designed to assist with transfers and stability over standard toilets. Available in static configuration for maximum stability.",
    features: [
      "Height adjustable legs",
      "Non-slip rubber feet",
      "Easy-clean seat and lid",
      "Corrosion-resistant frame"
    ],
    specs: {
      "Safe Working Load (SWL)": "125kg",
      "Width Between Arms": "480mm",
      "Height Adjustment": "450mm - 600mm",
      "Footprint": "550mm x 550mm",
      "Configuration": "Static (Non-wheeled)",
      "Product Weight": "4.5kg",
      "Assembly": "Flat-pack (Tool-free)"
    },
    leadTime: "2-3 Business Days",
    images: ["https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2500&auto=format&fit=crop"], // Placeholder
    fitGuardrails: [
      "User weight exceeds 125kg",
      "Toilet clearance is restricted (<600mm width)",
      "User requires wheeled transport over toilet"
    ]
  },

  // --- B) MOBILITY SYSTEM ---
  {
    id: "m1",
    slug: "forearm-support-walker",
    name: "Forearm Support Walker",
    system: "mobility",
    price: 650,
    description: "An indoor/outdoor mobility aid designed for users requiring upper body support. Features adjustable forearm gutters to distribute weight and reduce wrist strain.",
    features: [
      "Adjustable forearm gutters",
      "Rugged outdoor-capable wheels",
      "Folds for transport",
      "Lockable hand brakes"
    ],
    specs: {
      "Safe Working Load (SWL)": "130kg",
      "Handle Height": "950mm - 1200mm",
      "Overall Width": "620mm",
      "Wheel Size": "200mm (8 inch)",
      "Folded Width": "280mm",
      "Product Weight": "10.5kg",
      "Terrain": "Indoor / Paved Outdoor"
    },
    leadTime: "2-4 Business Days",
    images: ["https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=2500&auto=format&fit=crop"], // Placeholder
    fitGuardrails: [
      "User weight exceeds 130kg",
      "User lacks upper body control for steering",
      "Storage space is extremely limited"
    ]
  },
  {
    id: "m2",
    slug: "manual-tilt-wheelchair-base",
    name: "Manual Tilt-in-Space Wheelchair (Base)",
    system: "mobility",
    price: 3800, // Checking constraint
    description: "A premium manual wheelchair frame offering positioning and pressure redistribution via tilt functionality. Supplied in base configuration for clinical adaptability.",
    features: [
      "Up to 45° tilt range",
      "Adjustable axle position",
      "Compatibility with standard seating systems",
      "Crash tested frame"
    ],
    specs: {
      "Safe Working Load (SWL)": "140kg",
      "Seat Width Options": "40cm / 45cm / 50cm",
      "Tilt Range": "0° to 45°",
      "Frame Material": "High-grade Aluminium",
      "Overall Width": "Seat Width + 200mm",
      "Product Weight": "From 15kg (Transport)",
      "Configuration": "Base Frame Only"
    },
    leadTime: "5-10 Business Days",
    images: ["https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=2500&auto=format&fit=crop"], // Placeholder
    fitGuardrails: [
      "User requires custom moulded seating (not included)",
      "Weight exceeds 140kg",
      "Independent self-propulsion is the primary goal"
    ]
  },

  // --- C) REHABILITATION SYSTEM ---
  {
    id: "r1",
    slug: "upper-limb-therapy-device",
    name: "Upper-Limb Home Therapy Device",
    system: "rehab",
    price: 1200,
    description: "A sensor-based training tool for upper-limb rehabilitation. Gamifies repetitive movement therapy to encourage range of motion and motor control recovery.",
    features: [
      "Biofeedback sensors",
      "App connectivity (iOS/Android)",
      "Adjustable resistance/difficulty",
      "Compact table-top design"
    ],
    specs: {
      "Intended Use": "Neuromuscular Re-education",
      "Movements": "Flexion, Extension, Pronation",
      "Dimensions": "30cm x 30cm x 15cm",
      "Weight": "2.5kg",
      "Power": "Rechargeable Li-Ion",
      "Connectivity": "Bluetooth 5.0"
    },
    leadTime: "3-5 Business Days",
    images: ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2500&auto=format&fit=crop"], // Placeholder
    fitGuardrails: [
      "User has zero active movement (passive only)",
      "Cognitive impairment prevents app engagement",
      "Device is incompatible with user's tablet/phone"
    ]
  },
  {
    id: "r2",
    slug: "balance-training-platform",
    name: "Balance Training Platform",
    system: "rehab",
    price: 450,
    description: "A non-powered, unstable surface platform designed for vestibular and proprioceptive training. Supports weight-shift exercises in a safe, controlled manner.",
    features: [
      "Non-slip varying density surface",
      "Durable composite base",
      "Progressive instability levels",
      "Easy-clean material"
    ],
    specs: {
      "Dimensions": "50cm x 50cm",
      "Max User Weight": "150kg",
      "Surface": "High-density EVA foam",
      "Environment": "Indoor Clinical / Home",
      "Product Weight": "3.8kg",
      "Warranty": "1 Year"
    },
    leadTime: "2-3 Business Days",
    images: ["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2500&auto=format&fit=crop"], // Placeholder
    fitGuardrails: [
      "User is at high risk of falls without supervision",
      "Weight exceeds 150kg",
      "Space does not allow for safe fall zone (2m clearance)"
    ]
  }
];

export const SYSTEMS = [
  {
    id: "mobility",
    title: "Mobility & Transfers",
    description: "Manual and powered wheelchairs, scooters, and transfer aids.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "hygiene",
    title: "Hygiene Essentials",
    description: "Shower commodes, bath lifts, and toileting aids.",
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "rehab",
    title: "Rehab Tech",
    description: "Movement therapy, standing frames, and positioning.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
  }
];
