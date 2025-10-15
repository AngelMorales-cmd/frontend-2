import React from 'react';

const Header = ({ currentPage, setCurrentPage, cartItemsCount, darkMode, setDarkMode, user, onLogout }) => {
  const navItems = [
    { key: 'home', label: 'Inicio' },
    { key: 'products', label: 'Productos' },
    { key: 'about', label: 'Nosotros' },
    { key: 'contact', label: 'Contacto' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div>
          <a 
            href="#" 
            className="logo"
            onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
          >
            StreetStyle
          </a>
        </div>

        {/* Navegación Principal */}
        <nav>
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.key}>
                <a 
                  href="#" 
                  className={`nav-link ${currentPage === item.key ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setCurrentPage(item.key); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Acciones del Usuario */}
        <div className="header-actions">
          {/* Toggle Modo Oscuro */}
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Carrito */}
          <div 
            className="cart-icon"
            onClick={() => setCurrentPage('cart')}
            title="Carrito de compras"
          >
            🛒
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </div>

          {/* Usuario */}
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontWeight: '600' }}>¡Hola, {user.name}!</span>
              <button 
                className="btn btn-outline"
                onClick={onLogout}
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <button 
              className="btn btn-outline"
              onClick={() => setCurrentPage('login')}
              style={{ padding: '0.75rem 1.5rem' }}
            >
              Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;