import { useState } from 'react';
import { Link } from 'react-router';
import { PageTransition } from '@/app/components/PageTransition';

export default function Docs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const [copiedEndpoint, setCopiedEndpoint] = useState(false);

  const endpointExample = `curl -X GET 'https://api.pulsepreview.io/v1/preview?url=https://example.com' \\
  -H 'Authorization: Bearer YOUR_API_KEY'`;

  const responseExample = `{
  "url": "https://example.com",
  "title": "Example Domain",
  "description": "Example Domain. This domain is for use in illustrative examples in documents.",
  "image": "https://example.com/og-image.png",
  "favicon": "https://example.com/favicon.ico",
  "site_name": "Example",
  "type": "website",
  "cache": "HIT",
  "cached_at": "2026-01-27T10:23:45Z"
}`;

  const githubExample = `curl -X GET 'https://api.pulsepreview.io/v1/preview?url=https://github.com/vercel/next.js' \\
  -H 'Authorization: Bearer YOUR_API_KEY'`;

  const githubResponse = `{
  "url": "https://github.com/vercel/next.js",
  "title": "vercel/next.js: The React Framework",
  "description": "The React Framework - vercel/next.js",
  "image": "https://opengraph.githubassets.com/...",
  "favicon": "https://github.githubassets.com/favicons/favicon.svg",
  "site_name": "GitHub",
  "type": "object",
  "cache": "MISS",
  "cached_at": "2026-01-27T11:45:12Z"
}`;

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEndpoint(true);
      setTimeout(() => setCopiedEndpoint(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
                <Link to="/docs" className="nav-link active">Docs</Link>
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

      <main className="docs-main">
        <div className="container">
          <div className="docs-layout">
            <aside className="docs-sidebar">
              <h2 className="docs-sidebar-title">Documentation</h2>
              <nav className="docs-nav">
                <a 
                  href="#introduction" 
                  className={`docs-nav-link ${activeSection === 'introduction' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('introduction'); }}
                >
                  Introduction
                </a>
                <a 
                  href="#authentication" 
                  className={`docs-nav-link ${activeSection === 'authentication' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('authentication'); }}
                >
                  Authentication
                </a>
                <a 
                  href="#endpoint" 
                  className={`docs-nav-link ${activeSection === 'endpoint' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('endpoint'); }}
                >
                  Endpoint: /v1/preview
                </a>
                <a 
                  href="#cache" 
                  className={`docs-nav-link ${activeSection === 'cache' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('cache'); }}
                >
                  Cache HIT vs MISS
                </a>
                <a 
                  href="#rate-limits" 
                  className={`docs-nav-link ${activeSection === 'rate-limits' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('rate-limits'); }}
                >
                  Rate limits
                </a>
                <a 
                  href="#errors" 
                  className={`docs-nav-link ${activeSection === 'errors' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('errors'); }}
                >
                  Errors
                </a>
                <a 
                  href="#examples" 
                  className={`docs-nav-link ${activeSection === 'examples' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('examples'); }}
                >
                  Examples
                </a>
              </nav>
            </aside>

            <div className="docs-content">
              <section id="introduction" className="docs-section">
                <h1 className="docs-heading">Introduction</h1>
                <p className="docs-text">
                  PowerPreview trasforma qualsiasi URL in una preview OpenGraph pulita e veloce, progettata per applicazioni real-time e cache-first. 
                  L'API è ottimizzata per performance e affidabilità, con parsing intelligente e cache edge distribuita su oltre 200 nodi globali.
                </p>
                <p className="docs-text">
                  Questa non è una soluzione di scraping generico: PowerPreview si focalizza esclusivamente su metadata OpenGraph, Twitter Cards e HTML standard, 
                  con timeout brevi e fallback intelligenti per garantire risposte rapide anche per URL lenti.
                </p>
              </section>

              <div className="docs-divider"></div>

              <section id="authentication" className="docs-section">
                <h2 className="docs-heading">Authentication</h2>
                <p className="docs-text">
                  Tutte le richieste a PowerPreview richiedono autenticazione tramite API key. Puoi ottenere una API key gratuita registrandoti sulla dashboard.
                  Anche il piano Free richiede una API key per abuse prevention e rate limiting.
                </p>
                <p className="docs-text">
                  L'API key va inviata come header <code>Authorization</code> con schema Bearer:
                </p>
                <div className="docs-code-block">
                  <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
                </div>
                <p className="docs-text">
                  <strong>Nota sulla sicurezza:</strong> Non esporre mai la tua API key nel codice client-side. 
                  Usa sempre un proxy server-side per chiamare PowerPreview da applicazioni frontend.
                </p>
              </section>

              <div className="docs-divider"></div>

              <section id="endpoint" className="docs-section">
                <h2 className="docs-heading">Endpoint: /v1/preview</h2>
                <p className="docs-text">
                  L'endpoint principale per recuperare la preview di un URL.
                </p>
                
                <div className="docs-endpoint-box">
                  <span className="docs-method">GET</span>
                  <span className="docs-url">https://api.pulsepreview.io/v1/preview</span>
                </div>

                <h3 className="docs-subheading">Query Parameters</h3>
                <div className="docs-param">
                  <div className="docs-param-header">
                    <span className="docs-param-name">url</span>
                    <span className="docs-param-required">required</span>
                  </div>
                  <p className="docs-param-description">
                    L'URL completo da cui recuperare i metadata. Deve includere il protocollo (http:// o https://).
                  </p>
                </div>

                <h3 className="docs-subheading">Example Request</h3>
                <div className="code-block">
                  <div className="code-block-header">
                    <span className="code-block-title">cURL</span>
                    <button 
                      className={`btn-copy ${copiedEndpoint ? 'copied' : ''}`}
                      onClick={() => handleCopy(endpointExample)}
                    >
                      {copiedEndpoint ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="code-content"><code>{endpointExample}</code></pre>
                </div>

                <h3 className="docs-subheading">Response Format</h3>
                <p className="docs-text">
                  L'API restituisce un oggetto JSON con i seguenti campi:
                </p>
                <div className="docs-field">
                  <span className="docs-field-name">url</span>
                  <span className="docs-field-type">string</span>
                  <p className="docs-field-description">L'URL richiesto (normalizzato)</p>
                </div>
                <div className="docs-field">
                  <span className="docs-field-name">title</span>
                  <span className="docs-field-type">string</span>
                  <p className="docs-field-description">Titolo della pagina (da og:title o &lt;title&gt;)</p>
                </div>
                <div className="docs-field">
                  <span className="docs-field-name">description</span>
                  <span className="docs-field-type">string</span>
                  <p className="docs-field-description">Descrizione (da og:description o meta description)</p>
                </div>
                <div className="docs-field">
                  <span className="docs-field-name">image</span>
                  <span className="docs-field-type">string | null</span>
                  <p className="docs-field-description">URL dell'immagine OpenGraph</p>
                </div>
                <div className="docs-field">
                  <span className="docs-field-name">favicon</span>
                  <span className="docs-field-type">string | null</span>
                  <p className="docs-field-description">URL della favicon</p>
                </div>
                <div className="docs-field">
                  <span className="docs-field-name">site_name</span>
                  <span className="docs-field-type">string | null</span>
                  <p className="docs-field-description">Nome del sito (da og:site_name)</p>
                </div>
                <div className="docs-field">
                  <span className="docs-field-name">type</span>
                  <span className="docs-field-type">string</span>
                  <p className="docs-field-description">Tipo di contenuto (da og:type)</p>
                </div>
                <div className="docs-field">
                  <span className="docs-field-name">cache</span>
                  <span className="docs-field-type">"HIT" | "MISS"</span>
                  <p className="docs-field-description">Stato della cache (vedi sezione Cache HIT vs MISS)</p>
                </div>
                <div className="docs-field">
                  <span className="docs-field-name">cached_at</span>
                  <span className="docs-field-type">string (ISO 8601)</span>
                  <p className="docs-field-description">Timestamp di quando il dato è stato salvato in cache</p>
                </div>

                <h3 className="docs-subheading">Example Response</h3>
                <div className="code-block">
                  <div className="code-block-header">
                    <span className="code-block-title">JSON</span>
                  </div>
                  <pre className="code-content"><code>{responseExample}</code></pre>
                </div>
              </section>

              <div className="docs-divider"></div>

              <section id="cache" className="docs-section">
                <h2 className="docs-heading">Cache HIT vs MISS</h2>
                <p className="docs-text">
                  PowerPreview utilizza un sistema di caching edge-first per garantire risposte istantanee. 
                  Comprendere la differenza tra Cache HIT e Cache MISS è fondamentale per ottimizzare costi e performance.
                </p>

                <div className="docs-cache-grid">
                  <div className="docs-cache-card cache-miss-card">
                    <div className="docs-cache-header">
                      <span className="cache-badge cache-miss">MISS</span>
                      <span className="docs-cache-title">Cache MISS</span>
                    </div>
                    <p className="docs-text">
                      Quando un URL non è presente in cache, PowerPreview effettua un fetch reale della pagina, 
                      esegue il parsing dei metadata e salva il risultato in cache edge per richieste future.
                    </p>
                    <p className="docs-text">
                      Tempo medio di risposta: <strong>150-500ms</strong> (dipende dalla velocità del sito target).
                    </p>
                  </div>

                  <div className="docs-cache-card cache-hit-card">
                    <div className="docs-cache-header">
                      <span className="cache-badge cache-hit">HIT</span>
                      <span className="docs-cache-title">Cache HIT</span>
                    </div>
                    <p className="docs-text">
                      Quando l'URL è già in cache, la risposta viene servita istantaneamente dai nodi edge più vicini, 
                      senza alcun fetch o parsing.
                    </p>
                    <p className="docs-text">
                      Tempo medio di risposta: <strong>&lt;5ms</strong> (cache edge distribuita).
                    </p>
                  </div>
                </div>

                <h3 className="docs-subheading">Pricing e Rate Limits</h3>
                <p className="docs-text">
                  I limiti di rate e il pricing sono <strong>separati</strong> per Cache HIT e Cache MISS:
                </p>
                <ul className="docs-list">
                  <li>Cache MISS conta come richiesta "costosa" (fetch + parsing)</li>
                  <li>Cache HIT è gratuito o ha limite molto più alto (dipende dal piano)</li>
                </ul>
                <p className="docs-text">
                  Esempio: nel piano Free, hai 500 Cache MISS gratuite ma fino a 10.000 Cache HIT.
                </p>
              </section>

              <div className="docs-divider"></div>

              <section id="rate-limits" className="docs-section">
                <h2 className="docs-heading">Rate Limits</h2>
                <p className="docs-text">
                  I rate limits sono applicati <strong>per API key</strong> e <strong>per minuto</strong>, 
                  con limiti separati per Cache HIT e Cache MISS.
                </p>

                <h3 className="docs-subheading">Limiti per Minuto</h3>
                <div className="docs-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Piano</th>
                        <th>Cache MISS/min</th>
                        <th>Cache HIT/min</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Free</td>
                        <td>10</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>Pro</td>
                        <td>50</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <td>Enterprise</td>
                        <td>Custom</td>
                        <td>Custom</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="docs-subheading">Limiti per Giorno</h3>
                <div className="docs-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Piano</th>
                        <th>Cache MISS/day</th>
                        <th>Cache HIT/day</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Free</td>
                        <td>250</td>
                        <td>1,000</td>
                      </tr>
                      <tr>
                        <td>Pro</td>
                        <td>10,000</td>
                        <td>50,000</td>
                      </tr>
                      <tr>
                        <td>Enterprise</td>
                        <td>Custom</td>
                        <td>Custom</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="docs-text">
                  I rate limits sono progettati per essere <strong>prevedibili</strong>: niente sorprese o throttling nascosto. 
                  Se superi il limite, ricevi un errore 429 chiaro (vedi sezione Errors).
                </p>
                <p className="docs-text">
                  Le richieste in eccesso non vengono accodate: se superi il limite, devi attendere il minuto successivo.
                </p>
              </section>

              <div className="docs-divider"></div>

              <section id="errors" className="docs-section">
                <h2 className="docs-heading">Errors</h2>
                <p className="docs-text">
                  PowerPreview utilizza codici di stato HTTP standard per indicare errori. 
                  Ogni errore include un messaggio descrittivo in JSON.
                </p>

                <div className="docs-error-table">
                  <div className="docs-error-row">
                    <div className="docs-error-code">400</div>
                    <div className="docs-error-info">
                      <div className="docs-error-title">Bad Request</div>
                      <div className="docs-error-description">
                        URL mancante, malformato o non valido. Verifica che il parametro <code>url</code> sia presente e corretto.
                      </div>
                    </div>
                  </div>

                  <div className="docs-error-row">
                    <div className="docs-error-code">401</div>
                    <div className="docs-error-info">
                      <div className="docs-error-title">Unauthorized</div>
                      <div className="docs-error-description">
                        API key mancante o non valida. Verifica di aver incluso l'header <code>Authorization: Bearer YOUR_API_KEY</code>.
                      </div>
                    </div>
                  </div>

                  <div className="docs-error-row">
                    <div className="docs-error-code">429</div>
                    <div className="docs-error-info">
                      <div className="docs-error-title">Too Many Requests</div>
                      <div className="docs-error-description">
                        Rate limit superato. Attendi il minuto successivo o aggiorna il tuo piano per limiti più alti.
                      </div>
                    </div>
                  </div>

                  <div className="docs-error-row">
                    <div className="docs-error-code">500</div>
                    <div className="docs-error-info">
                      <div className="docs-error-title">Internal Server Error</div>
                      <div className="docs-error-description">
                        Errore interno del server. Riprova tra qualche istante. Se il problema persiste, controlla la Status Page.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="docs-divider"></div>

              <section id="examples" className="docs-section">
                <h2 className="docs-heading">Examples</h2>
                <p className="docs-text">
                  Esempi pratici di utilizzo dell'API con diversi tipi di contenuti.
                </p>

                <h3 className="docs-subheading">Example 1: GitHub Repository</h3>
                <div className="code-block">
                  <div className="code-block-header">
                    <span className="code-block-title">Request</span>
                  </div>
                  <pre className="code-content"><code>{githubExample}</code></pre>
                </div>

                <div className="code-block">
                  <div className="code-block-header">
                    <span className="code-block-title">Response</span>
                  </div>
                  <pre className="code-content"><code>{githubResponse}</code></pre>
                  <div className="cache-explanation">
                    <span className="cache-badge cache-miss">MISS</span>
                    <span className="cache-text">
                      Prima richiesta per questo URL: fetch reale eseguito. Le prossime richieste saranno Cache HIT.
                    </span>
                  </div>
                </div>

                <h3 className="docs-subheading">Example 2: Blog Article</h3>
                <div className="code-block">
                  <div className="code-block-header">
                    <span className="code-block-title">Request</span>
                  </div>
                  <pre className="code-content"><code>{`curl -X GET 'https://api.pulsepreview.io/v1/preview?url=https://example.blog/my-article' \\
  -H 'Authorization: Bearer YOUR_API_KEY'`}</code></pre>
                </div>

                <div className="code-block">
                  <div className="code-block-header">
                    <span className="code-block-title">Response</span>
                  </div>
                  <pre className="code-content"><code>{`{
  "url": "https://example.blog/my-article",
  "title": "How to Build Fast APIs",
  "description": "A comprehensive guide to building high-performance APIs with caching strategies.",
  "image": "https://example.blog/images/fast-apis.jpg",
  "favicon": "https://example.blog/favicon.ico",
  "site_name": "Example Blog",
  "type": "article",
  "cache": "HIT",
  "cached_at": "2026-01-27T09:15:30Z"
}`}</code></pre>
                  <div className="cache-explanation">
                    <span className="cache-badge cache-hit">HIT</span>
                    <span className="cache-text">
                      Questo URL era già in cache: risposta servita istantaneamente.
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">PowerPreview</span>
              </div>
              <span className="footer-copyright">© 2026 PowerPreview. All rights reserved.</span>
            </div>
            <div className="footer-links">
              <Link to="/status">Status</Link>
              <Link to="/docs">Docs</Link>
              <Link to="/pricing">Pricing</Link>
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