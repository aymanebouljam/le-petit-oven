import type { Component } from "solid-js";
import {
  CakeSlice,
  Coffee,
  Croissant,
  HandPlatter,
  Leaf,
  Wheat
} from "lucide-solid";

export type NavLink = {
  href: string;
  id: string;
  label: string;
};

export type MenuCategory = "All" | "Breads" | "Pastries" | "Cakes" | "Desserts";

export type MenuItem = {
  category: Exclude<MenuCategory, "All">;
  description: string;
  image: string;
  name: string;
  price: string;
};

export type Specialty = {
  accent: string;
  description: string;
  image: string;
  name: string;
  note: string;
};

export type ValueItem = {
  description: string;
  icon: Component<{ class?: string }>;
  title: string;
};

export type GalleryItem = {
  alt: string;
  caption: string;
  category: string;
  image: string;
};

export type Testimonial = {
  feedback: string;
  name: string;
  title: string;
};

export const sectionLinks: NavLink[] = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#menu", id: "menu", label: "Menu" },
  { href: "#about", id: "about", label: "About" },
  { href: "#gallery", id: "gallery", label: "Gallery" },
  { href: "#testimonials", id: "testimonials", label: "Testimonials" },
  { href: "#visit", id: "visit", label: "Visit" }
];

export const heroHighlights = [
  "Stone-milled flour and cultured butter",
  "Small-batch viennoiserie baked at dawn",
  "Coffee pairings and seasonal tartlets daily"
];

export const menuCategories: MenuCategory[] = ["All", "Breads", "Pastries", "Cakes", "Desserts"];

export const menuItems: MenuItem[] = [
  {
    category: "Breads",
    description: "Slow-fermented country loaf with a bronzed crust and airy crumb.",
    image: "/images/menu-country-loaf.svg",
    name: "Country Levain",
    price: "$9"
  },
  {
    category: "Pastries",
    description: "Laminated over three folds for a honeycomb center and delicate snap.",
    image: "/images/menu-croissant.svg",
    name: "Butter Croissant",
    price: "$5"
  },
  {
    category: "Cakes",
    description: "Vanilla sponge layered with praline cream and roasted hazelnut crunch.",
    image: "/images/menu-praline-cake.svg",
    name: "Praline Entremet",
    price: "$12"
  },
  {
    category: "Desserts",
    description: "Silken custard tart with torched sugar and macerated berries.",
    image: "/images/menu-berry-tart.svg",
    name: "Berry Creme Tart",
    price: "$8"
  },
  {
    category: "Pastries",
    description: "Espresso-glazed brioche swirl with mascarpone and dark cocoa.",
    image: "/images/menu-morning-bun.svg",
    name: "Cafe Morning Bun",
    price: "$6"
  },
  {
    category: "Desserts",
    description: "Chocolate sable with fleur de sel, caramel center, and toasted pecans.",
    image: "/images/menu-biscuit.svg",
    name: "Salted Caramel Biscuit",
    price: "$4"
  }
];

export const specialties: Specialty[] = [
  {
    accent: "Chef's Signature",
    description:
      "A dramatic centerpiece of crisp choux, diplomat cream, and burnished caramel spun to order.",
    image: "/images/specialty-croquembouche.svg",
    name: "Croquembouche Tower",
    note: "Available for celebrations and elegant gatherings."
  },
  {
    accent: "Seasonal Favorite",
    description:
      "Poached pear, almond frangipane, and vanilla bean glaze on a buttery sable base.",
    image: "/images/specialty-pear-tart.svg",
    name: "Poire Amande Tart",
    note: "Best enjoyed with our house-roasted Ethiopian espresso."
  },
  {
    accent: "Morning Ritual",
    description:
      "Twice-baked pistachio croissant finished with orange blossom syrup and crushed nuts.",
    image: "/images/specialty-pistachio.svg",
    name: "Pistachio Croissant",
    note: "Baked in limited batches every morning at 8:00."
  }
];

export const values: ValueItem[] = [
  {
    description: "Every loaf, viennoiserie, and tartlet is shaped, proofed, and baked on site.",
    icon: HandPlatter,
    title: "Handmade Daily"
  },
  {
    description: "We work with cultured butter, heritage grains, and produce at peak ripeness.",
    icon: Leaf,
    title: "Fresh Ingredients"
  },
  {
    description: "Our menu relies on slow fermentation, precision laminations, and French methods.",
    icon: Croissant,
    title: "Artisan Techniques"
  },
  {
    description: "We partner with nearby mills, dairies, and coffee roasters whenever possible.",
    icon: Wheat,
    title: "Local Sourcing"
  },
  {
    description: "Warm lighting, porcelain cups, and quiet details make every visit feel unhurried.",
    icon: Coffee,
    title: "Warm Atmosphere"
  },
  {
    description: "Celebration cakes and curated pastry boxes are finished with gift-worthy care.",
    icon: CakeSlice,
    title: "Elegant Presentation"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    alt: "Assorted laminated pastries on a marble display",
    caption: "Layers of croissants, pain suisse, and morning buns prepared for first service.",
    category: "Pastries",
    image: "/images/gallery-pastries.svg"
  },
  {
    alt: "Bread shelves with rustic sourdough and seeded loaves",
    caption: "Our bread wall balances naturally leavened loaves with daily rye and grain blends.",
    category: "Bread",
    image: "/images/gallery-bread-wall.svg"
  },
  {
    alt: "Coffee and tartlet pairing on a small bistro table",
    caption: "Afternoon pairings designed for slow pauses and quiet conversation.",
    category: "Cafe",
    image: "/images/gallery-coffee.svg"
  },
  {
    alt: "Elegant bakery packaging with ribbon and pastry box",
    caption: "Signature packaging for gifting pastry assortments and celebration cakes.",
    category: "Packaging",
    image: "/images/gallery-packaging.svg"
  },
  {
    alt: "Bakery interior with warm shelving and pastries",
    caption: "An intimate interior framed by warm oak, brushed brass, and natural stone.",
    category: "Interior",
    image: "/images/gallery-interior.svg"
  },
  {
    alt: "Decorated cakes on pedestal stands",
    caption: "Celebration cakes finished with delicate textures and restrained decoration.",
    category: "Cakes",
    image: "/images/gallery-cakes.svg"
  }
];

export const testimonials: Testimonial[] = [
  {
    feedback:
      "The croissants are the closest thing to a Paris morning I have found outside France. Every detail, down to the packaging, feels considered.",
    name: "Camille Laurent",
    title: "Creative Director"
  },
  {
    feedback:
      "Le Petit Oven feels calm, refined, and genuinely handcrafted. The pistachio croissant and espresso pairing is now a standing Saturday ritual.",
    name: "Julian Mercer",
    title: "Neighborhood Regular"
  },
  {
    feedback:
      "We ordered a celebration cake and pastry boxes for a studio opening, and everything arrived looking immaculate and tasting even better.",
    name: "Nadia Bennett",
    title: "Gallery Curator"
  }
];

export const visitDetails = {
  address: "18 Rue des Fleurs, Casablanca Quarter",
  email: "bonjour@lepetitoven.com",
  hours: [
    "Mon - Thu: 7:00 AM - 6:00 PM",
    "Fri - Sat: 7:00 AM - 8:00 PM",
    "Sun: 8:00 AM - 3:00 PM"
  ],
  phone: "+212 5 22 48 18 90"
};

export const bakeryStats = [
  { label: "Years Perfecting the Craft", value: "12" },
  { label: "Morning Bakes Each Week", value: "140+" },
  { label: "Seasonal Menu Moments", value: "24" }
];
