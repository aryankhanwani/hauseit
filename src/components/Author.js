import React, { useState, useEffect } from 'react';

const Author = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: '/imran.jpg', alt: 'Imran Bashir - Professional Headshot' },
    { src: '/imran1.png', alt: 'Imran Bashir - Property Expert' },
    { src: '/imran2.jpg', alt: 'Imran Bashir - Real Estate Professional' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="author" className="max-w-7xl sm:px-6 mx-auto px-4 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-[32px] glass-ultra glass-glow p-6 sm:p-10">
        {/* Ultra Enhanced Glass Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/25 to-white/10 dark:from-neutral-900/70 dark:via-neutral-900/50 dark:to-neutral-900/25"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-white/40 via-transparent to-white/15 dark:from-neutral-800/60 dark:via-transparent dark:to-neutral-800/35"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/20 dark:from-neutral-700/50 dark:via-neutral-700/25 dark:to-neutral-700/30"></div>
        
        {/* Large Floating Glass Orbs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-amber-200/40 to-transparent dark:from-amber-800/35 dark:to-transparent rounded-full blur-3xl opacity-60 dark:opacity-40"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tl from-orange-200/35 to-transparent dark:from-orange-700/30 dark:to-transparent rounded-full blur-2xl opacity-50 dark:opacity-35"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-r from-white/15 to-transparent dark:from-neutral-600/25 dark:to-transparent rounded-full blur-3xl opacity-40 dark:opacity-25"></div>
        <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl glass-frosted glass-glow h-96 lg:h-[32rem] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-2xl"></div>
              
              {/* Image Carousel */}
              <div className="relative w-full h-full overflow-hidden">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white dark:bg-neutral-100 scale-125'
                        : 'bg-white/50 dark:bg-neutral-100/50 hover:bg-white/75 dark:hover:bg-neutral-100/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-neutral-950 dark:text-neutral-100 font-garamond">About the Author</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg font-geist">
              Written by Imran Bashir, property investor and Property Marketer at Hauseit. Drawing on 15+ years in lettings, sales, and property marketing, Imran created this guide to help UK landlords succeed on Airbnb without costly trial and error.
            </p>
            
            <div className="mt-6">
              <div className="glass-frosted glass-card-hover rounded-xl p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 font-geist mb-2">Professional Background</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 font-geist">
                    Imran has successfully managed over 500+ property transactions and helped hundreds of landlords maximize their rental yields across London and the UK.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-neutral-50/60 dark:bg-neutral-800/30 glass-frosted rounded-full px-3 py-1.5 text-neutral-800 dark:text-neutral-200 font-geist">15+ years experience</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-neutral-50/60 dark:bg-neutral-800/30 glass-frosted rounded-full px-3 py-1.5 text-neutral-800 dark:text-neutral-200 font-geist">500+ transactions</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-neutral-50/60 dark:bg-neutral-800/30 glass-frosted rounded-full px-3 py-1.5 text-neutral-800 dark:text-neutral-200 font-geist">Property marketing expert</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-neutral-50/60 dark:bg-neutral-800/30 glass-frosted rounded-full px-3 py-1.5 text-neutral-800 dark:text-neutral-200 font-geist">Airbnb specialist</span>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 font-geist mb-3">Connect with Imran</h3>
              <div className="flex gap-3 flex-wrap">
                <a 
                  href="https://www.instagram.com/hauseit.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button inline-flex items-center gap-2 rounded-full text-sm font-medium px-4 py-2 transition relative overflow-hidden group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="relative z-10">Instagram</span>
                </a>
                <a 
                  href="https://x.com/hauseit_now" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button inline-flex items-center gap-2 rounded-full text-sm font-medium px-4 py-2 transition relative overflow-hidden group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <span className="relative z-10">Twitter</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/imran-bashir-003570318/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button inline-flex items-center gap-2 rounded-full text-sm font-medium px-4 py-2 transition relative overflow-hidden group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="relative z-10">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;


