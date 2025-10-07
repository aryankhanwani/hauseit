import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="max-w-7xl sm:px-6 mx-auto px-4 py-10 sm:py-14">
      <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-gradient-to-br from-white to-neutral-50">
        <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-neutral-100 blur-3xl"></div>
        <div className="relative p-6 sm:p-10">
          <div className="grid gap-6">
            <div className="max-w-2xl mx-auto text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5 font-geist mx-auto sm:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Questions?
              </div>
              <h3 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tighter text-neutral-950 font-garamond">Ask about the guide</h3>
              <p className="mt-2 text-neutral-600 text-base font-geist">Prefer to chat first? Reach us via phone or email.</p>

              <div className="mt-5 flex flex-wrap gap-2 justify-center sm:justify-start">
                <a href="tel:+442012345678" className="inline-flex items-center gap-2 text-sm font-medium bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-800 font-geist hover:bg-neutral-50 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.72 19.72 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.72 19.72 0 0 1 3.08 4.18 2 2 0 0 1 5.06 2h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.47-1.17a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z"></path></svg>
                  +44 20 1234 5678
                </a>
                <a href="mailto:hello@hauseit.co.uk" className="inline-flex items-center gap-2 text-sm font-medium bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-800 font-geist hover:bg-neutral-50 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="m3 8 9 6 9-6"></path></svg>
                  hello@hauseit.co.uk
                </a>
              </div>
              <div className="mt-3 text-xs text-neutral-600 font-geist">We’ll get back within 24–48h. No forms — just reach out.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

