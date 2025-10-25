import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5); // Start with 50% volume
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Hardcoded end date: January 23, 2025 at 23:59:59
    const endDate = new Date('2065-01-23T23:59:59').getTime();

    const tick = () => {
      const now = Date.now();
      const remaining = Math.max(0, endDate - now);
      
      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    };

    const interval = setInterval(tick, 1000);
    tick();
    
    return () => clearInterval(interval);
  }, []);

  // Format time in MM:SS format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!videoRef.current.paused);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = false; // Unmute when volume is adjusted
      setVolume(newVolume);
      setIsMuted(false);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      // Toggle mute state
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      
      // If unmuting and volume was 0, set to default volume
      if (!isMuted && volume === 0) {
        videoRef.current.volume = 0.5;
        setVolume(0.5);
      }
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      // Single touch - show controls
      const controls = e.currentTarget.querySelector('.video-controls');
      if (controls) {
        controls.classList.add('show-controls');
        // Hide after 3 seconds of inactivity
        clearTimeout(window.controlsTimeout);
        window.controlsTimeout = setTimeout(() => {
          controls.classList.remove('show-controls');
        }, 3000);
      }
    }
  };

  // Handle time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Handle progress bar interaction
  const [isSeeking, setIsSeeking] = useState(false);
  const progressBarRef = useRef(null);

  const handleProgressBarMouseDown = () => {
    setIsSeeking(true);
  };

  const handleProgressBarMouseUp = (e) => {
    if (videoRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
    setIsSeeking(false);
  };

  const handleProgressBarMouseMove = (e) => {
    if (isSeeking && videoRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      let pos = (e.clientX - rect.left) / rect.width;
      pos = Math.max(0, Math.min(1, pos)); // Clamp between 0 and 1
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  // Handle touch events for progress bar
  const handleProgressBarTouchStart = (e) => {
    setIsSeeking(true);
    handleProgressBarTouchMove(e);
  };

  const handleProgressBarTouchMove = (e) => {
    if (videoRef.current && progressBarRef.current) {
      const touch = e.touches[0];
      const rect = progressBarRef.current.getBoundingClientRect();
      let pos = (touch.clientX - rect.left) / rect.width;
      pos = Math.max(0, Math.min(1, pos)); // Clamp between 0 and 1
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const handleProgressBarTouchEnd = () => {
    setIsSeeking(false);
  };

  // Toggle fullscreen with cross-browser support and mobile handling
  const toggleFullscreen = () => {
    const elem = videoRef.current;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // For mobile, we need to handle fullscreen differently
    if (isMobile) {
      if (videoRef.current.webkitEnterFullscreen) {
        // iOS Safari
        videoRef.current.webkitEnterFullscreen();
      } else if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
      
      // On mobile, unmute when entering fullscreen
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    } else {
      // Desktop fullscreen handling
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  };

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  // Handle loaded metadata and attempt autoplay
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      
      // Check if mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // On mobile, start muted by default to ensure autoplay works
        videoRef.current.volume = 0.5;
        videoRef.current.muted = true;
        setIsMuted(true);
        
        // Show a play button overlay that the user needs to tap to start
        setIsPlaying(false);
      } else {
        // On desktop, try to play with sound
        videoRef.current.volume = 0.5;
        videoRef.current.muted = false;
        setIsMuted(false);
        
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(error => {
              console.log('Autoplay with sound failed, trying muted...');
              videoRef.current.muted = true;
              setIsMuted(true);
              return videoRef.current.play();
            })
            .then(() => setIsPlaying(true))
            .catch(e => console.log('Autoplay failed:', e));
        }
      }
    }
  };

  return (
    <section id="about" className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
      <div className="relative sm:mt-12 overflow-hidden glass-ultra glass-glow rounded-[40px]">
        {/* Ultra Enhanced Glass Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/15 dark:from-neutral-900/70 dark:via-neutral-900/50 dark:to-neutral-900/25"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-white/40 via-transparent to-white/20 dark:from-neutral-800/60 dark:via-transparent dark:to-neutral-800/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/15 to-white/25 dark:from-neutral-700/50 dark:via-neutral-700/25 dark:to-neutral-700/35"></div>
        </div>
        
        {/* Large Floating Glass Orbs */}
        <div className="absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br from-white/50 to-transparent dark:from-neutral-800/60 dark:to-transparent rounded-full blur-3xl opacity-80 dark:opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tl from-white/40 to-transparent dark:from-neutral-700/50 dark:to-transparent rounded-full blur-2xl opacity-70 dark:opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-white/20 to-transparent dark:from-neutral-600/30 dark:to-transparent rounded-full blur-3xl opacity-60 dark:opacity-40"></div>

        <div className="relative p-4 sm:p-6 lg:p-8 z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-12">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50/60 dark:text-emerald-300 dark:bg-emerald-900/30 glass-frosted rounded-full px-3 py-1.5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/70 to-transparent dark:from-emerald-900/50 dark:to-transparent"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="pound-sterling" className="w-3.5 h-3.5 stroke-[1.5] relative z-10"><path d="M18 7c0-3-2.239-5-5-5s-5 2-5 5c0 4 3 6 3 9"></path><path d="M7 15h8"></path><path d="M7 21h10"></path></svg>
                <span className="font-geist relative z-10">Launch Offer - <strong className='font-bold text-md'>£10</strong> (was £29)</span>
              </div>
              <h1 className="text-[8.8vw] sm:text-[7.4vw] md:text-[6vw] lg:text-[4.6vw] leading-[0.95] font-medium text-neutral-950 dark:text-neutral-100 tracking-tighter font-garamond mt-4">
                Turn Your Property Into a Profitable Airbnb – For Just £10
              </h1>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 font-geist max-w-3xl">
                The Complete UK Guide to Airbnb Hosting gives you every checklist, template, and insider tip you need to launch a compliant, five‑star short‑let in the UK.
              </p>
            </div>
          </div>

          <div className="mt-8 relative rounded-2xl overflow-hidden glass-frosted glass-glow">
            {/* Enhanced Video Container Glass Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-neutral-800/50 dark:via-transparent dark:to-neutral-800/30 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white/30 via-transparent to-white/15 dark:from-neutral-700/40 dark:via-transparent dark:to-neutral-700/25 rounded-2xl"></div>
            
            <div 
              className="w-full h-[52vh] sm:h-[60vh] relative group"
              onTouchStart={handleTouchStart}
            >
              {/* Top Right Mute Button */}
              <button 
                onClick={toggleMute}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                aria-label={isMuted || volume === 0 ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="2" y1="2" x2="22" y2="22"></line>
                    <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12c0-3.88-3.58-7-8-7a8.22 8.22 0 0 0-2.9.52"></path>
                    <path d="M6 10H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1"></path>
                    <path d="M11 15a4 4 0 0 1-4-4v-1c0-1.1.9-2 2-2"></path>
                    <path d="M15 8.65V6a4 4 0 0 1 2.08-3.5"></path>
                    <path d="M23 9l-6 6"></path>
                    <path d="M17 9l6 6"></path>
                  </svg>
                ) : volume < 0.5 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                  </svg>
                )}
              </button>

              <video
                ref={videoRef}
                className="w-full h-full rounded-2xl object-cover"
                title="Guide intro video"
                loop
                autoPlay
                playsInline
                muted={isMuted}
                preload="auto"
                poster=""
                onClick={(e) => {
                  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    // On mobile, toggle fullscreen when video is clicked
                    toggleFullscreen();
                  } else {
                    togglePlayPause();
                  }
                }}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                onLoadedMetadata={handleLoadedMetadata}
                webkit-playsinline="true"
                x5-playsinline="true"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-ignore-metadata=""
                x5-video-orientation="portrait"
              >
                <source src="/imran-video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Video Controls */}
              <div 
                className="video-controls absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Progress Bar */}
                <div 
                  ref={progressBarRef}
                  className="relative w-full h-2 sm:h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer"
                  onMouseDown={handleProgressBarMouseDown}
                  onMouseMove={isSeeking ? handleProgressBarMouseMove : null}
                  onMouseUp={handleProgressBarMouseUp}
                  onMouseLeave={() => setIsSeeking(false)}
                  onTouchStart={handleProgressBarTouchStart}
                  onTouchMove={handleProgressBarTouchMove}
                  onTouchEnd={handleProgressBarTouchEnd}
                >
                  <div 
                    className="absolute left-0 top-0 h-full bg-emerald-400 transition-all duration-200 ease-out"
                    style={{ 
                      width: `${(currentTime / duration) * 100 || 0}%`,
                      backgroundColor: isSeeking ? '#10b981' : '#34d399' // Slightly lighter green when seeking
                    }}
                  >
                    <div className="absolute right-0 top-1/2 w-3 h-3 -mt-1.5 -mr-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center space-x-4">
                    {/* Play/Pause Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // On mobile, ensure we unmute when play is pressed
                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                          if (isMuted) {
                            videoRef.current.muted = false;
                            setIsMuted(false);
                          }
                        }
                        togglePlayPause();
                      }}
                      className="text-white hover:text-emerald-400 transition-colors"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="w-5 h-5"
                      >
                        {isPlaying ? (
                          <>
                            <rect x="6" y="4" width="4" height="16"/>
                            <rect x="14" y="4" width="4" height="16"/>
                          </>
                        ) : (
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        )}
                      </svg>
                    </button>
                    
                    {/* Time */}
                    <div className="text-xs text-white/80 font-mono">
                      <span>{formatTime(currentTime)}</span>
                      <span className="mx-1">/</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {/* Volume Control - Always show on mobile */}
                    <div className="items-center space-x-1 flex">
                      <button 
                        onClick={toggleMute}
                        className="text-white hover:text-emerald-400 transition-colors" 
                        aria-label={isMuted || volume === 0 ? 'Unmute' : 'Mute'}
                      >
                        {isMuted || volume === 0 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="2" y1="2" x2="22" y2="22"></line>
                            <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12c0-3.88-3.58-7-8-7a8.22 8.22 0 0 0-2.9.52"></path>
                            <path d="M6 10H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1"></path>
                            <path d="M11 15a4 4 0 0 1-4-4v-1c0-1.1.9-2 2-2"></path>
                            <path d="M15 8.65V6a4 4 0 0 1 2.08-3.5"></path>
                            <path d="M23 9l-6 6"></path>
                            <path d="M17 9l6 6"></path>
                          </svg>
                        ) : volume < 0.5 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                          </svg>
                        )}
                      </button>
                      <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.01" 
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-20 accent-emerald-400"
                        aria-label="Volume"
                      />
                    </div>
                    
                    {/* Fullscreen Button */}
                    <button 
                      onClick={toggleFullscreen}
                      className="text-white hover:text-emerald-400 transition-colors" 
                      aria-label="Fullscreen"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Play Button Overlay - Always visible on mobile when paused */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    // On mobile, unmute when user explicitly presses play
                    if (isMuted) {
                      videoRef.current.muted = false;
                      setIsMuted(false);
                    }
                    togglePlayPause();
                  }}
                >
                  <div className="p-3 sm:p-4 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;