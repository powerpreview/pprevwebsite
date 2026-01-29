import { useState } from 'react';
import { Link } from 'react-router';
import { PageTransition } from '@/app/components/PageTransition';

export default function Privacy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <section className="legal-header">
          <div className="container">
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-updated">Ultimo aggiornamento: 28 Gennaio 2026</p>
          </div>
        </section>

        <section className="legal-content">
          <div className="container">
            <div className="legal-wrapper">
              
              <div className="legal-section">
                <h2>1. Introduzione</h2>
                <p>
                  PowerPreview ("noi", "nostro") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali.
                  Questa Privacy Policy spiega come raccogliamo, usiamo, e proteggiamo le tue informazioni quando utilizzi
                  la nostra API OpenGraph e i servizi correlati.
                </p>
              </div>

              <div className="legal-section">
                <h2>2. Informazioni che raccogliamo</h2>
                
                <h3>2.1 Dati dell'account</h3>
                <p>Quando ti registri, raccogliamo:</p>
                <ul>
                  <li>Email address</li>
                  <li>Nome e cognome (opzionale)</li>
                  <li>Informazioni di fatturazione (se usi un piano a pagamento)</li>
                </ul>

                <h3>2.2 Dati di utilizzo dell'API</h3>
                <p>Quando utilizzi l'API, raccogliamo:</p>
                <ul>
                  <li>URL richiesti tramite l'API</li>
                  <li>Timestamp delle richieste</li>
                  <li>API key utilizzata (hashata)</li>
                  <li>Indirizzo IP (per rate limiting e sicurezza)</li>
                  <li>User-Agent e headers HTTP</li>
                  <li>Cache HIT/MISS status</li>
                  <li>Tempi di risposta e errori</li>
                </ul>

                <h3>2.3 Cookies e tecnologie di tracciamento</h3>
                <p>Il nostro sito web utilizza:</p>
                <ul>
                  <li><strong>Cookie essenziali:</strong> per autenticazione e sessione</li>
                  <li><strong>Cookie analytics:</strong> per migliorare il servizio (opzionali)</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>3. Come utilizziamo i tuoi dati</h2>
                <p>Utilizziamo le informazioni raccolte per:</p>
                <ul>
                  <li>Fornire e migliorare il servizio API</li>
                  <li>Processare pagamenti e gestire fatturazione</li>
                  <li>Monitorare l'uso dell'API e applicare rate limits</li>
                  <li>Rilevare e prevenire abusi, frodi e attività illegali</li>
                  <li>Inviare comunicazioni tecniche e aggiornamenti importanti</li>
                  <li>Rispondere a richieste di supporto</li>
                  <li>Analizzare metriche aggregate per ottimizzare performance</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>4. Condivisione dei dati</h2>
                <p>Non vendiamo mai i tuoi dati. Condividiamo informazioni solo con:</p>
                <ul>
                  <li><strong>Provider di pagamenti:</strong> Stripe (per processare pagamenti)</li>
                  <li><strong>Hosting e CDN:</strong> AWS, Cloudflare (per servire l'API)</li>
                  <li><strong>Analytics:</strong> servizi aggregati e anonimizzati</li>
                  <li><strong>Autorità legali:</strong> se richiesto per legge o per proteggere i nostri diritti</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>5. Conservazione dei dati</h2>
                <p>Conserviamo i tuoi dati per:</p>
                <ul>
                  <li><strong>Dati account:</strong> fino alla cancellazione dell'account</li>
                  <li><strong>Log API:</strong> 90 giorni (per debugging e analytics)</li>
                  <li><strong>Dati di fatturazione:</strong> 7 anni (requisiti fiscali)</li>
                  <li><strong>Cache API:</strong> TTL variabile (1-24 ore, configurabile)</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>6. Sicurezza</h2>
                <p>
                  Implementiamo misure di sicurezza tecniche e organizzative per proteggere i tuoi dati:
                </p>
                <ul>
                  <li>Crittografia TLS 1.3 per tutte le comunicazioni</li>
                  <li>API keys hashate con bcrypt</li>
                  <li>Accesso ai database limitato e monitorato</li>
                  <li>Backup automatici giornalieri</li>
                  <li>Audit log per tutte le operazioni critiche</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>7. I tuoi diritti (GDPR)</h2>
                <p>Se sei nell'Unione Europea, hai diritto a:</p>
                <ul>
                  <li><strong>Accesso:</strong> richiedere una copia dei tuoi dati</li>
                  <li><strong>Rettifica:</strong> correggere dati imprecisi</li>
                  <li><strong>Cancellazione:</strong> eliminare il tuo account e i dati associati</li>
                  <li><strong>Portabilità:</strong> esportare i tuoi dati in formato leggibile</li>
                  <li><strong>Limitazione:</strong> limitare il trattamento in determinate circostanze</li>
                  <li><strong>Opposizione:</strong> opporti al trattamento dei dati</li>
                </ul>
                <p>
                  Per esercitare questi diritti, contattaci a <strong>dev.powerpreview@gmail.com</strong>
                </p>
              </div>

              <div className="legal-section">
                <h2>8. Trasferimenti internazionali</h2>
                <p>
                  I tuoi dati potrebbero essere trasferiti e processati in paesi al di fuori dell'UE.
                  In questi casi, garantiamo protezioni adeguate tramite Standard Contractual Clauses (SCC)
                  approvate dalla Commissione Europea.
                </p>
              </div>

              <div className="legal-section">
                <h2>9. Minori</h2>
                <p>
                  Il nostro servizio non è destinato a minori di 18 anni. Non raccogliamo consapevolmente
                  dati di minori. Se scopri che un minore ci ha fornito dati, contattaci immediatamente.
                </p>
              </div>

              <div className="legal-section">
                <h2>10. Modifiche a questa policy</h2>
                <p>
                  Potremmo aggiornare questa Privacy Policy periodicamente. Ti notificheremo cambiamenti
                  significativi via email o tramite avviso prominente sul sito. L'uso continuato del servizio
                  dopo le modifiche costituisce accettazione della nuova policy.
                </p>
              </div>

              <div className="legal-section">
                <h2>11. Contatti</h2>
                <p>Per domande o richieste relative alla privacy, contattaci:</p>
                <ul>
                  <li><strong>Email:</strong> dev.powerpreview@gmail.com</li>
                  <li><strong>Indirizzo:</strong> PowerPreview, Via Example 123, Milano, Italia</li>
                </ul>
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