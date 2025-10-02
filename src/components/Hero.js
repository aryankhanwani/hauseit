import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
      <div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_12px_24px_-12px_rgba(0,0,0,0.12)] bg-white border border-neutral-200 rounded-[40px] backdrop-blur">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-transparent"></div>
        </div>

        <div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-12">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="flag" className="lucide lucide-flag w-3.5 h-3.5 stroke-[1.5]"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><path d="M4 22v-7"></path></svg>
                <span className="font-geist">UK‑based • Independent • Full‑service agency</span>
              </div>
              <h1 className="text-[9.5vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[5vw] leading-[0.95] font-medium text-neutral-950 tracking-tighter font-geist mt-4">
                Property moves, made simple
              </h1>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 font-geist">
                Hauseit helps buyers, sellers and landlords make confident decisions with local expertise, clear advice and modern tools—so every move is a smart move.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3">
                  <div className="text-xl font-semibold tracking-tight text-neutral-950 font-geist">5,800+</div>
                  <p className="text-[11px] text-neutral-500 mt-0.5 font-geist">Clients Served</p>
                </div>
                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3">
                  <div className="text-xl font-semibold tracking-tight text-neutral-950 font-geist">4.9</div>
                  <p className="text-[11px] text-neutral-500 mt-0.5 font-geist">Client Rating</p>
                </div>
                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3">
                  <div className="text-xl font-semibold tracking-tight text-neutral-950 font-geist">28</div>
                  <p className="text-[11px] text-neutral-500 mt-0.5 font-geist">UK Markets</p>
                </div>
              </div>
            </div>
          </div>

          {/* Media panel */}
          <div className="mt-8 relative rounded-2xl overflow-hidden border border-neutral-200">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop" alt="Modern UK townhouse facade" className="w-full h-[52vh] sm:h-[60vh] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute inset-x-0 bottom-0 sm:p-8 pt-6 pr-6 pb-6 pl-6">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)] font-geist tracking-tighter font-medium">About Hauseit</h2>
                <p className="mt-2 sm:mt-3 text-neutral-800 text-base sm:text-lg leading-relaxed drop-shadow-[0_1px_0_rgba(255,255,255,0.6)] font-geist">
                  A modern agency built on service, discretion and results—tailored for buyers, sellers and landlords across the UK.
                </p>
              </div>

              {/* Quick highlights */}
              <div className="mt-5">
                <div className="w-full sm:p-4 bg-white/85 border border-neutral-200 rounded-2xl pt-3 pr-3 pb-3 pl-3 backdrop-blur-xl" style={{backdropFilter: 'blur(20px) saturate(180%)'}}>
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs text-neutral-600 font-geist">Highlights:</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-neutral-50 hover:bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-200 text-neutral-800 backdrop-blur-sm transition-all font-geist">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="home" className="lucide lucide-home w-3.5 h-3.5 stroke-[1.5]"><path d="M3 9l9-7 9 7"></path><path d="M9 22V12h6v10"></path><path d="M2 22h20"></path></svg>
                      Local market insight
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-neutral-50 hover:bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-200 text-neutral-800 backdrop-blur-sm transition-all font-geist">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="handshake" className="lucide lucide-handshake w-3.5 h-3.5 stroke-[1.5]"><path d="M11.5 10.5 7 15a2.5 2.5 0 0 0 3.5 3.5l2.5-2.5"></path><path d="M21 8s-2.5-2.5-4-4l-6 6"></path><path d="M3 8s2.5-2.5 4-4l6 6"></path><path d="M16 19l2.5-2.5A2.5 2.5 0 0 0 15 13l-1-.5"></path><path d="M4 13l5 5"></path><path d="M20 8v5"></path><path d="M4 8v5"></path></svg>
                      Dedicated negotiators
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-neutral-50 hover:bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-200 text-neutral-800 backdrop-blur-sm transition-all font-geist">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="pound-sterling" className="lucide lucide-pound-sterling w-3.5 h-3.5 stroke-[1.5]"><path d="M18 7c0-3-2.239-5-5-5s-5 2-5 5c0 4 3 6 3 9"></path><path d="M7 15h8"></path><path d="M7 21h10"></path></svg>
                      Transparent fees
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-tight bg-neutral-50 hover:bg-neutral-100 rounded-full px-3 py-1.5 border border-neutral-200 text-neutral-800 backdrop-blur-sm transition-all font-geist">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="sparkles" className="lucide lucide-sparkles w-3.5 h-3.5 stroke-[1.5]"><path d="M12 3v6"></path><path d="M9 6h6"></path><path d="M5 20l2-2-2-2-2 2 2 2z"></path><path d="M19 14l2-2-2-2-2 2 2 2z"></path></svg>
                      Modern tools
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* /media panel */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

