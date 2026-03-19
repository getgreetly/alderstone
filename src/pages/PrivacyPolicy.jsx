import React from 'react';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>{title}</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-secondary)', lineHeight: '1.75', fontSize: '0.9625rem' }}>
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div>
      <section style={{ backgroundColor: 'var(--color-primary)', color: '#fff', padding: '5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Legal</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem' }}>Last updated: March 2025</p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 6rem', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>

          <Section title="1. Who We Are">
            <p>Alderstone Consulting is a data consulting firm registered in Ireland. We provide data engineering, business intelligence, analytics, and data strategy services to businesses.</p>
            <p>For the purposes of the General Data Protection Regulation (GDPR) and the Data Protection Act 2018, Alderstone Consulting is the data controller of your personal data.</p>
            <p><strong>Contact:</strong> info@alderstoneconsulting.com</p>
          </Section>

          <Section title="2. What Data We Collect">
            <p>We may collect and process the following categories of personal data:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><strong>Enquiry data:</strong> Your name, email address, company name, and message when you contact us via our website form.</li>
              <li><strong>Communication data:</strong> Emails, messages, or other correspondence you send to us directly.</li>
              <li><strong>Usage data:</strong> Information about how you use our website, including pages visited, time spent, and referring URLs, collected via cookies and analytics tools.</li>
              <li><strong>Technical data:</strong> IP address, browser type and version, operating system, and device information.</li>
            </ul>
            <p>We do not knowingly collect personal data from individuals under the age of 16.</p>
          </Section>

          <Section title="3. How We Use Your Data">
            <p>We use your personal data for the following purposes:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>To respond to your enquiries and provide information about our services.</li>
              <li>To deliver consulting services under a contract.</li>
              <li>To improve and maintain our website.</li>
              <li>To comply with legal obligations.</li>
              <li>To send service-related communications where you have provided consent.</li>
            </ul>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>Under GDPR, we process your personal data on the following legal grounds:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><strong>Legitimate interests:</strong> To respond to enquiries and improve our services.</li>
              <li><strong>Contract performance:</strong> To deliver services you have engaged us for.</li>
              <li><strong>Legal obligation:</strong> To comply with applicable law.</li>
              <li><strong>Consent:</strong> For non-essential cookies and marketing communications, where applicable.</li>
            </ul>
          </Section>

          <Section title="5. Data Sharing">
            <p>We do not sell your personal data. We may share your data with trusted third-party service providers who assist us in operating our website and delivering services, including:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Website hosting and infrastructure providers.</li>
              <li>Analytics service providers (e.g. Google Analytics).</li>
              <li>Email and communication platforms.</li>
            </ul>
            <p>All third-party processors are required to handle your data in accordance with GDPR and under appropriate data processing agreements.</p>
          </Section>

          <Section title="6. International Data Transfers">
            <p>Some of our third-party service providers may be located outside the European Economic Area (EEA). Where data is transferred outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.</p>
          </Section>

          <Section title="7. Data Retention">
            <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Enquiry and contact data: up to 2 years from last contact.</li>
              <li>Client data under contract: for the duration of the engagement and up to 6 years thereafter for legal and accounting purposes.</li>
              <li>Website analytics data: as per the applicable analytics provider's retention settings.</li>
            </ul>
          </Section>

          <Section title="8. Your Rights Under GDPR">
            <p>As a data subject, you have the following rights:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal data in certain circumstances.</li>
              <li><strong>Right to restriction:</strong> Request that we restrict processing of your data.</li>
              <li><strong>Right to data portability:</strong> Request your data in a structured, machine-readable format.</li>
              <li><strong>Right to object:</strong> Object to processing based on legitimate interests.</li>
              <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <strong>info@alderstoneconsulting.com</strong>. We will respond within 30 days.</p>
          </Section>

          <Section title="9. Cookies">
            <p>Our website uses cookies. Please refer to our <a href="/cookie-policy" style={{ color: 'var(--color-accent)' }}>Cookie Policy</a> for full details on what cookies we use and how to manage them.</p>
          </Section>

          <Section title="10. Supervisory Authority">
            <p>You have the right to lodge a complaint with the Data Protection Commission (DPC), the Irish supervisory authority for data protection matters.</p>
            <p>Data Protection Commission<br />21 Fitzwilliam Square South<br />Dublin 2, D02 RD28<br />Ireland<br /><a href="https://www.dataprotection.ie" style={{ color: 'var(--color-accent)' }} target="_blank" rel="noreferrer">www.dataprotection.ie</a></p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. The most current version will always be available on this page with the date of last update noted at the top.</p>
          </Section>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
