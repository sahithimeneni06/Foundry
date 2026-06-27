'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PartyPopper, Briefcase, Calendar, ShoppingCart } from 'lucide-react';

const posterCategories = [
  {
  id: 'birthdays',
  title: 'Birthday Designs',
  tagline: 'Celebrate every moment beautifully.',
  features: [
    'Custom birthday invitations',
    'Social media celebration posts',
    'Personalized photo designs'
  ],
  icon: PartyPopper,
  image: '/birthday.png',
},
{
  id: 'business',
  title: 'Business Promotions',
  tagline: 'Promote your business with confidence.',
  features: [
    'Sale & offer posters',
    'Grand opening promotions',
    'Recruitment & hiring posters'
  ],
  icon: Briefcase,
  image: '/promotion.png',
},
{
  id: 'events',
  title: 'Events & Parties',
  tagline: 'Create excitement before the event begins.',
  features: [
    'Concert & DJ night posters',
    'College & cultural event designs',
    'Party & festival promotions'
  ],
  icon: Calendar,
  image: '/event.png',
},
{
  id: 'products',
  title: 'Product Promotions',
  tagline: 'Showcase your products beautifully.',
  features: [
    'Product launch posters',
    'Offer & discount designs',
    'Social media product ads'
  ],
  icon: ShoppingCart,
  image: '/product.png',
},
];

export default function PosterMaking() {
  return (
    <section
      id="posters"
      className="py-32 bg-white"
      style={{ backgroundColor: 'white', padding: '128px 0', borderBottom: '1px solid #e4e4e7' }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: '1100px' }}>
        {/* Section Header – unchanged */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px', alignItems: 'center', marginBottom: '80px' }}
        >
          <div className="lg:col-span-6 text-left" style={{ gridColumn: 'span 6 / span 6' }}>
            <span
              className="text-xs uppercase font-extrabold tracking-widest text-zinc-400 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/50"
              style={{ fontSize: '0.65rem', fontWeight: 800, color: '#71717a', backgroundColor: '#f4f4f5', padding: '6px 12px', borderRadius: '9999px', letterSpacing: '0.1em' }}
            >
              Creative Design
            </span>
            <h3
              className="text-4xl md:text-5xl font-black text-zinc-950 mt-4 mb-4 tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginTop: '16px', marginBottom: '16px', color: '#09090b', letterSpacing: '-0.02em' }}
            >
              Designs That <span className="gradient-text">Make Your Brand</span> Stand Out
            </h3>
          </div>
          <div
            className="lg:col-span-6 text-left lg:text-right border-l border-zinc-200 pl-6 py-2"
            style={{ gridColumn: 'span 6 / span 6', borderLeft: '2px solid #e4e4e7', paddingLeft: '24px' }}
          >
            <div
              className="inline-flex items-center gap-1.5 text-zinc-800 font-extrabold text-sm mb-2"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 800, color: '#09090b' }}
            >
              <TrendingUp size={16} />
              <span>OUR APPROACH</span>
            </div>
            <p
              className="text-xs font-bold text-zinc-500 italic max-w-md leading-relaxed"
              style={{ fontSize: '0.75rem', fontWeight: 700, color: '#71717a', fontStyle: 'italic', lineHeight: 1.5 }}
            >
              "Simple, clean, and purposeful design creates stronger first impressions than cluttered visuals."
            </p>
          </div>
        </div>

        {/* Poster Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', alignItems: 'start' }}
        >
          {posterCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                whileHover={{ y: -4 }}
                style={{
                  borderRadius: '16px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: 'auto',
                  border: '1px solid #e4e4e7',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* A4 Poster Canvas (ratio 1:√2) */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1.414',
                    borderRadius: '10px',
                    border: '1px solid #e4e4e7',
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                    marginBottom: '14px',
                    backgroundColor: '#f4f4f5',
                  }}
                >
                  {category.image ? (
                    <>
                      {/* ✅ Changed objectFit to 'contain' to show full image without cropping */}
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                        sizes="(max-width: 768px) 90vw, 260px"
                        // Optional: fallback if image fails
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          // Show a fallback text
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const fallback = document.createElement('div');
                            fallback.style.cssText = 'display:flex; align-items:center; justify-content:center; width:100%; height:100%; color:#71717a; font-size:12px; font-weight:600;';
                            fallback.textContent = 'Image not found';
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                      {/* Overlay stays on top */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          padding: '10px',
                          pointerEvents: 'none',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <span
                            style={{
                              fontSize: '7px', fontWeight: 800,
                              border: '1px solid rgba(255,255,255,0.55)',
                              padding: '2px 7px', borderRadius: '9999px',
                              color: '#fff',
                              backgroundColor: 'rgba(255,255,255,0.15)',
                              backdropFilter: 'blur(4px)',
                              letterSpacing: '0.08em', textTransform: 'uppercase',
                            }}
                          >
                            {category.title.split(' ')[1] || 'Design'}
                          </span>
                          <Icon size={14} color="#fff" />
                        </div>
                        <div>
                          <p style={{ fontSize: '10px', fontWeight: 800, lineHeight: 1.1, color: '#fff', textTransform: 'uppercase', margin: 0 }}>
                            {category.title}
                          </p>
                          <p style={{ fontSize: '8px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginTop: '2px', margin: 0 }}>
                            {category.tagline}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Wireframe placeholder – same as before */
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#f4f4f5',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '12px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            fontSize: '7px', fontWeight: 800,
                            border: '1px solid #cbd5e1',
                            padding: '2px 7px', borderRadius: '9999px', color: '#71717a',
                          }}
                        >
                          {category.title.split(' ')[1] || 'Design'}
                        </span>
                        <Icon size={14} color="#a1a1aa" />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <div style={{ height: '6px', borderRadius: '2px', backgroundColor: '#d4d4d8', opacity: 0.6, width: '75%' }} />
                        <div style={{ height: '6px', borderRadius: '2px', backgroundColor: '#d4d4d8', opacity: 0.6, width: '50%' }} />
                        <div style={{ height: '6px', borderRadius: '2px', backgroundColor: '#d4d4d8', opacity: 0.6, width: '83%' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: '10px', fontWeight: 800, lineHeight: 1.1, color: '#09090b', textTransform: 'uppercase', margin: 0 }}>
                          {category.title}
                        </p>
                        <p style={{ fontSize: '8px', fontWeight: 600, color: '#71717a', marginTop: '2px', margin: 0 }}>
                          {category.tagline}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info & features – unchanged */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'left', padding: '0 4px' }}>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#09090b', marginBottom: '8px', marginTop: 0 }}>
                    {category.title}
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '11px', color: '#71717a', listStyle: 'none', padding: 0, margin: 0 }}>
                    {category.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--primary-accent, #6366f1)', flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '12px', borderTop: '1px solid #f0f0f0', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '7px', fontWeight: 800, color: '#a1a1aa', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      24h TURNAROUND
                    </span>
                    <a
                      href="#contact"
                      style={{ fontSize: '9px', fontWeight: 800, color: 'var(--primary-accent, #6366f1)', textDecoration: 'none' }}
                    >
                      REQUEST BRIEF →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="gridColumn: span 6"] {
            grid-column: span 12 / span 12 !important;
          }
          div[style*="borderLeft"] {
            border-left: none !important;
            border-top: 2px solid #e4e4e7;
            padding-left: 0 !important;
            padding-top: 16px !important;
            margin-top: 8px;
          }
        }
      `}</style>
    </section>
  );
}