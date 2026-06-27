'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cake, Sparkles, Wand2, Info, ShoppingBag } from 'lucide-react';

const catalogItems = [
  { id: 1, name: 'Double Pistachio Macaron', tag: 'Best Seller', emoji: '🍵', color: '#d1fae5', tagColor: '#059669' },
  { id: 2, name: 'Red Velvet Croissant',     tag: 'Chef Choice', emoji: '🥐', color: '#fee2e2', tagColor: '#dc2626' },
  { id: 3, name: 'Sea Salt Caramel Tart',    tag: 'Fresh Bake',  emoji: '🥮', color: '#fef9c3', tagColor: '#ca8a04' },
  { id: 4, name: 'Cruffin Creme Brulee',     tag: 'Viral',       emoji: '✨', color: '#ede9fe', tagColor: '#7c3aed' }
];

const flavors = {
  chocolate:  { name: 'Chocolate',  color: '#6b3a1f', text: 'white',   swatch: '#6b3a1f' },
  vanilla:    { name: 'Vanilla',    color: '#fef3c7', text: '#92400e', swatch: '#fef3c7' },
  strawberry: { name: 'Strawberry', color: '#fecdd3', text: '#be185d', swatch: '#fb7185' },
  matcha:     { name: 'Matcha',     color: '#bbf7d0', text: '#15803d', swatch: '#4ade80' }
};

const frostings = {
  lavender:   { name: 'Lavender',   color: '#ddd6fe', swatch: '#a78bfa' },
  chocolate:  { name: 'Fudge',      color: '#3b1a08', swatch: '#92400e' },
  vanilla:    { name: 'Butter',     color: '#fef9c3', swatch: '#fde68a' },
  strawberry: { name: 'Rose',       color: '#fda4af', swatch: '#fb7185' },
  matcha:     { name: 'Matcha',     color: '#86efac', swatch: '#4ade80' }
};

const toppings = {
  cherry:    { label: '🍒 Cherry'   },
  sprinkles: { label: '✨ Sprinkles' },
  candles:   { label: '🕯️ Candles'  },
  cookies:   { label: '🍪 Cookies'  }
};

const aiCakePresets = {
  exam: {
    title: 'The "Math is Hard, Batter is Easy" Stack',
    desc: '3 tiers of rich chocolate sponge, glazed with whipped vanilla buttercream, topped with cookie crumbs representing your broken calculator. 100% comfort rating.',
    emoji: '📚'
  },
  birthday: {
    title: 'The "Purr-fect Confetti" Tower',
    desc: '2 tiers of vanilla sponge, drizzled with lavender glaze (calming), topped with candles. Elegant and highly photogenic.',
    emoji: '🎂'
  },
  promotion: {
    title: 'The "Corporate Ladder" Matcha Roll',
    desc: '3 tiers of Zen Matcha sponge, glazed with dark chocolate frosting, topped with gold-dust sprinkles. Highly professional.',
    emoji: '💼'
  },
  chaotic: {
    title: 'The "Vibe Check" Serotonin Stack',
    desc: '1 giant tier of strawberry sponge, flooded with lavender glaze, topped with sprinkles and cherries. Pure creative energy.',
    emoji: '🌈'
  }
};

