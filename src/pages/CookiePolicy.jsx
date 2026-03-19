import React from 'react';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>{title}</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-secondary)', lineHeight: '1.75', fontSize: '0.9625rem' }}>
      {children}
    </div>
  </div>
);

const CookieRow = ({ name, provider, purpose, duration }) => (
  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
    <td style={{ padding: '0.75rem 1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--color-primary)' }}>{name}</td>
    <td style={{ padding: '0.75rem 1rem' }}>{provider}</td>
    <td style={{ padding: '0.75rem 1rem' }}>{purpose}</td>
    <td style={{ padding: '0.75rem 1rem', whiteSpace: 'nowrap' }}>{duration}</td>
  </tr>
);

const CookiePolicy = () => {
  return (
    <div>
      <section style={{ backgroundColor: 'var(--color-primary)', color: '#fff', padding: '5rem 0 3rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Legal</p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Cookie Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem' }}>Last updated: March 2025</p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 6rem', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>

          <Section title="1. What Are Cookies">
            <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide analytical information to website owners.</p>
            <p>This Cookie Policy explains what cookies we use on the Alderstone Consulting website, why we use them, and how you can control them.</p>
          </Section>

          <Section title="2. Your Consent">
            <p>Under the ePrivacy Directive and GDPR as applied in Ireland, we are required to obtain your consent before placing non-essential cookies on your device. Essential cookies, which are strictly necessary for the website to function, do not require consent.</p>
            <p>When you first visit our website, you will be presented with a cookie notice. You can accept all cookies, or adjust your preferences. You may withdraw or update your consent at any time by adjusting your browser settings or contacting us.</p>
          </Section>

          <Section title="3. Types of Cookies We Use">
            <p><strong>Essential Cookies</strong></p>
            <p>These cookies are necessary for the website to function and cannot be switched off. They are typically set in response to actions you take, such as navigating pages or completing a form. Without these cookies, the website cannot operate properly.</p>

            <div style={{ overflowX: 'auto', marginTop: '0.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface)' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: '600' }}>Cookie</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: '600' }}>Provider</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: '600' }}>Purpose</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: '600' }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow name="__session" provider="Alderstone Consulting" purpose="Maintains session state for the website" duration="Session" />
                  <CookieRow name="cookie_consent" provider="Alderstone Consulting" purpose="Stores your cookie consent preferences" duration="12 months" />
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: '1.5rem' }}><strong>Analytics Cookies</strong></p>
            <p>These cookies allow us to count visits and understand how visitors use our website so we can measure and improve its performance. All information collected is aggregated and anonymous.</p>

            <div style={{ overflowX: 'auto', marginTop: '0.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface)' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: '600' }}>Cookie</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: '600' }}>Provider</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: '600' }}>Purpose</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: '600' }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow name="_ga" provider="Google Analytics" purpose="Distinguishes unique users by assigning a randomly generated number" duration="2 years" />
                  <CookieRow name="_ga_*" provider="Google Analytics" purpose="Stores and counts page views" duration="2 years" />
                  <CookieRow name="_gid" provider="Google Analytics" purpose="Distinguishes users" duration="24 hours" />
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="4. How to Manage Cookies">
            <p>You can control and manage cookies in several ways:</p>
            <p><strong>Browser settings:</strong> Most browsers allow you to refuse or delete cookies. The steps vary by browser — please refer to your browser's help documentation:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Google Chrome: Settings → Privacy and Security → Cookies and other site data</li>
              <li>Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Manage Website Data</li>
              <li>Microsoft Edge: Settings → Cookies and site permissions</li>
            </ul>
            <p>Please note that disabling cookies may affect the functionality of our website.</p>
            <p><strong>Opt out of Google Analytics:</strong> You can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" style={{ color: 'var(--color-accent)' }}>Google Analytics Opt-out Browser Add-on</a> to prevent your data from being used by Google Analytics.</p>
          </Section>

          <Section title="5. Third-Party Cookies">
            <p>Some cookies on our website are set by third parties such as Google. These third parties have their own privacy policies. We do not control these cookies and recommend reviewing the relevant third-party policies directly.</p>
          </Section>

          <Section title="6. Changes to This Policy">
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our practices. The latest version will always be available on this page.</p>
          </Section>

          <Section title="7. Contact Us">
            <p>If you have any questions about our use of cookies, please contact us at <strong>info@alderstoneconsulting.com</strong>.</p>
            <p>For more information about how we handle your personal data, please see our <a href="/privacy-policy" style={{ color: 'var(--color-accent)' }}>Privacy Policy</a>.</p>
          </Section>

        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
