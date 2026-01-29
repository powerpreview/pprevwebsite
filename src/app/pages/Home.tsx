import { useState } from 'react';
import { Link } from 'react-router';
import { PageTransition } from '@/app/components/PageTransition';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoUrl, setDemoUrl] = useState('https://github.com');
  const [previewData, setPreviewData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const heroBgUrl = 'https://lh3.googleusercontent.com/pw/AP1GczODD1CxkATyp0R-AcftWRX4NlGM3JBkBRT7TNuYb_LONK3oYZ9q1l-6SOOe-Lov5St-bs3BaCFpsIPFco46CFFDRA2qqx_oh-JBgJb9HheR_U0hEBGHGatPZiAnEqQ7u9x_DyW4MOuy0q2Nui1wCKs=w1377-h918-s-no?authuser=0';

  const curlCode = `curl -X GET 'https://api.pulsepreview.io/v1/preview?url=https://github.com' \\\\
  -H 'Authorization: Bearer YOUR_API_KEY'`;

  const jsonCode = `{
  "url": "https://github.com",
  "title": "GitHub: Where the world builds software",
  "description": "GitHub is where over 100 million developers shape the future of software, together.",
  "image": "https://opengraph.githubassets.com/...",
  "favicon": "https://github.githubassets.com/favicons/favicon.svg",
  "site_name": "GitHub",
  "type": "website",
  "cache": "HIT",
  "cached_at": "2026-01-27T10:23:45Z"
}`;

  const handleCopy = async (text: string, type: 'curl' | 'json') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handlePreview = async () => {
    setLoading(true);
    
    // Simulazione fetch per demo (sostituire con vera API dopo)
    setTimeout(() => {
      const mockData = {
        url: demoUrl,
        title: "GitHub: Where the world builds software",
        description: "GitHub is where over 100 million developers shape the future of software, together.",
        image: "https://opengraph.githubassets.com/1/github",
        favicon: "https://github.githubassets.com/favicons/favicon.svg",
        site_name: "GitHub",
        type: "website",
        cache: "MISS",
        cached_at: new Date().toISOString()
      };
      
      setPreviewData(mockData);
      setLoading(false);
    }, 800);
  };

  return (
    <PageTransition>
    <div className="pulse-site">
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

      <main>
        <section 
          className="hero-section" 
          style={{ backgroundImage: `url(${heroBgUrl})` }}
        >
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Link previews istantanee, senza sbatti.</h1>
                <p className="hero-description">
                  Trasforma qualsiasi URL in preview OpenGraph pulite, veloci e sicure. 
                  Parsing intelligente, cache edge distribuita, e pricing trasparente basato su Cache HIT/MISS. 
                  Niente setup complesso, niente rate limits sorpresa.
                </p>
                <div className="hero-actions">
                  <a href="#" className="btn btn-primary btn-large">Get your API key</a>
                </div>

                <div className="feature-pills">
                  <div className="pill">
                    <div className="pill-title">2ms avg. response time</div>
                    <div className="pill-text">Cache edge distribuita su 200+ località</div>
                  </div>
                  <div className="pill">
                    <div className="pill-title">Pay-per-use pricing</div>
                    <div className="pill-text">Limiti separati per HIT e MISS</div>
                  </div>
                  <div className="pill">
                    <div className="pill-title">Zero config</div>
                    <div className="pill-text">Una riga di codice, niente API key rotation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <div className="container">
            <div className="demo-panel">
              <div className="demo-header">
                <h2>Prova l'API</h2>
                <p className="demo-note">Inserisci un URL per vedere la preview in real-time</p>
              </div>

              <div className="demo-input-group">
                <input 
                  type="url" 
                  className="demo-input" 
                  placeholder="https://github.com"
                  value={demoUrl}
                  onChange={(e) => setDemoUrl(e.target.value)}
                />
                <button 
                  className="btn btn-primary"
                  onClick={handlePreview}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Preview'}
                </button>
              </div>

              <div className="demo-blocks">
                <div className="code-block">
                  <div className="code-block-header">
                    <span className="code-block-title">cURL Example</span>
                    <button 
                      className={`btn-copy ${copied === 'curl' ? 'copied' : ''}`}
                      onClick={() => handleCopy(curlCode, 'curl')}
                    >
                      {copied === 'curl' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="code-content"><code>{curlCode}</code></pre>
                </div>

                <div className="code-block">
                  <div className="code-block-header">
                    <span className="code-block-title">JSON Response</span>
                    <button 
                      className={`btn-copy ${copied === 'json' ? 'copied' : ''}`}
                      onClick={() => handleCopy(jsonCode, 'json')}
                    >
                      {copied === 'json' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="code-content"><code>{previewData ? JSON.stringify(previewData, null, 2) : jsonCode}</code></pre>
                  {previewData && (
                    <div className="cache-explanation">
                      <span className={`cache-badge ${previewData.cache === 'HIT' ? 'cache-hit' : 'cache-miss'}`}>
                        {previewData.cache}
                      </span>
                      <span className="cache-text">
                        {previewData.cache === 'HIT' 
                          ? 'Cache HIT — questa risposta è stata servita istantaneamente dalla cache.'
                          : 'Cache MISS — questa richiesta ha effettuato il fetch reale. Le prossime richieste saranno servite da cache.'}
                      </span>
                    </div>
                  )}
                </div>

                {previewData && (
                  <div className="preview-card">
                    <div className="preview-card-header">
                      {previewData.favicon && (
                        <img src={previewData.favicon} alt="Favicon" className="preview-favicon" />
                      )}
                      <span className="preview-card-title">Live Preview</span>
                    </div>
                    <div className="preview-card-content">
                      {previewData.image && (
                        <div className="preview-image-wrapper">
                          <img src={previewData.image} alt={previewData.title} className="preview-image" />
                        </div>
                      )}
                      <div className="preview-text">
                        <h3 className="preview-title">{previewData.title}</h3>
                        <p className="preview-description">{previewData.description}</p>
                        <div className="preview-meta">
                          <span className="preview-url">{previewData.url}</span>
                          {previewData.site_name && (
                            <span className="preview-site">• {previewData.site_name}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Why it's fast</h2>
              <p>Architettura edge-first, con caching intelligente e parsing ottimizzato</p>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <h3>Edge cache distribuita</h3>
                <p>
                  Oltre 200 nodi edge globali servono le preview in <strong>&lt;5ms</strong>. Ogni cache HIT è istantanea.
                  CDN integrata con Cloudflare e AWS CloudFront, zero configurazione richiesta.
                </p>
              </div>
              <div className="feature-card">
                <h3>Parsing parallelo</h3>
                <p>
                  Parsing OpenGraph tags, Twitter Cards e metadata standard in parallelo.
                  Timeout brevi e fallback intelligenti per URL lenti.
                </p>
              </div>
              <div className="feature-card">
                <h3>Cache TTL intelligente</h3>
                <p>
                  TTL dinamica basata su tipo di contenuto: news→1h, blog→6h, repo→24h.
                  Purge manuale disponibile via dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Inizia ora, gratis</h2>
              <p className="cta-description">
                500 richieste gratuite al mese. Senza carta di credito, senza trial, senza sorprese.
              </p>
              <div className="cta-actions">
                <a href="#" className="btn btn-primary btn-large">Get API key</a>
                <Link to="/docs" className="btn btn-ghost btn-large">Read the docs</Link>
              </div>
            </div>
          </div>
        </section>
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