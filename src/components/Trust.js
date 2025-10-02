import React from 'react';

const Trust = () => {
  return (
    <section id="trust" className="max-w-7xl sm:px-6 mx-auto px-4 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white">
        <div className="absolute -top-24 right-0 w-64 h-64 bg-neutral-100 rounded-full blur-3xl"></div>
        <div className="relative p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-neutral-950 font-geist">You're in good hands</h2>
              <p className="mt-2 text-neutral-600 text-base sm:text-lg font-geist">Trusted by sellers, buyers and landlords across the UK.</p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5 font-geist">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m5 13 4 4L19 7"></path></svg>
              Verified reviews • 4.9/5
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="flex items-center gap-2 text-neutral-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor"><path d="m12 .587 3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 19.771l-7.335 3.893 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
                <div className="text-sm font-semibold font-geist">Smooth sale in 4 weeks</div>
              </div>
              <p className="mt-2 text-sm text-neutral-700 font-geist">Hauseit nailed the pricing and marketing—three offers in the first week and a straightforward completion.</p>
              <p className="mt-3 text-xs text-neutral-500 font-geist">— Sarah, SW11</p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="flex items-center gap-2 text-neutral-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor"><path d="m12 .587 3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 19.771l-7.335 3.893 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
                <div className="text-sm font-semibold font-geist">Great landlord support</div>
              </div>
              <p className="mt-2 text-sm text-neutral-700 font-geist">They handled compliance and tenant onboarding brilliantly. I felt looked after from day one.</p>
              <p className="mt-3 text-xs text-neutral-500 font-geist">— Amit, M3</p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="flex items-center gap-2 text-neutral-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor"><path d="m12 .587 3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 19.771l-7.335 3.893 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
                <div className="text-sm font-semibold font-geist">Expert negotiators</div>
              </div>
              <p className="mt-2 text-sm text-neutral-700 font-geist">We beat asking with smart positioning and tidy conditions. Communication was excellent.</p>
              <p className="mt-3 text-xs text-neutral-500 font-geist">— Louise, BS8</p>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-xs font-semibold">CMP</div>
              <div>
                <div className="text-sm font-semibold text-neutral-900 font-geist">Client Money Protection</div>
                <p className="text-xs text-neutral-600 font-geist">Funds safeguarded under scheme rules</p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-xs font-semibold">TPO</div>
              <div>
                <div className="text-sm font-semibold text-neutral-900 font-geist">The Property Ombudsman</div>
                <p className="text-xs text-neutral-600 font-geist">Independent redress and standards</p>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-xs font-semibold">ICO</div>
              <div>
                <div className="text-sm font-semibold text-neutral-900 font-geist">ICO Registered</div>
                <p className="text-xs text-neutral-600 font-geist">GDPR‑compliant data handling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;

