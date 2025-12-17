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
  rating?: number; // рейтинг от 1 до 5
};

export type Peptide = {
  id: string;
  slug: string;
  name: string;
  aka: string[];
  category: string;
  summary: string;
  researchStatus: "Preclinical" | "Early clinical" | "Clinical" | "Approved drug (context-specific)";
  keyPoints: string[];
  safetyNotes: string[];
  mechanismOfAction?: string; // подробное описание механизма действия
  applications?: string[]; // области применения
  researchHistory?: string; // история и контекст исследований
};
