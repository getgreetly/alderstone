import React from 'react';
import Card from '../components/Card';
import { ShoppingCart, LayoutGrid, Store, CreditCard, Truck, ShieldAlert } from 'lucide-react';

const Industries = () => {
  return (
    <div className="fade-in">
      <section className="section gradient-primary pattern-dots-dark" style={{ position: 'relative', overflow: 'hidden' }}>
         <div className="container text-center" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ marginBottom: 'var(--spacing-6)', color: '#fff', fontSize: '3rem' }}>Industries We <span className="gradient-text">Support</span></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>We empower businesses across various sectors with data analytics and infrastructure to support growth and better decision making.</p>
        </div>
      </section>

      <section className="section pattern-dots">
         <div className="container grid grid-cols-3 gap-8">
            <Card title="Insurance" icon={ShieldAlert}>
              <p>Modernize actuarial reporting, centralize claims data, and build predictive models to better assess risk and improve underwriting efficiency.</p>
            </Card>
            <Card title="E-commerce" icon={ShoppingCart}>
              <p>Integrate systems like Shopify with advertising platforms. Visualize LTV, CAC, and attribution in real-time, eliminating spreadsheet reliance.</p>
            </Card>
            <Card title="SaaS" icon={LayoutGrid}>
              <p>Build reliable MRR reporting, churn models, and feature adoption dashboards. Align revenue, product, and marketing data sources.</p>
            </Card>
            <Card title="Retail" icon={Store}>
              <p>Centralize POS, inventory, and supply chain data to optimize stock levels and identify sales trends quickly across channels.</p>
            </Card>
            <Card title="Fintech" icon={CreditCard}>
               <p>Develop secure, complaint warehousing and reporting. Track transaction velocity and user behavior securely at scale.</p>
            </Card>
            <Card title="Logistics" icon={Truck}>
               <p>Monitor delivery fleets, transit times, and operational costs. Optimize routes and predict demand via automated data pipelines.</p>
            </Card>
         </div>
      </section>
    </div>
  );
};

export default Industries;
