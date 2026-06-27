'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import {
  Smartphone, Layout, ArrowLeft, ArrowRight,
  Play, Eye, CheckCircle, Server, Zap, BarChart2, QrCode, Edit3
} from 'lucide-react';

const menuItems = [
  { id: 1, name: 'Truffle Glazed Burger', category: 'Gourmet Mains', calories: '650 kcal', glb: '/burger.glb' },
  { id: 2, name: 'Neapolitan Burrata Pizza', category: 'Woodfired Pizza', calories: '820 kcal', glb: '/pizza.glb' },
];

const backendWorkSlides = [
  { id: 'dispatch',   title: 'Order Dispatch Console',       category: 'OPERATIONS',      desc: 'Live kitchen ticket board handling multi-channel order routing, table status tracking, and preparation timers in real time.',   images: ['/first.png',    '/second.png'] },
  { id: 'editor',    title: 'Real-time Menu Editor',         category: 'CATALOG MANAGER', desc: 'A client-facing dashboard to update pricing, toggle item availability, upload descriptions, and manage 3D model assets.',        images: ['/third.png',    '/fourth.png'] },
  { id: 'router',    title: 'Table QR Router',               category: 'INFRASTRUCTURE',  desc: 'Advanced QR redirection engine mapping physical table coordinates to checkout routes with table session management.',             images: ['/fifth.png',    '/sixth.png']  },
  { id: 'analytics', title: 'Sales & Performance Analytics', category: 'REVENUE OPS',     desc: 'Aggregated analytics tracking table turn rates, high-demand dining hours, category margins, and checkout success logs.',        images: ['/seventh.png']                },
  { id: 'admin',     title: 'Admin Dashboard',               category: 'ADMINISTRATION',  desc: 'Comprehensive management interface for system configuration, user permissions, and reporting.',                                   images: ['/admin-login.png']            },
];

const dashTiles = [
  { icon: Zap,       label: 'Order Routing',    desc: 'Multi-channel kitchen ticket board with live status.' },
  { icon: Edit3,     label: 'Menu Editor',       desc: 'Toggle items, update pricing and upload 3D assets.'  },
  { icon: QrCode,    label: 'QR Infrastructure', desc: 'Table-mapped QR sessions and checkout routing.'      },
  { icon: BarChart2, label: 'Revenue Ops',       desc: 'Margin tracking, table turns, checkout success logs.'},
];

