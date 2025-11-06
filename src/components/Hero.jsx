import { Rocket, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fa]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#2578fb]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#2578fb]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 shadow-sm">
            <Rocket className="h-4 w-4 text-[#2578fb]" />
            <span className="text-sm font-medium text-gray-600">Sprintly UI</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Redesign your product in 7 days.
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-gray-600">
            We help startups and SaaS founders turn cluttered interfaces into clean,
            high-converting designs. Speed, clarity, and results — without the endless cycles.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#2578fb] px-5 py-3 text-white font-semibold shadow-sm hover:bg-[#1f66d3] transition"
            >
              Start Your 7-Day Sprint
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
