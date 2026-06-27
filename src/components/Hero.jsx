'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDownRight, Zap, Code, Utensils, Brush, Cake, Brain } from 'lucide-react';
import heroImage from './logo.jpg'; // local image in same folder

export default function Hero() {
  const scrollTosection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-36 pb-24 flex items-center overflow-hidden gradient-bg"
      style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', position: 'relative' }}
    >
      {/* Sophisticated radial grid overlays */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          zIndex: -1
        }}
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center" style={{ maxWidth: '1100px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '64px', alignItems: 'center' }}>
        
        {/* Left Side: Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left" style={{ gridColumn: 'span 7 / span 7' }}>
          
          {/* Welcome Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/50 mb-6 text-xs font-bold tracking-wider text-zinc-800"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '9999px',
              backgroundColor: '#f4f4f5',
              border: '1px solid #e4e4e7',
              marginBottom: '24px',
              fontSize: '0.65rem',
              fontWeight: 800,
              letterSpacing: '0.05em',
              color: '#09090b',
              textTransform: 'uppercase'
            }}
          >
            <Sparkles size={12} className="text-indigo-600" />
            <span>Digital Design & Development Studio</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '24px',
              color: '#09090b'
            }}
          >
            Crafting <span className="gradient-text">the Future</span> Digitally.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-zinc-500 mb-10 max-w-xl font-medium leading-relaxed"
            style={{
              fontSize: '1rem',
              color: 'var(--foreground-muted)',
              lineHeight: 1.6,
              marginBottom: '40px',
              maxWidth: '520px',
              fontWeight: 500
            }}
          >
            We create websites, digital solutions, and creative experiences that help businesses stand out and grow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}
          >
            <button
              onClick={() => scrollTosection('contact')}
              suppressHydrationWarning
              className="px-6 py-3.5 rounded-full text-xs font-bold tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
              style={{
                padding: '12px 24px',
                borderRadius: '9999px',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                color: 'white',
                backgroundColor: '#09090b',
                boxShadow: 'var(--shadow-sm)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              Start Collaboration
              <Zap size={14} />
            </button>
            
            <button
              onClick={() => scrollTosection('restaurant')}
              suppressHydrationWarning
              className="px-6 py-3.5 rounded-full text-xs font-bold tracking-wider text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
              style={{
                padding: '12px 24px',
                borderRadius: '9999px',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.05em',
                color: '#27272a',
                backgroundColor: 'white',
                border: '1px solid #e4e4e7',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.3s',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              Explore Showcase
              <ArrowDownRight size={14} />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Image + Draggable Tags */}
        <div 
          className="lg:col-span-5 relative h-[450px] flex items-center justify-center" 
          style={{ gridColumn: 'span 5 / span 5', height: '450px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Main Visual: Clean card with image */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className="w-72 h-72 rounded-[32px] bg-white border border-zinc-200 shadow-md flex flex-col items-center justify-center p-6 relative overflow-hidden"
            style={{
              width: '280px',
              height: '280px',
              borderRadius: '32px',
              backgroundColor: '#ffffff',
              border: '1px solid #e4e4e7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div 
              className="absolute inset-0 opacity-[0.05]"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '16px 16px',
                zIndex: -1
              }}
            />
            <Image
              src={heroImage}
              alt="Airavatha Logo"
              width={160}
              height={160}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </motion.div>

          {/* Draggable Tag 1: Web Dev (top-left) */}
          <motion.div
            drag
            dragConstraints={{ top: -80, bottom: 200, left: -150, right: 150 }}
            whileDrag={{ scale: 1.05, zIndex: 40 }}
            whileHover={{ scale: 1.02 }}
            initial={{ x: -90, y: -90, opacity: 0 }}
            animate={{ x: -100, y: -100, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.4 }}
            className="absolute px-4 py-2.5 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center gap-2 cursor-grab active:cursor-grabbing"
            style={{
              position: 'absolute',
              padding: '10px 16px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'grab',
              userSelect: 'none',
              backgroundColor: 'white',
              border: '1px solid #e4e4e7',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Code size={14} className="text-zinc-900" />
            <span className="text-[10px] font-extrabold text-zinc-800 tracking-wider" style={{ fontSize: '10px', fontWeight: 800, color: '#09090b' }}>WEB_DEV</span>
          </motion.div>

          {/* Draggable Tag 2: Restaurants (top-right) */}
          <motion.div
            drag
            dragConstraints={{ top: -80, bottom: 200, left: -150, right: 150 }}
            whileDrag={{ scale: 1.05, zIndex: 40 }}
            whileHover={{ scale: 1.02 }}
            initial={{ x: 100, y: -70, opacity: 0 }}
            animate={{ x: 90, y: -80, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.5 }}
            className="absolute px-4 py-2.5 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center gap-2 cursor-grab active:cursor-grabbing"
            style={{
              position: 'absolute',
              padding: '10px 16px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'grab',
              userSelect: 'none',
              backgroundColor: 'white',
              border: '1px solid #e4e4e7',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Utensils size={14} className="text-zinc-900" />
            <span className="text-[10px] font-extrabold text-zinc-800 tracking-wider" style={{ fontSize: '10px', fontWeight: 800, color: '#09090b' }}>RESTAURANTS</span>
          </motion.div>

          {/* Draggable Tag 3: Posters (bottom-left) */}
          <motion.div
            drag
            dragConstraints={{ top: -80, bottom: 200, left: -150, right: 150 }}
            whileDrag={{ scale: 1.05, zIndex: 40 }}
            whileHover={{ scale: 1.02 }}
            initial={{ x: -100, y: 90, opacity: 0 }}
            animate={{ x: -90, y: 80, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.6 }}
            className="absolute px-4 py-2.5 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center gap-2 cursor-grab active:cursor-grabbing"
            style={{
              position: 'absolute',
              padding: '10px 16px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'grab',
              userSelect: 'none',
              backgroundColor: 'white',
              border: '1px solid #e4e4e7',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Brush size={14} className="text-zinc-900" />
            <span className="text-[10px] font-extrabold text-zinc-800 tracking-wider" style={{ fontSize: '10px', fontWeight: 800, color: '#09090b' }}>POSTERS</span>
          </motion.div>

          {/* Draggable Tag 4: Bakery (bottom-right) */}
          <motion.div
            drag
            dragConstraints={{ top: -80, bottom: 200, left: -150, right: 150 }}
            whileDrag={{ scale: 1.05, zIndex: 40 }}
            whileHover={{ scale: 1.02 }}
            initial={{ x: 100, y: 90, opacity: 0 }}
            animate={{ x: 90, y: 80, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.7 }}
            className="absolute px-4 py-2.5 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center gap-2 cursor-grab active:cursor-grabbing"
            style={{
              position: 'absolute',
              padding: '10px 16px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'grab',
              userSelect: 'none',
              backgroundColor: 'white',
              border: '1px solid #e4e4e7',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Cake size={14} className="text-zinc-900" />
            <span className="text-[10px] font-extrabold text-zinc-800 tracking-wider" style={{ fontSize: '10px', fontWeight: 800, color: '#09090b' }}>BAKERY_SUITE</span>
          </motion.div>

          
            
          
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          div[style*="gridColumn: span 7"] {
            grid-column: span 12 / span 12 !important;
            align-items: center !important;
            text-align: center !important;
          }
          div[style*="gridColumn: span 5"] {
            grid-column: span 12 / span 12 !important;
            height: 380px !important;
          }
          p[style*="maxWidth"] {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          div[style*="flexWrap: wrap"] {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}