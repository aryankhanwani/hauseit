import React, { useState } from 'react';

const PDFViewer = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-4xl h-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 bg-white">
          <h3 className="text-lg font-semibold text-neutral-900 font-geist">Sample Pages (1-10) - The Complete UK Guide to Airbnb Hosting</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="Close PDF viewer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* PDF Content */}
        <div className="relative h-full overflow-hidden">
          {/* PDF Embed with fallback */}
          <div className="h-full">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&page=1`}
              className="w-full h-full border-0"
              title="Sample Guide PDF"
              style={{ minHeight: '600px' }}
              onError={() => {
                console.log('PDF iframe failed to load');
              }}
            />
          </div>
          
          {/* Fallback content if PDF doesn't load */}
          <div className="absolute inset-0 bg-white flex items-center justify-center" style={{ display: 'none' }} id="pdf-fallback">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">PDF Preview</h4>
              <p className="text-neutral-600 text-sm mb-4">
                The Complete UK Guide to Airbnb Hosting<br/>
                <strong>120+ pages</strong> of comprehensive strategies and templates
              </p>
              <div className="space-y-3 text-sm text-neutral-700 text-left max-w-md mx-auto">
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
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                  Compliance basics: safety, licensing, insurance
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                  Tax overview and record-keeping essentials
                </div>
              </div>
            </div>
          </div>
          
          {/* Overlay with CTA */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-neutral-600 text-sm mb-4">
                <strong>Preview: First 10 pages of the complete guide</strong><br/>
                The full guide contains 120+ pages with detailed strategies, templates, and actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button 
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-4 py-2 transition-colors"
                >
                  Get Full Guide — £29
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
                <a 
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-2 transition-colors"
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
                  className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-2 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
