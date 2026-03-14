import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Script
        src="https://js-na2.hsforms.net/forms/embed/245541172.js"
        strategy="lazyOnload"
      />

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
        <span className="text-lg font-bold tracking-tight text-white">
          E2Educate
        </span>
        <a
          href="#contact"
          className="text-sm text-slate-400 hover:text-white transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Simple tools for schools.
          </h1>
          <p className="text-lg text-slate-400 mb-16 max-w-lg mx-auto">
            We build affordable, focused software for K-12 districts and local
            governments. No bloat, no upsells.
          </p>

          {/* Products */}
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {/* AccessEval */}
            <a
              href="https://accesseval.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 hover:border-orange-400/50 hover:bg-slate-800/70 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-400 text-xl font-bold">
                  A
                </div>
                <h2 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">
                  AccessEval
                </h2>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                ADA compliance scanner for school and government websites. Automated
                WCAG 2.1 AA audits, plain-English reports, and step-by-step fix
                instructions.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded-md bg-slate-700/60 text-slate-300">
                  WCAG 2.1 AA
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-700/60 text-slate-300">
                  PDF Reports
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-700/60 text-slate-300">
                  From $99/yr
                </span>
              </div>
              <span className="inline-block mt-4 text-sm text-orange-400 group-hover:translate-x-1 transition-transform">
                Visit AccessEval &rarr;
              </span>
            </a>

            {/* ReadingVox */}
            <a
              href="https://readingvox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 hover:border-violet-400/50 hover:bg-slate-800/70 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400 text-xl font-bold">
                  R
                </div>
                <h2 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors">
                  ReadingVox
                </h2>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                AI-powered text-to-speech Chrome extension with word-level
                highlighting, text simplification, translation, and dyslexia-friendly
                tools. Replaces Read&amp;Write at 58% less cost.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded-md bg-slate-700/60 text-slate-300">
                  Chrome Extension
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-700/60 text-slate-300">
                  FERPA/COPPA
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-700/60 text-slate-300">
                  $1/student/yr
                </span>
              </div>
              <span className="inline-block mt-4 text-sm text-violet-400 group-hover:translate-x-1 transition-transform">
                Visit ReadingVox &rarr;
              </span>
            </a>
          </div>
        </div>
      </main>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 max-w-xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Get in touch
        </h2>
        <p className="text-sm text-slate-400 text-center mb-8">
          Questions about our products? We&apos;d love to hear from you.
        </p>
        <div
          className="hs-form-frame"
          data-region="na2"
          data-form-id="117549be-b41a-48a8-a722-ee2f1a0d6c69"
          data-portal-id="245541172"
        />
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} E2Educate. Built in New York.
      </footer>
    </div>
  );
}
