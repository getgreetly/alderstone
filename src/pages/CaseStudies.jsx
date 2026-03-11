import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      client: "Retail company with fragmented reporting across multiple platforms.",
      problem: "Sales data was spread across Shopify, spreadsheets, and Google Analytics, resulting in inconsistent reporting and limited visibility.",
      solution: [
        "Built a centralized data warehouse",
        "Developed automated data pipelines",
        "Delivered executive dashboards"
      ],
      results: [
        "Reporting time reduced by 80%",
        "Leadership gained real-time insights",
        "Improved decision making across teams"
      ]
    },
    {
       client: "Growing B2B SaaS platform losing track of churn metrics.",
       problem: "Billing data lived in Stripe, while feature usage lived in Mixpanel. Customer Success struggled to identify accounts at risk of churning.",
       solution: [
         "Integrated Stripe and Mixpanel into Snowflake",
         "Created unified customer health scores",
         "Deployed alerting for CS teams"
       ],
       results: [
         "Identified at-risk customers 2 weeks earlier",
         "Churn reduced by 12% in Q1",
         "CS team completely eliminated manual reporting"
       ]
    },
    {
      client: "Global Logistics Provider relying on manual spreadsheets for routing.",
      problem: "Operational data from scattered legacy systems prevented managers from seeing supply chain bottlenecks until days later.",
      solution: [
        "Migrated legacy data to a cloud data platform",
        "Created an ELT architecture for daily ingestion",
        "Built Tableau dashboards for warehouse managers"
      ],
      results: [
        "Replaced 12 redundant spreadsheets",
        "Real-time operational visibility achieved",
        "Saved 15 hours per week of manual data entry for managers"
      ]
    }
  ];

  return (
    <div className="fade-in">
       <section className="section gradient-primary pattern-dots-dark" style={{ position: 'relative', overflow: 'hidden' }}>
         <div className="container text-center" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ marginBottom: 'var(--spacing-6)', color: '#fff', fontSize: '3rem' }}>Recent Client <span className="gradient-text">Impact</span></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>See how we help organizations scale through reliable infrastructure and business intelligence.</p>
        </div>
      </section>

      <section className="section pattern-dots">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          {cases.map((cs, i) => (
             <div key={i} className="glass" style={{ padding: 'var(--spacing-10)', borderRadius: '16px', boxShadow: 'var(--shadow-xl)', position: 'relative', overflow: 'hidden' }}>
                {/* Decorative glowing orb behind the card */}
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)', zIndex: 0, opacity: 0.5 }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-2)' }}>Client Profile</h2>
                  <p style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '1.125rem', marginBottom: 'var(--spacing-10)' }}>{cs.client}</p>
                  
                  <div className="grid grid-cols-3 gap-12" style={{ alignItems: 'start' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-4)', color: 'var(--color-secondary)' }}>The Problem</h3>
                    <p>{cs.problem}</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-4)', color: 'var(--color-secondary)' }}>Our Solution</h3>
                    <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                      {cs.solution.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="gradient-primary" style={{ padding: 'var(--spacing-8)', borderRadius: '12px', boxShadow: 'var(--shadow)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #38BDF8, var(--color-accent))' }}></div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-4)', color: '#fff' }}>Business Results</h3>
                    <ul style={{ paddingLeft: '1.25rem', color: '#fff', fontWeight: '500', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
                      {cs.results.map((item, idx) => (
                        <li key={idx} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: 'var(--spacing-2)',
                          listStyle: 'none',
                          marginLeft: '-1.25rem'
                        }}>
                          <ArrowRight size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
