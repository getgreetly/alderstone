import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg-dark)', color: 'var(--color-text-light)', padding: 'var(--spacing-16) 0 var(--spacing-8)' }}>
      <div
        className="container footer-grid"
        style={{ display: 'grid', gap: 'var(--spacing-12)', marginBottom: 'var(--spacing-12)' }}
      >
        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <Link
            to="/"
            style={{
              color: '#fff',
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              fontSize: '1.5rem',
              letterSpacing: '-0.01em',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
            }}
          >
            <img src={logo} alt="Alderstone" style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            <span>Alderstone<span style={{ color: 'var(--color-gold)' }}>.</span></span>
          </Link>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-light-muted)', lineHeight: '1.7', maxWidth: '280px', margin: 0 }}>
            We empower growing businesses to build reliable data infrastructure and make confident decisions.
          </p>
          <a
            href="https://www.linkedin.com/company/alderstoneconsulting/"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'var(--color-text-light-muted)', fontSize: '0.875rem', textDecoration: 'none', width: 'fit-content', transition: 'color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-light-muted)'; }}
          >
            LinkedIn →
          </a>
        </div>

        {/* Services */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <p style={{ fontSize: '0.6875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', margin: '0 0 var(--spacing-2)' }}>Services</p>
          {['Data Engineering', 'Business Intelligence', 'Analytics & Insights', 'Data Strategy'].map((s) => (
            <Link key={s} to="/services" style={{ color: 'var(--color-text-light-muted)', fontSize: '0.9375rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-light-muted)'; }}
            >{s}</Link>
          ))}
        </div>

        {/* Company */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <p style={{ fontSize: '0.6875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', margin: '0 0 var(--spacing-2)' }}>Company</p>
          {[
            { label: 'About Us', path: '/about' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'Industries', path: '/industries' },
            { label: 'Insights', path: '/insights' },
          ].map(({ label, path }) => (
            <Link key={path} to={path} style={{ color: 'var(--color-text-light-muted)', fontSize: '0.9375rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-light-muted)'; }}
            >{label}</Link>
          ))}
        </div>

        {/* Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          <p style={{ fontSize: '0.6875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', margin: '0 0 var(--spacing-2)' }}>Connect</p>
          <Link to="/contact" style={{ color: 'var(--color-text-light-muted)', fontSize: '0.9375rem', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-light-muted)'; }}
          >Contact Us</Link>
          <a href="mailto:info@alderstoneconsulting.com" style={{ color: 'var(--color-text-light-muted)', fontSize: '0.9375rem', textDecoration: 'none', transition: 'color 0.2s', wordBreak: 'break-all' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-light-muted)'; }}
          >info@alderstoneconsulting.com</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="container footer-bottom"
        style={{ borderTop: '1px solid var(--color-border-dark)', paddingTop: 'var(--spacing-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-light-muted)', margin: 0 }}>
          © {new Date().getFullYear()} Alderstone Consulting Ltd. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
          {[
            { label: 'Privacy Policy', path: '/privacy-policy' },
            { label: 'Terms', path: '/terms-of-service' },
            { label: 'Cookies', path: '/cookie-policy' },
          ].map(({ label, path }) => (
            <Link key={path} to={path} style={{ color: 'var(--color-text-light-muted)', fontSize: '0.8125rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-light-muted)'; }}
            >{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
