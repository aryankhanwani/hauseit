import React from 'react';

const WhyHauseit = () => {
  const checkoutUrl = process.env.REACT_APP_PODIA_CHECKOUT_URL || '#';
  return (
    <section id="why" className="max-w-7xl sm:px-6 mx-auto px-4 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-[32px] glass-ultra glass-glow p-6 sm:p-10">
        {/* Ultra Enhanced Glass Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/25 to-white/10 dark:from-neutral-900/70 dark:via-neutral-900/50 dark:to-neutral-900/25"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-white/40 via-transparent to-white/15 dark:from-neutral-800/60 dark:via-transparent dark:to-neutral-800/35"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/20 dark:from-neutral-700/50 dark:via-neutral-700/25 dark:to-neutral-700/30"></div>
        
        {/* Large Floating Glass Orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-200/50 to-transparent dark:from-blue-800/40 dark:to-transparent rounded-full blur-3xl opacity-70 dark:opacity-50"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-tl from-purple-200/40 to-transparent dark:from-purple-700/35 dark:to-transparent rounded-full blur-2xl opacity-60 dark:opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-white/15 to-transparent dark:from-neutral-600/25 dark:to-transparent rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
        <div className="relative z-10">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-neutral-950 dark:text-neutral-100 font-garamond">Why This Guide</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg font-geist max-w-4xl">
              We combine professional property expertise with real Airbnb hosting experience to give you a guide that actually works in the UK market — not just theory.
            </p>
            {/* <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg font-geist max-w-4xl">
              We've turned years of on-the-ground lettings and hosting insight into a practical, ready-to-use resource for anyone who wants to earn more from short-term lets — without the confusion or risk.
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-frosted glass-card-hover rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">🔹</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 font-geist">Built by UK property professionals</h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-geist mb-4">Written by experienced estate agents, landlords, and investors who understand the UK's short-let market inside out.</p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 font-geist">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>Practical, real-world insights</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>UK-specific compliance knowledge</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>Created by hosts for hosts</li>
                </ul>
              </div>
            </div>

            <div className="glass-frosted glass-card-hover rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 text-lg">🔹</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 font-geist">All-in-one resource</h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-geist mb-4">No need to hunt through YouTube videos or blogs — everything you need to launch and manage a profitable Airbnb is in one place.</p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 font-geist">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>Step-by-step UK hosting guide</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>Checklists, templates & trackers included</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>Instant digital download</li>
                </ul>
              </div>
            </div>

            <div className="glass-frosted glass-card-hover rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 text-lg">🔹</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 font-geist">Proven systems that work</h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-geist mb-4">Every template and workflow has been tested in real properties managed by Hauseit and partner hosts.</p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 font-geist">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>Real-world-tested processes</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>Ready-to-use message scripts and guest flow</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>Time-saving automation tools</li>
                </ul>
              </div>
            </div>

            <div className="glass-frosted glass-card-hover rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <span className="text-amber-600 dark:text-amber-400 text-lg">🔹</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 font-geist">Affordable, professional insight</h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-geist mb-4">Get industry-level knowledge and tools worth hundreds for just £10 — a tiny investment with big returns.</p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 font-geist">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>£10 one-time purchase</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>Lifetime access + free updates</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>No subscription, no upsells</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced callout */}
        <div className="mt-8 glass-frosted glass-card-hover rounded-2xl p-5 flex flex-wrap items-center justify-between gap-3 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/20 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/30 rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/15 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/25 rounded-2xl"></div>
          <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m5 13 4 4L19 7"></path></svg>
            <p className="text-sm font-medium font-geist">Instant download. Free updates included.</p>
          </div>
               <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="glass-button-primary inline-flex items-center gap-2 rounded-full text-sm font-medium px-4 py-2 transition relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent dark:from-neutral-700/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                 <span className="relative z-10">Get the guide — £10</span>
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
               </a>
        </div>
      </div>
    </section>
  );
};

export default WhyHauseit;

