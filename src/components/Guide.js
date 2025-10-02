import React, { useState } from 'react';
import SimplePDFViewer from './SimplePDFViewer';

const Guide = () => {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  const openPDF = () => setIsPDFOpen(true);
  const closePDF = () => setIsPDFOpen(false);

  return (
    <section id="guide" className="max-w-7xl sm:px-6 mx-auto px-4 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_20px_40px_-20px_rgba(0,0,0,0.18)]">
        <div className="absolute -right-28 -top-28 w-72 h-72 rounded-full bg-emerald-100/50 blur-3xl"></div>
        <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl"></div>

        <div className="relative p-4 sm:p-6 lg:p-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full px-3 py-1.5 font-geist">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 7l10-5 10 5-10 5L2 7z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              Airbnb Hosting • UK
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-neutral-950 font-geist leading-tight">The Complete UK Guide to Airbnb Hosting</h2>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base lg:text-lg font-geist leading-relaxed">A step‑by‑step playbook to launch, run and optimise a compliant, profitable short‑let in the UK. Includes templates, checklists and pricing frameworks.</p>
          </div>

          <div className="mt-8">
            {/* Single product card */}
            <div className="group rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6 ring-1 ring-transparent hover:ring-neutral-900/10 transition">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                {/* Guide summary */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold font-geist tracking-tight text-neutral-900">Instant Download</h3>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1 self-start sm:self-auto">PDF • 120+ pages</span>
                  </div>
                  <p className="mt-1 text-neutral-600 text-sm font-geist">Includes editable templates and checklists.</p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-4xl font-semibold tracking-tight text-neutral-950 font-geist">£29</span>
                    <span className="text-xs text-neutral-500">one‑time • lifetime access</span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>Launch checklist and timeline</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>Pricing strategy and seasonality model</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>Listing optimisation (photos, copy, SEO)</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>Guest screening and message scripts</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>Turnover ops: cleaning, inventory, handovers</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>Compliance basics: safety, licensing, insurance</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>Tax overview and record‑keeping essentials</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>Toolkit: calculators and templates</li>
                    </ul>
                  </div>

                  {/* Included templates */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-neutral-50 hover:bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-200 text-neutral-800 transition-colors font-geist">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h13"></path><path d="M3 12h13"></path><path d="M3 17h7"></path><path d="M17 3v18"></path></svg>
                      House manual (editable)
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-neutral-50 hover:bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-200 text-neutral-800 transition-colors font-geist">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m8 6 4 4 4-4"></path><path d="M12 10v8"></path><path d="M8 14h8"></path></svg>
                      Pricing calculator
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-neutral-50 hover:bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-200 text-neutral-800 transition-colors font-geist">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="m3 8 9 6 9-6"></path></svg>
                      Message scripts pack
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-neutral-50 hover:bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-200 text-neutral-800 transition-colors font-geist">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7H3V5h11"></path></svg>
                      Compliance checklist
                    </span>
                  </div>
                </div>

                {/* CTA panel */}
                <div className="w-full lg:w-[320px] shrink-0">
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50/60 hover:bg-white transition-colors p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-neutral-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="m3 8 9 6 9-6"></path></svg>
                      <div className="text-sm font-medium font-geist">Get the guide</div>
                    </div>
                    <p className="mt-1 text-xs text-neutral-600 font-geist">Instant download, secure checkout.</p>

                    <div className="mt-4 flex flex-col gap-2">
                      <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-4 py-2 transition-colors">
                        Buy now — £29
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </a>
                      <button onClick={openPDF} className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-2 transition-colors">
                        Read sample (10 pages)
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                      </button>
                      <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-2 transition-colors">
                        Talk to an advisor
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </a>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.47-1.17a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"/></svg>
                      <span className="font-geist">Email support included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-2">
              <button onClick={openPDF} className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-2 transition">
                See full table of contents
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </button>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-4 py-2 transition">
                Ask about short‑let strategy
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* PDF Viewer Modal */}
      <SimplePDFViewer 
        isOpen={isPDFOpen} 
        onClose={closePDF} 
        pdfUrl="/sample-guide-10pages.pdf" 
      />
    </section>
  );
};

export default Guide;

