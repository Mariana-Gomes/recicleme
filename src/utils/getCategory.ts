import { categories, CategoryKey } from "../utils/constants";

export function getCategory(category?: string) {
  return (
    categories[category as CategoryKey] ?? {
      label: "Não reciclável",
      color: "bg-gray-600/60",
    }
  );
}
