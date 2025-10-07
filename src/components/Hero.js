import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const STORAGE_KEY = 'offerCountdownEnd';
    const now = Date.now();
    let end = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
    if (!end || end < now) {
      end = now + 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, String(end));
    }

    const tick = () => {
      const remaining = Math.max(0, end - Date.now());
      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
      if (remaining === 0) {
        const newEnd = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, String(newEnd));
      }
    };

    const interval = setInterval(tick, 1000);
    tick();
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
      <div className="relative sm:mt-12 overflow-hidden glass-ultra glass-glow rounded-[40px]">
        {/* Ultra Enhanced Glass Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/15 dark:from-neutral-900/70 dark:via-neutral-900/50 dark:to-neutral-900/25"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-white/40 via-transparent to-white/20 dark:from-neutral-800/60 dark:via-transparent dark:to-neutral-800/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/25 dark:from-neutral-700/50 dark:via-neutral-700/25 dark:to-neutral-700/35"></div>
          {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/80 to-transparent dark:from-transparent dark:via-neutral-700/80 dark:to-transparent"></div> */}
        </div>
        
        {/* Large Floating Glass Orbs */}
        <div className="absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br from-white/50 to-transparent dark:from-neutral-800/60 dark:to-transparent rounded-full blur-3xl opacity-80 dark:opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tl from-white/40 to-transparent dark:from-neutral-700/50 dark:to-transparent rounded-full blur-2xl opacity-70 dark:opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/20 to-transparent dark:from-neutral-600/30 dark:to-transparent rounded-full blur-3xl opacity-60 dark:opacity-40"></div>

        <div className="relative p-4 sm:p-6 lg:p-8 z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-12">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50/60 dark:text-emerald-300 dark:bg-emerald-900/30 glass-frosted rounded-full px-3 py-1.5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/70 to-transparent dark:from-emerald-900/50 dark:to-transparent"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="pound-sterling" className="w-3.5 h-3.5 stroke-[1.5] relative z-10"><path d="M18 7c0-3-2.239-5-5-5s-5 2-5 5c0 4 3 6 3 9"></path><path d="M7 15h8"></path><path d="M7 21h10"></path></svg>
                <span className="font-geist relative z-10">Limited-time: Get the full guide for £10</span>
              </div>
              <h1 className="text-[8.8vw] sm:text-[7.4vw] md:text-[6vw] lg:text-[4.6vw] leading-[0.95] font-medium text-neutral-950 dark:text-neutral-100 tracking-tighter font-garamond mt-4">
                Turn Your Property Into a Profitable Airbnb – For Just £10
              </h1>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 font-geist max-w-3xl">
                The Complete UK Guide to Airbnb Hosting gives you every checklist, template, and insider tip you need to launch a compliant, five‑star short‑let in the UK.
              </p>

              


            </div>
          </div>

          <div className="mt-8 relative rounded-2xl overflow-hidden glass-frosted glass-glow">
            {/* Enhanced Video Container Glass Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/30 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/15 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/25 rounded-2xl"></div>
            {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/80 to-transparent dark:from-transparent dark:via-neutral-700/80 dark:to-transparent"></div> */}
            
            <div className="w-full h-[52vh] sm:h-[60vh] relative z-10">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/0CKkg2TQTdM?rel=0&modestbranding=1&controls=1"
                title="Guide intro video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8 z-10">
              {/* Optional overlay content can go here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

