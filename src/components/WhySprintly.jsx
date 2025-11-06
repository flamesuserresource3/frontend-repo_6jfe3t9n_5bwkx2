import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Fast 7-day turnaround",
    desc: "Ship a polished redesign in one week with a tight, outcomes-first process.",
  },
  {
    title: "Data-backed design decisions",
    desc: "We align design with analytics, user feedback, and business goals.",
  },
  {
    title: "Clarity-focused redesigns",
    desc: "Simplify complex interfaces and reduce cognitive load for your users.",
  },
  {
    title: "Proven conversion improvements",
    desc: "We optimize onboarding, pricing, and key flows to drive signups.",
  },
];

export default function WhySprintly() {
  return (
    <section id="why" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Sprintly UI</h2>
            <p className="text-gray-600 max-w-prose">
              Sprintly UI runs fast, conversion-focused design sprints for startups. We help
              founders simplify complex interfaces, improve clarity, and boost signups — all within one week.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 mt-1 text-[#2578fb]" />
                <div>
                  <p className="font-semibold text-gray-900">{f.title}</p>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
