import { useState } from 'react';
import { Link } from 'react-router';
import { PageTransition } from '@/app/components/PageTransition';

const faqs = [
  {
    question: 'Come funziona la cache?',
    answer: 'PowerPreview utilizza una cache edge distribuita globalmente. Quando richiedi una preview, se l\'URL è già in cache ricevi una risposta istantanea (Cache HIT). Altrimenti, effettuiamo il fetch reale e salviamo il risultato in cache per 6-24 ore (Cache MISS).'
  },
  {
    question: 'Quali metadata supportate?',
    answer: 'Supportiamo OpenGraph tags (og:title, og:description, og:image, ecc.), Twitter Cards, e meta tags HTML standard. Il parsing è automatico e restituisce sempre gli stessi campi in formato JSON consistente.'
  },
  {
    question: 'Come gestite i rate limits?',
    answer: 'I rate limits sono separati per Cache HIT e Cache MISS. Esempio nel piano Free: 10 MISS/minuto, 100 HIT/minuto. Superate il limite riceverete un errore 429. I limiti si resettano ogni minuto.'
  },
  {
    question: 'Posso usare PowerPreview per siti che richiedono autenticazione?',
    answer: 'No. PowerPreview può accedere solo a contenuti pubblicamente disponibili senza autenticazione. Per contenuti privati, considera di implementare un sistema di caching interno.'
  },
  {
    question: 'È possibile forzare il refresh della cache?',
    answer: 'Sì, nei piani Pro ed Enterprise puoi forzare un refresh tramite dashboard o API endpoint dedicato. Il piano Free non supporta cache purging manuale.'
  },
  {
    question: 'Qual è la latenza media?',
    answer: 'Cache HIT: <5ms (edge cache). Cache MISS: 150-500ms (dipende dalla velocità del sito target). La maggior parte delle richieste dopo la prima è Cache HIT.'
  },
  {
    question: 'Supportate webhooks per notifiche?',
    answer: 'Non ancora, ma è una feature pianificata per Q2 2026. Sarai in grado di ricevere notifiche per eventi come rate limit exceeded, cache refresh, o downtime.'
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

    // Convert FormData to JSON object
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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
      console.error('Form submission error:', error);
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
                <form 
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
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