export default function RestaurantSection() {
  const [backendIndex,      setBackendIndex]      = useState(0);
  const [backendImageIndex, setBackendImageIndex] = useState(0);
  const [modelViewerReady,  setModelViewerReady]  = useState(false);

  // ── Fix: load MeshoptDecoder BEFORE model-viewer ──────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Already registered — nothing to do
    if (customElements.get('model-viewer')) {
      setModelViewerReady(true);
      return;
    }

    // Step 1: load MeshoptDecoder (needed to decompress compressed .glb files)
    const meshopt = document.createElement('script');
    meshopt.src = 'https://unpkg.com/meshoptimizer/meshopt_decoder.js';
    meshopt.onload = () => {
      // Step 2: only now load model-viewer so it picks up window.MeshoptDecoder
      const mv = document.createElement('script');
      mv.type = 'module';
      mv.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      mv.onload = () => setModelViewerReady(true);
      document.head.appendChild(mv);
    };
    meshopt.onerror = () => {
      // Graceful fallback: load model-viewer anyway (uncompressed .glb still works)
      const mv = document.createElement('script');
      mv.type = 'module';
      mv.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      mv.onload = () => setModelViewerReady(true);
      document.head.appendChild(mv);
    };
    document.head.appendChild(meshopt);
  }, []);
  // ──────────────────────────────────────────────────────────────────────────

  const currentSlide     = backendWorkSlides[backendIndex];
  const totalSlideImages = backendWorkSlides.reduce((a, s) => a + s.images.length, 0);
  const globalIndex      = backendWorkSlides.slice(0, backendIndex).reduce((a, s) => a + s.images.length, 0) + backendImageIndex;

  const nextBackend = () => {
    const ni = backendImageIndex + 1;
    if (ni < currentSlide.images.length) { setBackendImageIndex(ni); }
    else { setBackendIndex((backendIndex + 1) % backendWorkSlides.length); setBackendImageIndex(0); }
  };
  const prevBackend = () => {
    if (backendImageIndex > 0) { setBackendImageIndex(backendImageIndex - 1); }
    else {
      const pi = (backendIndex - 1 + backendWorkSlides.length) % backendWorkSlides.length;
      setBackendIndex(pi); setBackendImageIndex(backendWorkSlides[pi].images.length - 1);
    }
  };

  return (
    <section
      id="restaurant"
      suppressHydrationWarning
      style={{ background: '#f9f7f4', borderTop: '1px solid #e8e2d9', borderBottom: '1px solid #e8e2d9', padding: '112px 0' }}
    >
      <style>{`
        :root {
          --ink:    #16162a;
          --gold:   #c9963a;
          --goldlt: #e8b84b;
          --surf:   #f9f7f4;
          --card:   #ffffff;
          --bdr:    #e8e2d9;
          --muted:  #6b6456;
          --pale:   #fef9ee;
        }

        .r-card {
          background: var(--card);
          border-radius: 20px;
          border: 1.5px solid var(--bdr);
          box-shadow: 0 2px 12px rgba(100,70,30,0.06), 0 1px 3px rgba(0,0,0,0.03);
          transition: box-shadow .22s, transform .22s;
        }
        .r-card:hover { box-shadow: 0 8px 36px rgba(100,70,30,0.13); transform: translateY(-2px); }

        .r-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: .6rem; font-weight: 900; letter-spacing: .12em; text-transform: uppercase;
          color: var(--gold); background: var(--pale);
          border: 1.5px solid #f5dfa0; padding: 5px 14px; border-radius: 9999px;
        }

        .r-eye {
          display: flex; align-items: center; gap: 8px;
          font-size: .68rem; font-weight: 900; color: #b09070;
          text-transform: uppercase; letter-spacing: .08em; margin-bottom: 14px;
        }

        .r-h2 { font-size: clamp(2rem,3.5vw,2.8rem); font-weight: 900; color: var(--ink); letter-spacing:-.022em; margin:0 0 14px; line-height:1.12; }
        .r-h3 { font-size: clamp(1.35rem,2.2vw,1.85rem); font-weight: 800; color: var(--ink); letter-spacing:-.015em; margin:0 0 14px; line-height:1.2; }
        .r-p  { color: var(--muted); font-size: .87rem; line-height:1.72; font-weight:500; margin:0 0 28px; }

        .r-checks { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:13px; }
        .r-checks li { display:flex; align-items:center; gap:11px; font-size:.8rem; font-weight:700; color:#2e2a24; }

        .r-pill {
          font-size:8px; font-weight:800; background:#f4f0ea; color:var(--muted);
          padding:3px 9px; border-radius:6px; display:inline-flex; align-items:center; gap:3px;
        }

        .r-3d {
          background: rgba(22,22,42,.72); backdrop-filter:blur(6px);
          color:#fff; font-size:7px; font-weight:900; padding:4px 9px;
          border-radius:999px; display:inline-flex; align-items:center; gap:4px; letter-spacing:.05em;
        }

        .r-tile {
          background: #fff; border-radius:14px;
          border: 1.5px solid var(--bdr); padding:16px 18px;
          display:flex; flex-direction:column; gap:7px;
          transition: border-color .18s, box-shadow .18s;
        }
        .r-tile:hover { border-color: #f5dfa0; box-shadow:0 4px 18px rgba(201,150,58,.12); }
        .r-tile p:first-of-type { font-size:.74rem; font-weight:800; color:var(--ink); margin:0; }
        .r-tile p:last-of-type  { font-size:.67rem; color:#9a8a78; margin:0; line-height:1.5; }

        .r-nav {
          width:40px; height:40px; border-radius:50%;
          border:1.5px solid var(--bdr); background:#fff;
          display:flex; align-items:center; justify-content:center;
          color:var(--ink); cursor:pointer;
          transition: background .15s, border-color .15s, box-shadow .15s;
        }
        .r-nav:hover { background:var(--pale); border-color:var(--gold); box-shadow:0 2px 12px rgba(201,150,58,.2); }

        .r-tab {
          flex:1; padding:8px 4px; border-radius:8px; border:none; cursor:pointer;
          font-size:.62rem; font-weight:900; letter-spacing:.05em; text-transform:uppercase;
          background:transparent; color:#b09070;
          transition: background .15s, color .15s;
        }
        .r-tab.on { background:#fff; color:var(--ink); box-shadow:0 1px 6px rgba(100,70,30,.1); }

        .cdot { width:10px; height:10px; border-radius:50%; display:inline-block; }
        .r-divider { width:40px; height:3px; border-radius:2px; background:linear-gradient(90deg,var(--gold),var(--goldlt)); margin-bottom:20px; }

        /* model-viewer fills its container */
        model-viewer {
          width: 100%;
          height: 100%;
          background-color: transparent;
          --poster-color: transparent;
        }

        @keyframes r-spin { to { transform:rotate(360deg); } }
        .r-spin { animation:r-spin .85s linear infinite; }

        @media(max-width:960px) {
          .rg12 { grid-template-columns:1fr !important; }
          .rg2  { grid-template-columns:1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'0 24px' }}>

        {/* ══ HEADER ══ */}
        <div style={{ marginBottom:'80px' }}>
          <span className="r-badge">✦ Restaurant Portfolio</span>
          <h2 className="r-h2" style={{ marginTop:'18px' }}>
            Smart{' '}
            <span style={{ background:'linear-gradient(90deg,#c9963a,#e8b84b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              Dining Infrastructure
            </span>
          </h2>
          <p style={{ color:'#9a8a78', fontSize:'.9rem', fontWeight:500, maxWidth:'460px', lineHeight:1.65, margin:0 }}>
            End-to-end restaurant tech - branded landing pages, 3D menus, live order dashboards and QR infrastructure.
          </p>
        </div>

        {/* ══ 01 / LANDING PAGE ══ */}
        <div className="rg12" style={{ display:'grid', gridTemplateColumns:'5fr 7fr', gap:'60px', alignItems:'center', marginBottom:'112px' }}>

          <div>
            <div className="r-eye"><Smartphone size={15} color="#c9963a" /><span>01 / Branded Landing Page</span></div>
            <div className="r-divider" />
            <h3 className="r-h3">A Website That Turns<br />Visitors Into Customers</h3>
            <p className="r-p">Give your business a polished online presence - customers can explore the menu, place orders, and contact you instantly.</p>
            <ul className="r-checks">
              {['Mobile-first responsive design','Lightning-fast page performance','Integrated QR menu ordering'].map(t => (
                <li key={t}><CheckCircle size={15} color="#c9963a" style={{ flexShrink:0 }} />{t}</li>
              ))}
            </ul>
          </div>

          <div className="r-card" style={{ padding:'18px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'14px' }}>
              <span style={{ fontSize:'9px', fontWeight:900, color:'#b09070', textTransform:'uppercase', letterSpacing:'.08em' }}>Live Preview</span>
              <span style={{ fontSize:'8px', fontWeight:800, color:'#c9963a', background:'#fef9ee', border:'1px solid #f5dfa0', padding:'2px 8px', borderRadius:'9999px', letterSpacing:'.06em' }}>● ONLINE</span>
            </div>

            <div style={{ display:'flex', gap:'14px', alignItems:'stretch' }}>
              <a
                href="https://cambioresto.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex:'1 1 62%', height:'270px', borderRadius:'12px', overflow:'hidden', border:'1.5px solid #e8e2d9', position:'relative', display:'block', cursor:'pointer' }}
              >
                <Image src="/landing.png" alt="Restaurant Website" fill style={{ objectFit:'cover' }} sizes="380px" priority />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(22,22,42,.6) 0%,transparent 50%)', display:'flex', alignItems:'flex-end', padding:'12px' }}>
                  <span style={{ fontSize:'8px', fontWeight:900, color:'#e8b84b', letterSpacing:'.08em', textTransform:'uppercase' }}>↗ Visit Live Site</span>
                </div>
              </a>

              <div style={{ flex:'0 0 36%', height:'270px', borderRadius:'12px', overflow:'hidden', border:'1.5px solid #e8e2d9', position:'relative', background:'linear-gradient(160deg,#1e1010,#2e1a0e)', display:'flex', flexDirection:'column' }}>
                <div style={{ flex:1, position:'relative' }}>
                  <Image src="/qr.png" alt="Table QR Code" fill style={{ objectFit:'contain', padding:'14px' }} sizes="180px" priority />
                </div>
                <div style={{ padding:'10px', textAlign:'center', borderTop:'1px solid rgba(255,255,255,.06)' }}>
                  <span style={{ fontSize:'7px', fontWeight:900, color:'#c9963a', letterSpacing:'.12em', textTransform:'uppercase' }}>Scan to View Menu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ 02 / 3D PRODUCTS ══ */}
        <div style={{ marginBottom:'112px' }}>
          <div className="r-eye"><Layout size={15} color="#c9963a" /><span>02 / 3D Products</span></div>
          <div className="r-divider" />
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'32px' }}>
            <h3 className="r-h3" style={{ margin:0 }}>Interactive Product Displays</h3>
            <span style={{ fontSize:'.75rem', color:'#b09070', fontWeight:600 }}>Drag · Rotate · AR View</span>
          </div>

          <div className="rg2" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px' }}>
            {menuItems.map(item => (
              <motion.div key={item.id} whileHover={{ y:-4 }} className="r-card" style={{ padding:'18px', display:'flex', flexDirection:'column' }}>

                <div style={{ height:'220px', borderRadius:'14px', background:'linear-gradient(145deg,#f4f0ea,#ede8df)', border:'1.5px solid #e8e2d9', position:'relative', overflow:'hidden', marginBottom:'16px' }}>
                  {modelViewerReady ? (
                    // @ts-ignore
                    <model-viewer
                      src={item.glb}
                      alt={item.name}
                      auto-rotate
                      camera-controls
                      ar
                      style={{ width:'100%', height:'100%', backgroundColor:'transparent' }}
                    />
                  ) : (
                    <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'8px' }}>
                      <div className="r-spin" style={{ width:'22px', height:'22px', border:'2.5px solid #e8e2d9', borderTopColor:'#c9963a', borderRadius:'50%' }} />
                      <span style={{ fontSize:'9px', color:'#a89070', fontWeight:800, letterSpacing:'.08em' }}>LOADING 3D MODEL</span>
                    </div>
                  )}

                  <div style={{ position:'absolute', bottom:'10px', right:'10px', pointerEvents:'none' }}>
                    <span className="r-3d"><Play size={7} fill="currentColor" /> Drag to Rotate</span>
                  </div>

                  <div style={{ position:'absolute', top:'10px', left:'10px' }}>
                    <span style={{ fontSize:'7px', fontWeight:900, color:'var(--gold)', background:'rgba(255,255,255,.85)', backdropFilter:'blur(4px)', padding:'3px 8px', borderRadius:'6px', letterSpacing:'.06em', textTransform:'uppercase' }}>
                      {item.category}
                    </span>
                  </div>
                </div>

                <h4 style={{ fontSize:'.9rem', fontWeight:800, color:'#16162a', letterSpacing:'-.012em', margin:'0 0 10px' }}>{item.name}</h4>

                <div style={{ display:'flex', gap:'6px', marginTop:'auto', alignItems:'center' }}>
                  <span className="r-pill">{item.calories}</span>
                  <span className="r-pill"><Eye size={9} /> WebAR</span>
                  <span style={{ marginLeft:'auto', fontSize:'8px', color:'#b09070', fontWeight:700 }}>3D Interactive</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══ 03 / DASHBOARD ══ */}
        <div className="rg12" style={{ display:'grid', gridTemplateColumns:'7fr 5fr', gap:'60px', alignItems:'start' }}>

          <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>

            {/* slide tabs */}
            <div style={{ display:'flex', background:'#f0ece6', border:'1.5px solid #e8e2d9', borderRadius:'12px', padding:'3px', gap:'2px' }}>
              {backendWorkSlides.map((s, i) => (
                <button
                  key={s.id}
                  className={`r-tab${backendIndex === i ? ' on' : ''}`}
                  onClick={() => { setBackendIndex(i); setBackendImageIndex(0); }}
                >
                  {s.category.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* dark console */}
            <div style={{ borderRadius:'16px', backgroundColor:'#0f0f1e', border:'1.5px solid #24243a', boxShadow:'0 12px 48px rgba(8,8,22,.35)', padding:'18px', height:'360px', position:'relative', display:'flex', flexDirection:'column', overflow:'hidden' }}>

              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #24243a', paddingBottom:'11px', marginBottom:'14px', flexShrink:0 }}>
                <div style={{ display:'flex', gap:'6px', alignItems:'center' }}>
                  <span className="cdot" style={{ background:'#ff5f56' }} />
                  <span className="cdot" style={{ background:'#ffbd2e' }} />
                  <span className="cdot" style={{ background:'#27c93f' }} />
                  <span style={{ marginLeft:'10px', fontSize:'8.5px', color:'#3e3e5e', fontWeight:800, textTransform:'uppercase', letterSpacing:'.05em' }}>{currentSlide.id}_console</span>
                </div>
                <span style={{ fontSize:'8px', color:'#c9963a', fontWeight:900, textTransform:'uppercase', letterSpacing:'.1em' }}>● Live</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${backendIndex}-${backendImageIndex}`}
                  initial={{ opacity:0, scale:.97 }}
                  animate={{ opacity:1, scale:1 }}
                  exit={{ opacity:0, scale:.97 }}
                  transition={{ duration:.22 }}
                  style={{ flex:1, position:'relative', borderRadius:'10px', overflow:'hidden', border:'1px solid #24243a', minHeight:0 }}
                >
                  <Image
                    src={currentSlide.images[backendImageIndex]}
                    alt={`${currentSlide.title} screenshot`}
                    fill
                    style={{ objectFit:'cover' }}
                    sizes="55vw"
                  />
                </motion.div>
              </AnimatePresence>

              <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(to top,rgba(10,10,24,.96) 0%,transparent 100%)', padding:'22px 18px 14px', display:'flex', justifyContent:'space-between', alignItems:'flex-end', pointerEvents:'none' }}>
                <div>
                  <p style={{ fontSize:'8px', color:'#c9963a', fontWeight:900, letterSpacing:'.1em', textTransform:'uppercase', margin:'0 0 3px' }}>{currentSlide.category}</p>
                  <p style={{ fontSize:'11px', fontWeight:800, color:'#fff', margin:0 }}>{currentSlide.title}</p>
                </div>
                <span style={{ fontSize:'8px', color:'#3e3e5e', fontWeight:700 }}>{globalIndex + 1} / {totalSlideImages}</span>
              </div>
            </div>

            {/* nav + dots */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div style={{ display:'flex', gap:'5px' }}>
                {Array.from({ length: totalSlideImages }).map((_, i) => (
                  <span
                    key={i}
                    style={{ width: i === globalIndex ? '18px' : '6px', height:'6px', borderRadius:'3px', background: i === globalIndex ? '#c9963a' : '#e8e2d9', transition:'width .2s, background .2s' }}
                  />
                ))}
              </div>
              <div style={{ display:'flex', gap:'8px' }}>
                <button className="r-nav" onClick={prevBackend} aria-label="Previous"><ArrowLeft size={14} /></button>
                <button className="r-nav" onClick={nextBackend} aria-label="Next"><ArrowRight size={14} /></button>
              </div>
            </div>
          </div>

          {/* copy + tiles */}
          <div>
            <div className="r-eye"><Server size={15} color="#c9963a" /><span>03 / Business Dashboard</span></div>
            <div className="r-divider" />
            <h3 className="r-h3">Manage Everything<br />from One Place</h3>
            <p className="r-p">Products, orders, customers, analytics - a unified dashboard built for restaurant operators who move fast.</p>

            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
              {dashTiles.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="r-tile">
                  <Icon size={15} color="#c9963a" />
                  <p>{label}</p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}