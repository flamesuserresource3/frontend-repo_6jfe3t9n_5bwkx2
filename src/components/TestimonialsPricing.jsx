import { Star, Quote, Check } from "lucide-react";

const testimonials = [
  {
    quote:
      "Sprintly UI delivered in days what would've taken us months. Our onboarding completion rate jumped 27%.",
    name: "Maya Patel",
    role: "Founder, Flowbyte",
  },
  {
    quote:
      "The team cut through complexity and gave us a clean, scalable system. Signups are up and support tickets are down.",
    name: "James Walker",
    role: "Head of Product, Acorn",
  },
];

export default function TestimonialsPricing() {
  return (
    <section className="bg-[#f8f9fa]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What founders say</h2>
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <blockquote key={i} className="rounded-xl bg-white border border-black/5 p-6 shadow-sm">
                  <Quote className="h-5 w-5 text-[#2578fb]" />
                  <p className="mt-3 text-gray-700">“{t.quote}”</p>
                  <div className="mt-4 text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </blockquote>
              ))}
            </div>
          </div>

          <div id="pricing" className="lg:sticky lg:top-6">
            <div className="rounded-2xl bg-white border border-black/5 p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-[#2578fb]" />
                <h3 className="text-xl font-bold text-gray-900">Flat-rate sprint. No fluff.</h3>
              </div>
              <p className="text-gray-600 mb-6">One focused week. Senior designers. Clear deliverables.</p>
              <ul className="space-y-3 text-sm text-gray-700 mb-6">
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-[#2578fb] mt-0.5" /> UI audit + opportunity map</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-[#2578fb] mt-0.5" /> High-fidelity redesign in Figma</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-[#2578fb] mt-0.5" /> Component library + tokens</li>
                <li className="flex items-start gap-2"><Check className="h-4 w-4 text-[#2578fb] mt-0.5" /> Implementation notes for devs</li>
              </ul>
              <a href="#contact" className="inline-flex w-full items-center justify-center rounded-lg bg-[#2578fb] px-5 py-3 text-white font-semibold shadow-sm hover:bg-[#1f66d3] transition">
                Book a Sprint
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
