import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'About', path: '/about' },
    { label: 'Insights', path: '/insights' },
  ];

  return (
    <header
      className="header-content"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: scrolled ? '0.875rem 2rem' : '1.125rem 2rem',
        backgroundColor: scrolled ? 'rgba(250, 250, 247, 0.96)' : 'rgba(250, 250, 247, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
        transition: 'padding 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
        flexWrap: 'wrap',
      }}
    >
      <Link
        to="/"
        onClick={() => setIsMobileMenuOpen(false)}
        style={{
          color: 'var(--color-primary)',
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
        <img src={logo} alt="Alderstone" style={{ height: '28px', width: 'auto' }} />
        <span>
          Alderstone<span style={{ color: 'var(--color-gold)' }}>.</span>
        </span>
      </Link>

      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{ background: 'none', border: 'none', color: 'var(--color-primary)', padding: '4px', lineHeight: 0 }}
        aria-label="Toggle Navigation Menu"
      >
        {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
      </button>

      <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-sans)',
                color: active ? 'var(--color-text-heading)' : 'var(--color-text-muted)',
                fontWeight: active ? '500' : '400',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                letterSpacing: '0.005em',
                position: 'relative',
                paddingBottom: '2px',
                borderBottom: active ? '1px solid var(--color-text-heading)' : '1px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text-heading)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = active ? 'var(--color-text-heading)' : 'var(--color-text-muted)'; }}
            >
              {item.label}
            </Link>
          );
        })}
        <div onClick={() => setIsMobileMenuOpen(false)}>
          <Button to="/contact" variant="primary">Book a Consultation</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
