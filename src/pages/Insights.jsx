import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Insights = () => {
  const articles = [
    {
      title: 'How SMEs Can Build a Modern Data Stack',
      excerpt: 'Discover the affordable, scalable tools small and medium enterprises can use to centralize data and build robust reporting without enterprise budgets.',
      date: 'March 15, 2026',
      category: 'Data Engineering'
    },
    {
      title: 'Common Data Pipeline Mistakes (And How to Avoid Them)',
      excerpt: 'From brittle integrations to ignored schema changes, these are the most frequent pipeline errors that break executive reporting.',
      date: 'February 28, 2026',
      category: 'Infrastructure'
    },
    {
      title: 'Why Most Dashboards Fail to Drive Action',
      excerpt: 'A beautiful dashboard that nobody uses is a failure. Learn how to design BI interfaces that actually influence business decisions.',
      date: 'February 10, 2026',
      category: 'Business Intelligence'
    },
    {
      title: 'How to Create Reliable Business Metrics (KPIs)',
      excerpt: 'Stop relying on vanity metrics. A step-by-step guide to defining, tracking, and validating KPIs that matter for your growth.',
      date: 'January 22, 2026',
      category: 'Data Strategy'
    }
  ];

  return (
    <div className="fade-in">
      <section className="section gradient-primary pattern-dots-dark" style={{ position: 'relative', overflow: 'hidden' }}>
         <div className="container text-center" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ marginBottom: 'var(--spacing-6)', color: '#fff', fontSize: '3rem' }}>Insights & <span className="gradient-text">Articles</span></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Expert perspectives on data engineering, analytics, and infrastructure.</p>
        </div>
      </section>

      <section className="section pattern-dots">
         <div className="container" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
           {articles.map((article, i) => (
             <article key={i} className="glass" style={{ padding: 'var(--spacing-8)', borderRadius: '12px', transition: 'all 0.3s ease', boxShadow: 'var(--shadow)' }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                 e.currentTarget.style.transform = 'translateY(-2px)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.boxShadow = 'var(--shadow)';
                 e.currentTarget.style.transform = 'translateY(0)';
               }}
             >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-4)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: '500' }}>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-4)' }}>
                   <Link to="#" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{article.title}</Link>
                </h2>
                <p style={{ color: 'var(--color-secondary)', marginBottom: 'var(--spacing-4)' }}>{article.excerpt}</p>
                <Link to="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-2)', fontWeight: '500', color: 'var(--color-accent)', textDecoration: 'none' }}>
                  Read Article <ArrowRight size={16} />
                </Link>
             </article>
           ))}
         </div>
      </section>
    </div>
  );
};

export default Insights;
