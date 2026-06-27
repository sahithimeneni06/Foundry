'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, User, MessageSquare, CheckCircle, AlertCircle, Coins, Zap } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Web Dev',
    budget: 'Seed Funded',
    mood: 'ASAP',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = ['Restaurant', 'Website', 'Poster Design', 'Bakery/Cafe', 'Other'];
  
  const budgets = [
    { name: 'Broke', value: 'Broke' },
    { name: 'Seed Funded', value: 'Seed Funded' },
    { name: 'Venture Backed', value: 'Venture Backed' },
    { name: 'Enterprise Whale', value: 'Enterprise Whale' }
  ];

  const moods = [
    { name: 'ASAP', value: 'ASAP' },
    { name: 'Chill', value: 'Chill' },
    { name: 'No rush', value: 'No rush' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus('error');
      setErrorMessage('Please provide both your name and email address so we can chat!');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong saving details.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Connection failed. Please check if the server is running.');
    }
  };

  return (
    <section 
      id="contact" 
      style={{ 
        backgroundColor: '#f7efe8', 
        padding: '100px 0', 
        borderTop: '1px solid #f0e1da', 
        borderBottom: '1px solid #faf4f1',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <style>{`
        /* ── all styles scoped to this section ── */
        .contact-wrapper * {
          box-sizing: border-box;
        }

        .contact-wrapper {
          max-width: 750px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* badge */
        .contact-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #d4735a;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(4px);
          border: 1px solid #f0d5c8;
          padding: 6px 16px;
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .contact-heading {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: #2d1b14;
          margin: 16px 0 12px;
          line-height: 1.12;
        }

        .contact-heading span {
          background: linear-gradient(135deg, #d4735a, #e8835a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-sub {
          color: #6b4c3a;
          font-size: 1rem;
          font-weight: 500;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* card */
        .contact-card {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(4px);
          border: 1px solid #f0d5c8;
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 12px 48px rgba(180,100,70,0.08), 0 2px 8px rgba(0,0,0,0.02);
          position: relative;
          transition: box-shadow 0.3s ease;
        }

        .contact-card:hover {
          box-shadow: 0 20px 64px rgba(180,100,70,0.12), 0 2px 8px rgba(0,0,0,0.02);
        }

        /* form groups */
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.6rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #6b4c3a;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .form-input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid #f0d5c8;
          background: #fef9f6;
          font-size: 0.85rem;
          font-weight: 500;
          color: #2d1b14;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }

        .form-input:focus {
          border-color: #d4735a;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(212,115,90,0.15);
        }

        .form-input::placeholder {
          color: #b09080;
          font-weight: 400;
          font-size: 0.8rem;
        }

        textarea.form-input {
          resize: vertical;
          min-height: 90px;
        }

        /* segmented controls */
        .segmented-wrap {
          display: flex;
          background: #fef6f0;
          border: 1px solid #f0d5c8;
          border-radius: 12px;
          padding: 4px;
          gap: 2px;
        }

        .segmented-btn {
          flex: 1;
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          background: transparent;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #8b6b58;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }

        .segmented-btn.active {
          background: white;
          color: #2d1b14;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .segmented-btn:not(.active):hover {
          color: #2d1b14;
          background: rgba(255,255,255,0.5);
        }

        /* submit button */
        .submit-btn {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #d4735a, #e8835a);
          color: white;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.3s, transform 0.15s, box-shadow 0.3s;
          box-shadow: 0 4px 16px rgba(212,115,90,0.25);
          font-family: inherit;
        }

        .submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #c0624a, #d4735a);
          box-shadow: 0 6px 24px rgba(212,115,90,0.35);
          transform: translateY(-1px);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(212,115,90,0.2);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* success state */
        .success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #fef6f0;
          border: 2px solid #e8835a;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4735a;
          margin: 0 auto 16px;
        }

        .success-card {
          background: #fef6f0;
          border: 1px solid #f0d5c8;
          border-radius: 12px;
          padding: 20px 24px;
          width: 100%;
          max-width: 380px;
          text-align: left;
          font-family: 'SF Mono', 'Menlo', monospace;
          font-size: 0.6rem;
          color: #4d3228;
          line-height: 1.8;
        }

        .success-card .label {
          opacity: 0.5;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .reset-btn {
          padding: 8px 24px;
          border: 2px solid #f0d5c8;
          border-radius: 9999px;
          background: transparent;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #4d3228;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          font-family: inherit;
        }

        .reset-btn:hover {
          background: #fef6f0;
          border-color: #d4735a;
        }

        /* error box */
        .error-box {
          padding: 12px 16px;
          border-radius: 12px;
          background: #fef6f0;
          border: 1px solid #f0d5c8;
          color: #6b4c3a;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* responsive */
        @media (max-width: 768px) {
          .contact-card {
            padding: 32px 20px;
          }
          .grid-3 {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .form-grid {
            gap: 16px !important;
          }
        }
      `}</style>

      <div className="contact-wrapper">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="contact-badge">✦ Collaboration Brief</span>
          <h2 className="contact-heading">
            Start a <span>Project Inquiry</span>
          </h2>
          <p className="contact-sub">
            Submit your requirements below. We review project parameters within 24 business hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="contact-card">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                style={{ textAlign: 'center', padding: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}
              >
                <div className="success-icon">
                  <CheckCircle size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2d1b14', marginBottom: '6px' }}>Brief Received Successfully</h3>
                  <p style={{ fontSize: '0.8rem', color: '#6b4c3a', fontWeight: 500, maxWidth: '400px', margin: '0 auto' }}>
                    We've logged your inquiry. You'll hear back from us shortly.
                  </p>
                </div>
                <div className="success-card">
                  <div style={{ borderBottom: '1px solid #f0d5c8', paddingBottom: '6px', marginBottom: '8px', fontWeight: 800, color: '#d4735a', letterSpacing: '0.06em', fontSize: '0.55rem', textTransform: 'uppercase' }}>
                    INQUIRY SNAPSHOT
                  </div>
                  <p><span className="label">NAME</span>  {formData.name}</p>
                  <p><span className="label">EMAIL</span> {formData.email}</p>
                  <p><span className="label">PROJECT</span> {formData.projectType.toUpperCase()}</p>
                  <p><span className="label">BUDGET</span> {formData.budget.toUpperCase()}</p>
                  <p style={{ marginBottom: 0 }}><span className="label">PACE</span> {formData.mood.toUpperCase()}</p>
                </div>
                <button 
                  className="reset-btn"
                  onClick={() => {
                    setFormData({ name: '', phone: '', email: '', projectType: 'Web Dev', budget: 'Seed Funded', mood: 'ASAP', message: '' });
                    setStatus('idle');
                  }}
                >
                  SUBMIT NEW INQUIRY
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                {/* 3-column grid */}
                <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label"><User size={12} /> Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Airavatha"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label"><Phone size={12} /> Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=""
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label"><Mail size={12} /> Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="airavathafoundry@gmail.com"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="form-group">
                  <label className="form-label">Project Category</label>
                  <div className="segmented-wrap">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleSelect('projectType', type)}
                        className={`segmented-btn ${formData.projectType === type ? 'active' : ''}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                {/* <div className="form-group">
                  <label className="form-label"><Coins size={12} /> Budget Tier</label>
                  <div className="segmented-wrap">
                    {budgets.map((b) => (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => handleSelect('budget', b.value)}
                        className={`segmented-btn ${formData.budget === b.value ? 'active' : ''}`}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>
                </div> */}

                {/* Mood */}
                <div className="form-group">
                  <label className="form-label"><Zap size={12} /> Project Pace</label>
                  <div className="segmented-wrap">
                    {moods.map((m) => (
                      <button
                        key={m.value}
                        type="button"
                        onClick={() => handleSelect('mood', m.value)}
                        className={`segmented-btn ${formData.mood === m.value ? 'active' : ''}`}
                      >
                        {m.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label"><MessageSquare size={12} /> Project Brief</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className="form-input"
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="error-box"
                  >
                    <AlertCircle size={14} color="#d4735a" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="submit-btn"
                >
                  {status === 'loading' ? (
                    <>
                      <span style={{ display: 'inline-block', width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.25)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND INQUIRY <Send size={14} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* keyframe for spinner */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}