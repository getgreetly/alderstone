import React from 'react';
import Card from '../components/Card';
import { Database, LineChart, Cpu, Lightbulb, CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <div className="fade-in">
      <section className="section bg-surface">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h1 style={{ marginBottom: 'var(--spacing-6)' }}>Our Services</h1>
          <p style={{ fontSize: '1.125rem' }}>We help growing companies design reliable data pipelines, analytics systems, and dashboards that turn raw data into clear business decisions.</p>
        </div>
      </section>

      <section className="section pattern-dots">
        <div className="container grid grid-cols-2 gap-12" style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)' }}>
          {/* Data Engineering */}
          <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
            <div style={{ color: 'var(--color-primary)' }}><Database size={40} /></div>
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-4)' }}>Data Engineering</h2>
              <p>We design and build modern data infrastructure that centralizes your business data and ensures it is reliable, scalable, and accessible.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                {['Data warehouse setup', 'Data pipeline development', 'Data modeling', 'ETL / ELT architecture', 'Cloud data platforms'].map(item => (
                   <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', color: 'var(--color-secondary)' }}><CheckCircle2 size={16} color="var(--color-accent)"/>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Intelligence */}
          <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
            <div style={{ color: 'var(--color-primary)' }}><LineChart size={40} /></div>
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-4)' }}>Business Intelligence</h2>
              <p>We create dashboards and reporting systems that provide leaders with accurate, real-time visibility into business performance.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                {['Executive dashboards', 'KPI reporting', 'Automated reporting systems', 'Data visualization'].map(item => (
                   <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', color: 'var(--color-secondary)' }}><CheckCircle2 size={16} color="var(--color-accent)"/>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Analytics & Insights */}
          <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
             <div style={{ color: 'var(--color-primary)' }}><Lightbulb size={40} /></div>
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-4)' }}>Analytics & Insights</h2>
              <p>We help companies uncover insights hidden in their data to improve operations, marketing performance, and strategic decision making.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                {['Customer analytics', 'Revenue analysis', 'Sales performance insights', 'Forecasting'].map(item => (
                   <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', color: 'var(--color-secondary)' }}><CheckCircle2 size={16} color="var(--color-accent)"/>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Data Strategy */}
          <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
             <div style={{ color: 'var(--color-primary)' }}><Cpu size={40} /></div>
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-4)' }}>Data Strategy</h2>
              <p>We help organizations develop a clear roadmap for building a scalable data ecosystem.</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                {['Data maturity assessments', 'Data architecture planning', 'KPI frameworks', 'Data governance guidance'].map(item => (
                   <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', color: 'var(--color-secondary)' }}><CheckCircle2 size={16} color="var(--color-accent)"/>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
