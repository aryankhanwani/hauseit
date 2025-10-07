import React, { useState } from 'react';

const PDFViewer = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 dark:bg-black/80 p-2 sm:p-4">
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
          {/* PDF Embed with fallback */}
          <div className="h-full">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&page=1&pagemode=none&zoom=100&disableprint=1&disablesave=1`}
              className="w-full h-full border-0"
              title="Sample Guide PDF - Pages 1-10"
              style={{ minHeight: '400px' }}
              onError={() => {
                console.log('PDF iframe failed to load');
              }}
            />
          </div>
          
          {/* Fallback content if PDF doesn't load */}
          <div className="absolute inset-0 bg-white dark:bg-neutral-900 flex items-center justify-center" style={{ display: 'none' }} id="pdf-fallback">
            <div className="text-center p-4 sm:p-8">
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
            </div>
          </div>
          
          {/* Overlay with CTA */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white dark:from-neutral-900 via-white/95 dark:via-neutral-900/95 to-transparent p-3 sm:p-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm mb-3 sm:mb-4">
                <strong>Preview: First 10 pages of the complete guide</strong><br/>
                The full guide contains 120+ pages with detailed strategies, templates, and actionable insights.
              </p>
              <div className="flex flex-col gap-2 justify-center">
                <button 
                  onClick={onClose}
                  className="glass-button-primary inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-4 py-2.5 transition-colors"
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
                    className="glass-button inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-3 sm:px-4 py-2 transition-colors"
                  >
                    <span className="hidden sm:inline">Open PDF in New Tab</span>
                    <span className="sm:hidden">Open in New Tab</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                  <button 
                    onClick={onClose}
                    className="glass-button inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-3 sm:px-4 py-2 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
