import { Link } from 'react-router-dom';

const Card = ({ title, description, icon: Icon, to, children, className = '' }) => {
  return (
    <div
      className={`reveal ${className}`}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--color-border)',
        borderTop: '2px solid var(--color-border)',
        borderRadius: '2px',
        padding: '2.25rem 2rem',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: to ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderTopColor = 'var(--color-gold)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderTopColor = 'var(--color-border)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {Icon && (
        <div style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-4)', opacity: 0.9 }}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
      )}
      <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: '600', marginBottom: 'var(--spacing-3)', color: 'var(--color-text-heading)' }}>
        {to ? <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>{title}</Link> : title}
      </h3>
      {description && (
        <p style={{ color: 'var(--color-text-muted)', marginBottom: children ? 'var(--spacing-4)' : 0, flex: 1, fontSize: '0.9375rem', lineHeight: '1.65' }}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default Card;
