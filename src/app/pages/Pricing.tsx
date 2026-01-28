import { useState } from 'react';
import { Link } from 'react-router';
import { PageTransition } from '@/app/components/PageTransition';
import { SEO } from '@/app/components/SEO';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <PageTransition>
    <div className="pulse-site">
      <SEO 
        title="Pricing"
        description="Transparent pricing for PowerPreview API. Pay only for what you use with separate rates for Cache HIT and MISS requests. Free tier available."
        canonical="/pricing"
      />
      <header className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-brand">
              <Link to="/" className="logo">
                <span className="logo-text">PowerPreview</span>
                <span className="logo-label">API</span>
              </Link>
            </div>
            <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <div className="nav-links">
                <Link to="/docs" className="nav-link">Docs</Link>
                <Link to="/pricing" className="nav-link active">Pricing</Link>
                <Link to="/status" className="nav-link">Status</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
              </div>
              <div className="nav-actions">
                <a href="#" className="btn btn-ghost">Dashboard</a>
                <a href="#" className="btn btn-primary">Sign Up</a>
              </div>
            </div>
            <button className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main className="pricing-main">
        <div className="container">
          <div className="pricing-header">
            <h1 className="pricing-title">Simple, transparent pricing</h1>
            <p className="pricing-subtitle">
              Pay only for what you need. Cache HIT pricing rewards efficient usage.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Free Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">Free</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">€0</span>
                  <span className="pricing-period">/month</span>
                </div>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      <strong>250</strong> Cache MISS / day
                    </div>
                  </li>
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      <strong>1,000</strong> Cache HIT / day
                    </div>
                  </li>
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      Rate limit base
                    </div>
                  </li>
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      API key included
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <button className="btn btn-ghost pricing-cta">Get started for free</button>
              </div>
            </div>

            {/* Pro Plan - Featured */}
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">Pro</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">€6.99</span>
                  <span className="pricing-period">/month</span>
                </div>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      <strong>10,000</strong> Cache MISS / day
                    </div>
                  </li>
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      <strong>50,000</strong> Cache HIT / day
                    </div>
                  </li>
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      Higher rate limits
                    </div>
                  </li>
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      Metrics & dashboard
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <button className="btn btn-primary pricing-cta" disabled>
                  Coming soon
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">Enterprise</h3>
                <div className="pricing-price">
                  <span className="pricing-amount">Custom</span>
                </div>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      Custom limits
                    </div>
                  </li>
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      SLA guarantee
                    </div>
                  </li>
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      Priority support
                    </div>
                  </li>
                  <li className="pricing-feature">
                    <Check className="pricing-check" size={20} />
                    <div className="pricing-feature-text">
                      Dedicated account manager
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <button className="btn btn-ghost pricing-cta">Contact us</button>
              </div>
            </div>
          </div>

          {/* Payment Info Box */}
          <div className="payment-info-box">
            <div className="payment-info-content">
              <h4 className="payment-info-title">Payments coming soon</h4>
              <p className="payment-info-text">
                PowerPreview will use <strong className="payment-provider">Paddle</strong> as merchant of record for fast checkout, subscriptions, and tax handling. 
                Billing will be enabled once the product exits beta.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="pricing-faq-section">
            <h2 className="pricing-faq-title">Frequently asked questions</h2>
            <div className="pricing-faq-grid">
              <div className="pricing-faq-item">
                <h4 className="pricing-faq-question">What's the difference between Cache HIT and MISS?</h4>
                <p className="pricing-faq-answer">
                  A <strong>Cache MISS</strong> requires fetching fresh OpenGraph data from the target website. 
                  A <strong>Cache HIT</strong> serves already-parsed data from our distributed cache, resulting in faster responses and lower cost.
                </p>
              </div>
              <div className="pricing-faq-item">
                <h4 className="pricing-faq-question">Can I upgrade or downgrade anytime?</h4>
                <p className="pricing-faq-answer">
                  Yes. You can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the next billing cycle.
                </p>
              </div>
              <div className="pricing-faq-item">
                <h4 className="pricing-faq-question">What happens if I exceed my daily limit?</h4>
                <p className="pricing-faq-answer">
                  Requests beyond your daily limit will return a <code>429 Too Many Requests</code> error. 
                  Limits reset daily at 00:00 UTC. Consider upgrading if you consistently hit limits.
                </p>
              </div>
              <div className="pricing-faq-item">
                <h4 className="pricing-faq-question">Do you offer annual plans?</h4>
                <p className="pricing-faq-answer">
                  Annual billing will be available once payments are enabled, with a discount compared to monthly pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-text">PowerPreview</span>
              <span className="footer-copyright">© 2026 PowerPreview. All rights reserved.</span>
            </div>
            <div className="footer-links">
              <Link to="/docs">Documentation</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/status">Status</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
}