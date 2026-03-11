import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fade-in">
      <section className="section gradient-primary pattern-dots-dark" style={{ position: 'relative', overflow: 'hidden' }}>
         <div className="container text-center" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <h1 className="fade-in" style={{ marginBottom: 'var(--spacing-6)', color: '#fff' }}>Contact <span className="gradient-text">Us</span></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Book a 30-minute consultation to discuss your data challenges and explore how we can support your business growth.</p>
        </div>
      </section>

      <section className="section pattern-dots">
         <div className="container grid grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-8)' }}>Let's talk about your data.</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
                   <Mail color="var(--color-accent)" size={24} />
                   <div>
                     <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-1)' }}>Email</h3>
                     <a href="mailto:info@alderstoneconsulting.com" style={{ color: 'var(--color-secondary)' }}>info@alderstoneconsulting.com</a>
                   </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
                   <MapPin color="var(--color-accent)" size={24} />
                   <div>
                     <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-1)' }}>Office</h3>
                     <p style={{ color: 'var(--color-secondary)', margin: 0 }}>London, UK (Remote First)</p>
                   </div>
                </div>
                
                <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
                   <Phone color="var(--color-accent)" size={24} />
                   <div>
                     <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-1)' }}>Phone</h3>
                     <p style={{ color: 'var(--color-secondary)', margin: 0 }}>Available upon request</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass" style={{ padding: 'var(--spacing-10)', borderRadius: '16px', boxShadow: 'var(--shadow-xl)', position: 'relative' }}>
               {submitted ? (
                 <div style={{ textAlign: 'center', padding: 'var(--spacing-8) 0' }}>
                   <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-4)', color: 'var(--color-primary)' }}>Message Sent</h3>
                   <p style={{ color: 'var(--color-secondary)' }}>Thank you for reaching out. We will get back to you within 24 hours to schedule your consultation.</p>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                      <label htmlFor="name" style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--color-primary)' }}>Full Name *</label>
                      <input type="text" id="name" required style={{ padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '1rem', backgroundColor: 'var(--color-surface)', transition: 'border-color 0.2s', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                      <label htmlFor="email" style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--color-primary)' }}>Work Email *</label>
                      <input type="email" id="email" required style={{ padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '1rem', backgroundColor: 'var(--color-surface)', transition: 'border-color 0.2s', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                      <label htmlFor="company" style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--color-primary)' }}>Company Name</label>
                      <input type="text" id="company" style={{ padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '1rem', backgroundColor: 'var(--color-surface)', transition: 'border-color 0.2s', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                      <label htmlFor="message" style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--color-primary)' }}>How can we help? *</label>
                      <textarea id="message" required rows="4" style={{ padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', backgroundColor: 'var(--color-surface)', transition: 'border-color 0.2s', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}></textarea>
                    </div>

                    <Button type="submit" variant="primary" style={{ marginTop: 'var(--spacing-4)', width: '100%', padding: '1rem', fontSize: '1.125rem' }}>Schedule Consultation</Button>
                 </form>
               )}
            </div>

         </div>
      </section>
    </div>
  );
};

export default Contact;
