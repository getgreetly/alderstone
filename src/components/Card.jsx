import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, icon: Icon, to, children, className = '' }) => {
  return (
    <div
      className={`card fade-in ${className}`}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: 'var(--spacing-8)',
        boxShadow: 'var(--shadow)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: to ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        if (to) {
          e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.borderColor = 'var(--color-border-glow)';
        }
      }}
      onMouseLeave={(e) => {
        if (to) {
          e.currentTarget.style.boxShadow = 'var(--shadow)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'var(--color-border)';
        }
      }}
    >
      {Icon && (
        <div style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-4)' }}>
          <Icon size={32} />
        </div>
      )}
      <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-2)' }}>
        {to ? <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>{title}</Link> : title}
      </h3>
      {description && <p style={{ color: 'var(--color-secondary)', marginBottom: children ? 'var(--spacing-4)' : 0, flex: 1 }}>{description}</p>}
      {children}
    </div>
  );
};

export default Card;
