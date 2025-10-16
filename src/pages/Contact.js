import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/mrbyrrbr', { // ← REEMPLAZA CON TU ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contacto</h1>
        <p>¿Tienes alguna pregunta? Nos encantaría escucharte</p>
      </div>

      <div className="contact-container">
        {/* Información de Contacto */}
        <div className="contact-info">
          <h2>📞 Información de Contacto</h2>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>info@streetstyle.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <strong>Teléfono</strong>
                <p>+1 234 567 890</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Dirección</strong>
                <p>Av. Moda 123, Lima, Perú</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <div>
                <strong>Horario de Atención</strong>
                <p>Lun - Vie: 9:00 - 18:00</p>
                <p>Sáb: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="contact-form-container">
          <h2>✉️ Envíanos un mensaje</h2>
          
          {/* Mensajes de estado */}
          {submitStatus === 'success' && (
            <div style={{
              background: 'var(--success-color)',
              color: 'white',
              padding: '1rem',
              borderRadius: 'var(--border-radius)',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              ✅ Mensaje enviado correctamente. Te contactaremos pronto.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div style={{
              background: 'var(--secondary-color)',
              color: 'white',
              padding: '1rem',
              borderRadius: 'var(--border-radius)',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              ❌ Error al enviar el mensaje. Intenta nuevamente.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Asunto *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos en qué podemos ayudarte..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? '📤 Enviando...' : '📤 Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
