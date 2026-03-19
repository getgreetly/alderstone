import React from 'react';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>{title}</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-secondary)', lineHeight: '1.75', fontSize: '0.9625rem' }}>
      {children}
    </div>
  </div>
);

const TermsOfService = () => {
  return (
    <div>
      <section style={{ backgroundColor: 'var(--color-primary)', color: '#fff', padding: '5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Legal</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Terms of Service</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem' }}>Last updated: March 2025</p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 6rem', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>

          <Section title="1. About These Terms">
            <p>These Terms of Service ("Terms") govern your use of the Alderstone Consulting website and the professional services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms.</p>
            <p>Alderstone Consulting is a data consulting firm registered in Ireland. References to "we", "us", or "our" refer to Alderstone Consulting. References to "you" or "client" refer to the individual or business engaging our services.</p>
          </Section>

          <Section title="2. Services">
            <p>Alderstone Consulting provides data consulting services including, but not limited to, data engineering, business intelligence, analytics, and data strategy.</p>
            <p>The specific scope, deliverables, timeline, and fees for each engagement are agreed upon in a separate Statement of Work (SOW) or service agreement. These Terms apply in addition to any such agreement. In the event of a conflict, the SOW or service agreement shall prevail.</p>
          </Section>

          <Section title="3. Client Responsibilities">
            <p>You agree to:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Provide accurate, timely, and complete information required for us to perform the services.</li>
              <li>Ensure you have the right to share any data, systems access, or materials provided to us.</li>
              <li>Obtain any necessary consents for us to process data on your behalf.</li>
              <li>Designate an appropriate point of contact to facilitate communication and decision-making.</li>
            </ul>
          </Section>

          <Section title="4. Fees and Payment">
            <p>Fees are as agreed in the applicable SOW or service proposal. Unless stated otherwise:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Invoices are payable within 30 days of issue.</li>
              <li>Late payments may incur interest in accordance with the Late Payment of Commercial Debts (Interest) Act or applicable Irish law.</li>
              <li>All fees are exclusive of VAT unless stated otherwise. Irish VAT applies where required by law.</li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            <p><strong>Our pre-existing materials:</strong> Any tools, methodologies, frameworks, or templates we bring to an engagement remain the intellectual property of Alderstone Consulting.</p>
            <p><strong>Deliverables:</strong> Upon receipt of full payment, you will own the deliverables created specifically for you under the engagement, except where they incorporate our pre-existing materials.</p>
            <p><strong>Your data and systems:</strong> All data, systems, and materials you provide remain your property at all times.</p>
          </Section>

          <Section title="6. Confidentiality">
            <p>Each party agrees to keep confidential any non-public information disclosed by the other party in connection with the services. This obligation survives the termination of any engagement.</p>
            <p>Confidential information does not include information that is publicly available, already known to the receiving party, or required to be disclosed by law.</p>
          </Section>

          <Section title="7. Data Protection">
            <p>Where we process personal data on your behalf in providing our services, we act as a data processor and you act as the data controller. We will process such data only in accordance with your documented instructions and in compliance with GDPR and applicable Irish data protection law.</p>
            <p>A separate Data Processing Agreement (DPA) will be put in place for engagements involving the processing of personal data.</p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>To the fullest extent permitted by law:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Our total liability in connection with any engagement shall not exceed the total fees paid by you for the services in the three months preceding the claim.</li>
              <li>We shall not be liable for any indirect, consequential, special, or incidental losses, including loss of profit, revenue, or data.</li>
            </ul>
            <p>Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded under Irish law.</p>
          </Section>

          <Section title="9. Termination">
            <p>Either party may terminate an engagement by providing written notice as specified in the applicable SOW. On termination:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>You will pay for all work completed up to the termination date.</li>
              <li>Each party will return or destroy the other's confidential information on request.</li>
              <li>We will provide reasonable transition assistance if required.</li>
            </ul>
          </Section>

          <Section title="10. Website Use">
            <p>Your use of our website is subject to these Terms. You may not use our website in any way that is unlawful, harmful, or that could damage our reputation. We reserve the right to restrict access to the website at any time.</p>
            <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of those websites.</p>
          </Section>

          <Section title="11. Governing Law and Jurisdiction">
            <p>These Terms and any disputes arising from them are governed by the laws of Ireland. The courts of Ireland shall have exclusive jurisdiction to settle any dispute arising out of or in connection with these Terms.</p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>We may update these Terms from time to time. We will notify existing clients of material changes. Continued use of our website or services after any changes constitutes acceptance of the updated Terms.</p>
          </Section>

          <Section title="13. Contact">
            <p>For questions about these Terms, contact us at <strong>info@alderstoneconsulting.com</strong>.</p>
          </Section>

        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
