export const categories = {
  plastic: { label: "Plástico", color: "bg-red-600/80" },
  paper: { label: "Papel", color: "bg-blue-600/60" },
  steel: { label: "Metal", color: "bg-yellow-600/70" },
  glass: { label: "Vidro", color: "bg-green-600/70" },
  organic: { label: "Orgânico", color: "bg-amber-950/60" },
} as const;

export type CategoryKey = keyof typeof categories;
