import React, { useState, useEffect } from 'react';

const Products = ({ setCurrentPage, addToCart, navigateToProductDetail, productsData }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtros en tiempo real
  useEffect(() => {
    let filtered = productsData;

    // Filtro por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por talla
    if (selectedSize) {
      filtered = filtered.filter(product => 
        product.sizes.includes(selectedSize)
      );
    }

    // Filtro por color
    if (selectedColor) {
      filtered = filtered.filter(product => 
        product.colors.includes(selectedColor)
      );
    }

    setFilteredProducts(filtered);
  }, [selectedSize, selectedColor, searchTerm, productsData]);

  const handleAddToCart = (product) => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor selecciona talla y color antes de agregar al carrito');
      return;
    }
    
    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: 1
    });
    
    alert('✅ Producto agregado al carrito');
  };

  const clearFilters = () => {
    setSelectedSize('');
    setSelectedColor('');
    setSearchTerm('');
  };

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>NUESTROS PRODUCTOS</h1>
        <p>Descubre nuestra colección exclusiva de moda urbana</p>
      </div>

      {/* Barra de Búsqueda y Filtros */}
      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filters-grid">
          {/* Filtro de Tallas */}
          <div className="filter-group">
            <h3>👕 Talla</h3>
            <div className="size-selector">
              {['S', 'M', 'L', 'XL', '28', '30', '32', '34', '38', '39', '40', '41', '42', '43', 'Única'].map(size => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size === selectedSize ? '' : size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro de Colores */}
          <div className="filter-group">
            <h3>🎨 Color</h3>
            <div className="color-selector">
              {['Negro', 'Blanco', 'Azul', 'Gris', 'Rojo', 'Verde', 'Azul claro', 'Azul oscuro', 'Naranja', 'Beige', 'Verde militar'].map(color => (
                <button
                  key={color}
                  className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                  onClick={() => setSelectedColor(color === selectedColor ? '' : color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Contador y Limpiar Filtros */}
          <div className="filter-actions">
            <span className="product-count">
              {filteredProducts.length} productos encontrados
            </span>
            <button 
              className="clear-filters-btn"
              onClick={clearFilters}
            >
              🗑️ Limpiar Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Grid de Productos */}
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😔</div>
          <h3>No se encontraron productos</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Intenta con otros filtros o términos de búsqueda</p>
          <button 
            className="btn btn-primary"
            onClick={clearFilters}
          >
            Ver Todos los Productos
          </button>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
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
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--gradient-secondary)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase'
                }}>
                  {product.category}
                </div>
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
      )}
    </div>
  );
};

export default Products;