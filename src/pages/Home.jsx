import React from 'react';
import { Database, LineChart, Cpu, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-primary)', color: '#fff', padding: 'var(--spacing-32) 0 var(--spacing-24)', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        {/* Background Graphic */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.6, backgroundImage: 'url(/src/assets/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'screen' }}></div>
        {/* Gradient Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(7,18,33,0.95) 0%, rgba(7,18,33,0.4) 100%)' }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '800px', gap: 'var(--spacing-8)' }}>
          <div className="fade-in" style={{ padding: '4px 12px', borderRadius: '100px', backgroundColor: 'rgba(2, 132, 199, 0.2)', border: '1px solid var(--color-accent)', color: 'var(--color-accent)', fontSize: '0.875rem', fontWeight: '500' }}>
            Enterprise Data Engineering & Analytics
          </div>
          <h1 className="fade-in hero-text">
            Build a Data Foundation Your Business Can <span className="gradient-text">Trust.</span>
          </h1>
          <p className="fade-in hero-subtext">
            We help growing companies design reliable data pipelines, analytics systems, and dashboards that turn raw data into clear business decisions.
          </p>
          <div className="fade-in flex-mobile-col" style={{ display: 'flex', gap: 'var(--spacing-4)', marginTop: 'var(--spacing-4)' }}>
            <Button to="/contact" variant="accent" style={{ padding: '1rem 2rem', fontSize: '1.125rem', boxShadow: 'var(--shadow-hero)' }}>Book a Consultation</Button>
            <Button to="/services" style={{ padding: '1rem 2rem', fontSize: '1.125rem', backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}>View Services</Button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="section" style={{ padding: 'var(--spacing-8) 0', borderBottom: '1px solid var(--color-border)', backgroundColor: '#fff' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-6)' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Trusted by Data-Driven Teams</p>
          <div style={{ display: 'flex', gap: 'var(--spacing-12)', flexWrap: 'wrap', justifyContent: 'center', opacity: 0.5, filter: 'grayscale(100%)' }}>
            {/* Abstract client logo shapes for visual effect */}
            <div style={{ fontWeight: '800', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '24px', height: '24px', borderRadius: '4px', backgroundColor: 'var(--color-primary)' }}></div>FINTECH CORP</div>
            <div style={{ fontWeight: '800', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>NEXUS RETAIL</div>
            <div style={{ fontWeight: '800', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '0', height: '0', borderLeft: '12px solid transparent', borderRight: '12px solid transparent', borderBottom: '24px solid var(--color-primary)' }}></div>ACME LOGISTICS</div>
            <div style={{ fontWeight: '800', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '4px solid var(--color-primary)' }}></div>SYNAPSE HEALTH</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section section-bg pattern-dots">
        <div className="container grid grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Most companies have data. <br/>Few can actually use it.</h2>
            <p style={{ fontSize: '1.125rem' }}>We help companies transform fragmented data into reliable systems that support confident decision making.</p>
          </div>
          <div className="fade-in glass" style={{ padding: 'var(--spacing-8)', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-4)' }}>Businesses often struggle with:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              {['Data scattered across multiple systems', 'Reports built manually in spreadsheets', 'Inconsistent metrics across teams', 'Lack of trusted dashboards', 'Leadership making decisions without reliable insights'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                  <div style={{ color: 'var(--color-text-muted)', minWidth: '24px' }}>x</div>
                  <span style={{ color: 'var(--color-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="section" style={{ backgroundColor: '#fff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid grid-cols-3 gap-8 text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="metric-card padding-6" style={{ padding: 'var(--spacing-6)' }}>
               <h3 className="gradient-text animate-pulse-glow metric-text">50%</h3>
               <p style={{ fontWeight: '600', color: 'var(--color-primary)', fontSize: '1.125rem' }}>Faster Time to Insights</p>
            </div>
             <div className="metric-card padding-6" style={{ padding: 'var(--spacing-6)' }}>
               <h3 className="gradient-text animate-pulse-glow metric-text">20M+</h3>
               <p style={{ fontWeight: '600', color: 'var(--color-primary)', fontSize: '1.125rem' }}>Rows Processed Daily</p>
            </div>
             <div className="metric-card padding-6" style={{ padding: 'var(--spacing-6)' }}>
               <h3 className="gradient-text animate-pulse-glow metric-text">99.9%</h3>
               <p style={{ fontWeight: '600', color: 'var(--color-primary)', fontSize: '1.125rem' }}>Pipeline Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section" style={{ paddingBottom: 'var(--spacing-32)' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: 'var(--spacing-16)' }}>Our Services</h2>
          <div className="grid grid-cols-4 gap-6">
            <Card title="Data Engineering" icon={Database} to="/services">
              <p style={{ fontSize: '0.9rem', marginBottom: 'var(--spacing-4)' }}>We design and build modern data infrastructure that centralizes your business data.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', flex: 1 }}>
                {['Data warehouse setup', 'Pipeline development', 'Data modeling', 'ETL/ELT architecture'].map((item, i) =>(
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}><CheckCircle2 size={14} color="var(--color-accent)"/>{item}</li>
                ))}
              </ul>
            </Card>
            <Card title="Business Intelligence" icon={LineChart} to="/services">
               <p style={{ fontSize: '0.9rem', marginBottom: 'var(--spacing-4)' }}>Dashboards and reporting systems providing real-time visibility.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', flex: 1 }}>
                {['Executive dashboards', 'KPI reporting', 'Automated reports', 'Data visualization'].map((item, i) =>(
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}><CheckCircle2 size={14} color="var(--color-accent)"/>{item}</li>
                ))}
              </ul>
            </Card>
            <Card title="Analytics & Insights" icon={Lightbulb} to="/services">
              <p style={{ fontSize: '0.9rem', marginBottom: 'var(--spacing-4)' }}>Uncover insights hidden in your data to improve strategic decisions.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', flex: 1 }}>
                {['Customer analytics', 'Revenue analysis', 'Performance insights', 'Forecasting'].map((item, i) =>(
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}><CheckCircle2 size={14} color="var(--color-accent)"/>{item}</li>
                ))}
              </ul>
            </Card>
            <Card title="Data Strategy" icon={Cpu} to="/services">
               <p style={{ fontSize: '0.9rem', marginBottom: 'var(--spacing-4)' }}>Develop a clear roadmap for building a scalable data ecosystem.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', flex: 1 }}>
                {['Maturity assessments', 'Architecture planning', 'KPI frameworks', 'Data governance'].map((item, i) =>(
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}><CheckCircle2 size={14} color="var(--color-accent)"/>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-surface">
        <div className="container text-center">
          <h2 style={{ marginBottom: 'var(--spacing-16)' }}>Our Approach</h2>
          <div className="grid grid-cols-4 gap-8">
            {[ 
              { step: '1', title: 'Discovery', text: 'We work with stakeholders to understand business goals and reporting needs.' },
              { step: '2', title: 'Data Audit', text: 'We evaluate existing data sources, pipelines, and reporting processes.' },
              { step: '3', title: 'Implementation', text: 'We design and build the required infrastructure, pipelines, and dashboards.' },
              { step: '4', title: 'Insight Delivery', text: 'We provide automated reporting and insights that empower better decisions.' }
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="fade-in">
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>
                  {p.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-2)' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Technologies We Work With</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--spacing-12)', fontSize: '1.125rem' }}>We partner seamlessly with modern data stacks and cloud platforms to build scalable, secure ecosystems.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacing-4)' }}>
            {['Snowflake', 'BigQuery', 'Amazon Redshift', 'dbt', 'Airflow', 'Python', 'Power BI', 'Tableau', 'Looker', 'SQL'].map(tech => (
              <div key={tech} style={{ padding: 'var(--spacing-3) var(--spacing-6)', borderRadius: '100px', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-primary)', fontWeight: '500' }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section pattern-dots">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ marginBottom: 'var(--spacing-12)', textAlign: 'center' }}>Trusted by Data Leaders</h2>
          <div className="grid grid-cols-2 gap-8">
             <div className="glass" style={{ padding: 'var(--spacing-8)', borderRadius: '16px', borderLeft: '4px solid var(--color-accent)' }}>
               <div style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-accent)' }}>
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                 </svg>
               </div>
               <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', marginBottom: 'var(--spacing-6)', fontStyle: 'italic', lineHeight: '1.6' }}>
                  "Alderstone completely transformed our data infrastructure. We moved from manual spreadsheets to an automated data warehouse that our entire executive team trusts."
               </p>
               <div>
                 <p style={{ fontWeight: '600', color: 'var(--color-primary)', marginBottom: 'var(--spacing-1)' }}>Sarah Jenkins</p>
                 <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>VP of Operations, Nexus Retail</p>
               </div>
             </div>
             
             <div className="glass" style={{ padding: 'var(--spacing-8)', borderRadius: '16px', borderLeft: '4px solid var(--color-accent)' }}>
               <div style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-accent)' }}>
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                 </svg>
               </div>
               <p style={{ fontSize: '1.125rem', color: 'var(--color-text-main)', marginBottom: 'var(--spacing-6)', fontStyle: 'italic', lineHeight: '1.6' }}>
                  "The BI dashboards Seun and Komi built for us have become the backbone of our weekly review meetings. They didn't just build pipelines; they gave us clarity."
               </p>
               <div>
                 <p style={{ fontWeight: '600', color: 'var(--color-primary)', marginBottom: 'var(--spacing-1)' }}>Marcus Chen</p>
                 <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Director of Analytics, Fintech Corp</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTAs Section / Bottom */}
      <section className="section gradient-primary pattern-dots-dark" style={{ position: 'relative', overflow: 'hidden' }}>
         <div className="container text-center flex-col items-center" style={{ maxWidth: '600px', position: 'relative', zIndex: 1 }}>
            <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: 'var(--spacing-6)' }}>Unlock the Value in Your Data</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', marginBottom: 'var(--spacing-10)' }}>
              Schedule a consultation to discuss how better data infrastructure and analytics can support your business growth.
            </p>
            <Button to="/contact" variant="accent" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>Schedule Consultation</Button>
         </div>
         {/* Decorative glows */}
         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(2,132,199,0.15) 0%, rgba(0,0,0,0) 70%)', zIndex: 0, pointerEvents: 'none' }}></div>
      </section>

    </div>
  );
};

export default Home;
