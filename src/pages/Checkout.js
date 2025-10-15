import React, { useState } from 'react';

const Checkout = ({ cart, setCurrentPage, user }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: ''
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage('payment');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Finalizar Compra</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div>
          <h3 style={{ marginBottom: '1.5rem' }}>Información de Contacto</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                name="name"
                className="form-input"
                value={shippingInfo.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={shippingInfo.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                value={shippingInfo.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Dirección de envío</label>
              <textarea
                name="address"
                className="form-input"
                rows="3"
                value={shippingInfo.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Continuar al Pago
            </button>
          </form>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '1.5rem' }}>Resumen del Pedido</h3>
          <div style={{ backgroundColor: 'var(--surface-color)', padding: '1.5rem', borderRadius: 'var(--border-radius)' }}>
            {cart.map(item => (
              <div key={`${item.id}-${item.size}-${item.color}`} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '1rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-color)'
              }}>
                <div>
                  <div style={{ fontWeight: '600' }}>{item.name}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                    Talla: {item.size} | Color: {item.color} | Cant: {item.quantity}
                  </div>
                </div>
                <div style={{ fontWeight: '600' }}>S/{item.price * item.quantity}</div>
              </div>
            ))}
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '1.3rem', 
              fontWeight: '700',
              marginTop: '1rem'
            }}>
              <span>Total:</span>
              <span>S/{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;