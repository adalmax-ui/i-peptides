import { PeptideCard } from "@/components/Cards";
import { peptides } from "@/lib/data";

export default function PeptidesPage() {
  return (
    <div className="space-y-6">
      <div className="glass rounded-xl2 p-6">
        <h1 className="text-3xl font-bold text-slate-900">База знаний о пептидах</h1>
        <p className="mt-3 text-lg text-slate-600 leading-relaxed">
          Полная научно обоснованная информация о пептидах: механизмы действия, результаты клинических
          исследований, области применения и доказанные эффекты. Все данные основаны на опубликованных
          исследованиях и научной литературе.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {peptides.map((pep) => <PeptideCard key={pep.id} pep={pep} />)}
      </div>
    </div>
  );
}
