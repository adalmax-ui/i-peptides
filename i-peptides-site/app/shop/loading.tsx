export default function ShopLoading() {
  return (
    <div className="space-y-6">
      <div className="animate-pulse">
        <div className="h-8 w-32 bg-slate-200 rounded-xl"></div>
        <div className="mt-2 h-4 w-64 bg-slate-200 rounded"></div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="glass rounded-xl2 overflow-hidden animate-pulse">
            <div className="aspect-[4/3] bg-slate-200"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 w-20 bg-slate-200 rounded"></div>
              <div className="h-5 w-full bg-slate-200 rounded"></div>
              <div className="h-3 w-3/4 bg-slate-200 rounded"></div>
              <div className="flex items-center justify-between">
                <div className="h-4 w-16 bg-slate-200 rounded"></div>
                <div className="h-9 w-24 bg-slate-200 rounded-xl"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
