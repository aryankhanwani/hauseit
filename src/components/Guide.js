import React, { useState } from 'react';
import useOfferCountdown from './useOfferCountdown';
import PDFViewer from './PDFViewer';

const Guide = () => {
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const timeLeft = useOfferCountdown();
  const checkoutUrl = process.env.REACT_APP_PODIA_CHECKOUT_URL || '#';

  const openPDF = () => setIsPDFOpen(true);
  const closePDF = () => setIsPDFOpen(false);

  return (
    <section id="guide" className="max-w-7xl sm:px-6 mx-auto px-4 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-[32px] glass-ultra glass-glow">
        {/* Ultra Enhanced Glass Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/25 to-white/10 dark:from-neutral-900/70 dark:via-neutral-900/50 dark:to-neutral-900/25"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-white/40 via-transparent to-white/15 dark:from-neutral-800/60 dark:via-transparent dark:to-neutral-800/35"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/20 dark:from-neutral-700/50 dark:via-neutral-700/25 dark:to-neutral-700/30"></div>
        
        {/* Large Floating Glass Orbs */}
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-200/60 to-transparent dark:from-emerald-800/50 dark:to-transparent blur-3xl opacity-80 dark:opacity-60"></div>
        <div className="absolute -left-28 -bottom-28 w-88 h-88 rounded-full bg-gradient-to-tl from-indigo-200/50 to-transparent dark:from-indigo-700/40 dark:to-transparent blur-3xl opacity-70 dark:opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-white/20 to-transparent dark:from-neutral-700/30 dark:to-transparent blur-3xl opacity-50 dark:opacity-35"></div>

        <div className="relative p-4 sm:p-6 lg:p-10 z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50/60 dark:bg-indigo-900/30 glass-frosted rounded-full px-3 py-1.5 font-geist relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/70 to-transparent dark:from-indigo-900/50 dark:to-transparent"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 7l10-5 10 5-10 5L2 7z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              <span className="relative z-10">Airbnb Hosting • UK</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-neutral-950 dark:text-neutral-100 font-garamond leading-tight">The Complete UK Guide to Airbnb Hosting</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base lg:text-lg font-geist leading-relaxed">A step‑by‑step playbook to launch, run and optimise a compliant, profitable short‑let in the UK. Includes templates, checklists and pricing frameworks.</p>
          </div>

          <div className="mt-8">
            <div className="group glass-frosted glass-card-hover rounded-2xl p-4 sm:p-6 relative overflow-hidden">
              {/* Enhanced Card Glass Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-2xl"></div>
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6 relative z-10">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold font-geist tracking-tight text-neutral-900 dark:text-neutral-100">Instant Download</h3>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50/60 dark:text-emerald-300 dark:bg-emerald-900/30 glass-frosted rounded-full px-2.5 py-1 self-start sm:self-auto">PDF • 120+ pages</span>
                  </div>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-300 text-sm font-geist">Includes editable templates and checklists.</p>

                  <div className="mt-5 flex items-baseline gap-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100 font-geist">£10</span>
                      <span className="text-lg text-neutral-400 dark:text-neutral-500 line-through">£29</span>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">one‑time • lifetime access</span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-neutral-700 dark:text-neutral-300">
                        <div className="glass-highlight rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
                            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 font-geist">What's Included</div>
                          </div>
                      <ul className="mt-2 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                        <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"></path></svg>The Complete 12-Chapter Guide — everything from setup to scaling</li>
                        <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"></path></svg>Compliance Checklist — never miss a legal step</li>
                        <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"></path></svg>Furnishing & Styling Shopping List — know exactly what to buy</li>
                      </ul>
                    </div>
                        <div className="glass-highlight rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 font-geist">Who It's For</div>
                          </div>
                      <ul className="mt-2 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-sm flex-shrink-0 mt-1.5"></span>New hosts turning spare rooms into side income</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-sm flex-shrink-0 mt-1.5"></span>Landlords wanting higher yields than long-term lets</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-sm flex-shrink-0 mt-1.5"></span>Property investors exploring short-term accommodation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                  <div className="w-full lg:w-[320px] shrink-0">
                    <div className="glass-frosted glass-card-hover rounded-xl p-4 sm:p-5 relative overflow-hidden h-full flex flex-col">
                      {/* Enhanced Purchase Card Glass Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/20 dark:from-neutral-800/60 dark:via-transparent dark:to-neutral-800/30 rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-white/40 via-transparent to-white/15 dark:from-neutral-700/50 dark:via-transparent dark:to-neutral-700/25 rounded-xl"></div>
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden mb-3">
                          <div className="h-full bg-red-600 transition-all" style={{ width: `${timeLeft.percentRemaining}%` }}></div>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-medium text-white bg-red-600 rounded-full px-2.5 py-1 mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                          Offer ends in {Math.floor(timeLeft.remainingMs / (24*60*60*1000))} days · {String(timeLeft.hours % 24).padStart(2,'0')}:{String(timeLeft.minutes).padStart(2,'0')}:{String(timeLeft.seconds).padStart(2,'0')}
                        </div>
                        <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="m3 8 9 6 9-6"></path></svg>
                          <div className="text-sm font-medium font-geist">Get the guide</div>
                        </div>
                        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300 font-geist">Instant download, secure checkout.</p>

                        {/* Enhanced Content Section */}
                        <div className="mt-4 space-y-3 flex-1">
                          <div className="bg-white/20 dark:bg-neutral-800/20 rounded-lg p-3 border border-white/30 dark:border-neutral-700/30 flex justify-around items-center">
                            <div className="flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><circle cx="12" cy="16" r="1"></circle><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                              <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 font-geist">Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <img src="/stripe.png" alt="Stripe" className="h-5" />
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-col gap-2">
                          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="glass-button-primary inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-4 py-2 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent dark:from-neutral-700/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            <span className="relative z-10">Buy now — £10</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                          </a>
                          <button onClick={openPDF} className="glass-button inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-4 py-2 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent dark:from-neutral-700/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            <span className="relative z-10">Read sample (10 pages)</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                          </button>
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.47-1.17a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"/></svg>
                          <span className="font-geist">Email support included</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      
      <PDFViewer 
        isOpen={isPDFOpen} 
        onClose={closePDF} 
        pdfUrl="/sample-guide-10pages.pdf" 
      />
    </section>
  );
};

export default Guide;