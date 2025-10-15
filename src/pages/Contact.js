import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('📧 Mensaje enviado correctamente. Te contactaremos pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-submit">
              📤 Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;