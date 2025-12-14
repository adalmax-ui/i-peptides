import type { Peptide, Product } from "./types";

export const peptides: Peptide[] = [
  {
    id: "pep_bpc157",
    slug: "bpc-157",
    name: "BPC-157",
    aka: ["Body Protection Compound"],
    category: "Tissue repair",
    summary:
      "A synthetic peptide fragment studied in preclinical settings for tissue repair signaling. Human evidence and regulatory status vary by country and indication.",
    researchStatus: "Preclinical",
    keyPoints: [
      "Often discussed in the context of repair pathways and gut-related models",
      "Commonly referenced in lab / preclinical literature rather than large human trials",
      "Handling and storage stability depend on formulation and vendor documentation",
    ],
    safetyNotes: [
      "Avoid medical claims and dosing guidance on-site; keep content informational",
      "Highlight batch documentation / COA workflows if you plan to provide them",
    ],
  },
  {
    id: "pep_cjc1295",
    slug: "cjc-1295",
    name: "CJC-1295",
    aka: ["GRF analog"],
    category: "Growth hormone axis",
    summary:
      "A peptide analog studied for effects on growth hormone signaling in research settings. Interpretation depends on study design and medical oversight.",
    researchStatus: "Early clinical",
    keyPoints: [
      "Frequently grouped with other GH-axis research compounds",
      "Users typically want fast access to “what it is / what it’s used for in studies / what to watch out for”",
      "Good candidate for cross-links: related peptides, comparisons, and product variants",
    ],
    safetyNotes: [
      "Keep regulatory/compliance copy clear; do not frame as treatment",
      "Prominent “educational” and “consult a professional” messaging is recommended",
    ],
  },
  {
    id: "pep_semaglutide",
    slug: "semaglutide",
    name: "Semaglutide",
    aka: ["GLP-1 receptor agonist"],
    category: "Metabolic",
    summary:
      "A GLP‑1 receptor agonist with approved pharmaceutical products in some markets. If you include it, separate educational content from any sales logic and follow local rules strictly.",
    researchStatus: "Approved drug (context-specific)",
    keyPoints: [
      "Clear separation of education vs. commerce is essential for trust and compliance",
      "Users will search synonyms and brand terms; alias handling matters",
      "A strong “status” badge reduces confusion (approved vs experimental)",
    ],
    safetyNotes: [
      "Do not provide medical advice or dosing; route people to clinicians",
      "Many platforms and payment providers restrict peptide sales; verify policies",
    ],
  },
];

export const products: Product[] = [
  {
    id: "prd_001",
    slug: "lab-storage-kit",
    title: "Cold Storage Kit",
    short: "Starter kit for organized, label-safe storage and transport.",
    priceCents: 2490,
    currency: "EUR",
    image: "https://images.unsplash.com/photo-1582719478170-2d3b2e45a9d2?auto=format&fit=crop&w=1200&q=80",
    category: "Lab supplies",
    tags: ["storage", "labels", "starter"],
    inStock: true,
  },
  {
    id: "prd_002",
    slug: "bpc-157-research-reference",
    title: "BPC-157 — Research Reference",
    short: "Reference listing + documentation placeholder (replace later).",
    priceCents: 8900,
    currency: "EUR",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
    category: "Peptide references",
    peptideSlug: "bpc-157",
    tags: ["reference", "documentation"],
    inStock: true,
  },
  {
    id: "prd_003",
    slug: "cjc-1295-research-reference",
    title: "CJC-1295 — Research Reference",
    short: "Reference listing + documentation placeholder (replace later).",
    priceCents: 9900,
    currency: "EUR",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    category: "Peptide references",
    peptideSlug: "cjc-1295",
    tags: ["reference", "documentation"],
    inStock: false,
  },
];
