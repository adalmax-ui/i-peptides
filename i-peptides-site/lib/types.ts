export type Product = {
  id: string;
  slug: string;
  title: string;
  short: string;
  description?: string; // полное описание товара
  benefits?: string[]; // короткие преимущества (3-4 штуки)
  priceCents: number;
  currency: "EUR" | "USD" | "RUB";
  image: string;
  category: string;
  peptideSlug?: string; // optional link into the database
  tags: string[];
  inStock: boolean;
};

export type Peptide = {
  id: string;
  slug: string;
  name: string;
  aka: string[];
  category: string; // e.g. Repair, Metabolic, Cosmetic, Neuro, etc.
  summary: string;
  researchStatus: "Preclinical" | "Early clinical" | "Clinical" | "Approved drug (context-specific)";
  keyPoints: string[];
  safetyNotes: string[];
};
