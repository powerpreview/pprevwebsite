import { useState } from 'react';
import { Link } from 'react-router';
import { PageTransition } from '@/app/components/PageTransition';
import { SEO } from '@/app/components/SEO';

export default function Status() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <PageTransition>
      <div className="pulse-site">
        <SEO 
          title="API Status"
          description="Check PowerPreview API status, uptime, and service health. Real-time monitoring and incident history."
          canonical="/status"
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
                  <Link to="/pricing" className="nav-link">Pricing</Link>
                  <Link to="/status" className="nav-link active">Status</Link>
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

        <main className="status-main">
          <div className="container">
            <div className="status-header">
              <h1 className="status-title">Controlla il nostro Status</h1>
              <p className="status-subtitle">
                Monitora in tempo reale l'uptime dell'API, latenza media e incident history. 
                La nostra infrastruttura è monitorata 24/7 con check ogni 30 secondi da 15 località globali.
              </p>
            </div>

            <div className="status-iframe-wrapper">
              {!iframeLoaded ? (
                <div className="status-iframe-placeholder">
                  <button onClick={handleLoadIframe} className="status-load-button">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="status-load-text">Load Live Status</span>
                    <span className="status-load-subtext">Click per caricare il monitoraggio in tempo reale</span>
                  </button>
                  <a 
                    href="https://powerpreview.betteruptime.com/en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="status-external-link"
                  >
                    O apri in una nuova finestra →
                  </a>
                </div>
              ) : (
                <>
                  <iframe
                    src="https://powerpreview.betteruptime.com/en"
                    className="status-iframe"
                    title="PowerPreview API Status"
                  />
                  <a 
                    href="https://powerpreview.betteruptime.com/en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="status-iframe-overlay"
                  >
                    <div className="status-overlay-content">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>View Full Status Page</span>
                    </div>
                  </a>
                </>
              )}
            </div>

            <div className="status-info-box">
              <div className="status-info-content">
                <p className="status-info-text">
                  Powered by <strong className="status-provider">Better Stack</strong> — Real-time monitoring, incident management, and status pages for modern infrastructure.
                </p>
                <p className="status-info-subtext">
                  Subscribe to updates via email, Slack, or RSS to get notified immediately of any downtime or degraded performance.
                </p>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="status-cards-grid">
              <div className="status-card">
                <h3 className="status-card-title">Uptime Target</h3>
                <div className="status-card-value">99.95%</div>
                <p className="status-card-description">
                  SLA garantito per piani Enterprise. Monitoriamo costantemente tutti gli endpoint critici.
                </p>
              </div>

              <div className="status-card">
                <h3 className="status-card-title">Incident Response</h3>
                <div className="status-card-value">&lt; 5 min</div>
                <p className="status-card-description">
                  Tempo medio di risposta agli incident. Il team viene notificato automaticamente via PagerDuty.
                </p>
              </div>

              <div className="status-card">
                <h3 className="status-card-title">Global Monitoring</h3>
                <div className="status-card-value">15 locations</div>
                <p className="status-card-description">
                  Check simultanei da US, EU, Asia per garantire performance globali consistenti.
                </p>
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