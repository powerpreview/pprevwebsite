import { useState } from 'react';
import { Link } from 'react-router';
import { PageTransition } from '@/app/components/PageTransition';
import { SEO } from '@/app/components/SEO';

export default function Terms() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <PageTransition>
    <div className="pulse-site">
      <SEO 
        title="Terms of Service"
        description="PowerPreview Terms of Service. Review the terms and conditions for using our link preview API service."
        canonical="/terms"
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
            <h1 className="legal-title">Terms of Service</h1>
            <p className="legal-updated">Ultimo aggiornamento: 28 Gennaio 2026</p>
          </div>
        </section>

        <section className="legal-content">
          <div className="container">
            <div className="legal-wrapper">
              
              <div className="legal-section">
                <h2>1. Accettazione dei termini</h2>
                <p>
                  Utilizzando PowerPreview API ("il Servizio"), accetti di essere vincolato da questi Terms of Service ("ToS").
                  Se non accetti questi termini, non utilizzare il Servizio. Questi termini costituiscono un accordo legalmente
                  vincolante tra te ("Utente", "tu") e PowerPreview ("noi", "nostro").
                </p>
              </div>

              <div className="legal-section">
                <h2>2. Descrizione del servizio</h2>
                <p>
                  PowerPreview fornisce un'API RESTful per generare preview OpenGraph da URL. Il Servizio include:
                </p>
                <ul>
                  <li>Parsing di metadata OpenGraph, Twitter Cards e meta tags standard</li>
                  <li>Cache edge distribuita per performance ottimali</li>
                  <li>Dashboard per monitoraggio utilizzo e gestione API keys</li>
                  <li>Documentazione tecnica e supporto</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>3. Account e API keys</h2>
                
                <h3>3.1 Registrazione</h3>
                <p>Per utilizzare l'API devi:</p>
                <ul>
                  <li>Fornire informazioni accurate e complete</li>
                  <li>Mantenere le credenziali sicure e confidenziali</li>
                  <li>Notificarci immediatamente di accessi non autorizzati</li>
                  <li>Essere maggiorenne e avere capacità legale di stipulare contratti</li>
                </ul>

                <h3>3.2 API Keys</h3>
                <p>Sei responsabile per:</p>
                <ul>
                  <li>La sicurezza delle tue API keys</li>
                  <li>Tutte le attività effettuate con le tue chiavi</li>
                  <li>Non condividere, vendere o trasferire le chiavi a terzi</li>
                  <li>Rigenerare le chiavi se compromesse</li>
                </ul>

                <h3>3.3 Un account per entità</h3>
                <p>
                  Ogni persona o azienda può avere un solo account gratuito. Account multipli per aggirare
                  limiti di utilizzo comporteranno la sospensione di tutti gli account associati.
                </p>
              </div>

              <div className="legal-section">
                <h2>4. Utilizzo accettabile</h2>
                
                <h3>4.1 Puoi utilizzare l'API per:</h3>
                <ul>
                  <li>Generare preview di link nei tuoi siti web, app o servizi</li>
                  <li>Integrare preview in strumenti interni</li>
                  <li>Scopi educativi e di ricerca</li>
                </ul>

                <h3>4.2 Non puoi:</h3>
                <ul>
                  <li>Rivendere l'accesso all'API senza autorizzazione scritta</li>
                  <li>Effettuare reverse engineering o tentare di accedere ai sistemi</li>
                  <li>Bypassare rate limits o misure di sicurezza</li>
                  <li>Utilizzare l'API per scopi illegali o dannosi</li>
                  <li>Scraping massivo o abuse del servizio</li>
                  <li>Generare preview di contenuti illegali (malware, phishing, CSAM, ecc.)</li>
                  <li>Utilizzare il servizio per violare diritti di terzi</li>
                  <li>Impersonare PowerPreview o suggerire affiliazioni non esistenti</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>5. Pricing e pagamenti</h2>
                
                <h3>5.1 Piani tariffari</h3>
                <p>
                  I prezzi sono indicati sulla <Link to="/pricing">pagina Pricing</Link> e possono variare.
                  Ti notificheremo modifiche ai prezzi con almeno 30 giorni di anticipo.
                </p>

                <h3>5.2 Fatturazione</h3>
                <ul>
                  <li>I piani a pagamento sono fatturati mensilmente o annualmente</li>
                  <li>I pagamenti sono processati tramite Stripe</li>
                  <li>Gli addebiti sono automatici alla fine di ogni ciclo di fatturazione</li>
                  <li>Le tariffe pay-per-use sono calcolate in base a Cache HIT e MISS</li>
                </ul>

                <h3>5.3 Rimborsi</h3>
                <p>
                  Non offriamo rimborsi per servizi già erogati. In caso di downtime significativo,
                  potremmo offrire crediti proporzionali al tempo di inattività.
                </p>

                <h3>5.4 Mancati pagamenti</h3>
                <p>
                  In caso di mancato pagamento, ci riserviamo il diritto di sospendere o terminare
                  l'accesso al servizio senza preavviso.
                </p>
              </div>

              <div className="legal-section">
                <h2>6. Rate limits e fair use</h2>
                <p>
                  Ogni piano include specifici rate limits (es. 100 req/min, 10.000 req/mese).
                  Utilizzi eccessivi o anomali potrebbero essere soggetti a throttling o sospensione.
                </p>
                <p>
                  Il piano Free è soggetto a "fair use policy": se l'utilizzo impatta negativamente
                  il servizio, potremmo richiedere un upgrade o limitare l'accesso.
                </p>
              </div>

              <div className="legal-section">
                <h2>7. Proprietà intellettuale</h2>
                
                <h3>7.1 Nostri diritti</h3>
                <p>
                  PowerPreview, il logo, la documentazione e tutti i contenuti del sito sono proprietà
                  di PowerPreview e protetti da copyright, trademark e altre leggi.
                </p>

                <h3>7.2 Tuoi diritti</h3>
                <p>
                  Mantieni tutti i diritti sui tuoi dati e contenuti. Ci concedi una licenza limitata
                  per processare gli URL che invii all'API al solo scopo di fornire il servizio.
                </p>

                <h3>7.3 Contenuti di terze parti</h3>
                <p>
                  Le preview generate contengono metadata estratti da siti di terze parti.
                  Sei responsabile di rispettare i diritti d'autore e termini di utilizzo di tali siti.
                </p>
              </div>

              <div className="legal-section">
                <h2>8. Garanzie e limitazioni di responsabilità</h2>
                
                <h3>8.1 Disclaimer di garanzie</h3>
                <p>
                  Il Servizio è fornito "AS IS" e "AS AVAILABLE", senza garanzie di alcun tipo,
                  esplicite o implicite, incluse ma non limitate a:
                </p>
                <ul>
                  <li>Garanzia di merchantability o fitness for a particular purpose</li>
                  <li>Garanzia di uptime al 100% (target: 99.9%)</li>
                  <li>Garanzia di accuracy dei dati estratti</li>
                  <li>Garanzia di assenza di errori o interruzioni</li>
                </ul>

                <h3>8.2 Limitazione di responsabilità</h3>
                <p>
                  In nessun caso PowerPreview sarà responsabile per danni indiretti, incidentali,
                  speciali, consequenziali o punitivi, inclusi ma non limitati a:
                </p>
                <ul>
                  <li>Perdita di profitti, ricavi o dati</li>
                  <li>Interruzione del business</li>
                  <li>Danni derivanti da uso o impossibilità di uso del servizio</li>
                </ul>
                <p>
                  La nostra responsabilità massima è limitata all'importo pagato negli ultimi 12 mesi.
                </p>
              </div>

              <div className="legal-section">
                <h2>9. Indemnity</h2>
                <p>
                  Accetti di indennizzare e tenere indenne PowerPreview da qualsiasi richiesta, danno,
                  perdita o spesa (incluse spese legali) derivanti da:
                </p>
                <ul>
                  <li>Il tuo utilizzo del Servizio</li>
                  <li>La violazione di questi ToS</li>
                  <li>La violazione di diritti di terzi</li>
                  <li>Contenuti o dati che invii tramite l'API</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>10. Terminazione</h2>
                
                <h3>10.1 Da parte tua</h3>
                <p>
                  Puoi cancellare il tuo account in qualsiasi momento dalla dashboard.
                  La cancellazione è effettiva immediatamente, senza rimborsi.
                </p>

                <h3>10.2 Da parte nostra</h3>
                <p>Possiamo sospendere o terminare il tuo account se:</p>
                <ul>
                  <li>Violi questi ToS o la Privacy Policy</li>
                  <li>Non effettui pagamenti dovuti</li>
                  <li>Utilizzi il servizio per attività illegali</li>
                  <li>Il tuo uso danneggia il servizio o altri utenti</li>
                </ul>
                <p>
                  In caso di terminazione, le tue API keys saranno immediatamente revocate.
                </p>

                <h3>10.3 Effetti della terminazione</h3>
                <ul>
                  <li>Accesso al servizio terminato immediatamente</li>
                  <li>Dati eliminati entro 30 giorni (eccetto dati richiesti per legge)</li>
                  <li>Obblighi di pagamento per servizi già erogati rimangono validi</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>11. Modifiche ai termini</h2>
                <p>
                  Ci riserviamo il diritto di modificare questi ToS in qualsiasi momento.
                  Modifiche significative saranno notificate via email con almeno 30 giorni di anticipo.
                  L'uso continuato del servizio dopo le modifiche costituisce accettazione dei nuovi termini.
                </p>
              </div>

              <div className="legal-section">
                <h2>12. Service Level Agreement (SLA)</h2>
                <p>
                  Piani Business ed Enterprise includono un SLA con:
                </p>
                <ul>
                  <li><strong>Uptime target:</strong> 99.9% mensile</li>
                  <li><strong>Crediti per downtime:</strong> proporzionali al tempo di inattività</li>
                  <li><strong>Esclusioni:</strong> manutenzione programmata, downtime di terze parti, forza maggiore</li>
                </ul>
                <p>
                  I dettagli completi dell'SLA sono disponibili su richiesta per clienti Business/Enterprise.
                </p>
              </div>

              <div className="legal-section">
                <h2>13. Legge applicabile e giurisdizione</h2>
                <p>
                  Questi ToS sono regolati dalla legge italiana. Qualsiasi controversia sarà sottoposta
                  alla giurisdizione esclusiva dei tribunali di Milano, Italia.
                </p>
              </div>

              <div className="legal-section">
                <h2>14. Disposizioni generali</h2>
                
                <h3>14.1 Intero accordo</h3>
                <p>
                  Questi ToS, insieme alla Privacy Policy, costituiscono l'intero accordo tra te e PowerPreview.
                </p>

                <h3>14.2 Separabilità</h3>
                <p>
                  Se una clausola è ritenuta invalida, le altre rimangono in vigore.
                </p>

                <h3>14.3 Rinuncia</h3>
                <p>
                  Il mancato esercizio di un diritto non costituisce rinuncia a tale diritto.
                </p>

                <h3>14.4 Assegnazione</h3>
                <p>
                  Non puoi trasferire questi ToS senza nostro consenso scritto.
                  Possiamo assegnare questi ToS in caso di fusione o acquisizione.
                </p>
              </div>

              <div className="legal-section">
                <h2>15. Contatti</h2>
                <p>Per domande sui ToS, contattaci:</p>
                <ul>
                  <li><strong>Email:</strong> dev.powerpreview@gmail.com</li>
                  <li><strong>Support:</strong> dev.powerpreview@gmail.com</li>
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