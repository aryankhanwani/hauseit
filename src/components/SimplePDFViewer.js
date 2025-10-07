import React, { useState, useEffect } from 'react';

const SimplePDFViewer = ({ isOpen, onClose, pdfUrl }) => {
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [showPurchasePopup, setShowPurchasePopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  useEffect(() => {
    if (isOpen) {
      // Set a timeout to show fallback if PDF doesn't load
      const fallbackTimer = setTimeout(() => {
        if (!pdfLoaded) {
          setShowFallback(true);
        }
      }, 3000);

      // Set a timeout to show purchase popup after 15 seconds
      const purchaseTimer = setTimeout(() => {
        setShowPurchasePopup(true);
      }, 15000);

      return () => {
        clearTimeout(fallbackTimer);
        clearTimeout(purchaseTimer);
      };
    } else {
      setPdfLoaded(false);
      setShowFallback(false);
      setShowPurchasePopup(false);
      setCurrentPage(1);
    }
  }, [isOpen, pdfLoaded]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 p-2 sm:p-4">
      <div className="relative w-full max-w-5xl h-full max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-neutral-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
          <h3 className="text-sm sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 font-geist pr-2">Sample Pages (1-10) - The Complete UK Guide to Airbnb Hosting</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors flex-shrink-0"
            aria-label="Close PDF viewer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-900 dark:text-neutral-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* PDF Content */}
        <div className="relative h-full overflow-hidden">
          {!showFallback ? (
            <div className="h-full flex flex-col">
              {/* Page Navigation */}
              <div className="flex items-center justify-between p-2 sm:p-3 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                  <span className="hidden sm:inline">Previous</span>
                </button>
                
                <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-medium">
                  Page {currentPage} of {totalPages}
                </span>
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span className="hidden sm:inline">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
              
              {/* PDF Frame */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&page=${currentPage}&pagemode=none&zoom=FitH&disableprint=1&disablesave=1`}
                  className="w-full h-full border-0"
                  title={`Sample Guide PDF - Page ${currentPage}`}
                  style={{ minHeight: '300px' }}
                  onLoad={() => setPdfLoaded(true)}
                  onError={() => setShowFallback(true)}
                />
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-4 sm:p-8">
              <div className="text-center max-w-2xl">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-neutral-600 dark:text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3 sm:mb-4">The Complete UK Guide to Airbnb Hosting</h4>
                <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg mb-4 sm:mb-6">
                  <strong>120+ pages</strong> of comprehensive strategies, templates, and actionable insights
                </p>
                
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 mb-6 sm:mb-8">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>
                      Launch checklist and timeline
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>
                      Pricing strategy and seasonality model
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>
                      Listing optimisation (photos, copy, SEO)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>
                      Guest screening and message scripts
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>
                      Turnover ops: cleaning, inventory, handovers
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>
                      Compliance basics: safety, licensing, insurance
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>
                      Tax overview and record-keeping essentials
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full flex-shrink-0"></span>
                      Toolkit: calculators and templates
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <h5 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3 text-sm sm:text-base">Included Templates & Tools:</h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-neutral-800 dark:text-neutral-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h13"></path><path d="M3 12h13"></path><path d="M3 17h7"></path><path d="M17 3v18"></path></svg>
                      House manual (editable)
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-neutral-800 dark:text-neutral-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m8 6 4 4 4-4"></path><path d="M12 10v8"></path><path d="M8 14h8"></path></svg>
                      Pricing calculator
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-neutral-800 dark:text-neutral-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="m3 8 9 6 9-6"></path></svg>
                      Message scripts pack
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-neutral-800 dark:text-neutral-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7H3V5h11"></path></svg>
                      Compliance checklist
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Mobile-only Open PDF button */}
          <div className="absolute bottom-0 left-0 right-0 sm:hidden z-20">
            <div className="bg-gradient-to-t from-white dark:from-neutral-900 via-white/95 dark:via-neutral-900/95 to-transparent p-4">
              <div className="flex justify-center">
                <a 
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-6 py-3 transition-colors shadow-lg"
                >
                  Open in New Tab
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Popup - appears after 15 seconds */}
      {showPurchasePopup && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 dark:bg-black/80 p-3 sm:p-4">
          <div className="relative w-full max-w-md bg-white dark:bg-neutral-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setShowPurchasePopup(false)}
              className="absolute top-4 right-4 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors z-10"
              aria-label="Close popup"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-900 dark:text-neutral-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Popup content */}
            <div className="p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-geist mb-2">Love what you're seeing?</h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  You're viewing a preview of our comprehensive guide. Get the complete 120+ page guide with all templates and strategies.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Complete Guide</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">£29</span>
                      <span className="text-sm text-neutral-400 dark:text-neutral-500 line-through">£59</span>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">One-time purchase • Lifetime access</p>
                </div>

                <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>120+ pages of comprehensive content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>Editable templates & checklists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>Email support included</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button 
                    onClick={() => {
                      setShowPurchasePopup(false);
                      // You can add purchase logic here
                      console.log('Purchase clicked');
                    }}
                    className="glass-button-primary w-full inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-4 py-3 transition-colors"
                  >
                         Get Full Guide — £29
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => setShowPurchasePopup(false)}
                    className="glass-button w-full inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-4 py-2 transition-colors"
                  >
                    Continue Reading Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimplePDFViewer;
