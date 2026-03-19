import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="section-bg" style={{ borderTop: '1px solid var(--color-border)', padding: 'var(--spacing-16) 0 var(--spacing-8)' }}>
      <div className="container grid grid-cols-4 gap-8 fade-in footer-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '1.25rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
            <img src={logo} alt="Alderstone Logo Mark" style={{ height: '32px', width: 'auto' }} />
            <span>Alderstone<span style={{ color: 'var(--color-accent)' }}>.</span></span>
          </Link>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
            We empower businesses to turn raw data into strategic assets. Fast, reliable, and scalable data infrastructure for modern teams.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-2)' }}>Services</h4>
          <Link to="/services" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>Data Engineering</Link>
          <Link to="/services" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>Business Intelligence</Link>
          <Link to="/services" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>Analytics & Insights</Link>
          <Link to="/services" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>Data Strategy</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-2)' }}>Company</h4>
          <Link to="/about" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>About Us</Link>
          <Link to="/case-studies" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>Case Studies</Link>
          <Link to="/industries" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>Industries</Link>
          <Link to="/insights" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>Insights / Blog</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-2)' }}>Connect</h4>
          <Link to="/contact" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>Contact Us</Link>
          <a href="mailto:info@alderstoneconsulting.com" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>info@alderstoneconsulting.com</a>
          <a href="#" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>LinkedIn</a>
          <a href="#" style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>Twitter (X)</a>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 footer-bottom" style={{ borderTop: '1px solid var(--color-border)', marginTop: 'var(--spacing-8)', paddingTop: 'var(--spacing-8)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '0.8rem', margin: 0 }}>&copy; {new Date().getFullYear()} Alderstone Consulting. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
          <Link to="/privacy-policy" style={{ color: 'var(--color-secondary)', fontSize: '0.8rem' }}>Privacy Policy</Link>
          <Link to="/terms-of-service" style={{ color: 'var(--color-secondary)', fontSize: '0.8rem' }}>Terms of Service</Link>
          <Link to="/cookie-policy" style={{ color: 'var(--color-secondary)', fontSize: '0.8rem' }}>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
