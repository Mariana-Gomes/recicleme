import {
  Martini,
  BeerBottle,
  Hammer,
  Carrot,
  Scroll,
  BatteryCharging,
} from "phosphor-react-native";

export const categories = {
  plastic: { label: "Plástico", color: "bg-red-600/80" },
  paper: { label: "Papel", color: "bg-blue-600/60" },
  steel: { label: "Metal", color: "bg-yellow-600/70" },
  glass: { label: "Vidro", color: "bg-green-600/70" },
  organic: { label: "Orgânico", color: "bg-amber-950/60" },
  "no-recyclable": { label: "Não reciclável", color: "bg-gray-600/60" },
} as const;

export type CategoryKey = keyof typeof categories;

export const categoriesData: {
  category: CategoryKey;
  icon: React.ComponentType<{ color?: string; size?: number }>;
}[] = [
  { category: "glass", icon: Martini },
  { category: "plastic", icon: BeerBottle },
  { category: "organic", icon: Carrot },
  { category: "steel", icon: Hammer },
  { category: "paper", icon: Scroll },
  { category: "no-recyclable", icon: BatteryCharging },
];
