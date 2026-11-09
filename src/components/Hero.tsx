import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';
import { trackContactCtaClick, trackServiceView } from '../utils/analytics';

interface HeroProps {
  onExploreServices: () => void;
  onLetsTalk: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onLetsTalk }) => {
  const prefersReducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // High-performance cinematic canvas stream (digital data mesh with subtle violet nodes)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Generate discrete digital nodes
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 1,
      baseAlpha: Math.random() * 0.4 + 0.2,
      isViolet: Math.random() > 0.65,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective data webs
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nodes[i].isViolet || nodes[j].isViolet
              ? `rgba(139, 92, 246, ${alpha * 1.5})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        else if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        else if (node.y > height) node.y = 0;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isViolet
          ? `rgba(167, 139, 250, ${node.baseAlpha})`
          : `rgba(255, 255, 255, ${node.baseAlpha})`;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-24 pb-16"
    >
      {/* Background Layer: Optional User Video with graceful Canvas Fallback */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* HTML5 Loop Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-35' : 'opacity-0'
          }`}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Ambient Generative Data Mesh Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Measured Contrast Scrim (ensures AA contrast across all video/canvas states) */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/85 via-neutral-950/60 to-neutral-950" />
        
        {/* Subtle radial illumination in soft violet */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-violet-900/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Official Brand Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="p-2 sm:p-2.5 bg-white rounded-2xl shadow-2xl border border-white/20 inline-block">
            <img
              src={COMPANY_CONFIG.logoUrl}
              alt="TELAN TECH Official Logo"
              className="h-16 sm:h-20 w-auto object-contain rounded-xl"
            />
          </div>
        </motion.div>

        {/* Brand Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet-400">
            {COMPANY_CONFIG.name}
          </span>
          <span className="text-neutral-600">·</span>
          <span className="text-xs sm:text-sm text-neutral-400 font-medium">
            Digital Solutions & Analytics
          </span>
        </motion.div>

        {/* Main Tagline & Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl text-balance"
        >
          Think Digital.{' '}
          <span className="bg-gradient-to-r from-white via-neutral-100 to-violet-300 bg-clip-text text-transparent">
            Grow Smarter.
          </span>
        </motion.h1>

        {/* Supporting Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed mb-10 text-balance"
        >
          We help businesses make smarter decisions, reach the right audience and grow through digital marketing, data and business solutions.
        </motion.p>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => {
              trackServiceView('hero_primary', 'Explore Our Services');
              onExploreServices();
            }}
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-lg transition-all duration-200 shadow-md active:scale-[0.98] whitespace-nowrap"
          >
            Explore Our Services
          </button>
          
          <button
            onClick={() => {
              trackContactCtaClick('hero_secondary');
              onLetsTalk();
            }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
          </button>
        </motion.div>

        {/* Positioning Indicators (Unboxed typography with separators) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-400"
        >
          <span>Digital Marketing</span>
          <span className="text-neutral-700" aria-hidden="true">·</span>
          <span>Data Analytics</span>
          <span className="text-neutral-700" aria-hidden="true">·</span>
          <span>Lead Generation</span>
          <span className="text-neutral-700" aria-hidden="true">·</span>
          <span>CRM Management</span>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        onClick={onExploreServices}
      >
        <span className="text-[11px] font-medium tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
