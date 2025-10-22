import { useEffect, useState } from 'react';

export default function useOfferCountdown() {
  const [timeLeft, setTimeLeft] = useState({ 
    hours: 0, 
    minutes: 0, 
    seconds: 0, 
    remainingMs: 0, 
    percentRemaining: 100 
  });

  useEffect(() => {
    // Hardcoded end date: January 23, 2025 at 23:59:59
    const endDate = new Date('2026-01-23T23:59:59').getTime();
    const startDate = new Date('2025-10-23T00:00:00').getTime();
    const totalDuration = endDate - startDate;

    const tick = () => {
      const now = Date.now();
      const remaining = Math.max(0, endDate - now);
      
      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      const percentRemaining = Math.max(0, Math.min(100, Math.round((remaining / totalDuration) * 100)));

      setTimeLeft({ 
        hours, 
        minutes, 
        seconds, 
        remainingMs: remaining, 
        percentRemaining 
      });
    };

    const interval = setInterval(tick, 1000);
    tick();
    
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}