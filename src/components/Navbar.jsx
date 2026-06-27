'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Restaurant', href: '#restaurant' },
  { name: 'Poster Making', href: '#posters' },
  { name: 'Bakery & Cafe', href: '#bakery' },
  { name: 'Services', href: '#services' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'restaurant', 'posters', 'bakery', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
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
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjusted offset due to increased padding
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        isScrolled 
          ? 'py-6 bg-white/85 backdrop-blur-md border-b border-zinc-100 shadow-sm' 
          : 'py-10 bg-transparent'
      }`}
      style={{ transition: 'padding 0.35s ease, background-color 0.35s ease' }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center" style={{ maxWidth: '1100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo & Website Name */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', color: '#09090b' }}
        >
          <img 
            src="/logo.jpg" 
            alt="Airavatha Logo" 
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '2px solid #e4e4e7',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }} 
          />
          <span className="font-extrabold uppercase tracking-widest" style={{ fontSize: '1.05rem', letterSpacing: '0.18em' }}>Airavatha</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-4 py-2.5 rounded-full text-xs font-bold tracking-wide transition-colors duration-200"
                style={{
                  color: isActive ? '#09090b' : 'var(--foreground-muted)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  position: 'relative',
                  padding: '10px 18px',
                  borderRadius: '9999px',
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-zinc-100 -z-10 rounded-full border border-zinc-200/50"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: '#f4f4f5',
                      border: '1px solid #e4e4e7',
                      borderRadius: '9999px',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name.toUpperCase()}
              </a>
            );
          })}
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="ml-4 px-6 py-3 rounded-full text-xs font-bold tracking-widest text-white bg-zinc-900 hover:bg-zinc-800 shadow-sm hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
            style={{
              marginLeft: '20px',
              padding: '10px 20px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: 'white',
              backgroundColor: '#09090b',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s',
            }}
          >
            LET'S TALK <ArrowRight size={13} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 hover:bg-zinc-100 text-zinc-700 transition-colors"
          style={{
            display: 'none',
            padding: '8px',
            borderRadius: '10px',
            backgroundColor: '#f4f4f5',
            border: '1px solid #e4e4e7',
            color: '#09090b',
            cursor: 'pointer',
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-100 bg-white/95 backdrop-blur-md overflow-hidden"
            style={{
              borderTop: '1px solid #e4e4e7',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 24px' }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-all"
                  style={{
                    color: activeSection === item.href.replace('#', '') ? '#09090b' : 'var(--foreground-muted)',
                    backgroundColor: activeSection === item.href.replace('#', '') ? '#f4f4f5' : 'transparent',
                    borderRadius: '8px',
                    padding: '10px 14px',
                  }}
                >
                  {item.name.toUpperCase()}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 w-full text-center px-5 py-3 rounded-xl text-sm font-bold text-white bg-zinc-900 flex items-center justify-center gap-2"
                style={{
                  marginTop: '8px',
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  color: 'white',
                  backgroundColor: '#09090b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                }}
              >
                LET'S TALK <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            display: none !important;
          }
          button {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
