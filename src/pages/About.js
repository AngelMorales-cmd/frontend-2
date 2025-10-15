import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Sobre StreetStyle</h1>
      
      <div style={{ 
        backgroundColor: 'var(--surface-color)', 
        padding: '2rem', 
        borderRadius: 'var(--border-radius)',
        marginBottom: '2rem'
      }}>
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          StreetStyle es una marca de ropa urbana fundada en 2020 dedicada a la creación de moda callejera 
          con estilo único y auténtico. Nuestra misión es redefinir la moda urbana a través de diseños 
          innovadores y materiales de alta calidad.
        </p>
        
        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Nuestra visión es convertirnos en la marca de referencia para la cultura urbana contemporánea, 
          fusionando el estilo callejero con la elegancia moderna en cada una de nuestras prendas.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        <div style={{ 
          backgroundColor: 'var(--surface-color)', 
          padding: '1.5rem', 
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Misión</h3>
          <p>Crear moda urbana que empodere la individualidad y exprese la autenticidad de la cultura callejera.</p>
        </div>
        
        <div style={{ 
          backgroundColor: 'var(--surface-color)', 
          padding: '1.5rem', 
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Visión</h3>
          <p>Ser la marca líder en moda urbana a nivel global, reconocida por nuestra innovación y calidad.</p>
        </div>
        
        <div style={{ 
          backgroundColor: 'var(--surface-color)', 
          padding: '1.5rem', 
          borderRadius: 'var(--border-radius)'
        }}>
          <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Valores</h3>
          <p>Autenticidad, Innovación, Calidad, Sustentabilidad y Comunidad.</p>
        </div>
      </div>

      <footer style={{ 
        marginTop: '3rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid var(--border-color)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem'
      }}>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>StreetStyle</h3>
          <p>Donde la calle encuentra su estilo</p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Enlaces Rápidos</h4>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '0.5rem' }}>Productos</li>
            <li style={{ marginBottom: '0.5rem' }}>Nosotros</li>
            <li style={{ marginBottom: '0.5rem' }}>Contacto</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Contacto</h4>
          <p>Email: info@streetstyle.com</p>
          <p>Teléfono: +1 234 567 890</p>
        </div>
      </footer>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem', 
        paddingTop: '1rem',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-light)'
      }}>
        <p>© 2024 StreetStyle. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default About;