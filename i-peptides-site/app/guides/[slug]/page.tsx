import { notFound } from "next/navigation";

const guideContent: Record<string, { title: string; bullets: string[] }> = {
  "how-to-read-coa": {
    title: "How to read a COA",
    bullets: [
      "Match batch/lot ID between product page and COA PDF.",
      "Look for method, purity %, and the lab identity (and whether it is accredited).",
      "Check dates: manufacture, test, and shelf-life windows.",
      "Ensure the document is specific to the batch, not a generic marketing PDF.",
    ],
  },
  "storage-basics": {
    title: "Storage basics",
    bullets: [
      "Use clear labeling: batch ID, received date, storage temp.",
      "Avoid repeated temperature swings; define a simple routine.",
      "Keep inventory logs for fast support and returns handling.",
    ],
  },
  "site-navigation": {
    title: "How to use i-peptides",
    bullets: [
      "Start with Search if you know the name (supports aliases).",
      "Use the Database when you want context; use the Shop when you want inventory.",
      "From a peptide profile you can jump to linked products and comparisons.",
    ],
  },
};

export default async function GuideDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guideContent[slug];
  if (!g) return notFound();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{g.title}</h1>
        <p className="mt-1 text-slate-600">Demo content — replace with your verified copy.</p>
      </div>

      <div className="glass rounded-xl2 p-6">
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          {g.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}
