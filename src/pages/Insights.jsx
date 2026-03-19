import React from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const categoryColors = {
  'Data Engineering': { bg: 'rgba(2,132,199,0.1)', color: 'var(--color-accent)' },
  'Infrastructure':   { bg: 'rgba(234,88,12,0.08)', color: '#ea580c' },
  'Business Intelligence': { bg: 'rgba(22,163,74,0.08)', color: '#16a34a' },
  'Data Strategy':    { bg: 'rgba(124,58,237,0.08)', color: '#7c3aed' },
};

const Insights = () => {
  return (
    <div className="fade-in">
      <section className="section gradient-primary pattern-dots-dark" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container text-center" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ marginBottom: 'var(--spacing-6)', color: '#fff', fontSize: '3rem' }}>Insights & <span className="gradient-text">Articles</span></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Expert perspectives on data engineering, analytics, and infrastructure.</p>
        </div>
      </section>

      <section className="section pattern-dots">
        <div className="container" style={{ maxWidth: '860px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          {articles.map((article) => {
            const cat = categoryColors[article.category] || categoryColors['Data Engineering'];
            return (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <article
                  className="fade-in"
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '14px',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid transparent',
                    padding: 'var(--spacing-8)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    transition: 'box-shadow 0.22s ease, border-left-color 0.22s ease, transform 0.22s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderLeftColor = 'var(--color-accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                    e.currentTarget.style.borderLeftColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
                    <span style={{ padding: '4px 12px', borderRadius: '100px', backgroundColor: cat.bg, color: cat.color, fontSize: '0.8125rem', fontWeight: '600' }}>
                      {article.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontSize: '0.8125rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Calendar size={13} /> {article.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={13} /> {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 style={{ fontSize: '1.4375rem', color: 'var(--color-primary)', marginBottom: 'var(--spacing-3)', lineHeight: '1.35' }}>
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{ color: 'var(--color-secondary)', lineHeight: '1.7', marginBottom: 'var(--spacing-6)', fontSize: '0.9625rem' }}>
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600', color: 'var(--color-accent)', fontSize: '0.9rem' }}>
                      Read Article <ArrowRight size={15} />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Insights;
