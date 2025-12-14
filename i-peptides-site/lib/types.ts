export type Product = {
  id: string;
  slug: string;
  title: string;
  short: string;
  priceCents: number;
  currency: "EUR" | "USD";
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
