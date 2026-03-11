import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, onClick, type = 'button', className = '' }) => {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem 1.5rem',
    borderRadius: '4px',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    border: 'none',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)',
    },
    accent: {
      backgroundColor: 'var(--color-accent)',
      color: '#ffffff',
    }
  };

  const style = { ...baseStyle, ...variants[variant] };

  if (to) {
    return (
      <Link to={to} style={style} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} style={style} className={className}>
      {children}
    </button>
  );
};

export default Button;
