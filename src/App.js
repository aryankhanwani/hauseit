import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Guide from './components/Guide';
import WhyHauseit from './components/WhyHauseit';
import Trust from './components/Trust';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-neutral-900 bg-neutral-50" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji'}}>
      {/* Background layers */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#0000000f_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:120px_1px,1px_120px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <Header />
      <Hero />
      <Guide />
      <WhyHauseit />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

