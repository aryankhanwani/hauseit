import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Guide from './Guide';
import WhyHauseit from './WhyHauseit';
import Author from './Author';
import FAQs from './FAQs';
import Trust from './Trust';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import OfferBar from './OfferBar';

function Home() {
  useEffect(() => {
    // Initialize Google Tag Manager only on Home page
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5J7RGGNL';
    document.head.appendChild(script);

    // Add noscript iframe to body
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-5J7RGGNL';
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.appendChild(noscript);

    return () => {
      // Cleanup: remove script and noscript when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (noscript.parentNode) {
        noscript.parentNode.removeChild(noscript);
      }
    };
  }, []);

  return (
    <>
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
    </>
  );
}

export default Home;

