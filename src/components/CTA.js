import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="max-w-7xl sm:px-6 mx-auto px-4 py-10 sm:py-14">
      <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-gradient-to-br from-white to-neutral-50">
        <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-neutral-100 blur-3xl"></div>
        <div className="relative p-6 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5 font-geist">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Free consultation
              </div>
              <h3 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tighter text-neutral-950 font-geist">Talk to an advisor</h3>
              <p className="mt-2 text-neutral-600 text-base font-geist">Share your goals and timeline—buying, selling or letting—and we'll suggest the smartest next steps.</p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-800 font-geist">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> No obligation
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-800 font-geist">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> UK‑wide
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-800 font-geist">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> 24‑48h response
                </span>
              </div>
            </div>

            <div>
              <form className="rounded-2xl border border-neutral-200 bg-white p-5 grid grid-cols-1 gap-4" aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-neutral-700 font-geist">Full name</label>
                    <input id="name" name="name" type="text" required className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Alex Johnson" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-700 font-geist">Email</label>
                    <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="alex@email.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-neutral-700 font-geist">Phone (optional)</label>
                    <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="+44 7123 456789" />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-xs font-medium text-neutral-700 font-geist">I'm interested in</label>
                    <select id="interest" name="interest" className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10">
                      <option>Buying</option>
                      <option>Selling</option>
                      <option>Letting</option>
                      <option>Airbnb/Short‑let strategy</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-700 font-geist">Message</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Tell us a bit about your property or plans..."></textarea>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] text-neutral-500 font-geist">By submitting you agree to our terms and privacy policy.</p>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-4 py-2 transition">
                    Send enquiry
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4Z"></path></svg>
                  </button>
                </div>
              </form>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-700">
                <a href="tel:+442012345678" className="inline-flex items-center gap-2 hover:text-neutral-950 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.72 19.72 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.72 19.72 0 0 1 3.08 4.18 2 2 0 0 1 5.06 2h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l2.47-1.95a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z"></path></svg>
                  +44 20 1234 5678
                </a>
                <a href="mailto:hello@hauseit.co.uk" className="inline-flex items-center gap-2 hover:text-neutral-950 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="m3 8 9 6 9-6"></path></svg>
                  hello@hauseit.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

