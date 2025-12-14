import { PeptideCard } from "@/components/Cards";
import { peptides } from "@/lib/data";

export default function PeptidesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Peptide Database</h1>
        <p className="mt-1 text-slate-600">
          Карточки и структура заточены под масштабирование: алиасы, статус, “related” блоки, связка с товарами.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {peptides.map((pep) => <PeptideCard key={pep.id} pep={pep} />)}
      </div>
    </div>
  );
}
