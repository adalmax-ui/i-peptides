import { PeptideCard } from "@/components/Cards";
import { peptides } from "@/lib/data";

export default function PeptidesPage() {
  return (
    <div className="space-y-8">
      {/* Hero секция */}
      <div className="glass rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="bg-slate-50/50 border-b border-slate-200 p-6 md:p-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium mb-4 border border-blue-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Научная информация</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              База знаний о пептидах
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Полная научно обоснованная информация о пептидах: механизмы действия,
              результаты клинических исследований, области применения и доказанные эффекты.
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">{peptides.length} пептидов</div>
                <div className="text-slate-600 text-sm">В базе знаний</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">100+ исследований</div>
                <div className="text-slate-600 text-sm">Научная база</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-slate-900 font-semibold">Проверено</div>
                <div className="text-slate-600 text-sm">Данные из публикаций</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Карточки пептидов */}
      <div className="grid gap-6 md:grid-cols-2">
        {peptides.map((pep) => <PeptideCard key={pep.id} pep={pep} />)}
      </div>
    </div>
  );
}
