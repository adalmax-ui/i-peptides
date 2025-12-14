export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Support</h1>
        <p className="mt-1 text-slate-600">FAQ/контакты/тикеты. На реальном проекте лучше: база знаний + форма обращения.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass rounded-xl2 p-5">
          <div className="font-semibold">Contact</div>
          <p className="mt-2 text-sm text-slate-600">support@i-peptides.example</p>
          <p className="mt-1 text-sm text-slate-600">Mon–Fri, 10:00–18:00</p>
        </div>

        <div className="glass rounded-xl2 p-5">
          <div className="font-semibold">Common topics</div>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Shipping & tracking</li>
            <li>Returns</li>
            <li>Documentation / COA</li>
            <li>Account access</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
