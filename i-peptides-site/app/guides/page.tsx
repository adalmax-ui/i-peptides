import Link from "next/link";
import { Badge } from "@/components/ui";

const guides = [
  { slug: "how-to-read-coa", title: "How to read a COA (certificate of analysis)", tag: "Quality" },
  { slug: "storage-basics", title: "Storage basics: temperature, light, labeling", tag: "Handling" },
  { slug: "site-navigation", title: "How to use i-peptides: search, filters, comparisons", tag: "Onboarding" },
];

export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Guides</h1>
        <p className="mt-1 text-slate-600">Короткие статьи, которые уменьшают поддержку и повышают доверие.</p>
      </div>

      <div className="grid gap-3">
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="glass rounded-xl2 p-5 hover:bg-white/80">
            <div className="flex items-center justify-between gap-3">
              <div className="font-semibold">{g.title}</div>
              <Badge>{g.tag}</Badge>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
