import React from 'react';

const OfferBar = () => {
  const checkoutUrl = process.env.REACT_APP_PODIA_CHECKOUT_URL || '#';
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 hidden sm:block">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <div className="rounded-xl sm:rounded-2xl glass-ultra glass-glow p-2 sm:p-4 flex flex-col sm:flex-row sm:items-center items-stretch gap-2 sm:gap-3 relative overflow-hidden">
          {/* Ultra Enhanced Glass Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-white/15 dark:from-neutral-900/80 dark:via-neutral-900/60 dark:to-neutral-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20 dark:from-neutral-800/60 dark:via-transparent dark:to-neutral-800/30"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/15 dark:from-neutral-700/50 dark:via-transparent dark:to-neutral-700/25"></div>
          {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/80 to-transparent dark:from-transparent dark:via-neutral-700/80 dark:to-transparent"></div> */}
          <div className="flex w-full sm:w-auto items-start sm:items-center gap-2 relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-white bg-red-600 rounded-full px-2 py-1 sm:px-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
              Offer ends in 14 days
            </span>
            <div className="text-[13px] sm:text-base font-medium text-neutral-900 dark:text-neutral-100 font-geist leading-snug">Get the complete guide + templates for £29 (was £59)</div>
          </div>
          <div className="sm:ml-auto flex items-center gap-2 w-full sm:w-auto relative z-10">
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="glass-button-primary inline-flex items-center gap-2 rounded-full text-sm font-medium px-4 py-3 sm:py-2 transition w-full sm:w-auto justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent dark:from-neutral-700/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <span className="relative z-10">Buy now — £29</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBar;


