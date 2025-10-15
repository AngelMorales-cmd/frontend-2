import React, { useState } from 'react';

const ProductDetail = ({ product, setCurrentPage, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Producto no encontrado</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setCurrentPage('products')}
        >
          Volver a Productos
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor selecciona talla y color');
      return;
    }
    
    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity
    });
    
    alert('✅ Producto agregado al carrito');
    setCurrentPage('cart');
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', borderRadius: 'var(--border-radius)' }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x600/cccccc/ffffff?text=Imagen+No+Disponible';
            }}
          />
        </div>
        
        <div>
          <h1 style={{ marginBottom: '1rem' }}>{product.name}</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', fontWeight: '700', marginBottom: '1.5rem' }}>
            S/{product.price}
          </p>
          <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>{product.description}</p>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Características Principales</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {product.features.map((feature, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Selecciona tu talla</h3>
            <div className="size-selector">
              {product.sizes.map(size => (
                <div 
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Color</h3>
            <div className="color-selector">
              {product.colors.map(color => (
                <div 
                  key={color}
                  className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                  style={{ 
                    backgroundColor: color === 'Negro' ? '#000000' : 
                                   color === 'Blanco' ? '#ffffff' : 
                                   color === 'Gris' ? '#808080' : 
                                   color === 'Azul' ? '#0000ff' :
                                   color === 'Rojo' ? '#ff0000' :
                                   color === 'Verde' ? '#008000' :
                                   color === 'Azul claro' ? '#87ceeb' :
                                   color === 'Azul oscuro' ? '#000080' :
                                   color === 'Naranja' ? '#ffa500' :
                                   color === 'Beige' ? '#f5f5dc' :
                                   color === 'Verde militar' ? '#78866b' : '#cccccc'
                  }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Cantidad</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
              <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>{quantity}</span>
              <button className="quantity-btn" onClick={increaseQuantity}>+</button>
            </div>
          </div>
          
          <button 
            className="btn btn-primary"
            style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
            onClick={handleAddToCart}
          >
            Agregar al Carrito - S/{product.price * quantity}
          </button>
          
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🚚</span>
              <span>Envío gratuito en compras superiores a S/150</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>↩️</span>
              <span>Devoluciones gratuitas dentro de los 30 días</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🛡️</span>
              <span>Garantía de 2 años en materiales</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;