import React from 'react';

const Trust = () => {
  return (
    <section id="trust" className="max-w-7xl sm:px-6 mx-auto px-4 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-[32px] glass-ultra glass-glow">
        {/* Ultra Enhanced Glass Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/25 to-white/10 dark:from-neutral-900/70 dark:via-neutral-900/50 dark:to-neutral-900/25"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-white/40 via-transparent to-white/15 dark:from-neutral-800/60 dark:via-transparent dark:to-neutral-800/35"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/20 dark:from-neutral-700/50 dark:via-neutral-700/25 dark:to-neutral-700/30"></div>
        
        {/* Large Floating Glass Orbs */}
        <div className="absolute -top-28 right-0 w-80 h-80 bg-gradient-to-br from-yellow-200/50 to-transparent dark:from-yellow-800/40 dark:to-transparent rounded-full blur-3xl opacity-70 dark:opacity-50"></div>
        <div className="absolute -bottom-20 left-0 w-64 h-64 bg-gradient-to-tl from-amber-200/40 to-transparent dark:from-amber-700/35 dark:to-transparent rounded-full blur-2xl opacity-60 dark:opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-white/15 to-transparent dark:from-neutral-600/25 dark:to-transparent rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
        <div className="relative p-6 sm:p-10 z-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-neutral-950 dark:text-neutral-100 font-garamond">You're in good hands</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg font-geist">Trusted by sellers, buyers and landlords across the UK.</p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50/60 dark:text-emerald-300 dark:bg-emerald-900/30 glass-frosted rounded-full px-3 py-1.5 font-geist">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m5 13 4 4L19 7"></path></svg>
              Verified reviews • 4.9/5
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="glass-frosted glass-card-hover rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-2xl"></div>
              <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor"><path d="m12 .587 3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 19.771l-7.335 3.893 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
                <div className="text-sm font-semibold font-geist">Excellent professional service</div>
              </div>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 font-geist relative z-10">I had a great experience with Hauseit. Imran booked a viewing for me and gave an excellent tour of the house. He explained everything clearly throughout the process, and everything was smooth and transparent. Really appreciate the professionalism - highly recommended!</p>
              <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 font-geist relative z-10">— Zunaix Hussein</p>
            </div>

            <div className="glass-frosted glass-card-hover rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-2xl"></div>
              <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor"><path d="m12 .587 3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 19.771l-7.335 3.893 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
                <div className="text-sm font-semibold font-geist">Very helpful and responsive</div>
              </div>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 font-geist relative z-10">Imran and his team were very helpful and provided a lot of helpful information in our property search. They responded to our queries so promptly. I would recommend them to anyone looking to buy a property. Thank you</p>
              <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 font-geist relative z-10">— nitin bhat</p>
            </div>

            <div className="glass-frosted glass-card-hover rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-2xl"></div>
              <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor"><path d="m12 .587 3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 19.771l-7.335 3.893 1.4-8.168L.132 9.21l8.2-1.192z"/></svg>
                <div className="text-sm font-semibold font-geist">Professional and knowledgeable</div>
              </div>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 font-geist relative z-10">Imran was very professional and clearly knows his stuff. He guided us through the process meticulously and gave good advice from start to finish. Thank you so much again, Imran!</p>
              <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 font-geist relative z-10">— Kay Quilter</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Trust;

