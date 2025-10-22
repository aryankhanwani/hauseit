import React from 'react';

const FinalCTA = () => {
  const checkoutUrl = process.env.REACT_APP_PODIA_CHECKOUT_URL || '#';
  return (
    <section id="final-cta" className="max-w-7xl sm:px-6 mx-auto px-4 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-[32px] glass-ultra glass-glow p-6 sm:p-10">
        {/* Ultra Enhanced Glass Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-white/15 dark:from-neutral-900/80 dark:via-neutral-900/60 dark:to-neutral-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-white/50 via-transparent to-white/25 dark:from-neutral-800/70 dark:via-transparent dark:to-neutral-800/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/20 to-white/30 dark:from-neutral-700/60 dark:via-neutral-700/30 dark:to-neutral-700/40"></div>
        
        {/* Large Floating Glass Orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-emerald-200/60 to-transparent dark:from-emerald-800/50 dark:to-transparent rounded-full blur-3xl opacity-80 dark:opacity-60"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-tl from-blue-200/50 to-transparent dark:from-blue-700/40 dark:to-transparent rounded-full blur-2xl opacity-70 dark:opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-white/20 to-transparent dark:from-neutral-600/30 dark:to-transparent rounded-full blur-3xl opacity-60 dark:opacity-40"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tighter text-neutral-950 dark:text-neutral-100 font-garamond">Ready to turn your property into a profitable Airbnb?</h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base font-geist">Get the Complete UK Guide to Airbnb Hosting and all bonus templates instantly for just £10 (was £29).</p>
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

export default FinalCTA;


