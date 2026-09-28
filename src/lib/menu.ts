export type MenuCategory = "classic" | "calzone-focaccia" | "innovative" | "specials";

export interface MenuItem {
  id: string;
  number: number;
  name: string;
  style?: string;
  category: MenuCategory;
  description: string;
  price: number; // GBP — placeholder prices, edit freely
  image?: string;
}

// Seed/fallback data only — the live source of truth is the shared Mongo
// `menu` collection (written by pizzaiiolo) via src/lib/db/menuConfig.ts.
// This is only used if Mongo is unconfigured, unreachable, or empty.
export const MENU: MenuItem[] = [
  {
    id: "margherita",
    number: 1,
    name: "Margherita",
    style: "Traditional Base",
    category: "classic",
    price: 9.5,
    image: "https://data.thefeedfeed.com/static/2021/04/13/16183401006075e904223ae.jpg",
    description: "Tomato, mozzarella, basil, olive oil.",
  },
  {
    id: "napoli",
    number: 5,
    name: "Napolitan",
    category: "classic",
    price: 12.5,
    image: "https://italianfoodforever.com/wp-content/uploads/2015/01/napolipizza4.jpg",
    description: "Tomato, mozzarella, anchovies, olives, capers, garlic, oregano.",
  },
  {
    id: "diavola",
    number: 6,
    name: "Diavola",
    style: "Margherita con Salame Piccante",
    category: "classic",
    price: 13.0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd4NQF9AoDHLYIDv3yGqhdZq9HBRfQ8WuGZUuR5s9Vw&s=10",
    description: "Tomato, mozzarella, spicy salami, parmesan, basil, olive oil.",
  },
  {
    id: "ortolana",
    number: 12,
    name: "Ortolana",
    style: "Gourmet Neapolitan — Presìdi Slow Food Campania Vegetables",
    category: "classic",
    price: 14.5,
    image: "/pizzas/ortolana.png",
    description: "Pacchetelle tomato, Fior di Latte, grilled eggplant & zucchini, roasted Pappacella peppers, artichokes, Parmigiano.",
  },
  {
    id: "double-pepperoni-hot-honey",
    number: 14,
    name: "Double Pepperoni & Hot Honey",
    style: "Modern Crowd-Pleaser",
    category: "innovative",
    price: 13.95,
    image: "https://coolfooddude.com/wp-content/uploads/2020/12/Double-Pepperoni-and-honey-PIzza.jpg",
    description: "Tomato, mozzarella, provolone, double pepperoni, salami, hot honey.",
  },
  {
    id: "pesto-burrata",
    number: 24,
    name: "Pesto & Burrata",
    style: "Fresh Pesto & Cold Burrata",
    category: "innovative",
    price: 14.5,
    image: "/pizzas/pesto-burrata.jpeg",
    description: "Tomato, pesto, mozzarella, burrata, olive oil.",
  },
];
