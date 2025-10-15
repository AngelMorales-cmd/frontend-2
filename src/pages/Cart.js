import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity, setCurrentPage }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (cart.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Carrito de Compras</h1>
        <div style={{ fontSize: '4rem', margin: '2rem 0' }}>🛒</div>
        <p style={{ margin: '2rem 0', fontSize: '1.2rem' }}>Tu carrito está vacío</p>
        <button 
          className="btn btn-primary"
          onClick={() => setCurrentPage('products')}
        >
          Ir a Productos
        </button>
      </div>
    );
  }
  
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Carrito de Compras</h1>
      
      <div>
        {cart.map(item => (
          <div key={`${item.id}-${item.size}-${item.color}`} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.name}</h3>
              <p className="cart-item-meta">Talla: {item.size} | Color: {item.color}</p>
              <p className="cart-item-price">S/{item.price} c/u</p>
              
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <p className="cart-item-price" style={{ fontSize: '1.2rem' }}>
                S/{item.price * item.quantity}
              </p>
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id, item.size, item.color)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span>S/{total}</span>
        </div>
        
        <button 
          className="btn btn-primary"
          style={{ width: '100%' }}
          onClick={() => setCurrentPage('checkout')}
        >
          PROCEDER AL PAGO
        </button>
      </div>
    </div>
  );
};

export default Cart;