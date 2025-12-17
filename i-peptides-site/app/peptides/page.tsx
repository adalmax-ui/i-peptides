import { PeptideCard } from "@/components/Cards";
import { peptides } from "@/lib/data";
import Image from "next/image";

export default function PeptidesPage() {
  return (
    <div className="space-y-8">
      {/* Hero секция с изображением */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=2000&q=80"
            alt="Научные исследования пептидов"
            fill
            className="object-cover mix-blend-overlay opacity-20"
          />
        </div>

        <div className="relative p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
              <span className="text-xl">🔬</span>
              <span>Научная информация</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              База знаний о пептидах
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Полная научно обоснованная информация о пептидах: механизмы действия,
              результаты клинических исследований, области применения и доказанные эффекты.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-3xl">📚</div>
                <div>
                  <div className="text-white font-semibold">{peptides.length} пептидов</div>
                  <div className="text-white/70 text-sm">В базе знаний</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-3xl">🧪</div>
                <div>
                  <div className="text-white font-semibold">100+ исследований</div>
                  <div className="text-white/70 text-sm">Научная база</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-3xl">✓</div>
                <div>
                  <div className="text-white font-semibold">Проверено</div>
                  <div className="text-white/70 text-sm">Данные из публикаций</div>
                </div>
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
