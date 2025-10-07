import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Guide from './components/Guide';
import WhyHauseit from './components/WhyHauseit';
import Author from './components/Author';
import FAQs from './components/FAQs';
import Trust from './components/Trust';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import OfferBar from './components/OfferBar';

function App() {
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
      <Hero />
      <Guide />
      <WhyHauseit />
      <Author />
      <FAQs />
      <Trust />
      <FinalCTA />
      <Footer />
      <OfferBar />
    </div>
  );
}

export default App;

