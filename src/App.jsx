import Hero from './components/Hero';
import WhySprintly from './components/WhySprintly';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import TestimonialsPricing from './components/TestimonialsPricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-lg">Sprintly <span className="text-[#2578fb]">UI</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#why" className="hover:text-gray-900">Why Us</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-[#2578fb] px-4 py-2 text-white font-semibold shadow-sm hover:bg-[#1f66d3] transition text-sm">
            Start Your 7-Day Sprint
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <WhySprintly />
        <Process />
        <CaseStudies />
        <TestimonialsPricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
