import Nav from "./Nav";
import Footer from "./Footer";
import { useState, useEffect } from "react";

// Tipo para producto
type Product = {
  _id?: string;
  title: string;
  description: string;
  image?: string;
};

// Estilos globales para las animaciones
const styles = `
  @keyframes scoopFloat {
    0%, 100% { transform: translateZ(20px) translateY(0); }
    50% { transform: translateZ(40px) translateY(-10px); }
  }
`;

export default function IceCreamLanding() {
  // Estado de productos
  const [products, setProducts] = useState<Product[]>([]);
  // Cargar productos desde el backend al iniciar
  useEffect(() => {
    fetch('http://localhost:4000/api/productos')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  // Estado de admin
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('verduadmin') === 'true';
  });

  useEffect(() => {
    const loginHandler = () => {
      setIsAdmin(true);
      localStorage.setItem('verduadmin', 'true');
    };
    const logoutHandler = () => {
      setIsAdmin(false);
      localStorage.setItem('verduadmin', 'false');
    };
    window.addEventListener('verduadmin-login', loginHandler);
    window.addEventListener('verduadmin-logout', logoutHandler);
    return () => {
      window.removeEventListener('verduadmin-login', loginHandler);
      window.removeEventListener('verduadmin-logout', logoutHandler);
    };
  }, []);
  // Estado para el carrito de compras: lista de productos y cantidades
  const [cart, setCart] = useState<{title: string, cantidad: number}[]>([]);

  // Añadir producto al carrito
  const addToCart = (title: string) => {
    setCart(prev => {
      const idx = prev.findIndex(p => p.title === title);
      if (idx >= 0) {
        const nuevo = [...prev];
        nuevo[idx].cantidad += 1;
        return nuevo;
      }
      return [...prev, {title, cantidad: 1}];
    });
  };

  // Quitar producto del carrito
  const removeFromCart = (title: string) => {
    setCart(prev => {
      const idx = prev.findIndex(p => p.title === title);
      if (idx >= 0) {
        const nuevo = [...prev];
        if (nuevo[idx].cantidad > 1) {
          nuevo[idx].cantidad -= 1;
          return nuevo;
        } else {
          nuevo.splice(idx, 1);
          return nuevo;
        }
      }
      return prev;
    });
  };

  // Cantidad total en el carrito
  const cartItems = cart.reduce((acc, p) => acc + p.cantidad, 0);
  // Estado para mostrar el modal del carrito
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const openCart = () => setShowCart(true);
    window.addEventListener('verdu-cart-open', openCart);
    return () => window.removeEventListener('verdu-cart-open', openCart);
  }, []);
  // Inyectar estilos
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Zanahoria",
      content: "Nuestro helado de zanahoria está lleno de betacarotenos y dulzura natural.",
      image: "/helado-zanahoria.png"
    },
    {
      title: "Remolacha",
      content: "El helado de remolacha es rico en antioxidantes y tiene un sabor único.",
      image: "/helado-remolacha.png"
    },
    {
      title: "Auyama",
      content: "Nuestro helado de auyama es cremoso y nutritivo, perfecto para cualquier momento.",
      image: "/helado-auyama.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    // Fondo animado tipo helado verde con más detalles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes moverFondo {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .bg-helado-animado {
        background: linear-gradient(270deg, #7ed957, #a8eb12, #7ed957, #d0ffb7, #b6e388, #a8eb12, #7ed957);
        background-size: 800% 800%;
        animation: moverFondo 18s ease-in-out infinite;
        position: relative;
        overflow: hidden;
      }
      .bubble-helado {
        position: absolute;
        border-radius: 50%;
        opacity: 0.18;
        filter: blur(2px);
        animation: bubbleFloat 8s ease-in-out infinite;
      }
      @keyframes bubbleFloat {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.18; }
        50% { transform: translateY(-40px) scale(1.12); opacity: 0.28; }
      }
      .shine-helado {
        position: absolute;
        border-radius: 50%;
        opacity: 0.12;
        filter: blur(12px);
        animation: shinePulse 6s ease-in-out infinite;
      }
      @keyframes shinePulse {
        0%, 100% { opacity: 0.12; }
        50% { opacity: 0.22; }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/573114877766"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 flex items-center justify-center bg-green-500 hover:bg-green-600 shadow-2xl rounded-full p-3 ring-2 ring-green-300 transition-all duration-300"
        style={{ minWidth: 64, minHeight: 64 }}
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8 text-white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.624 1.934 6.6L4 29l7.6-1.934A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.91-.52-5.6-1.5l-.4-.23-4.52 1.15 1.15-4.52-.23-.4A9.96 9.96 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.32s.99 2.68 1.13 2.87c.14.18 1.95 2.98 4.74 4.05.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
        </svg>
      </a>
      {/* Botón flotante de carrito */}
      {cartItems > 0 && (
        <button
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center bg-white shadow-2xl rounded-full p-2 ring-2 ring-teal-300 hover:scale-110 transition-all duration-300"
          style={{ minWidth: 64, minHeight: 64 }}
          onClick={() => setShowCart(true)}
        >
          <img src="/carrito.png" alt="Carrito" className="w-10 h-10 object-contain" />
          <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-1 shadow-lg" style={{ minWidth: 24, minHeight: 24, textAlign: 'center' }}>{cartItems}</span>
        </button>
      )}
      {/* Modal de carrito de compras */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={() => setShowCart(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-pink-600 text-2xl font-bold" onClick={() => setShowCart(false)}>&times;</button>
            <h2 className="text-3xl font-['Pacifico'] text-teal-400 mb-4">Carrito de compras</h2>
            <p className="text-lg text-teal-600 mb-4">Tienes <span className="font-bold text-pink-600">{cartItems}</span> producto(s) en el carrito.</p>
            <div className="w-full mb-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500">No hay productos en el carrito.</p>
              ) : (
                <ul className="divide-y divide-teal-100">
                  {cart.map((p, i) => (
                    <li key={i} className="flex items-center justify-between py-2">
                      <span className="font-['Righteous'] text-teal-700">{p.title}</span>
                      <div className="flex items-center gap-2">
                        <button className="bg-pink-400 text-white rounded-full px-2 py-1 font-bold hover:bg-pink-600" onClick={() => removeFromCart(p.title)}>-</button>
                        <span className="font-bold text-lg text-teal-600">{p.cantidad}</span>
                        <button className="bg-teal-400 text-white rounded-full px-2 py-1 font-bold hover:bg-teal-600" onClick={() => addToCart(p.title)}>+</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="rounded-full bg-gradient-to-r from-pink-400 to-teal-400 px-8 py-3 text-base font-['Righteous'] text-white shadow-lg hover:scale-105 transition-all duration-300 mt-4">Comprar</button>
          </div>
        </div>
      )}
      {/* Decoraciones temáticas en las esquinas */}
      <img src="/fresa-marco.png" alt="Fresa decorativa" className="fixed left-0 top-0 z-30 opacity-30 pointer-events-none" style={{width: '160px', height: '160px', transform: 'rotate(-12deg) translate(-18px, -18px)'}} />
      <img src="/fresa2.png" alt="Fresa decorativa 2" className="fixed right-0 bottom-0 z-30 opacity-30 pointer-events-none" style={{width: '160px', height: '160px', transform: 'rotate(10deg) translate(18px, 18px)'}} />
      {/* Imagen de helado decorativo: igual que las olas, siempre detrás */}
      <div style={{
        position: 'fixed',
        left: '-80px',
        bottom: 0,
        zIndex: 1,
        width: '520px',
        height: '520px',
        pointerEvents: 'none',
        background: "url('/helado-decorativo.png') no-repeat left bottom",
        backgroundSize: '620px 620px',
        borderRadius: '80px',
        filter: 'drop-shadow(0 68px 120px rgba(180,0,255,0.38))',
        animation: 'heladoDecorativo3d 4.2s ease-in-out infinite',
      }} />
      <style>{`
        @keyframes heladoDecorativo3d {
          0%, 100% { transform: rotateZ(6deg) rotateY(4deg) scale(1.12) translateY(0); }
          50% { transform: rotateZ(12deg) rotateY(10deg) scale(1.18) translateY(-48px); }
        }
        @media (max-width: 768px) {
          .helado-decorativo-bg {
            left: -40px !important;
            width: 100vw !important;
            height: 320px !important;
            background-position: left bottom !important;
            background-size: 320px 320px !important;
            filter: drop-shadow(0 24px 48px rgba(180,0,255,0.18));
            animation: none !important;
          }
        }
      `}</style>


      {/* Responsive extra: decoraciones solo visibles en pantallas md+ */}
      <style>{`
        @media (max-width: 768px) {
          .fixed.w-24.h-24.z-30.opacity-30.pointer-events-none { display: none; }
          .shine-helado { display: none; }
        }
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
      `}</style>
      {/* Ola superior, color suave, animación igual a la ola inferior */}
      <div style={{position: 'fixed', left: 0, top: 0, width: '100vw', height: '400px', zIndex: 0, pointerEvents: 'none', overflow: 'hidden'}}>
        <svg className="wave-bg-top" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{position: 'absolute', width: '200%', height: '400px', left: 0, top: 0, transform: 'scaleY(-1)'}}>
          <path d="M0,96L80,112C160,128,320,160,480,176C640,192,800,192,960,165.3C1120,139,1280,85,1360,58.7L1440,32L1440,320L0,320Z" fill="#d0ffb7" opacity="0.5" />
        </svg>
        <style>{`
          .wave-bg-top path {
            animation: moverOnda 10s linear infinite;
          }
          @keyframes moverOnda {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
      {/* Ola inferior, animación hacia la derecha */}
      <div style={{position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', overflow: 'hidden'}}>
        <svg className="wave-bg" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{position: 'absolute', width: '200%', height: '100%', left: 0, bottom: 0}}>
          <path d="M0,160L80,176C160,192,320,224,480,240C640,256,800,256,960,229.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L0,320Z" fill="#a8eb12" opacity="0.6" />
        </svg>
        <style>{`
          .wave-bg path {
            animation: moverOnda 10s linear infinite;
          }
          @keyframes moverOnda {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
      {/* ...el resto del contenido permanece igual... */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10" style={{position: 'relative', zIndex: 2}}>
        <Nav />
        <section className="relative h-[500px] md:h-[600px] xl:h-[700px] overflow-hidden shadow-2xl">
          <img 
            src="/healdosfondos.png" 
            alt="Fondo decorativo" 
            className="absolute inset-0 w-full h-full object-cover header-bg-img"
            style={{
              filter: 'brightness(1.05) contrast(1.02)',
              maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)',
              zIndex: 0,
            }}
          />
          {/* Overlay semitransparente para mejorar legibilidad, sin desenfoque */}
          <div className="absolute inset-0 bg-white/10 z-0 pointer-events-none"></div>
          <style>{`
            @media (min-width: 1024px) {
    <div className="w-full bg-gradient-to-b from-lime-50 to-white relative overflow-hidden">
            }
            @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
            @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
          `}</style>
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="w-full py-4 md:py-6">
              <div className="grid items-center gap-12">
                <div className="mx-auto max-w-xl">
                  <div className="mt-0">
                    <div className="flex flex-col items-center relative">
                      {/* Partículas decorativas eliminadas */}
                      <div className="ml-14 mt-[-200px]">
                        <p className="text-pink-600 font-['Righteous'] tracking-wider uppercase text-2xl md:text-3xl text-center" style={{ animation: 'fadeIn 1s ease-out' }}>VERDU</p>
                        <h1 className="mt-0 text-7xl font-['Pacifico'] text-teal-400 drop-shadow-lg md:text-9xl leading-tight text-center" style={{ animation: 'fadeInUp 1.2s ease-out' }}>
                          Helados
                        </h1>
                        <p className="text-pink-600 text-xl font-['Righteous'] mt-1 tracking-wide text-center" style={{ animation: 'fadeIn 1.5s ease-out' }}>
                          Del Campo a tu nevera
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-6 ml-32">
                    <a
                      href="https://www.facebook.com/profile.php?id=100093509873570"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gradient-to-r from-pink-400 to-pink-600 px-6 py-3 text-base font-['Righteous'] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:from-pink-500 hover:to-pink-700 flex items-center gap-2"
                      style={{ animation: 'fadeInUp 1.8s ease-out' }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-8h2v2h-2v2h-2v-2H7V8h2V6h2v2z"/>
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/verduhelados/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gradient-to-r from-teal-400 to-teal-600 px-6 py-3 text-base font-['Righteous'] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:from-teal-500 hover:to-teal-700 flex items-center gap-2"
                      style={{ animation: 'fadeInUp 2s ease-out' }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 2a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h12l4 4V2zM5 7h10v2H5V7zm0 4h10v2H5v-2z"/>
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
                {/* HELADOS SUPERIORES */}
                <div className="relative mx-auto flex w-full max-w-4xl items-center justify-center">
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ...existing code... */}

    <div className="relative">
        {/* Carrusel de Sabías que */}
        <div className="w-full bg-gradient-to-b from-lime-50 to-white relative overflow-hidden">
          {/* Fade superior para transición suave desde el header (sin sombra negra) */}
          <div className="absolute top-0 left-0 w-full h-16 z-20 pointer-events-none" style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.00) 100%)"
          }}></div>
          {/* Contenedor principal del helado mascota */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] z-20 flex justify-end">
            {/* Nube de saludo con estilo de nube SVG y animación 3D */}
            <div
              className="absolute"
              style={{
                right: '80px',
                top: '-18%',
                transform: 'translateY(-50%)',
                perspective: '600px',
                zIndex: 30,
                animation: 'cloudFloat 4s ease-in-out infinite'
              }}
            >
              <div className="relative flex flex-col items-center justify-center" style={{ width: '260px', height: '140px' }}>
                {/* SVG nube con flechica a la derecha */}
                <svg width="260" height="140" viewBox="0 0 260 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl" style={{ filter: 'drop-shadow(0 8px 24px rgba(20,184,166,0.12))', transform: 'rotateX(12deg) scale(1.08)' }}>
                  <path
                    d="M60 110 Q40 80 80 70 Q90 30 140 50 Q160 10 200 40 Q240 40 230 90 Q250 120 200 120 Q180 140 140 130 Q100 140 80 120 Q40 120 60 110 Z"
                    fill="white"
                    stroke="#A7F3D0"
                    strokeWidth="4"
                  />
                  {/* Dos circulitos en diagonal abajo a la derecha */}
                  <circle cx="200" cy="130" r="10" fill="white" stroke="#A7F3D0" strokeWidth="2" />
                  <circle cx="220" cy="145" r="6" fill="white" stroke="#A7F3D0" strokeWidth="2" />
                </svg>
                {/* Contenido dentro de la nube */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-8 py-6" style={{ pointerEvents: 'none' }}>
                  <div className="w-full flex flex-col items-start justify-start" style={{padding: '18px 0 0 68px'}}>
                    <p className="text-teal-600 font-['Pacifico'] text-base mb-1 leading-tight" style={{textShadow: '0 2px 8px #A7F3D0', borderRadius: '24px', padding: '4px 0', width: 'fit-content', margin: 0}}>¡Hola, soy Verdi!</p>
                    <p className="text-pink-600 font-['Righteous'] text-sm leading-tight" style={{borderRadius: '18px', padding: '2px 0', width: 'fit-content', margin: '2px 0 0 0'}}>¿Sabías que?</p>
                  </div>
                </div>
              </div>
              <style>{`
                @keyframes cloudFloat {
                  0%, 100% { transform: translateY(0) rotateY(0deg) scale(1.08); }
                  50% { transform: translateY(-18px) rotateY(12deg) scale(1.12); }
                }
              `}</style>
            </div>
            {/* Imagen de Verdi */}
            <div className="relative w-[400px] h-[400px] transform transition-all duration-500 ml-24">
              <img
                src="/helado.png"
                alt="Verdi mascota"
                className="relative w-[120%] h-[120%] mt-14 object-contain transition-all duration-500 hover:scale-105 animate-bounce-slow"
                style={{
                  filter: "drop-shadow(0 30px 30px rgb(20 184 166 / 0.2))"
                }}
              />
            </div>
          </div>

          {/* Contenido del carrusel */}
          <div className="w-full max-w-[1440px] mx-auto px-6 py-8 md:px-10 overflow-hidden">
            {/* Título creativo */}
            <div className="text-left mb-12 relative pl-8">
              <h2 
                className="text-5xl md:text-6xl font-['Pacifico'] text-teal-400 mb-4 drop-shadow-xl"
                style={{
                  perspective: '800px',
                  transform: 'rotateX(12deg) scale(1.08)',
                  animation: 'title3d 1.2s cubic-bezier(0.4,0,0.2,1)'
                }}
              >
                Descubre el lado divertido
              </h2>
              <style>{`
                @keyframes title3d {
                  0% { opacity: 0; transform: rotateX(60deg) scale(0.8); }
                  60% { opacity: 1; transform: rotateX(-8deg) scale(1.08); }
                  100% { opacity: 1; transform: rotateX(12deg) scale(1.12); }
                }
              `}</style>
              <p className="text-3xl md:text-4xl font-['Pacifico'] text-pink-600">
                de las verduras<span className="text-teal-400">...</span>
              </p>
              <p className="mt-4 text-xl md:text-2xl font-['Righteous'] text-teal-600">
                en un
                <span className="inline-block ml-2 px-4 py-1 bg-pink-600 text-white rounded-full transform -rotate-6 hover:rotate-0 transition-transform">
                  helado
                </span>
              </p>
              
              {/* Decoración eliminada */}
            </div>

            <div className="relative h-[500px] flex items-start justify-between px-8 pt-2">
              <div className="relative w-full h-[320px] flex items-start justify-start pt-0 pl-0" style={{marginTop: '-40px'}}>
                {/* Fondo decorativo con patrón eliminado completamente */}
                {/* Helado 3D y Carrusel centrados */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
                  {/* Helado 3D */}
                  <div className="relative w-[320px] h-[320px] flex items-center justify-center" style={{left: '-180px', top: '-100px', position: 'relative'}}>
                    <div className="absolute w-full h-full transform-gpu transition-all duration-700 preserve-3d">
                      <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 transition-all duration-500 overflow-hidden"
                        style={{
                          transform: 'translateZ(20px)',
                          animation: 'scoopFloat 4s ease-in-out infinite'
                        }}
                      >
                        <img 
                          src={slides[currentSlide].image}
                          alt={slides[currentSlide].title}
                          className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-110"
                          style={{
                            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))",
                            marginTop: currentSlide === 0 ? '-36px' : undefined,
                            marginLeft: currentSlide === 0 ? '-64px' : undefined
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Carrusel */}
                  <div 
                    className="relative w-[600px] h-[320px] transform-gpu"
                    style={{
                      perspective: '2000px',
                      transformStyle: 'preserve-3d',
                      left: '-260px',
                      position: 'relative'
                    }}
                  >
                    {slides.map((slide, index) => {
                      const rotation = ((360 / slides.length) * index + (currentSlide * -360 / slides.length)) % 360;
                      const translateZ = 520;
                      const opacity = Math.abs(((rotation + 180) % 360) - 180) > 90 ? 0.12 : 1;
                      const scale = index === currentSlide ? 1.08 : 0.88;
                      const translateY = index === currentSlide ? -60 : -24;
                      return (
                        <div 
                          key={index} 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          style={{
                            transform: `rotateY(${rotation}deg) translateZ(${translateZ}px) translateY(${translateY}px) scale(${scale})`,
                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                            opacity: opacity,
                            zIndex: index === currentSlide ? 2 : 1,
                            filter: index === currentSlide ? 'drop-shadow(0 12px 32px rgba(20,184,166,0.12))' : 'drop-shadow(0 4px 12px rgba(20,184,166,0.08))',
                            transformStyle: 'preserve-3d'
                          }}
                        >
                          <div 
                            className="transform transition-all duration-500 hover:scale-105"
                            style={{
                              backfaceVisibility: 'hidden',
                              animation: index === currentSlide ? 'fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1)' : undefined
                            }}
                          >
                            <div className="relative">
                              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white shadow-xl flex items-center justify-center p-3 md:p-4 overflow-hidden border-2 border-teal-100">
                                <p className="text-center text-[0.95rem] md:text-base font-['Righteous'] text-teal-700 px-2 leading-tight md:leading-normal break-words" style={{wordBreak: 'break-word', maxWidth: '90%', margin: '0 auto'}}>
                                  {slide.content}
                                </p>
                              </div>
                              {/* Indicadores del carrusel ubicados debajo del círculo */}
                              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-3">
                                {slides.map((_, idx) => (
                                  <button 
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                      currentSlide === idx 
                                        ? 'bg-pink-600 scale-110 shadow-lg' 
                                        : 'bg-pink-300 hover:scale-105 hover:bg-pink-400'
                                    }`}
                                    style={{ outline: 'none', border: 'none', cursor: 'pointer' }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Indicadores del carrusel */}
                    {/* Indicadores movidos debajo del círculo */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENEDOR DE PRODUCTOS */}
      <div className="w-full bg-gradient-to-b from-lime-50 via-white to-lime-50 py-6 pb-0 relative">
      <div className="w-full max-w-[1440px] mx-auto" style={{background: 'none'}}>
          <div className="mb-10 flex justify-center relative">
            {/* Imagen Verdi decorativa en la esquina inferior izquierda, más grande y animada */}
            <img
              src="/verdi.png"
              alt="Verdi decorativo"
              className="absolute left-0 bottom-0 z-20 pointer-events-none animate-verdiFloat"
              style={{
                width: '180px',
                height: '180px',
                transform: 'rotate(-18deg) translate(-32px, 24px) skewY(-8deg)',
                opacity: 0.97,
                filter: 'drop-shadow(0 18px 36px rgba(20,184,166,0.22))'
              }}
            />
            {/* Eliminado el óvalo verde decorativo extra */}
            <h2 className="text-4xl md:text-5xl font-['Pacifico'] text-pink-600 text-center drop-shadow-xl mb-8">Nuestros productos</h2>
          </div>
          <div className="flex flex-wrap items-stretch justify-center gap-4 md:gap-0 max-w-5xl mx-auto px-2 md:px-0">
            {/* Formulario para agregar productos, solo visible para admin */}
            {isAdmin && (
              <form className="w-full max-w-xl mx-auto mb-8 p-6 bg-white rounded-2xl shadow-xl flex flex-col gap-4" onSubmit={async e => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const title = (form.elements.namedItem('title') as HTMLInputElement).value;
                const description = (form.elements.namedItem('description') as HTMLInputElement).value;
                const fileInput = form.elements.namedItem('image') as HTMLInputElement;
                const file = fileInput.files && fileInput.files[0];
                if (title && description && file) {
                  const formData = new FormData();
                  formData.append('title', title);
                  formData.append('description', description);
                  formData.append('image', file);
                  try {
                const res = await fetch('http://localhost:4000/api/productos', {
                  method: 'POST',
                  body: formData
                });
                    if (res.ok) {
                      const data = await res.json();
                      // Espera que el backend devuelva { title, description, image }
                      setProducts(prev => [...prev, data]);
                      form.reset();
                    } else {
                      alert('Error al guardar el producto');
                    }
                  } catch (err) {
                    alert('Error de red al guardar el producto');
                  }
                }
              }}>
                <h3 className="text-2xl font-['Pacifico'] text-teal-400 mb-2">Agregar producto</h3>
                <input name="title" type="text" placeholder="Nombre del producto" className="border rounded-lg px-4 py-2" required />
                <input name="description" type="text" placeholder="Descripción" className="border rounded-lg px-4 py-2" required />
                <input name="image" type="file" accept="image/*" className="border rounded-lg px-4 py-2" required />
                <button type="submit" className="rounded-full bg-gradient-to-r from-teal-400 to-pink-400 px-6 py-2 text-white font-bold shadow-lg hover:scale-105 transition-all">Agregar</button>
              </form>
            )}
            {products.map((item, i) => (
              <article
                key={item._id ?? i}
                className={`relative rounded-3xl bg-white shadow-2xl ring-2 ring-teal-100 px-10 py-12 flex flex-col items-center transition-all duration-500 hover:ring-pink-200 z-10 group ${i % 2 === 0 ? 'md:-mt-12' : 'md:mt-12'}`}
                style={{
                  animation: `flipIn 1s cubic-bezier(0.4,0,0.2,1) ${i * 0.2 + 0.2}s both`,
                  marginLeft: i === 1 ? '-40px' : undefined,
                  marginRight: i === 1 ? '-40px' : undefined,
                  transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                  marginBottom: '48px', // separa del final del contenedor
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'rotateY(8deg) scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotateY(0deg) scale(1)'}
              >
                {/* Línea SVG decorativa entre tarjetas */}
                {i < 2 && (
                  <svg width="80" height="40" className="absolute top-1/2 right-0 -translate-y-1/2 md:block hidden z-0" style={{marginRight: '-40px'}}>
                    <path d="M0,20 Q40,0 80,20 Q40,40 0,20" stroke="#A7F3D0" strokeWidth="4" fill="none" />
                  </svg>
                )}
                <div className="mb-6 h-32 w-32 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-50 to-lime-50 shadow-lg">
                  {item.image && (
                    <img src={`http://localhost:4000${item.image}`} alt={item.title} className="w-full h-full object-contain rounded-full" />
                  )}
                </div>
                <h3 className="text-center text-2xl font-['Righteous'] text-pink-600 mb-3">{item.title}</h3>
                <p className="text-center text-base text-teal-600 font-['Righteous'] mb-6">
                  {item.description}
                </p>
                <button className="rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-8 py-3 text-base font-['Righteous'] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-pink-400"
                  onClick={() => addToCart(item.title)}
                >Añadir al carrito</button>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      {/* Verdi Mascota */}
      {/* Eliminada la imagen Verdi del footer */}

      <div className="w-full" style={{ height: '64px' }}></div>
      <Footer />
      </div>
      {/* Fin del contenedor principal */}
    </div>
  );
}
