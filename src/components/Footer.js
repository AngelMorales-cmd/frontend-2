import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-section">
          <h3 className="footer-logo">StreetStyle</h3>
          <p className="footer-tagline">Donde la calle encuentra su estilo</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}>📷</a>
            <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}>📘</a>
            <a href="#" aria-label="Twitter" onClick={(e) => e.preventDefault()}>🐦</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><a href="#products" onClick={(e) => e.preventDefault()}>Productos</a></li>
            <li><a href="#about" onClick={(e) => e.preventDefault()}>Nosotros</a></li>
            <li><a href="#contact" onClick={(e) => e.preventDefault()}>Contacto</a></li>
            <li><a href="#faq" onClick={(e) => e.preventDefault()}>Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <span>info@streetstyle.com</span>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <span>+1 234 567 890</span>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>Av. Moda 123, Lima, Perú</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Suscríbete para recibir ofertas exclusivas</p>
          <div className="newsletter-form">
            <input type="email" placeholder="tu@email.com" />
            <button>Suscribirse</button>
          </div>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 StreetStyle. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;