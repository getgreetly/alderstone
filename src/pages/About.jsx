import { Users, Target, ShieldCheck, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="fade-in">
      {/* Header */}
      <section className="section gradient-primary pattern-dots-dark" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container text-center" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ marginBottom: 'var(--spacing-6)', color: '#fff', fontSize: '3rem' }}>About the <span className="gradient-text">Firm</span></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>We help organizations build reliable data systems and make smarter decisions through analytics.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Our Story & Mission</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-4)' }}>
            Alderstone Consulting was founded by experienced data engineers and analytics professionals who saw how many companies struggle to unlock true value from their data.
          </p>
          <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-4)' }}>
            We watched businesses base key decisions on disconnected spreadsheets and gut feeling. Our mission is to eliminate that uncertainty — we partner with growing companies to build modern data stacks that deliver single-source-of-truth reliability.
          </p>
          <p style={{ fontSize: '1.125rem' }}>
            Today we work with clients across insurance, e-commerce, SaaS, fintech, and logistics — helping each one build the data foundation their next phase of growth requires.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section pattern-dots">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: 'var(--spacing-10)', textAlign: 'center' }}>What We Stand For</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="glass" style={{ padding: 'var(--spacing-8)', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
              <Target color="var(--color-accent)" size={36} style={{ marginBottom: 'var(--spacing-4)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-3)' }}>Outcome Driven</h3>
              <p>We don't build tech for tech's sake. Every pipeline and dashboard we engineer is designed to directly impact your bottom line.</p>
            </div>
            <div className="glass" style={{ padding: 'var(--spacing-8)', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
              <Users color="var(--color-accent)" size={36} style={{ marginBottom: 'var(--spacing-4)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-3)' }}>Deeply Collaborative</h3>
              <p>We embed closely with your team to understand unique operational pain points and deliver solutions that actually stick.</p>
            </div>
            <div className="glass" style={{ padding: 'var(--spacing-8)', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
              <ShieldCheck color="var(--color-accent)" size={36} style={{ marginBottom: 'var(--spacing-4)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-3)' }}>Built to Last</h3>
              <p>Trust is everything. Our data pipelines are fault-tolerant, monitored, and documented — built for your team to own long-term.</p>
            </div>
            <div className="glass" style={{ padding: 'var(--spacing-8)', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
              <TrendingUp color="var(--color-accent)" size={36} style={{ marginBottom: 'var(--spacing-4)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-3)' }}>Growth Focused</h3>
              <p>We design for where your company is going, not just where it is today — scalable architectures that grow with your ambitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Our Consulting Approach</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-10)', color: 'var(--color-secondary)' }}>
            Every engagement starts with listening. We take time to understand your data landscape, your team's constraints, and the business outcomes that actually matter before writing a single line of code.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', textAlign: 'left' }}>
            {[
              { step: '01', label: 'Discovery', desc: 'Audit your current data sources, tooling, and pain points.' },
              { step: '02', label: 'Architecture', desc: 'Design a scalable, cost-efficient modern data stack tailored to your needs.' },
              { step: '03', label: 'Build', desc: 'Implement pipelines, warehouses, and dashboards with full documentation.' },
              { step: '04', label: 'Handoff', desc: 'Train your team and ensure you own everything we build together.' },
            ].map(({ step, label, desc }) => (
              <div key={step} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-6)', padding: 'var(--spacing-6)', border: '1px solid var(--color-border)', borderRadius: '8px', backgroundColor: '#fff' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-accent)', minWidth: '2.5rem' }}>{step}</span>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-1)' }}>{label}</h3>
                  <p style={{ margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
