import React, { useState } from 'react';

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-frosted glass-card-hover rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/20 rounded-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/10 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/15 rounded-2xl"></div>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left relative z-10">
        <div className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100 font-geist">{q}</div>
        <svg className={`w-5 h-5 text-neutral-700 dark:text-neutral-300 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 9 6 6 6-6"></path></svg>
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-5 -mt-2 text-sm text-neutral-700 dark:text-neutral-300 font-geist relative z-10">{a}</div>
      )}
    </div>
  );
};

const FAQs = () => {
  return (
    <section id="faqs" className="max-w-7xl sm:px-6 mx-auto px-4 py-8 sm:py-12">
      <div className="relative overflow-hidden rounded-[32px] glass-ultra glass-glow p-6 sm:p-10">
        {/* Ultra Enhanced Glass Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/25 to-white/10 dark:from-neutral-900/70 dark:via-neutral-900/50 dark:to-neutral-900/25"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-white/40 via-transparent to-white/15 dark:from-neutral-800/60 dark:via-transparent dark:to-neutral-800/35"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/20 dark:from-neutral-700/50 dark:via-neutral-700/25 dark:to-neutral-700/30"></div>
        
        {/* Large Floating Glass Orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-green-200/40 to-transparent dark:from-green-800/35 dark:to-transparent rounded-full blur-3xl opacity-60 dark:opacity-40"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-tl from-teal-200/35 to-transparent dark:from-teal-700/30 dark:to-transparent rounded-full blur-2xl opacity-50 dark:opacity-35"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-white/15 to-transparent dark:from-neutral-600/25 dark:to-transparent rounded-full blur-3xl opacity-40 dark:opacity-25"></div>
        <div className="mb-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-neutral-950 dark:text-neutral-100 font-garamond">Frequently Asked Questions</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 relative z-10">
          <FAQItem q="What exactly do I get when I buy the guide?" a={<span>You'll get instant access to The Complete UK Guide to Airbnb Hosting (PDF) plus six bonus templates — including the Compliance Checklist, Furnishing & Styling Shopping List, Listing & Guest Message Templates, Guest Experience Blueprint, and an Income & Expense Tracker (Excel). Everything is downloadable right after purchase.</span>} />
          <FAQItem q="Is this guide suitable for beginners?" a={<span>Absolutely. The guide is written in plain English and takes you step-by-step through the full Airbnb hosting process — from setup and styling to guest management and profit tracking. Even experienced landlords will discover new tools and tips to improve their results.</span>} />
          <FAQItem q="Is it only for UK hosts?" a={<span>The guide is designed for UK-based property owners and landlords, covering local compliance, certificates, and rules. That said, the templates and strategies can also help international hosts who want to adopt UK-standard best practices.</span>} />
          <FAQItem q="How will I receive my guide after payment?" a={<span>Once your £10 payment is confirmed, you'll be redirected to a secure download page and receive an email with your files. You can save them on your device and re-download anytime — instant access, no waiting.</span>} />
          <FAQItem q="Can I get a refund if I'm not happy with it?" a={<span>Yes — we offer a 7-day satisfaction guarantee. If you're not completely happy, just email us within 7 days of purchase and we'll refund you in full. No fuss, no forms.</span>} />
          <FAQItem q="Will I get future updates?" a={<span>Yes. When we update the guide or templates to include new Airbnb rules or legislation changes, you'll get free lifetime updates automatically.</span>} />
        </div>
      </div>
    </section>
  );
};

export default FAQs;


