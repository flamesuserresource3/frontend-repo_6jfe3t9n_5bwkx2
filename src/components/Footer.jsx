export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Let's start your sprint</h3>
            <p className="text-gray-600 mt-2">Tell us about your product and goals. We'll reply within 24 hours.</p>
            <div className="mt-6 text-sm text-gray-500">
              <p>Email: hello@sprintlyui.com</p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-gray-800">Twitter</a>
                <a href="#" className="hover:text-gray-800">LinkedIn</a>
                <a href="#" className="hover:text-gray-800">Dribbble</a>
              </div>
            </div>
          </div>

          <form className="bg-[#f8f9fa] rounded-xl p-6 border border-black/5 grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2578fb]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2578fb]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">What do you want to redesign?</label>
              <textarea rows="4" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2578fb]"></textarea>
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-[#2578fb] px-5 py-3 text-white font-semibold shadow-sm hover:bg-[#1f66d3] transition">
              Send message
            </button>
          </form>
        </div>
        <div className="pt-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Sprintly UI. All rights reserved.</div>
      </div>
    </footer>
  );
}
