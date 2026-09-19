export type Service = {
  id: string;
  name: string;
  icon: string;
  price: string;
  unit: string;
  turnaround: string;
  description: string;
  tags: string[];
  tone: "brand" | "info" | "warn" | "danger";
};

export const services: Service[] = [
  {
    id: "wash-fold",
    name: "Wash & Fold",
    icon: "local_laundry_service",
    price: "$1.75",
    unit: "/ lb",
    turnaround: "24 Hours",
    description:
      "Everyday tees, denim, activewear, socks and bath towels. Color-sorted, hypoallergenic sanitized wash, precision folded into protective biodegradable packs.",
    tags: ["Cold / Warm Wash", "Tumble Dry Gentle", "Pair Matching"],
    tone: "brand",
  },
  {
    id: "dry-cleaning",
    name: "Dry Cleaning",
    icon: "dry_cleaning",
    price: "from $4.50",
    unit: "/ pc",
    turnaround: "36 Hours",
    description:
      "Suits, blazers, evening gowns, silk blouses and wool overcoats. Eco-solvent gentle care that preserves delicate threads, buttons and original drape.",
    tags: ["Non-Toxic Solvents", "Stain Pre-Spotting", "Breathable Garment Bag"],
    tone: "info",
  },
  {
    id: "steam-press",
    name: "Steam Ironing & Press",
    icon: "iron",
    price: "from $1.20",
    unit: "/ pc",
    turnaround: "24 Hours",
    description:
      "High-pressure vertical steam sanitization and hand-finished pressing. Crisp collars, sharp pleats and zero shine marks, delivered hung or folded.",
    tags: ["High-Pressure Steam", "Hanger or Box Fold", "Starch Level Choice"],
    tone: "warn",
  },
  {
    id: "express",
    name: "Express 6-Hour Turnaround",
    icon: "speed",
    price: "+35%",
    unit: "priority surcharge",
    turnaround: "6 Hours",
    description:
      "Sudden flight or morning keynote? Schedule pickup by 10 AM and receive everything by 4 PM impeccably washed, ironed and ready to wear.",
    tags: ["Dedicated Driver", "Fast-Track Cycle", "SMS Milestone Alerts"],
    tone: "danger",
  },
  {
    id: "bedding",
    name: "Bedding, Duvets & Curtains",
    icon: "bed",
    price: "from $12.00",
    unit: "/ item",
    turnaround: "48 Hours",
    description:
      "Heavy comforters, down duvets, blackout drapes and mattress protectors deep-sanitized with anti-dust-mite thermal wash.",
    tags: ["Thermal Anti-Allergen", "Feather Fluff Cycle", "Vacuum Shrink Pack"],
    tone: "brand",
  },
  {
    id: "shoe-spa",
    name: "Shoe & Sneaker Restoration",
    icon: "footprint",
    price: "from $15.00",
    unit: "/ pair",
    turnaround: "48 Hours",
    description:
      "Leather sneakers, suede boots and athletic footwear. Deep mid-sole whitening, hand lace restoration, odor neutralizer and hydrophobic coating.",
    tags: ["Hand Brushing", "Odor Eliminator", "Nano-Shield Coating"],
    tone: "info",
  },
];

export type GarmentItem = {
  id: string;
  name: string;
  icon: string;
  note: string;
  price: number;
};

export const garmentItems: GarmentItem[] = [
  {
    id: "shirt",
    name: "Men's Business Shirt",
    icon: "apparel",
    note: "Starch options available",
    price: 3.5,
  },
  {
    id: "suit",
    name: "Two-Piece Suit",
    icon: "dry_cleaning",
    note: "Jacket & trousers pressed together",
    price: 14,
  },
  {
    id: "blazer",
    name: "Wool Blazer",
    icon: "styler",
    note: "Gentle steam & de-linting",
    price: 9.5,
  },
  {
    id: "dress",
    name: "Silk / Evening Dress",
    icon: "woman",
    note: "Hand-treated delicate weaves",
    price: 12,
  },
  {
    id: "jacket",
    name: "Heavy Winter Jacket",
    icon: "ac_unit",
    note: "Down fill rejuvenation & weather-guard",
    price: 16,
  },
];

export const bagOptions = [
  { id: "light", name: "Light Bag", price: 10.5, detail: "~6 lbs • 8-10 items", hint: "Gym kit, daily casuals", icon: "checkroom" },
  { id: "standard", name: "Standard Hamper", price: 21, detail: "~12 lbs • 18-22 items", hint: "Most popular weekly load", icon: "inventory_2" },
  { id: "family", name: "Family Load", price: 42, detail: "~25 lbs • 35-40 items", hint: "Full household multi-bag", icon: "groups" },
];
