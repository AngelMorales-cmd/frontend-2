import React, { useState } from 'react';

const Payment = ({ cart, setCurrentPage, clearCart }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleConfirmOrder = () => {
    alert('¡Pedido confirmado! Gracias por tu compra.');
    clearCart();
    setCurrentPage('home');
  };

  const paymentMethods = [
    {
      id: 'credit',
      name: 'Tarjeta de Crédito/Débito',
      description: 'Pago con tu tarjeta Visa, Mastercard o American Express.'
    },
    {
      id: 'cash',
      name: 'Pago contra entrega',
      description: 'Pago en efectivo cuando recibas tu pedido.'
    },
    {
      id: 'digital',
      name: 'Yape / Plin',
      description: 'Pago rápido con billetera digital'
    },
    {
      id: 'transfer',
      name: 'Transferencia Bancaria',
      description: 'Transferencia desde tu banco'
    }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Métodos de Pago</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        {paymentMethods.map(method => (
          <div 
            key={method.id}
            style={{ 
              border: `2px solid ${selectedMethod === method.id ? 'var(--secondary-color)' : 'var(--border-color)'}`,
              borderRadius: 'var(--border-radius)',
              padding: '1.5rem',
              marginBottom: '1rem',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
            onClick={() => setSelectedMethod(method.id)}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>{method.name}</h3>
            <p style={{ color: 'var(--text-light)' }}>{method.description}</p>
          </div>
        ))}
      </div>
      
      <div style={{ 
        backgroundColor: 'var(--surface-color)', 
        padding: '1.5rem', 
        borderRadius: 'var(--border-radius)',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontSize: '1.3rem', 
          fontWeight: '700'
        }}>
          <span>Total a Pagar:</span>
          <span>S/{total}</span>
        </div>
      </div>
      
      <button 
        className="btn btn-primary"
        style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
        onClick={handleConfirmOrder}
        disabled={!selectedMethod}
      >
        Confirmar Pedido - S/{total}
      </button>
    </div>
  );
};

export default Payment;