import { ArrowRight } from "lucide-react";

const steps = [
  { name: "Audit", desc: "We review your product, data, and goals to define opportunities." },
  { name: "Design", desc: "Rapid concepts, wireframes, and high-fidelity UI with your brand." },
  { name: "Review", desc: "Iterative feedback cycles to refine flows and microcopy." },
  { name: "Deliver", desc: "Final Figma files, component library, and implementation notes." },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#f8f9fa]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The 7‑Day Sprint</h2>
          <p className="text-gray-600">A crisp, transparent timeline — Audit → Design → Review → Deliver.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-[#2578fb]/20 via-[#2578fb]/40 to-[#2578fb]/20 rounded-full" />
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <li key={s.name} className="bg-white rounded-xl shadow-sm border border-black/5 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2578fb]/10 text-[#2578fb] font-semibold">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-gray-900">{s.name}</span>
                </div>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="flex justify-center mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-[#2578fb] text-white px-5 py-3 font-semibold shadow-sm hover:bg-[#1f66d3] transition">
              Start Your 7-Day Sprint <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
