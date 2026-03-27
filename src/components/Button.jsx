import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, onClick, type = 'button', className = '', style = {} }) => {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.8125rem 1.875rem',
    borderRadius: '2px',
    fontFamily: 'var(--font-sans)',
    fontWeight: '500',
    fontSize: '0.9375rem',
    letterSpacing: '0.01em',
    transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-bg-dark)',
      color: '#ffffff',
    },
    accent: {
      backgroundColor: 'var(--color-accent)',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-bg-dark)',
      border: '1px solid var(--color-border-warm)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#ffffff',
      border: '1px solid rgba(255,255,255,0.25)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-accent)',
      border: '1px solid var(--color-accent)',
    },
  };

  const hoverStyles = {
    primary: { backgroundColor: '#1a3050' },
    accent: { backgroundColor: 'var(--color-accent-hover)' },
    secondary: { borderColor: 'var(--color-bg-dark)', backgroundColor: 'rgba(12,27,46,0.04)' },
    ghost: { backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.5)' },
    outline: { backgroundColor: 'rgba(26,86,219,0.06)' },
  };

  const combinedStyle = { ...base, ...variants[variant], ...style };

  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, hoverStyles[variant] || {});
  };
  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, variants[variant] || {});
    if (style.backgroundColor) e.currentTarget.style.backgroundColor = style.backgroundColor;
  };

  if (to) {
    return (
      <Link
        to={to}
        style={combinedStyle}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={combinedStyle}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