export default function BakeryCafe() {
  const [customLayers, setCustomLayers]     = useState(2);
  const [customFlavor, setCustomFlavor]     = useState('chocolate');
  const [customFrosting, setCustomFrosting] = useState('vanilla');
  const [customTopping, setCustomTopping]   = useState('cherry');
  const [moodInput, setMoodInput]           = useState('');
  const [aiResult, setAiResult]             = useState(null);
  const [isAiLoading, setIsAiLoading]       = useState(false);

  const handleAiRecommend = (e) => {
    e.preventDefault();
    if (!moodInput.trim()) return;
    setIsAiLoading(true);
    setAiResult(null);
    setTimeout(() => {
      const l = moodInput.toLowerCase();
      let preset = aiCakePresets.chaotic;
      if (l.includes('exam') || l.includes('study') || l.includes('fail') || l.includes('sad')) preset = aiCakePresets.exam;
      else if (l.includes('birthday') || l.includes('party') || l.includes('cat') || l.includes('dog')) preset = aiCakePresets.birthday;
      else if (l.includes('promote') || l.includes('job') || l.includes('money') || l.includes('work')) preset = aiCakePresets.promotion;
      setAiResult(preset);
      setIsAiLoading(false);
    }, 1200);
  };

  const toppingEmoji = { cherry: '🍒', sprinkles: '✨', candles: '🕯️', cookies: '🍪' };

  return (
    <section id="bakery" style={{ background: 'linear-gradient(160deg,#fff9f5 0%,#fff 60%)', borderBottom: '1px solid #f3e8d8', padding: '100px 0' }}>

      {/* ── Global Styles ── */}
      <style>{`
        .bakery-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #f0e6d8;
          box-shadow: 0 4px 24px rgba(180,120,60,0.07), 0 1px 4px rgba(0,0,0,0.04);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .bakery-card:hover { box-shadow: 0 8px 32px rgba(180,120,60,0.13); }

        .catalog-item {
          background: #fff;
          border-radius: 14px;
          border: 1.5px solid #f0e6d8;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: transform 0.15s, box-shadow 0.15s;
          cursor: default;
        }
        .catalog-item:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(180,120,60,0.1); }

        .seg-wrap {
          display: flex;
          background: #fdf6ee;
          border: 1.5px solid #f0e6d8;
          border-radius: 10px;
          padding: 3px;
          gap: 2px;
        }
        .seg-btn {
          flex: 1;
          padding: 7px 6px;
          border-radius: 7px;
          border: none;
          cursor: pointer;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          background: transparent;
          color: #b5895a;
          transition: background 0.15s, color 0.15s, box-shadow 0.15s;
        }
        .seg-btn.active {
          background: #fff;
          color: #3b1a08;
          box-shadow: 0 1px 6px rgba(180,120,60,0.15);
        }

        .ai-input {
          flex: 1;
          padding: 11px 14px;
          border-radius: 10px;
          border: 1.5px solid #f0e6d8;
          background: #fdf6ee;
          font-size: 0.78rem;
          font-weight: 600;
          color: #3b1a08;
          outline: none;
          transition: border-color 0.15s, background 0.15s;
        }
        .ai-input:focus { border-color: #d4956a; background: #fff; }
        .ai-input::placeholder { color: #c9a882; }

        .ai-btn {
          padding: 11px 18px;
          border-radius: 10px;
          background: linear-gradient(135deg,#c26e38,#8b3e16);
          color: white;
          border: none;
          font-weight: 900;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 3px 12px rgba(180,80,20,0.25);
          transition: opacity 0.15s, transform 0.15s;
        }
        .ai-btn:hover { opacity: 0.92; transform: translateY(-1px); }
        .ai-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        .swatch {
          width: 18px; height: 18px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.7);
          box-shadow: 0 1px 4px rgba(0,0,0,0.15);
          display: inline-block; flex-shrink: 0;
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { animation: spin 0.8s linear infinite; }

        @media (max-width: 900px) {
          .bakery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ display: 'inline-block', fontSize: '0.62rem', fontWeight: 800, color: '#b5895a', background: '#fdf0e0', border: '1.5px solid #f5dab8', padding: '5px 14px', borderRadius: '9999px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            ✦ Catalog Experience
          </span>
          <h2 style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 900, color: '#2c1206', letterSpacing: '-0.02em', margin: '0 0 12px' }}>
            Bakery &amp; <span style={{ background: 'linear-gradient(90deg,#c26e38,#e8903a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Café Customizers</span>
          </h2>
          <p style={{ color: '#9a6a3a', fontSize: '1rem', fontWeight: 500, maxWidth: '480px', margin: '0 auto', lineHeight: 1.65 }}>
            Create a beautiful online menu, showcase your best products, and make it easy for customers to discover and order from your bakery.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="bakery-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'start' }}>

          {/* ── LEFT: Catalog + AI ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Catalog card */}
            <div className="bakery-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <span style={{ width: '4px', height: '22px', borderRadius: '4px', background: 'linear-gradient(180deg,#e8903a,#c26e38)', display: 'inline-block' }} />
                <h3 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#2c1206', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Digital Catalog</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {catalogItems.map(item => (
                  <div key={item.id} className="catalog-item" style={{ background: item.color + '28' }}>
                    <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.emoji}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2c1206', margin: '0 0 4px', lineHeight: 1.2 }}>{item.name}</p>
                      <span style={{ fontSize: '7px', fontWeight: 900, color: item.tagColor, background: item.color, padding: '2px 7px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Recommender card */}
            <div className="bakery-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Sparkles size={16} color="#c26e38" />
                <h3 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#2c1206', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>AI Recipe Recommender</h3>
              </div>
              <p style={{ fontSize: '0.73rem', color: '#b5895a', fontWeight: 500, lineHeight: 1.55, marginBottom: '18px' }}>
                Describe your mood or occasion - our AI suggests the perfect cake.
              </p>

              <form onSubmit={handleAiRecommend} style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
                <input className="ai-input" type="text" value={moodInput} onChange={e => setMoodInput(e.target.value)} placeholder="e.g., birthday cake…" />
                <button type="submit" className="ai-btn" disabled={isAiLoading}>
                  <Wand2 size={13} /> GO
                </button>
              </form>

              <div style={{ minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence mode="wait">
                  {isAiLoading && (
                    <motion.div key="load" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <div className="spinner" style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2.5px solid #f5dab8', borderTopColor: '#c26e38' }} />
                      <p style={{ fontSize: '9px', fontWeight: 800, color: '#c9a882', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Compiling suggestion…</p>
                    </motion.div>
                  )}
                  {!isAiLoading && aiResult && (
                    <motion.div key="result" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                      style={{ width: '100%', background: 'linear-gradient(135deg,#fff9f2,#fef3e8)', border: '1.5px solid #f5dab8', borderRadius: '14px', padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{aiResult.emoji}</span>
                        <div>
                          <p style={{ fontSize: '10px', fontWeight: 900, color: '#c26e38', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 4px' }}>Recommended Stack</p>
                          <p style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2c1206', margin: '0 0 6px', lineHeight: 1.3 }}>{aiResult.title}</p>
                          <p style={{ fontSize: '0.7rem', color: '#9a6a3a', lineHeight: 1.55, margin: 0 }}>{aiResult.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {!isAiLoading && !aiResult && (
                    <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      style={{ textAlign: 'center', color: '#ddc9b0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                      <Info size={20} />
                      <span style={{ fontSize: '0.72rem', fontWeight: 600 }}>Compiler ready — enter your mood above.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* ── RIGHT: Cake Designer ── */}
          <div className="bakery-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Cake size={17} color="#c26e38" />
              <h3 style={{ fontSize: '0.8rem', fontWeight: 900, color: '#2c1206', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>Cake Designer Sandbox</h3>
            </div>

            {/* ── Cake Canvas ── */}
            <div style={{
              borderRadius: '16px',
              background: 'linear-gradient(160deg,#fff9f2 0%,#fef3e0 100%)',
              border: '1.5px solid #f5dab8',
              height: '220px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: '20px',
              marginBottom: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* subtle radial glow */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 80%, rgba(226,144,58,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                {/* topping */}
                <motion.div key={customTopping} initial={{ y: -14, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  style={{ fontSize: '1.9rem', marginBottom: '-6px', zIndex: 30 }}>
                  {toppingEmoji[customTopping]}
                </motion.div>

                {/* tiers */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {Array.from({ length: customLayers }).map((_, idx) => {
                    const tier = customLayers - idx;
                    const w = 130 + tier * 32;
                    const h = 28 + tier * 3;
                    return (
                      <motion.div key={`${customFlavor}-${tier}`}
                        initial={{ scaleX: 0.4, y: -12, opacity: 0 }}
                        animate={{ scaleX: 1, y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 130, damping: 14, delay: idx * 0.06 }}
                        style={{
                          width: `${w}px`, height: `${h}px`,
                          borderRadius: '9px',
                          backgroundColor: flavors[customFlavor].color,
                          borderTop: `6px solid ${frostings[customFrosting].color}`,
                          boxShadow: `inset 0 -6px 0 rgba(0,0,0,0.12), 0 3px 8px rgba(0,0,0,0.09)`,
                          marginTop: '-4px',
                          zIndex: 10 + tier,
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* glaze drips */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '0 12px' }}>
                          {[10, 14, 8, 12].map((dh, di) => (
                            <span key={di} style={{ width: '7px', height: `${dh}px`, borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%', backgroundColor: frostings[customFrosting].color, opacity: 0.9 }} />
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* plate */}
                <div style={{ width: '260px', height: '11px', borderRadius: '50%', background: 'linear-gradient(180deg,#e9d8c4,#d4bc9c)', marginTop: '-2px', boxShadow: '0 3px 10px rgba(0,0,0,0.12)' }} />
              </div>
            </div>

            {/* ── Controls ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

              {/* Layers */}
              <div>
                <label style={{ fontSize: '8px', fontWeight: 900, color: '#c9a882', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '7px' }}>
                  Layers
                </label>
                <div className="seg-wrap">
                  {[1, 2, 3].map(n => (
                    <button key={n} type="button" className={`seg-btn${customLayers === n ? ' active' : ''}`} onClick={() => setCustomLayers(n)}>
                      {n} Tier{n > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flavor */}
              <div>
                <label style={{ fontSize: '8px', fontWeight: 900, color: '#c9a882', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '7px' }}>
                  Sponge Flavor
                </label>
                <div className="seg-wrap">
                  {Object.entries(flavors).map(([key, f]) => (
                    <button key={key} type="button" className={`seg-btn${customFlavor === key ? ' active' : ''}`} onClick={() => setCustomFlavor(key)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                      <span className="swatch" style={{ backgroundColor: f.swatch }} />
                      {f.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frosting */}
              <div>
                <label style={{ fontSize: '8px', fontWeight: 900, color: '#c9a882', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '7px' }}>
                  Frosting Glaze
                </label>
                <div className="seg-wrap">
                  {Object.entries(frostings).map(([key, f]) => (
                    <button key={key} type="button" className={`seg-btn${customFrosting === key ? ' active' : ''}`} onClick={() => setCustomFrosting(key)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                      <span className="swatch" style={{ backgroundColor: f.swatch }} />
                      {f.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toppings */}
              <div>
                <label style={{ fontSize: '8px', fontWeight: 900, color: '#c9a882', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '7px' }}>
                  Topping
                </label>
                <div className="seg-wrap">
                  {Object.entries(toppings).map(([key, t]) => (
                    <button key={key} type="button" className={`seg-btn${customTopping === key ? ' active' : ''}`} onClick={() => setCustomTopping(key)}>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}