import { Database, LineChart, Cpu, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import bbbt from '../assets/bbbt.jpg';

/* ─── Inline style helpers ──────────────────────────────────────────── */
const labelStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.6875rem',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  color: 'var(--color-gold)',
  marginBottom: 'var(--spacing-4)',
  display: 'block',
};

const Home = () => {
  return (
    <div>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg-dark)',
        color: '#fff',
        padding: '8rem 0 6rem',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
          mixBlendMode: 'luminosity',
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(110deg, rgba(12,27,46,0.98) 0%, rgba(12,27,46,0.75) 60%, rgba(15,34,64,0.5) 100%)',
        }} />
        {/* Decorative vertical line */}
        <div style={{
          position: 'absolute', left: '50%', top: '10%', bottom: '10%', zIndex: 1,
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(184,137,62,0.2) 20%, rgba(184,137,62,0.2) 80%, transparent)',
          display: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '820px' }}>
          <span className="fade-in" style={{ ...labelStyle, color: 'var(--color-gold)' }}>
            Enterprise Data Engineering &amp; Analytics
          </span>

          <h1 className="fade-in hero-text" style={{ marginBottom: 'var(--spacing-6)' }}>
            Build a Data Foundation<br />
            Your Business Can{' '}
            <span className="gradient-text">Trust.</span>
          </h1>

          {/* Gold rule */}
          <div className="fade-in" style={{ width: '56px', height: '2px', background: 'var(--color-gold)', marginBottom: 'var(--spacing-6)', opacity: 0.7 }} />

          <p className="fade-in hero-subtext" style={{ marginBottom: 'var(--spacing-10)' }}>
            We help growing companies design reliable data pipelines, analytics systems,
            and dashboards that turn raw data into clear business decisions.
          </p>

          <div className="fade-in flex-mobile-col" style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
            <Button to="/contact" variant="accent" style={{ padding: '0.9375rem 2.25rem', fontSize: '1rem' }}>
              Book a Consultation
            </Button>
            <Button to="/services" variant="ghost" style={{ padding: '0.9375rem 2.25rem', fontSize: '1rem' }}>
              View Services
            </Button>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', zIndex: 2,
          background: 'linear-gradient(to bottom, transparent, var(--color-bg))',
        }} />
      </section>

      {/* ── Social proof strip ──────────────────────────────────────────── */}
      <section style={{ padding: 'var(--spacing-10) 0', backgroundColor: '#fff', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="divider-label" style={{ marginBottom: 0 }}>
            <span>Trusted by data-driven teams</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0', marginTop: 'var(--spacing-8)' }}>
            {['Fintech Corp', 'Kuzad Ltd', 'KKB Luxury LTD', 'Nexus Retail', 'Acme Logistics'].map((name, i, arr) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: '600',
                  fontSize: '1.25rem',
                  color: 'var(--color-text-heading)',
                  opacity: 0.3,
                  letterSpacing: '0.01em',
                  padding: '0 var(--spacing-8)',
                }}>{name}</span>
                {i < arr.length - 1 && (
                  <span style={{ color: 'var(--color-border-warm)', fontWeight: '300' }}>|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem / Solution ──────────────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container grid grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span style={labelStyle}>The Challenge</span>
            <h2 style={{ marginBottom: 'var(--spacing-6)', lineHeight: 1.15 }}>
              Most companies have data.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>Few can actually use it.</em>
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 0 }}>
              We help organisations transform fragmented, siloed data into reliable systems
              that support confident, fast decision-making at every level.
            </p>
          </div>

          <div className="reveal reveal-delay-2" style={{
            backgroundColor: '#fff',
            border: '1px solid var(--color-border)',
            borderTop: '3px solid var(--color-gold)',
            borderRadius: '2px',
            padding: '2.5rem',
            boxShadow: 'var(--shadow)',
          }}>
            <p style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', marginBottom: 'var(--spacing-5)', margin: '0 0 var(--spacing-5)' }}>
              Sound familiar?
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
              {[
                'Data scattered across multiple systems',
                'Reports built manually in spreadsheets',
                'Inconsistent metrics across teams',
                'No single source of truth for leadership',
                'Decisions made without reliable insights',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-3)' }}>
                  <span style={{ color: '#E5B57A', fontSize: '1rem', lineHeight: '1.5', flexShrink: 0 }}>—</span>
                  <span style={{ color: 'var(--color-text-body)', fontSize: '0.9375rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Metrics ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--color-bg-dark)', padding: 'var(--spacing-20) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-12)' }}>
            {[
              { value: '50%', label: 'Faster Time to Insights', sub: 'Average reduction in reporting cycle time' },
              { value: '20M+', label: 'Rows Processed Daily', sub: 'Across client data pipelines' },
              { value: '99.9%', label: 'Pipeline Uptime', sub: 'On managed data infrastructure' },
            ].map((m, i) => (
              <div key={i} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ width: '32px', height: '2px', background: 'var(--color-gold)', marginBottom: 'var(--spacing-5)' }} />
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '4.5rem',
                  fontWeight: '700',
                  lineHeight: 1,
                  marginBottom: 'var(--spacing-3)',
                  background: 'linear-gradient(135deg, #E8C97A 0%, var(--color-gold) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>{m.value}</div>
                <p style={{ fontWeight: '600', color: '#fff', fontSize: '1.0625rem', margin: '0 0 var(--spacing-2)' }}>{m.label}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light-muted)', margin: 0 }}>{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-12)' }}>
            <div className="reveal">
              <span style={labelStyle}>What We Do</span>
              <h2 style={{ margin: 0 }}>Our Services</h2>
            </div>
            <Link
              to="/services"
              className="reveal reveal-delay-2"
              style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.375rem', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text-heading)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; }}
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <Card title="Data Engineering" icon={Database} to="/services" className="reveal reveal-delay-1">
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-4)', lineHeight: 1.65 }}>
                Modern data infrastructure that centralises your business data.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', flex: 1 }}>
                {['Data warehouse setup', 'Pipeline development', 'Data modeling', 'ETL/ELT architecture'].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.8375rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={13} color="var(--color-gold)" strokeWidth={2} />{item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Business Intelligence" icon={LineChart} to="/services" className="reveal reveal-delay-2">
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-4)', lineHeight: 1.65 }}>
                Dashboards and reporting systems providing real-time visibility.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', flex: 1 }}>
                {['Executive dashboards', 'KPI reporting', 'Automated reports', 'Data visualisation'].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.8375rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={13} color="var(--color-gold)" strokeWidth={2} />{item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Analytics & Insights" icon={Lightbulb} to="/services" className="reveal reveal-delay-3">
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-4)', lineHeight: 1.65 }}>
                Uncover insights hidden in your data to improve strategic decisions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', flex: 1 }}>
                {['Customer analytics', 'Revenue analysis', 'Performance insights', 'Forecasting'].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.8375rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={13} color="var(--color-gold)" strokeWidth={2} />{item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Data Strategy" icon={Cpu} to="/services" className="reveal reveal-delay-4">
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-4)', lineHeight: 1.65 }}>
                A clear roadmap for building a scalable, governed data ecosystem.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', flex: 1 }}>
                {['Maturity assessments', 'Architecture planning', 'KPI frameworks', 'Data governance'].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.8375rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={13} color="var(--color-gold)" strokeWidth={2} />{item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
            <span style={labelStyle} className="reveal">How We Work</span>
            <h2 className="reveal reveal-delay-1" style={{ margin: 0 }}>Our Approach</h2>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', text: 'We work with your stakeholders to understand business goals and the decisions that need to be supported.' },
              { step: '02', title: 'Data Audit', text: 'We evaluate existing data sources, pipelines, tooling, and reporting processes to identify gaps.' },
              { step: '03', title: 'Implementation', text: 'We design and build the required infrastructure, pipelines, and dashboards with precision.' },
              { step: '04', title: 'Insight Delivery', text: 'We provide automated reporting and insights that empower faster, more confident decisions.' },
            ].map((p, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ position: 'relative', paddingTop: 'var(--spacing-4)' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '5rem',
                  fontWeight: '700',
                  lineHeight: 1,
                  color: 'var(--color-border)',
                  marginBottom: 'var(--spacing-4)',
                  userSelect: 'none',
                }}>{p.step}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: '600', marginBottom: 'var(--spacing-3)', color: 'var(--color-text-heading)' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies ────────────────────────────────────────────────── */}
      <section style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-8)' }}>
            <div style={{ textAlign: 'center' }} className="reveal">
              <span style={labelStyle}>Technologies</span>
              <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Technologies We Work With</h2>
              <p style={{ maxWidth: '520px', color: 'var(--color-text-muted)', margin: '0 auto', fontSize: '1rem' }}>
                We partner seamlessly with modern data stacks and cloud platforms to build scalable, secure ecosystems.
              </p>
            </div>
            <div className="reveal reveal-delay-2" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacing-3)' }}>
              {['Snowflake', 'BigQuery', 'Amazon Redshift', 'dbt', 'Airflow', 'Python', 'Power BI', 'Tableau', 'Looker', 'SQL'].map((tech) => (
                <div key={tech} className="tech-pill">{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────── */}
      <section className="section pattern-dots" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }} className="reveal">
            <span style={labelStyle}>Client Testimonials</span>
            <h2 style={{ margin: 0 }}>Trusted by Data Leaders</h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                quote: "Alderstone completely transformed our data infrastructure. We moved from manual spreadsheets to an automated data warehouse that our entire executive team trusts.",
                name: "Sarah Jenkins", role: "VP of Operations", company: "Nexus Retail", initials: "SJ",
              },
              {
                quote: "The BI dashboards Alderstone built for us have become the backbone of our weekly review meetings. They didn't just build pipelines — they gave us clarity.",
                name: "Marcus Chen", role: "Director of Analytics", company: "Fintech Corp", initials: "MC",
              },
              {
                quote: "We had data sitting in five different places with no way to make sense of it. Alderstone consolidated everything and delivered dashboards our buying team relies on daily.",
                name: "Adaeze Okonkwo", role: "Head of Retail Operations", company: "Kuzad Ltd", initials: "AO",
              },
              {
                quote: "Our reporting used to take the team two days every week. Alderstone automated the whole process. We now have accurate sales and inventory insights in real time.",
                name: "Grace", role: "CEO", company: "KKB Luxury LTD", initials: "G",
              },
            ].map((t, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 2) + 1}`}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '2px',
                  border: '1px solid var(--color-border)',
                  borderTop: '2px solid var(--color-gold)',
                  padding: '2.25rem',
                  boxShadow: 'var(--shadow)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-5)',
                }}
              >
                <span className="quote-mark">"</span>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '400', fontStyle: 'italic', color: 'var(--color-text-heading)', lineHeight: 1.65, flex: 1, margin: 0 }}>
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)', paddingTop: 'var(--spacing-4)', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    backgroundColor: 'var(--color-bg-dark)',
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.04em', flexShrink: 0,
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: 'var(--color-text-heading)', margin: '0 0 2px', fontSize: '0.9375rem' }}>{t.name}</p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0 }}>{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ────────────────────────────────────────────────────── */}
      <section style={{ padding: 'var(--spacing-12) 0', backgroundColor: '#fff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-8)' }}>
          <div className="divider-label"><span>Our Partners</span></div>
          <img src={bbbt} alt="BBBT – Business Buyer Bulletin Today" style={{ width: '280px', height: 'auto', objectFit: 'contain', opacity: 0.8 }} />
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg-dark)',
        padding: 'var(--spacing-24) 0',
      }}>
        {/* Decorative glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', right: '-40px',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(184,137,62,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ maxWidth: '620px', margin: '0 auto' }}>
            <span style={{ ...labelStyle, color: 'var(--color-gold)' }}>Get Started</span>
            <h2 style={{ color: '#fff', marginBottom: 'var(--spacing-6)', fontSize: '3rem', lineHeight: 1.15 }}>
              Unlock the Value in Your Data
            </h2>
            <p style={{ color: 'var(--color-text-light-muted)', fontSize: '1.125rem', marginBottom: 'var(--spacing-10)', lineHeight: 1.75 }}>
              Schedule a consultation to discuss how better data infrastructure and analytics
              can support your business growth.
            </p>
            <Button to="/contact" variant="accent" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
