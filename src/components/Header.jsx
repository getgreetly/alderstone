import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'About', path: '/about' },
    { label: 'Insights', path: '/insights' },
  ];

  return (
    <header className="glass header-content" style={{ position: 'sticky', top: 0, zIndex: 50, padding: 'var(--spacing-4) var(--spacing-6)', borderBottom: '1px solid var(--color-border)' }}>
      <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '1.25rem', letterSpacing: '-0.02em', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
        <img src="/src/assets/logo.png" alt="Alderstone Logo Mark" style={{ height: '32px', width: 'auto' }} />
        <span>Alderstone<span style={{ color: 'var(--color-accent)' }}>.</span></span>
      </Link>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              color: location.pathname === item.path ? 'var(--color-primary)' : 'var(--color-secondary)',
              fontWeight: location.pathname === item.path ? '600' : '400',
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}
          >
            {item.label}
          </Link>
        ))}
        <Button to="/contact" variant="primary">Book a Consultation</Button>
      </nav>
    </header>
  );
};

export default Header;
