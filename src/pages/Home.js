import React from 'react';

const Home = ({ setCurrentPage, navigateToProductDetail, productsData, addToCart }) => {
  const featuredProducts = productsData.slice(0, 4);

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      size: product.sizes[0],
      color: product.colors[0],
      quantity: 1
    });
    alert('✅ Producto agregado al carrito');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>STREETSTYLE</h1>
          <p>
            DONDE LA MODA URBANA SE ENCUENTRA CON LA ACTITUD. EXPERIMENTA LA FUSIÓN PERFECTA 
            ENTRE ESTILO CALLEJERO Y DISEÑO QUE REDEFINE LO URBANO.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => setCurrentPage('products')}
            style={{ fontSize: '1.2rem', padding: '1.25rem 2.5rem' }}
          >
            EXPLORAR COLECCIÓN
          </button>
        </div>
      </section>

      {/* Features Section - SIMPLIFICADA Y ELEGANTE */}
      <section style={{ 
        padding: '2rem 2rem', 
        maxWidth: '1000px', 
        margin: '0 auto'
      }}>
        <div className="features-simple">
          <div className="feature-simple-card">
            <div className="feature-simple-icon">🚚</div>
            <div className="feature-simple-content">
              <h4>Envío Gratuito</h4>
              <p>Compras +S/150</p>
            </div>
          </div>
          
          <div className="feature-simple-card">
            <div className="feature-simple-icon">↩️</div>
            <div className="feature-simple-content">
              <h4>Devoluciones</h4>
              <p>30 días gratis</p>
            </div>
          </div>
          
          <div className="feature-simple-card">
            <div className="feature-simple-icon">🛡️</div>
            <div className="feature-simple-content">
              <h4>Garantía</h4>
              <p>2 años</p>
            </div>
          </div>
          
          <div className="feature-simple-card">
            <div className="feature-simple-icon">💳</div>
            <div className="feature-simple-content">
              <h4>Pago Seguro</h4>
              <p>Múltiples métodos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ 
        padding: '4rem 2rem', 
        maxWidth: '1400px', 
        margin: '0 auto', 
        background: 'var(--surface-color)' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '900', 
            marginBottom: '1rem', 
            background: 'var(--gradient-secondary)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>
            COLECCIÓN PREMIUM
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-light)', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            Descubre nuestras piezas más exclusivas diseñadas para el estilo urbano contemporáneo
          </p>
        </div>
        
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div 
                className="product-image-container"
                onClick={() => navigateToProductDetail(product)}
                style={{cursor: 'pointer'}}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/cccccc/ffffff?text=Imagen+No+Disponible';
                  }}
                />
                <span className="product-badge">{product.category}</span>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">S/{product.price}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button 
                    className="btn btn-primary"
                    onClick={() => navigateToProductDetail(product)}
                    style={{ flex: 1 }}
                  >
                    Ver Detalles
                  </button>
                  <button 
                    className="btn btn-outline"
                    onClick={() => handleAddToCart(product)}
                    style={{ 
                      padding: '0.75rem', 
                      minWidth: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => setCurrentPage('products')}
            style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
          >
            Ver Todos los Productos ({productsData.length})
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;