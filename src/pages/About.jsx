import React from 'react';
import { Users, Target, ShieldCheck } from 'lucide-react';
import avatarSeun from '../assets/avatar_seun.png';
import avatarKomi from '../assets/avatar_komi.png';

const About = () => {
  return (
    <div className="fade-in">
      {/* Header */}
      <section className="section gradient-primary pattern-dots-dark" style={{ position: 'relative', overflow: 'hidden' }}>
         <div className="container text-center" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ marginBottom: 'var(--spacing-6)', color: '#fff', fontSize: '3rem' }}>About the <span className="gradient-text">Firm</span></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>We help organizations build reliable data systems and make smarter decisions through analytics.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
           <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Our Story & Mission</h2>
           <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-4)' }}>
             Alderstone Consulting was founded by Seun Kasali and Komi Adebosin, two experienced data engineers and analytics professionals who saw how many companies struggle to unlock true value from their data.
           </p>
           <p style={{ fontSize: '1.125rem' }}>
             We watched businesses base key choices on spreadsheets, disconnected applications, and “gut feeling.” Our mission is to eliminate that uncertainty. We partner with growing companies to build modern data stacks that deliver single-source-of-truth reliability.
           </p>
        </div>
      </section>

      {/* Founders */}
      <section className="section pattern-dots">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-12)', textAlign: 'center' }}>Leadership</h2>
          <div className="grid grid-cols-2 gap-12" style={{ maxWidth: '900px', margin: '0 auto' }}>
             <div className="glass" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'var(--spacing-8)', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
                <img src={avatarSeun} alt="Seun Kasali Avatar" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: 'var(--spacing-6)', border: '4px solid #fff', boxShadow: 'var(--shadow)', objectFit: 'cover' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-2)' }}>Seun Kasali</h3>
                <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: 'var(--spacing-4)' }}>Co-Founder & Lead Engineer</p>
                <p style={{ fontSize: '1rem', color: 'var(--color-secondary)' }}>Expert in building scalable data pipelines and managing large-scale infrastructure on cloud platforms.</p>
             </div>
             <div className="glass" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'var(--spacing-8)', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
                <img src={avatarKomi} alt="Komi Adebosin Avatar" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: 'var(--spacing-6)', border: '4px solid #fff', boxShadow: 'var(--shadow)', objectFit: 'cover' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-2)' }}>Komi Adebosin</h3>
                <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: 'var(--spacing-4)' }}>Co-Founder & Analytics Director</p>
                <p style={{ fontSize: '1rem', color: 'var(--color-secondary)' }}>Specializes in business intelligence, automated reporting, and translating raw data into strategic business insights.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: 'var(--spacing-8)' }}>Our Approach to Consulting</h2>
          <div className="grid grid-cols-3 gap-6 text-left">
            <div style={{ padding: 'var(--spacing-6)', backgroundColor: '#fff', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
               <Target color="var(--color-accent)" size={32} style={{ marginBottom: 'var(--spacing-4)' }} />
               <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-2)' }}>Outcome Driven</h3>
               <p style={{ fontSize: '0.85rem' }}>We don't build tech for tech's sake. Everything we engineer is designed to impact your bottom line.</p>
            </div>
            <div style={{ padding: 'var(--spacing-6)', backgroundColor: '#fff', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
               <Users color="var(--color-accent)" size={32} style={{ marginBottom: 'var(--spacing-4)' }} />
               <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-2)' }}>Collaborative</h3>
               <p style={{ fontSize: '0.85rem' }}>We embed closely with your team to understand your unique operational pain points.</p>
            </div>
            <div style={{ padding: 'var(--spacing-6)', backgroundColor: '#fff', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
               <ShieldCheck color="var(--color-accent)" size={32} style={{ marginBottom: 'var(--spacing-4)' }} />
               <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-2)' }}>Reliable</h3>
               <p style={{ fontSize: '0.85rem' }}>Trust is everything. Our data pipelines are fault-tolerant and our dashboards are precise.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
