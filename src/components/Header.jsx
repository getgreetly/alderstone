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
    <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 50, padding: 'var(--spacing-4) var(--spacing-6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)' }}>
      <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '1.25rem', letterSpacing: '-0.02em', textDecoration: 'none' }}>
        Alderstone<span style={{ color: 'var(--color-accent)' }}>.</span>
      </Link>

      <nav style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center' }}>
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
