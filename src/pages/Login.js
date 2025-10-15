import React, { useState } from 'react';

const Login = ({ setCurrentPage, onLogin, user }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.email && formData.password.length >= 6) {
      onLogin({
        name: formData.email.split('@')[0],
        email: formData.email
      });
      
      setCurrentPage('home');
      alert(`🎉 ¡Bienvenido a StreetStyle!`);
    } else {
      alert('❌ Por favor completa todos los campos correctamente');
    }
  };

  if (user) {
    return (
      <div className="login-page">
        <div className="login-container">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👋</div>
            <h2>¡Hola de nuevo, {user.name}!</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Ya has iniciado sesión en tu cuenta de StreetStyle</p>
            <button 
              className="btn btn-primary"
              onClick={() => setCurrentPage('home')}
            >
              Continuar Comprando
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h1>
          <p>{isLogin ? 'Bienvenido de vuelta a StreetStyle' : 'Únete a la comunidad StreetStyle'}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">📧 Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">🔒 Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mínimo 6 caracteres"
              minLength="6"
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">🔒 Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                placeholder="Repite tu contraseña"
                minLength="6"
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-login">
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </button>
        </form>

        <div className="login-options">
          <div className="divider">
            <span>o</span>
          </div>

          <button className="btn-google">
            <span className="google-icon">🔍</span>
            Continuar con Google
          </button>

          <div className="switch-mode">
            <p>
              {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
              <button 
                className="switch-btn"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;