export default function CaseStudies() {
  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Before → After</h2>
          <p className="text-gray-600">A glimpse of how we simplify complex UI for clarity and conversion.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1,2].map((i) => (
            <div key={i} className="rounded-xl border border-black/5 overflow-hidden bg-gray-50">
              <div className="grid grid-cols-2">
                <div className="p-4 bg-white">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Before</p>
                  <div className="aspect-video rounded-lg border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
                    Old UI mockup
                  </div>
                </div>
                <div className="p-4 bg-[#f8fbff]">
                  <p className="text-xs font-semibold text-[#2578fb] uppercase tracking-wide mb-2">After</p>
                  <div className="aspect-video rounded-lg border border-[#2578fb]/20 bg-white flex items-center justify-center text-[#2578fb] text-sm">
                    New UI mockup
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-black/5">
                <p className="text-sm text-gray-700"><span className="font-semibold">Result:</span> clearer navigation, fewer steps to complete key actions, and a measurable lift in signups.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
