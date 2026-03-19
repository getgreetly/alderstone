import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/articles';
import Button from '../components/Button';

const categoryColors = {
  'Data Engineering':      { bg: 'rgba(2,132,199,0.15)', color: 'var(--color-accent)' },
  'Infrastructure':        { bg: 'rgba(234,88,12,0.12)', color: '#ea580c' },
  'Business Intelligence': { bg: 'rgba(22,163,74,0.12)', color: '#16a34a' },
  'Data Strategy':         { bg: 'rgba(124,58,237,0.12)', color: '#7c3aed' },
};

const renderBlock = (block, i) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginTop: '2.5rem', marginBottom: '0.75rem', lineHeight: '1.35' }}>
          {block.text}
        </h2>
      );
    case 'p':
      return (
        <p key={i} style={{ color: 'var(--color-secondary)', lineHeight: '1.8', fontSize: '1.0625rem', marginBottom: '0' }}>
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={i} style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '0' }}>
          {block.items.map((item, j) => (
            <li key={j} style={{ color: 'var(--color-secondary)', lineHeight: '1.75', fontSize: '1.0625rem' }}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const InsightArticle = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h1 style={{ marginBottom: '1rem' }}>Article Not Found</h1>
          <p style={{ color: 'var(--color-secondary)', marginBottom: '2rem' }}>This article does not exist or may have been moved.</p>
          <Button to="/insights" variant="primary">Back to Insights</Button>
        </div>
      </div>
    );
  }

  const cat = categoryColors[article.category] || categoryColors['Data Engineering'];
  const otherArticles = articles.filter(a => a.slug !== slug).slice(0, 2);

  return (
    <div className="fade-in">
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--color-primary)', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(2,132,199,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <Link to="/insights" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
          >
            <ArrowLeft size={15} /> Back to Insights
          </Link>

          <div style={{ marginBottom: '1.25rem' }}>
            <span style={{ padding: '5px 14px', borderRadius: '100px', backgroundColor: cat.bg, color: cat.color, fontSize: '0.8125rem', fontWeight: '600' }}>
              {article.category}
            </span>
          </div>

          <h1 style={{ color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.625rem)', lineHeight: '1.25', marginBottom: '1.5rem' }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={14} /> {article.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} /> {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: '4rem 0 5rem', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          {/* Intro excerpt */}
          <p style={{ fontSize: '1.1875rem', color: 'var(--color-primary)', fontWeight: '500', lineHeight: '1.7', marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--color-border)' }}>
            {article.excerpt}
          </p>

          {/* Content blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {article.content.map((block, i) => renderBlock(block, i))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '4rem', padding: '2.5rem', backgroundColor: 'var(--color-surface)', borderRadius: '14px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Work With Us</p>
            <h3 style={{ fontSize: '1.375rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Ready to build a data foundation your business can trust?</h3>
            <p style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '0.9625rem' }}>Book a free 30-minute consultation to discuss your data challenges.</p>
            <Button to="/contact" variant="accent">Book a Consultation</Button>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {otherArticles.length > 0 && (
        <section style={{ padding: '4rem 0 5rem', backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container" style={{ maxWidth: '860px' }}>
            <h2 style={{ fontSize: '1.375rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>More Articles</h2>
            <div className="grid grid-cols-2 gap-6">
              {otherArticles.map(a => {
                const c = categoryColors[a.category] || categoryColors['Data Engineering'];
                return (
                  <Link key={a.slug} to={`/insights/${a.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid var(--color-border)', padding: '1.75rem', height: '100%', transition: 'box-shadow 0.2s, transform 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', cursor: 'pointer' }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.09)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <span style={{ padding: '3px 10px', borderRadius: '100px', backgroundColor: c.bg, color: c.color, fontSize: '0.75rem', fontWeight: '600', display: 'inline-block', marginBottom: '0.875rem' }}>
                        {a.category}
                      </span>
                      <h3 style={{ fontSize: '1.0625rem', color: 'var(--color-primary)', lineHeight: '1.4', marginBottom: '0.5rem' }}>{a.title}</h3>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '5px', margin: 0 }}>
                        <Clock size={12} /> {a.readTime}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default InsightArticle;
