'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Globe, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: '#ffffff',
        borderTop: '1px solid #e4e4e7',
        borderBottom: '1px solid #e4e4e7',
        padding: '112px 0',
      }}
    >
      <style>{`
        /* ── tokens ── */
        :root {
          --ink:    #16162a;
          --blue:   #4f46e5;
          --bluelt: #818cf8;
          --bdr:    #e4e4e7;
          --muted:  #6b6456;
          --pale:   #eef2ff;
        }

        /* ── card base ── */
        .s-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid var(--bdr);
          box-shadow: 0 2px 12px rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.02);
          transition: box-shadow .25s, transform .25s, border-color .25s;
          padding: 32px;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        /* subtle glow on hover */
        .s-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 22px;
          padding: 2px;
          background: linear-gradient(135deg, rgba(79,70,229,0.3), transparent 60%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity .35s;
          pointer-events: none;
        }
        .s-card:hover::before {
          opacity: 1;
        }

        /* ── section badge ── */
        .s-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: .6rem;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--blue);
          background: var(--pale);
          border: 1.5px solid #c7d2fe;
          padding: 5px 14px;
          border-radius: 9999px;
        }

        /* ── typography ── */
        .s-h2 {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 900;
          color: var(--ink);
          letter-spacing: -0.022em;
          margin: 18px 0 14px;
          line-height: 1.12;
        }
        .s-h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.015em;
          margin: 0 0 12px;
        }
        .s-p {
          color: var(--muted);
          font-size: 0.87rem;
          line-height: 1.6;
          font-weight: 500;
          margin: 0 0 24px;
        }

        /* ── checklist ── */
        .s-checks {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s-checks li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #2e2a24;
        }
        .s-checks li svg {
          flex-shrink: 0;
          margin-top: 1px;
          transition: transform 0.25s, color 0.25s;
        }
        .s-card:hover .s-checks li svg {
          transform: scale(1.15) translateX(2px);
          color: #4f46e5;
        }

        /* ── divider ── */
        .s-divider {
          width: 40px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--blue), var(--bluelt));
          margin: 0 auto 20px;
        }

        /* ── icon box ── */
        .s-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--pale);
          border: 1.5px solid #c7d2fe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          margin-bottom: 20px;
          transition: background 0.25s, border-color 0.25s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .s-card:hover .s-icon {
          background: #dbeafe;
          border-color: var(--blue);
          transform: scale(1.08) rotate(-4deg);
        }

        /* ── footer link ── */
        .s-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 800;
          font-size: 0.8rem;
          color: var(--blue);
          text-decoration: none;
          transition: color .2s;
        }
        .s-link .arrow {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: inline-block;
        }
        .s-card:hover .s-link .arrow {
          transform: translateX(6px);
        }
        .s-link:hover {
          color: #3730a3;
        }

        /* ── responsive grid ── */
        .s-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        @media (max-width: 640px) {
          .s-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="s-badge">✦ Our Services</span>
          <h2 className="s-h2">
            Everything Your{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #4f46e5, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
               Business needs To Grow
            </span>
          </h2>
          <div className="s-divider" />
          <p
            style={{
              color: '#6b6456',
              fontSize: '0.95rem',
              fontWeight: 500,
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            From websites and online stores to branding and marketing, we create digital solutions that help your business attract more customers and grow.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="s-grid">
          {/* Card 1: Websites */}
          <motion.div
            className="s-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(79,70,229,0.12)' }}
          >
            <div className="s-icon">
              <Laptop size={22} strokeWidth={2} />
            </div>
            <h3 className="s-h3">Websites for Entrepreneurs</h3>
            <p className="s-p">
              Professional websites designed to showcase your business, attract customers, and help you grow online.
            </p>
            <ul className="s-checks">
              <li>
                <CheckCircle size={16} color="#4f46e5" />
                <span>Fast and mobile-friendly</span>
              </li>
              <li>
                <CheckCircle size={16} color="#4f46e5" />
                <span>Online Menu & enquiry forms</span>
              </li>
              <li>
                <CheckCircle size={16} color="#4f46e5" />
                <span>Easy to manage and update</span>
              </li>
            </ul>
            {/* <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #e4e4e7' }}>
              <a href="#contact" className="s-link">
                Learn More <ArrowRight size={14} className="arrow" />
              </a>
            </div> */}
          </motion.div>

          {/* Card 2: Portfolios */}
          <motion.div
            className="s-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(79,70,229,0.12)' }}
          >
            <div className="s-icon">
              <Globe size={22} strokeWidth={2} />
            </div>
            <h3 className="s-h3">Portfolio Websites</h3>
            <p className="s-p">
              Showcase your work, skills, or business with a modern portfolio that leaves a lasting impression on clients and employers.
            </p>
            <ul className="s-checks">
              <li>
                <CheckCircle size={16} color="#4f46e5" />
                <span>Beautiful project gallery</span>
              </li>
              <li>
                <CheckCircle size={16} color="#4f46e5" />
                <span>Resume & contact sections</span>
              </li>
              <li>
                <CheckCircle size={16} color="#4f46e5" />
                <span>Professional modern design</span>
              </li>
            </ul>
            {/* <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #e4e4e7' }}>
              <a href="#contact" className="s-link">
                Learn More <ArrowRight size={14} className="arrow" />
              </a>
            </div> */}
          </motion.div>

          {/* Card 3: Visual Assets */}
          <motion.div
            className="s-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(79,70,229,0.12)' }}
          >
            <div className="s-icon">
              <Sparkles size={22} strokeWidth={2} />
            </div>
            <h3 className="s-h3">Posters & Social Media Designs</h3>
            <p className="s-p">
              Creative posters, promotional designs, and social media graphics that help your business grab attention and reach more customers.
            </p>
            <ul className="s-checks">
              <li>
                <CheckCircle size={16} color="#4f46e5" />
                <span>Business promotion posters</span>
              </li>
              <li>
                <CheckCircle size={16} color="#4f46e5" />
                <span>Product & event advertisements</span>
              </li>
              <li>
                <CheckCircle size={16} color="#4f46e5" />
                <span>Social media graphics</span>
              </li>
            </ul>
            {/* <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #e4e4e7' }}>
              <a href="#contact" className="s-link">
                Learn More <ArrowRight size={14} className="arrow" />
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}