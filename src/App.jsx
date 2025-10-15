import React, { useState, useEffect } from 'react';
import './App.css';

// Componentes
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';

// Datos de productos
export const productsData = [
  {
    id: 1,
    name: "Hoodie Urban Black",
    category: "STREETWEAR",
    price: 120,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&auto=format",
    description: "Hoodie de alta calidad con diseño urbano y corte moderno. Perfecto para el estilo callejero.",
    features: ["Algodón 100% premium", "Corte oversize", "Bolsillo canguro", "Capucha ajustable"],
    colors: ["Negro", "Gris", "Blanco"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Jeans Destroyed",
    category: "EDICIÓN LIMITADA",
    price: 150,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop&auto=format",
    description: "Jeans con efecto destroyed de alta costura. Diseño único y exclusivo.",
    features: ["Denim premium", "Efecto destroyed", "Ajuste perfecto", "Color resistente"],
    colors: ["Azul claro", "Azul oscuro", "Negro"],
    sizes: ["28", "30", "32", "34"]
  },
  {
    id: 3,
    name: "Sneakers Urban Pro",
    category: "ORIGINALS",
    price: 190,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&auto=format",
    description: "Zapatillas urbanas con tecnología de amortiguación avanzada para máximo confort.",
    features: ["Suela de goma", "Amortiguación Air", "Material transpirable", "Plantilla ergonómica"],
    colors: ["Blanco", "Negro", "Rojo"],
    sizes: ["38", "39", "40", "41", "42", "43"]
  },
  {
    id: 4,
    name: "Camiseta Oversize",
    category: "BASIC COLLECTION",
    price: 80,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format",
    description: "Camiseta oversize de corte moderno para un look relajado y urbano.",
    features: ["Algodón orgánico", "Corte oversized", "Estampado premium", "Lavado envejecido"],
    colors: ["Blanco", "Negro", "Gris", "Verde"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Chaqueta Denim Vintage",
    category: "VINTAGE",
    price: 180,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format",
    description: "Chaqueta denim con estilo vintage. Perfecta para completar tu outfit urbano.",
    features: ["Denim vintage", "Corte clásico", "Bolsillos funcionales", "Acabados premium"],
    colors: ["Azul claro", "Azul oscuro", "Negro"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Gorra Street Logo",
    category: "ACCESORIOS",
    price: 60,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop&auto=format",
    description: "Gorra ajustable con logo bordado. El accesorio esencial para tu estilo street.",
    features: ["Ajuste perfecto", "Logo bordado", "Material transpirable", "Visera curva"],
    colors: ["Negro", "Blanco", "Rojo", "Azul"],
    sizes: ["Única"]
  },
  {
    id: 7,
    name: "Cargo Pants Tech",
    category: "UTILITY WEAR",
    price: 140,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&auto=format",
    description: "Pantalones cargo con múltiples bolsillos y diseño funcional urbano.",
    features: ["Tela técnica", "Múltiples bolsillos", "Ajuste cómodo", "Resistente al agua"],
    colors: ["Negro", "Verde militar", "Gris", "Beige"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Windbreaker Urban",
    category: "OUTERWEAR",
    price: 160,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=400&fit=crop&auto=format",
    description: "Chaqueta ligera perfecta para los días urbanos. Estilo y funcionalidad.",
    features: ["Impermeable", "Ligera y compacta", "Capucha integrada", "Bolsillos seguros"],
    colors: ["Negro", "Azul", "Verde", "Naranja"],
    sizes: ["S", "M", "L", "XL"]
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Precargar imágenes
  useEffect(() => {
    const loadImages = async () => {
      const imageUrls = productsData.map(product => product.image);
      
      const imagePromises = imageUrls.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('streetstyle-cart');
    const savedDarkMode = localStorage.getItem('streetstyle-darkmode');
    const savedUser = localStorage.getItem('streetstyle-user');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Guardar en localStorage cuando cambien los datos
  useEffect(() => {
    localStorage.setItem('streetstyle-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('streetstyle-darkmode', JSON.stringify(darkMode));
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  // Funciones del carrito
  const addToCart = (product) => {
    const existingItem = cart.find(item => 
      item.id === product.id && item.size === product.size && item.color === product.color
    );
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id && item.size === product.size && item.color === product.color
          ? { ...item, quantity: item.quantity + (product.quantity || 1) }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: product.quantity || 1 }]);
    }
  };

  const removeFromCart = (productId, size, color) => {
    setCart(cart.filter(item => 
      !(item.id === productId && item.size === size && item.color === color)
    ));
  };

  const updateQuantity = (productId, size, color, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === productId && item.size === size && item.color === color
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Función de login
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('streetstyle-user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('streetstyle-user');
  };

  // Navegar a detalle de producto
  const navigateToProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  // Renderizar página actual
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home 
          setCurrentPage={setCurrentPage} 
          navigateToProductDetail={navigateToProductDetail} 
          productsData={productsData}
          addToCart={addToCart}
        />;
      case 'products':
        return <Products 
          setCurrentPage={setCurrentPage} 
          addToCart={addToCart} 
          navigateToProductDetail={navigateToProductDetail}
          productsData={productsData}
        />;
      case 'product-detail':
        return <ProductDetail 
          product={selectedProduct} 
          setCurrentPage={setCurrentPage} 
          addToCart={addToCart} 
        />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login 
          setCurrentPage={setCurrentPage} 
          onLogin={handleLogin} 
          user={user} 
        />;
      case 'cart':
        return <Cart 
          cart={cart} 
          removeFromCart={removeFromCart} 
          updateQuantity={updateQuantity} 
          setCurrentPage={setCurrentPage} 
        />;
      case 'checkout':
        return <Checkout 
          cart={cart} 
          setCurrentPage={setCurrentPage} 
          user={user} 
        />;
      case 'payment':
        return <Payment 
          cart={cart} 
          setCurrentPage={setCurrentPage} 
          clearCart={clearCart} 
        />;
      default:
        return <Home 
          setCurrentPage={setCurrentPage} 
          navigateToProductDetail={navigateToProductDetail} 
          productsData={productsData}
          addToCart={addToCart}
        />;
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartItemsCount={cart.reduce((total, item) => total + item.quantity, 0)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        user={user}
        onLogout={handleLogout}
      />
      <main className="main-content">
        {!imagesLoaded ? (
          <div className="loading-screen">
            <div className="spinner"></div>
            <p>Cargando productos...</p>
          </div>
        ) : (
          renderPage()
        )}
      </main>
      {/* === AGREGAR ESTA LÍNEA === */}
      <Footer />
    </div>
  );
}

export default App;