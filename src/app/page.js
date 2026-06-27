// src/app/page.js
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RestaurantSection from '@/components/RestaurantSection';
import PosterMaking from '@/components/PosterMaking';
import BakeryCafe from '@/components/BakeryCafe';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Aura Studio | Premium Freelance Web Dev & Design',
  description: 'Gen Z-styled high-performing single-page websites, interactive 3D menus, bakery customizers, and eye-melting posters.',
};

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', paddingTop: '10px', paddingBottom: '15px', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        <Hero />
        <RestaurantSection />
        <PosterMaking />
        <BakeryCafe />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}