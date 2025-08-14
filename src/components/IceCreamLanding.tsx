import Nav from "./Nav";
import Footer from "./Footer";
import { useState, useEffect } from "react";

// Estilos globales para las animaciones
const styles = `
  @keyframes scoopFloat {
    0%, 100% { transform: translateZ(20px) translateY(0); }
    50% { transform: translateZ(40px) translateY(-10px); }
  }
`;

export default function IceCreamLanding() {
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
      image: "/zanahoria.png"
    },
    {
      title: "Remolacha",
      content: "El helado de remolacha es rico en antioxidantes y tiene un sabor único.",
      image: "/remolacha.png"
    },
    {
      title: "Auyama",
      content: "Nuestro helado de auyama es cremoso y nutritivo, perfecto para cualquier momento.",
      image: "/Auyama.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full relative">
        <div className="absolute inset-0">
          <div className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-lime-50 to-white">
            <img 
              src="/fondoheader.png" 
              alt="Fondo decorativo" 
              className="w-full h-auto min-h-full object-contain object-center mx-auto"
              style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'brightness(1.1) contrast(1.05)',
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
              }}
            />
          </div>
        </div>
        <div className="relative z-10">
          {/* Nav sin límite de ancho */}
          <Nav />
          
          {/* Contenido Hero con ancho máximo */}
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10">
            {/* HERO */}
            <div className="w-full py-16 md:py-24">
              <div className="grid items-center gap-12">
              <div className="mx-auto max-w-xl">
                <div className="mt-0">
                  <div className="flex flex-col items-center relative">
                    {/* Partículas decorativas */}
                    {/* Primera fila */}
                    <div className="absolute -top-20 -left-20 w-16 h-16 animate-float-slow">
                      <img 
                        src="/zanahoria.png" 
                        alt="zanahoria" 
                        className="w-full h-full object-contain opacity-40 rotate-12 hover:rotate-0 transition-transform duration-300" 
                      />
                    </div>
                    <div className="absolute -top-16 right-20 w-16 h-16 animate-float-delayed">
                      <img 
                        src="/remolacha.png" 
                        alt="remolacha" 
                        className="w-full h-full object-contain opacity-40 -rotate-12 hover:rotate-0 transition-transform duration-300" 
                      />
                    </div>
                    
                    {/* Segunda fila */}
                    <div className="absolute top-10 -right-32 w-20 h-20 animate-float">
                      <img 
                        src="/Auyama.png" 
                        alt="auyama" 
                        className="w-full h-full object-contain opacity-40 rotate-6 hover:rotate-0 transition-transform duration-300" 
                      />
                    </div>
                    <div className="absolute top-16 -left-28 w-16 h-16 animate-float-slow">
                      {/* Espacio para nueva imagen */}
                    </div>
                    
                    {/* Tercera fila */}
                    <div className="absolute bottom-4 -left-24 w-14 h-14 animate-float-delayed">
                      {/* Espacio para nueva imagen */}
                    </div>
                    <div className="absolute bottom-8 -right-28 w-16 h-16 animate-float">
                      {/* Espacio para nueva imagen */}
                    </div>
                    
                    <p className="text-pink-600 font-['Righteous'] tracking-wider uppercase text-2xl md:text-3xl animate-fade-in text-center">VERDU</p>
                    <h1 className="mt-1 text-5xl font-['Pacifico'] text-teal-400 drop-shadow-lg md:text-7xl leading-tight animate-slide-up text-center">
                      Helados
                    </h1>
                    <p className="text-pink-600 text-xl font-['Righteous'] mt-1 tracking-wide animate-fade-in-delayed text-center">
                      Del Campo a tu nevera
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-end gap-6">
                  <button className="rounded-full bg-white px-6 py-3 text-base font-['Righteous'] text-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-pink-50 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-8h2v2h-2v2h-2v-2H7V8h2V6h2v2z"/>
                    </svg>
                    Eventos
                  </button>
                  <button className="rounded-full bg-teal-400 px-6 py-3 text-base font-['Righteous'] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-teal-500 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 2a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h12l4 4V2zM5 7h10v2H5V7zm0 4h10v2H5v-2z"/>
                    </svg>
                    Blog
                  </button>
                </div>
              </div>

              {/* HELADOS SUPERIORES */}
              <div className="relative mx-auto flex w-full max-w-4xl items-center justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative">
        {/* Carrusel de Sabías que */}
        <div className="w-full bg-gradient-to-b from-lime-50 to-white relative overflow-hidden">
          {/* Contenedor principal del helado mascota */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] z-20">
            {/* Nube de saludo */}
            <div className="relative mb-4 pl-8">
              <div className="bg-white rounded-3xl p-4 shadow-lg relative">
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white transform rotate-45"></div>
                <div className="flex flex-col items-center">
                  <p className="text-teal-600 text-center font-['Pacifico'] text-lg mb-1">¡Hola, soy Verdi!</p>
                  <p className="text-pink-600 text-center font-['Righteous'] text-sm">¿Sabías que?</p>
                </div>
              </div>
            </div>
            {/* Imagen de Verdi */}
            <div className="relative w-[400px] h-[400px] transform transition-all duration-500 -ml-16">
              <img
                src="/helado.png"
                alt="Verdi mascota"
                className="relative w-[120%] h-[120%] -mt-10 object-contain transform transition-all duration-500 hover:scale-105 animate-bounce-slow"
                style={{
                  filter: "drop-shadow(0 30px 30px rgb(20 184 166 / 0.2))"
                }}
              />
            </div>
          </div>

          {/* Contenido del carrusel */}
          <div className="w-full max-w-[1440px] mx-auto px-6 py-8 md:px-10 overflow-hidden">
            {/* Título creativo */}
            <div className="text-center mb-12 relative">
              <h2 className="text-5xl md:text-6xl font-['Pacifico'] text-teal-400 mb-4">
                Descubre el lado divertido
              </h2>
              <p className="text-3xl md:text-4xl font-['Pacifico'] text-pink-600">
                de las verduras<span className="text-teal-400">...</span>
              </p>
              <p className="mt-4 text-xl md:text-2xl font-['Righteous'] text-teal-600">
                en un
                <span className="inline-block ml-2 px-4 py-1 bg-pink-600 text-white rounded-full transform -rotate-6 hover:rotate-0 transition-transform">
                  helado
                </span>
              </p>
              
              {/* Decoración */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-16 opacity-20">
                <img src="/zanahoria.png" alt="" className="w-full h-full object-contain rotate-45" />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-16 opacity-20">
                <img src="/remolacha.png" alt="" className="w-full h-full object-contain -rotate-45" />
              </div>
            </div>

            <div className="relative h-[500px] flex items-start justify-between px-8 pt-16">
              {/* Helado 3D */}
              <div className="relative w-[400px] h-[500px] transform-gpu perspective-[1000px] translate-x-20 -translate-y-48 -mt-24">
                <div className="absolute w-full h-full transform-gpu transition-all duration-700 preserve-3d">
                  {/* Helado */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 transition-all duration-500 overflow-hidden"
                    style={{
                      transform: 'translateZ(20px)',
                      animation: 'scoopFloat 4s ease-in-out infinite'
                    }}
                  >
                    <img 
                      src={currentSlide === 1 ? "/helado-remolacha.png" : 
                          currentSlide === 0 ? "/zanahoria.png" : "/Auyama.png"}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-110"
                      style={{
                        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Fondo decorativo con patrón */}
              <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-lime-50/80 to-white/60"></div>
                {/* Patrón de círculos */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    radial-gradient(circle at 20px 20px, rgba(20,184,166,0.1) 2px, transparent 0),
                    radial-gradient(circle at 40px 40px, rgba(219,39,119,0.1) 2px, transparent 0),
                    radial-gradient(circle at 60px 60px, rgba(236,252,203,0.3) 4px, transparent 0)
                  `,
                  backgroundSize: '60px 60px'
                }}></div>
                {/* Brillo superior e inferior */}
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/40 to-transparent"></div>
                {/* Destellos de color */}
                <div className="absolute top-20 left-1/4 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
              </div>
              
              <div 
                className="relative w-[800px] h-[400px] transform-gpu"
                style={{
                  perspective: '2000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {slides.map((slide, index) => {
                  const rotation = ((360 / slides.length) * index + (currentSlide * -360 / slides.length)) % 360;
                  const translateZ = 600;
                  const opacity = Math.abs(((rotation + 180) % 360) - 180) > 90 ? 0.3 : 1;
                  const scale = index === currentSlide ? 1.2 : 0.8;
                  const translateY = index === currentSlide ? -140 : -100;
                  
                  return (
                    <div 
                      key={index} 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `rotateY(${rotation}deg) translateZ(${translateZ}px) translateY(${translateY}px) scale(${scale})`,
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        opacity: opacity,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div 
                        className="transform transition-all duration-500 hover:scale-105"
                        style={{
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        <div className="relative">
                          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-teal-50 to-lime-50 shadow-lg flex items-center justify-center p-8 overflow-hidden">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-48 h-48 object-contain transform transition-transform duration-500 hover:scale-110"
                              style={{
                                filter: "drop-shadow(0 20px 20px rgb(20 184 166 / 0.2))"
                              }}
                            />
                          </div>
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
                            <h3 className="text-xl font-['Righteous'] text-pink-600 whitespace-nowrap">{slide.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Indicadores del carrusel */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center gap-3">
                  {slides.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                          ? 'bg-pink-600 scale-110 shadow-lg' 
                          : 'bg-pink-300 hover:scale-105 hover:bg-pink-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Flechas de navegación */}
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="absolute left-10 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-teal-50 transition-all hover:scale-110 hover:shadow-xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-teal-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="absolute right-10 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-teal-50 transition-all hover:scale-110 hover:shadow-xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-teal-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENEDOR DE PRODUCTOS */}
      <div className="w-full bg-gradient-to-b from-lime-50 via-white to-lime-50">
        <div className="w-full max-w-[1440px] mx-auto pt-32 pb-32">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-['Pacifico'] text-teal-400 mb-4">Nuestros Productos</h2>
            <p className="text-pink-600 font-['Righteous'] text-lg">Descubre el sabor de la naturaleza</p>
          </div>

          {/* Grid de productos */}
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Helado Natural",
                  description: "Sin conservantes artificiales",
                  icon: "🌿"
                },
                {
                  title: "100% Vegetales",
                  description: "Del campo a tu paladar",
                  icon: "🥕"
                },
                {
                  title: "Sabor Único",
                  description: "Una experiencia diferente",
                  icon: "✨"
                }
              ].map((item, i) => (
                <article 
                  key={i} 
                  className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-teal-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="mx-auto mb-6 h-40 w-40 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-lime-50 rounded-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-center text-xl font-['Righteous'] text-pink-600 mb-3">{item.title}</h3>
                  <p className="text-center text-sm text-teal-600 font-['Righteous'] mb-6">
                    {item.description}
                  </p>
                  <div className="flex justify-center">
                    <button className="rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-6 py-2 text-sm font-['Righteous'] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Descubrir
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Verdi Mascota */}
      <div className="relative w-full py-32 overflow-hidden bg-gradient-to-b from-lime-50 to-white">
        <div className="max-w-[1440px] mx-auto relative min-h-[800px] flex items-center justify-center">
          {/* Círculos decorativos de fondo */}
          <div className="absolute left-1/4 top-24 h-64 w-64 rounded-full bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300 opacity-80 blur-2xl shadow-[0_35px_60px_-15px_rgba(20,184,166,0.4)] animate-pulse"></div>
          <div className="absolute right-1/4 top-40 h-56 w-56 rounded-full bg-gradient-to-tr from-pink-100 via-pink-200 to-pink-300 opacity-70 blur-xl shadow-[0_35px_60px_-15px_rgba(219,39,119,0.4)] animate-pulse"></div>
          <div className="absolute left-1/3 bottom-24 h-48 w-48 rounded-full bg-gradient-to-bl from-amber-100 via-amber-200 to-amber-300 opacity-60 blur-lg shadow-[0_35px_60px_-15px_rgba(251,191,36,0.4)] animate-pulse"></div>
          
          {/* Contenedor de la imagen con efecto 3D */}
          <div className="relative w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] aspect-square flex items-center justify-center p-8">
            {/* Imagen principal */}
            <img
              src="/verdi.png"
              alt="Verdi verdulería"
              className="w-full h-full object-contain transform transition-all duration-500 animate-bounce-slow hover:scale-105"
              style={{
                filter: "drop-shadow(0 30px 30px rgb(20 184 166 / 0.2))",
                maxHeight: "calc(100vh - 200px)"
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
