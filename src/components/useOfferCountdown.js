import { useEffect, useState } from 'react';

export default function useOfferCountdown(storageKey = 'offerCountdownEnd', durationMs = 24 * 60 * 60 * 1000) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0, remainingMs: durationMs, percentRemaining: 100 });

  useEffect(() => {
    const now = Date.now();
    let end = parseInt(localStorage.getItem(storageKey) || '0', 10);
    if (!end || end < now) {
      end = now + durationMs;
      localStorage.setItem(storageKey, String(end));
    }

    const tick = () => {
      const remaining = Math.max(0, end - Date.now());
      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      const percentRemaining = Math.max(0, Math.min(100, Math.round((remaining / durationMs) * 100)));
      // Override to show 75% for demo purposes
      const displayPercent = 75;
      setTimeLeft({ hours, minutes, seconds, remainingMs: remaining, percentRemaining: displayPercent });
      if (remaining === 0) {
        const newEnd = Date.now() + durationMs;
        localStorage.setItem(storageKey, String(newEnd));
      }
    };

    const interval = setInterval(tick, 1000);
    tick();
    return () => clearInterval(interval);
  }, [storageKey, durationMs]);

  return timeLeft;
}


