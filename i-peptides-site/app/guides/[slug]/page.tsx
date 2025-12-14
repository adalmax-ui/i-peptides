import { notFound } from "next/navigation";

const guideContent: Record<string, { title: string; bullets: string[] }> = {
  "how-to-read-coa": {
    title: "Как читать сертификат качества (COA)",
    bullets: [
      "Сверьте номер партии между страницей товара и COA документом.",
      "Проверьте метод анализа, процент чистоты и аккредитацию лаборатории.",
      "Проверьте даты: производство, тестирование и срок годности.",
      "Убедитесь, что документ относится к конкретной партии, а не общий маркетинговый PDF.",
    ],
  },
  "storage-basics": {
    title: "Основы хранения пептидов",
    bullets: [
      "Используйте четкую маркировку: номер партии, дата получения, температура хранения.",
      "Избегайте резких перепадов температуры, следуйте простой схеме хранения.",
      "Ведите учет запасов для быстрой поддержки и обработки возвратов.",
    ],
  },
  "site-navigation": {
    title: "Как пользоваться i-peptides",
    bullets: [
      "Начните с поиска, если знаете название (поддерживаются синонимы).",
      "Используйте базу знаний для изучения пептидов, магазин — для покупок.",
      "Со страницы пептида можно перейти к связанным товарам и сравнениям.",
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
        <p className="mt-1 text-slate-600">Практическое руководство по работе с пептидами и нашим сайтом.</p>
      </div>

      <div className="glass rounded-xl2 p-6">
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
          {g.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}
