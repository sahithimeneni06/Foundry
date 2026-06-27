'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { name: 'Home',         href: '#home'       },
  { name: 'Restaurant',   href: '#restaurant' },
  { name: 'Poster Making',href: '#posters'    },
  { name: 'Bakery & Cafe',href: '#bakery'     },
  { name: 'Services',     href: '#services'   },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen,        setIsOpen]        = useState(false);
  const [isScrolled,    setIsScrolled]    = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections       = ['home', 'restaurant', 'posters', 'bakery', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top    = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .nb-nav  { display: flex; }
        .nb-talk { display: flex; }
        .nb-menu { display: none; }
        @media (max-width: 768px) {
          .nb-nav  { display: none  !important; }
          .nb-talk { display: none  !important; }
          .nb-menu { display: flex  !important; }
        }
      `}</style>

      <header
        suppressHydrationWarning
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          right:           0,
          zIndex:          50,
          padding:         isScrolled ? '16px 0' : '24px 0',
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.75)' : 'transparent',
          backdropFilter:  isScrolled ? 'blur(16px)'             : 'none',
          borderBottom:    isScrolled ? '1px solid rgba(255,255,255,0.2)' : 'none',
          boxShadow:       isScrolled ? '0 4px 24px rgba(0,0,0,0.05)'    : 'none',
          transition:      'padding 0.4s ease, background-color 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:'14px', color:'#09090b', marginRight:'32px', transition:'transform .2s' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ width:'48px', height:'48px', borderRadius:'50%', padding:'2px', background:'linear-gradient(135deg,#c9963a,#e8b84b)', boxShadow:'0 4px 12px rgba(201,150,58,0.25)' }}>
              <img
                src="/logo.jpg"
                alt="AIravatha Logo"
                style={{ width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover', border:'2px solid white' }}
              />
            </div>
            <span style={{
              fontSize:             '1.1rem',
              fontWeight:           900,
              letterSpacing:        '0.2em',
              textTransform:        'uppercase',
              background:           'linear-gradient(135deg,#16162a 60%,#c9963a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor:  'transparent',
              backgroundClip:       'text',
            }}>
              AIravatha
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="nb-nav" style={{ flex:1, alignItems:'center', gap:'6px', justifyContent:'flex-start' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    position:       'relative',
                    padding:        '10px 18px',
                    borderRadius:   '9999px',
                    fontSize:       '0.75rem',
                    fontWeight:     700,
                    color:          isActive ? '#09090b' : '#6b6456',
                    textDecoration: 'none',
                    transition:     'color .2s',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      style={{
                        position:        'absolute',
                        inset:           0,
                        zIndex:          -1,
                        borderRadius:    '9999px',
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        backdropFilter:  'blur(8px)',
                        border:          '1px solid rgba(255,255,255,0.5)',
                        boxShadow:       '0 8px 20px -8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
                      }}
                      transition={{ type:'spring', stiffness:400, damping:25 }}
                    />
                  )}
                  <span style={{ position:'relative', zIndex:1 }}>{item.name.toUpperCase()}</span>
                </a>
              );
            })}
          </nav>

          {/* Let's Talk */}
          <a
            href="#contact"
            className="nb-talk"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{
              padding:        '8px 22px',
              borderRadius:   '9999px',
              fontSize:       '0.75rem',
              fontWeight:     900,
              color:          'white',
              background:     'linear-gradient(135deg,#c9963a,#e8b84b)',
              boxShadow:      '0 4px 14px rgba(201,150,58,0.35)',
              alignItems:     'center',
              gap:            '6px',
              marginLeft:     '20px',
              flexShrink:     0,
              textDecoration: 'none',
              transition:     'transform .2s, box-shadow .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,150,58,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = '0 4px 14px rgba(201,150,58,0.35)'; }}
          >
            Let's Talk <ArrowRight size={14} strokeWidth={2.5} />
          </a>

          {/* Mobile toggle */}
          <button
            className="nb-menu"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              padding:         '10px',
              borderRadius:    '12px',
              backgroundColor: 'rgba(255,255,255,0.6)',
              backdropFilter:  'blur(4px)',
              border:          '1px solid rgba(255,255,255,0.3)',
              color:           '#09090b',
              cursor:          'pointer',
              boxShadow:       '0 4px 12px rgba(0,0,0,0.05)',
              marginLeft:      'auto',
              alignItems:      'center',
              justifyContent:  'center',
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity:0, height:0, y:-10 }}
              animate={{ opacity:1, height:'auto', y:0 }}
              exit={{ opacity:0, height:0, y:-10 }}
              transition={{ duration:0.3, ease:'easeInOut' }}
              style={{ overflow:'hidden', backgroundColor:'rgba(255,255,255,0.8)', backdropFilter:'blur(20px)', borderTop:'1px solid rgba(255,255,255,0.2)' }}
            >
              <div style={{ maxWidth:'1100px', margin:'0 auto', padding:'20px 24px', display:'flex', flexDirection:'column', gap:'6px' }}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      style={{
                        color:           isActive ? '#09090b' : '#6b6456',
                        backgroundColor: isActive ? 'rgba(255,255,255,0.6)' : 'transparent',
                        borderRadius:    '12px',
                        padding:         '14px 16px',
                        border:          isActive ? '1px solid rgba(255,255,255,0.8)' : '1px solid transparent',
                        backdropFilter:  isActive ? 'blur(4px)' : 'none',
                        fontWeight:      700,
                        fontSize:        '0.85rem',
                        letterSpacing:   '0.05em',
                        textDecoration:  'none',
                      }}
                    >
                      {item.name.toUpperCase()}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  style={{
                    marginTop:      '8px',
                    width:          '100%',
                    padding:        '14px 16px',
                    borderRadius:   '12px',
                    color:          'white',
                    background:     'linear-gradient(135deg,#c9963a,#e8b84b)',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    gap:            '8px',
                    fontWeight:     900,
                    fontSize:       '0.85rem',
                    boxShadow:      '0 4px 14px rgba(201,150,58,0.3)',
                    textDecoration: 'none',
                  }}
                >
                  Let's Talk <ArrowRight size={16} strokeWidth={2.5} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}