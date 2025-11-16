import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const ThankYou = () => {
  useEffect(() => {
    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    window.gtag('js', new Date());

    // Load Google tag (gtag.js)
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17102791111';
    
    // Wait for script to load before sending conversion event
    script.onload = () => {
      // Event snippet for Purchase conversion page
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17102791111/dZFdCIvEjsEbEMfDn9s_',
          'value': 1.0,
          'currency': 'GBP',
          'transaction_id': ''
        });
      }
    };
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="antialiased text-neutral-900 dark:text-neutral-100 min-h-screen" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji'}}>
      {/* Ultra Enhanced Glass UI Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base Image with Enhanced Visibility */}
        <div className="absolute inset-0 bg-[url('/image-1.jpg')] bg-cover bg-center opacity-100 dark:opacity-100"></div>
        
        {/* Multiple Glass Overlay Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-white/20 dark:from-neutral-950/60 dark:via-neutral-950/50 dark:to-neutral-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-white/35 via-transparent to-white/25 dark:from-neutral-950/50 dark:via-transparent dark:to-neutral-950/35"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/15 to-white/25 dark:from-neutral-950/45 dark:via-neutral-950/25 dark:to-neutral-950/35"></div>
        
        {/* Enhanced Pattern Overlays */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] [background-size:24px_24px]"></div>
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,255,255,0.2)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(255,255,255,0.2)_75%),linear-gradient(-45deg,transparent_75%,rgba(255,255,255,0.2)_75%)] [background-size:12px_12px]"></div>
        
        {/* Large Floating Glass Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-white/40 to-transparent dark:from-neutral-800/50 dark:to-transparent rounded-full blur-3xl opacity-70 dark:opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-white/35 to-transparent dark:from-neutral-700/45 dark:to-transparent rounded-full blur-3xl opacity-60 dark:opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-white/30 to-transparent dark:from-neutral-600/35 dark:to-transparent rounded-full blur-2xl opacity-50 dark:opacity-30"></div>
        <div className="absolute top-1/3 left-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-white/25 to-transparent dark:from-neutral-700/30 dark:to-transparent rounded-full blur-3xl opacity-45 dark:opacity-25"></div>
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/25 to-white/35 dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:from-transparent dark:via-neutral-950/25 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-transparent dark:from-transparent dark:via-neutral-950/20 dark:to-transparent"></div>
        
        {/* Glass Refraction Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent dark:from-transparent dark:via-neutral-950/15 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/8 to-transparent dark:from-transparent dark:via-neutral-950/12 dark:to-transparent"></div>
      </div>

      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="relative overflow-hidden glass-ultra glass-glow rounded-[40px] p-8 sm:p-12 lg:p-16">
          {/* Ultra Enhanced Glass Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/15 dark:from-neutral-900/70 dark:via-neutral-900/50 dark:to-neutral-900/25"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white/40 via-transparent to-white/20 dark:from-neutral-800/60 dark:via-transparent dark:to-neutral-800/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/25 dark:from-neutral-700/50 dark:via-neutral-700/25 dark:to-neutral-700/35"></div>
          </div>
          
          {/* Large Floating Glass Orbs */}
          <div className="absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br from-white/50 to-transparent dark:from-neutral-800/60 dark:to-transparent rounded-full blur-3xl opacity-80 dark:opacity-60"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tl from-white/40 to-transparent dark:from-neutral-700/50 dark:to-transparent rounded-full blur-2xl opacity-70 dark:opacity-50"></div>
          
          <div className="relative z-10 text-center">
            {/* Success Icon */}
            <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 sm:mb-8">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-emerald-600 dark:text-emerald-400"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-950 dark:text-neutral-100 tracking-tight font-garamond mb-4 sm:mb-6">
              Thank You!
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-geist mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Your purchase has been confirmed. We're excited to help you turn your property into a profitable Airbnb!
            </p>
            
            <div className="bg-emerald-50/60 dark:bg-emerald-900/30 glass-frosted rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-medium text-neutral-950 dark:text-neutral-100 mb-4 font-garamond">
                What's Next?
              </h2>
              <ul className="text-left space-y-3 text-neutral-700 dark:text-neutral-300 font-geist">
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-emerald-600 dark:text-emerald-400 mr-3 mt-0.5 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Check your email for your complete UK Guide to Airbnb Hosting</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-emerald-600 dark:text-emerald-400 mr-3 mt-0.5 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Review the checklists, templates, and insider tips</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-emerald-600 dark:text-emerald-400 mr-3 mt-0.5 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Start implementing your compliant, five-star short-let strategy</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="https://hauseit.co.uk/airbnb" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 rounded-full font-medium font-geist hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors text-base sm:text-lg"
            >
              Return to Home
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;

