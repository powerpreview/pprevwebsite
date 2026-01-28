import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown } from 'lucide-react';
import { PageTransition } from '@/app/components/PageTransition';

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const faqs: FAQItem[] = [
  {
    question: "Come funziona la cache dell'API?",
    answer: "PowerPreview utilizza una cache edge distribuita su Cloudflare. Quando richiedi un URL, l'API controlla prima se i metadata sono già in cache. Se sì (Cache HIT), la risposta è istantanea e costa meno. Se no (Cache MISS), l'API fa scraping dell'URL e salva il risultato in cache per 24 ore."
  },
  {
    question: "Qual è la differenza tra Cache HIT e MISS nel pricing?",
    answer: (
      <>
        <strong>Cache HIT:</strong> Il metadata esiste già in cache, risposta istantanea (~50ms), costa 1 credito.<br />
        <strong>Cache MISS:</strong> L'API deve fare scraping dell'URL, risposta più lenta (~500-2000ms), costa 2 crediti.<br />
        I piani gratuiti e starter includono un mix di entrambi. I piani business ottimizzano automaticamente la cache.
      </>
    )
  },
  {
    question: "Posso utilizzare PowerPreview per scopi commerciali?",
    answer: "Sì! Tutti i piani (incluso Free) possono essere utilizzati per progetti commerciali. Assicurati solo di rispettare i rate limits e i Terms of Service. Per progetti ad alto traffico, consigliamo i piani Business o Enterprise con SLA garantito."
  },
  {
    question: "Quali metadata vengono estratti dall'API?",
    answer: "PowerPreview estrae OpenGraph tags (og:title, og:description, og:image), Twitter Cards (twitter:card, twitter:title), e meta tags standard (title, description). Supportiamo anche favicon, author, publish date, e altre proprietà quando disponibili."
  },
  {
    question: "Come gestite i siti protetti da bot detection?",
    answer: "Utilizziamo browser headless (Playwright) con user-agent realistici e tecniche anti-detection per bypassare protezioni comuni. Tuttavia, alcuni siti molto protetti potrebbero bloccare le richieste. In questi casi, restituiamo metadata parziali o un errore 403."
  },
  {
    question: "Posso personalizzare il TTL della cache?",
    answer: "Sì, nei piani Business ed Enterprise puoi configurare il TTL (Time To Live) della cache da 1 ora a 7 giorni tramite l'header `X-Cache-TTL`. Il piano Free usa un TTL fisso di 24 ore."
  },
  {
    question: "Offrite un piano gratuito per sempre?",
    answer: "Sì! Il piano Free include 10.000 richieste/mese (5.000 HIT + 5.000 MISS) e 100 req/min senza limiti di tempo. È perfetto per progetti personali, portfolio, e prototipi. Per uso production consigliamo un upgrade per avere rate limits più alti e supporto prioritario."
  },
  {
    question: "Come funziona il supporto tecnico?",
    answer: "Free: community support via Discord. Starter/Business: email support con risposta entro 24-48h. Enterprise: support prioritario con SLA, Slack dedicato, e account manager. Tutti i piani hanno accesso alla documentazione completa."
  },
  {
    question: "Posso cancellare il mio account in qualsiasi momento?",
    answer: "Assolutamente sì. Puoi cancellare il tuo account dalla dashboard in qualsiasi momento. I dati saranno eliminati entro 30 giorni secondo la nostra Privacy Policy. Non offriamo rimborsi per servizi già erogati."
  },
  {
    question: "L'API è compatibile con CORS?",
    answer: "Sì! L'API supporta CORS e può essere chiamata direttamente da browser frontend (React, Vue, Next.js, ecc.). Gli header CORS sono configurati per accettare richieste da qualsiasi origine con la tua API key valida."
  },
  {
    question: "Cosa succede se supero i rate limits?",
    answer: "Se superi i rate limits (es. 100 req/min o 10.000 req/mese), riceverai un errore 429 (Too Many Requests). Il rate limit si resetta automaticamente dopo 1 minuto (per req/min) o all'inizio del mese successivo. Puoi fare upgrade in qualsiasi momento per limiti più alti."
  },
  {
    question: "Offrite webhook per notifiche?",
    answer: "Sì, nei piani Business ed Enterprise puoi configurare webhook per ricevere notifiche quando la cache viene aggiornata, quando un URL fallisce lo scraping, o per eventi custom. Supportiamo anche webhook per monitoraggio real-time."
  }
];

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
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
                <Link to="/contact" className="nav-link active">Contact</Link>
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
        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <div className="faq-header">
              <h1 className="section-title">Frequently Asked Questions</h1>
              <p className="section-subtitle">
                Risposte alle domande più comuni su PowerPreview API
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${openFAQ === index ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className="faq-icon" />
                  </button>
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-info">
                <h2 className="contact-title">Hai altre domande?</h2>
                <p className="contact-description">
                  Non hai trovato la risposta che cercavi? Contattaci e ti risponderemo 
                  il prima possibile. Siamo qui per aiutarti a integrare PowerPreview 
                  nel tuo progetto.
                </p>
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <strong>Email:</strong> dev.powerpreview@gmail.com
                  </div>
                  <div className="contact-detail-item">
                    <strong>Response time:</strong> 24-48 ore (giorni lavorativi)
                  </div>
                  <div className="contact-detail-item">
                    <strong>Support:</strong> Community Discord (link in dashboard)
                  </div>
                </div>
              </div>

              <div className="contact-form-wrapper">
                {/* Hidden form for Netlify detection */}
                <form 
                  name="contact" 
                  netlify="true" 
                  netlify-honeypot="bot-field"
                  hidden
                >
                  <input type="text" name="name" />
                  <input type="email" name="email" />
                  <input type="text" name="subject" />
                  <textarea name="message"></textarea>
                </form>

                {/* Actual visible form */}
                <form 
                  name="contact" 
                  method="POST" 
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  {/* Hidden field for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Honeypot field to prevent spam */}
                  <p style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nome <span className="form-required">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      className="form-input"
                      placeholder="Il tuo nome"
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email <span className="form-required">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      className="form-input"
                      placeholder="tua@email.com"
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Oggetto
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      className="form-input"
                      placeholder="Di cosa vuoi parlare?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Messaggio <span className="form-required">*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message" 
                      className="form-textarea"
                      placeholder="Scrivi qui il tuo messaggio..."
                      rows={6}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    Invia messaggio
                  </button>

                  {formStatus === 'loading' && (
                    <p className="form-note">
                      Invio in corso...
                    </p>
                  )}
                  {formStatus === 'success' && (
                    <p className="form-note form-note-success">
                      Messaggio inviato con successo!
                    </p>
                  )}
                  {formStatus === 'error' && (
                    <p className="form-note form-note-error">
                      Si è verificato un errore. Riprova più tardi.
                    </p>
                  )}

                  <p className="form-note">
                    Inviando questo form accetti i nostri{' '}
                    <Link to="/terms">Terms of Service</Link> e{' '}
                    <Link to="/privacy">Privacy Policy</Link>.
                  </p>
                </form>
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
              <Link to="/contact">Contact</Link>
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