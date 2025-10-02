import React, { useState, useEffect } from 'react';

const SimplePDFViewer = ({ isOpen, onClose, pdfUrl }) => {
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [showPurchasePopup, setShowPurchasePopup] = useState(false);

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
    }
  }, [isOpen, pdfLoaded]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4">
      <div className="relative w-full max-w-5xl h-full max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-neutral-200 bg-white">
          <h3 className="text-sm sm:text-lg font-semibold text-neutral-900 font-geist pr-2">Sample Pages (1-10) - The Complete UK Guide to Airbnb Hosting</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors flex-shrink-0"
            aria-label="Close PDF viewer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* PDF Content */}
        <div className="relative h-full overflow-hidden">
          {!showFallback ? (
            <div className="h-full">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&page=1&pagemode=none&zoom=100&disableprint=1&disablesave=1`}
                className="w-full h-full border-0"
                title="Sample Guide PDF - Pages 1-10"
                style={{ minHeight: '400px' }}
                onLoad={() => setPdfLoaded(true)}
                onError={() => setShowFallback(true)}
              />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-8">
              <div className="text-center max-w-2xl">
                <div className="w-20 h-20 mx-auto mb-6 bg-neutral-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-neutral-900 mb-4">The Complete UK Guide to Airbnb Hosting</h4>
                <p className="text-neutral-600 text-lg mb-6">
                  <strong>120+ pages</strong> of comprehensive strategies, templates, and actionable insights
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-700 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                      Launch checklist and timeline
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                      Pricing strategy and seasonality model
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                      Listing optimisation (photos, copy, SEO)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                      Guest screening and message scripts
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                      Turnover ops: cleaning, inventory, handovers
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                      Compliance basics: safety, licensing, insurance
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                      Tax overview and record-keeping essentials
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                      Toolkit: calculators and templates
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 mb-6">
                  <h5 className="font-semibold text-neutral-900 mb-3">Included Templates & Tools:</h5>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h13"></path><path d="M3 12h13"></path><path d="M3 17h7"></path><path d="M17 3v18"></path></svg>
                      House manual (editable)
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m8 6 4 4 4-4"></path><path d="M12 10v8"></path><path d="M8 14h8"></path></svg>
                      Pricing calculator
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="m3 8 9 6 9-6"></path></svg>
                      Message scripts pack
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7H3V5h11"></path></svg>
                      Compliance checklist
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Overlay with CTA */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-3 sm:p-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-neutral-600 text-xs sm:text-sm mb-3 sm:mb-4">
                <strong>Preview: First 10 pages of the complete guide</strong><br/>
                The full guide contains 120+ pages with detailed strategies, templates, and actionable insights.
              </p>
              <div className="flex flex-col gap-2 justify-center">
                <button 
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-4 py-2.5 transition-colors"
                >
                  Get Full Guide — £29
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a 
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-2 transition-colors"
                  >
                    Open PDF in New Tab
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                  <button 
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-2 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Popup - appears after 15 seconds */}
      {showPurchasePopup && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-60 p-3 sm:p-4">
          <div className="relative w-full max-w-md bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setShowPurchasePopup(false)}
              className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full transition-colors z-10"
              aria-label="Close popup"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Popup content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 font-geist mb-2">Love what you're seeing?</h3>
                <p className="text-neutral-600 text-sm">
                  You're viewing a preview of our comprehensive guide. Get the complete 120+ page guide with all templates and strategies.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-neutral-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-neutral-900">Complete Guide</span>
                    <span className="text-lg font-semibold text-neutral-900">£29</span>
                  </div>
                  <p className="text-xs text-neutral-600">One-time purchase • Lifetime access</p>
                </div>

                <div className="space-y-2 text-sm text-neutral-700">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>120+ pages of comprehensive content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>Editable templates & checklists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-4 py-3 transition-colors"
                  >
                    Get Full Guide — £29
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => setShowPurchasePopup(false)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-2 transition-colors"
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
