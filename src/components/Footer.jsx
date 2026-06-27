'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Safe icon getter for Lucide icons only
  const getLucideIcon = (name) => {
    const Icon = LucideIcons[name];
    if (!Icon) {
      console.warn(`Icon "${name}" not found – using fallback.`);
      return () => <span style={{ width: 20, height: 20, display: 'inline-block' }} />;
    }
    return Icon;
  };

  // Lucide icons (keep these)
  const Mail = getLucideIcon('Mail');
  const MapPin = getLucideIcon('MapPin');
  const ArrowUp = getLucideIcon('ArrowUp');
  const Sparkles = getLucideIcon('Sparkles');
  const Home = getLucideIcon('Home');
  const Utensils = getLucideIcon('Utensils');
  const Image = getLucideIcon('Image');
  const Coffee = getLucideIcon('Coffee');
  const Briefcase = getLucideIcon('Briefcase');

  // Social links – now using react-icons (no getIcon)
  const socialLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:airavathafoundry@gmail.com',
      color: '#ea4335',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/airavathafoundry/',
      color: '#e4405f',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/airavatha-foundry-0a9a73387/',
      color: '#0a66c2',
    },
  ];

  const navLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Restaurant', href: '#restaurant', icon: Utensils },
    { label: 'Poster Making', href: '#poster', icon: Image },
    { label: 'Bakery & Cafe', href: '#bakery', icon: Coffee },
    { label: 'Services', href: '#services', icon: Briefcase },
  ];

  return (
    <footer
      style={{
        background: 'linear-gradient(145deg, #0f172a, #1a1a3e, #0f172a)',
        color: '#cbd5e1',
        borderTop: '1px solid rgba(99, 102, 241, 0.15)',
        padding: '64px 24px 28px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient animated glow */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '60%',
          height: '80%',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'footerGlow 10s ease-in-out infinite alternate',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '50%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'footerGlow 12s ease-in-out infinite alternate-reverse',
        }}
      />

      <style>{`
        @keyframes footerGlow {
          0% { transform: scale(1) translate(0, 0); opacity: 0.4; }
          100% { transform: scale(1.2) translate(5%, 5%); opacity: 1; }
        }
      `}</style>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 2.5fr 1.5fr',
            gap: '48px',
            marginBottom: '40px',
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <motion.div
                whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.05 }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 900,
                  boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
                  flexShrink: 0,
                }}
              >
                <Sparkles size={22} />
              </motion.div>
              <span
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #e0e7ff, #a5b4fc, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                AIravatha Foundry
              </span>
            </div>
            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: 1.8,
                color: '#94a3b8',
                maxWidth: '300px',
                marginBottom: '20px',
              }}
            >
              Premium digital craftsmanship for modern brands.
            </p>
            {/* Social icons row – now using react-icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(71, 85, 105, 0.3)',
                    color: '#94a3b8',
                    transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    textDecoration: 'none',
                    backdropFilter: 'blur(4px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${color}22`;
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.boxShadow = `0 0 28px ${color}44`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(30, 41, 59, 0.5)';
                    e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#64748b',
                marginBottom: '18px',
              }}
            >
              Explore
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px 20px',
              }}
            >
              {navLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#a5b4fc'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  <Icon size={16} style={{ color: '#64748b' }} />
                  {label}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                      transition: 'width 0.3s ease',
                      borderRadius: '2px',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.width = '100%'}
                    onMouseLeave={(e) => e.currentTarget.style.width = '0%'}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h4
              style={{
                fontSize: '0.65rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#64748b',
                marginBottom: '18px',
              }}
            >
              Connect
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li>
                <motion.a
                  href="https://www.google.com/maps/place/Mancherial,+Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#a5b4fc'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  <MapPin size={18} style={{ color: '#64748b', flexShrink: 0 }} />
                  <span>Mancherial, Telangana</span>
                  <span
                    style={{
                      fontSize: '0.55rem',
                      color: '#6366f1',
                      background: 'rgba(99,102,241,0.15)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                    }}
                  >
                    MAP
                  </span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:airavathafoundry@gmail.com"
                  whileHover={{ x: 3 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#a5b4fc'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  <Mail size={18} style={{ color: '#64748b', flexShrink: 0 }} />
                  <span>airavathafoundry@gmail.com</span>
                </motion.a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            borderTop: '1px solid rgba(71, 85, 105, 0.2)',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 500 }}>
            © {currentYear} Airavatha Foundry. All rights reserved.
          </p>
          <motion.a
            href="#home"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 20px',
              borderRadius: '9999px',
              background: 'rgba(30, 41, 59, 0.4)',
              border: '1px solid rgba(71, 85, 105, 0.2)',
              color: '#94a3b8',
              fontSize: '0.7rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              backdropFilter: 'blur(4px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.15)';
              e.currentTarget.style.borderColor = '#6366f1';
              e.currentTarget.style.color = '#a5b4fc';
              e.currentTarget.style.boxShadow = '0 0 28px rgba(99,102,241,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(30, 41, 59, 0.4)';
              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.2)';
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ArrowUp size={14} />
            Back to Top
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}