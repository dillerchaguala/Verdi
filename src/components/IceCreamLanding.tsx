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

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-lime-50 to-white" style={{ backgroundImage: 'url(/fondo-global.png)', backgroundRepeat: 'repeat', backgroundSize: 'cover' }}>
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10">
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
                    <button className="rounded-full bg-gradient-to-r from-pink-400 to-pink-600 px-6 py-3 text-base font-['Righteous'] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:from-pink-500 hover:to-pink-700 flex items-center gap-2" style={{ animation: 'fadeInUp 1.8s ease-out' }}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-8h2v2h-2v2h-2v-2H7V8h2V6h2v2z"/>
                      </svg>
                      Facebook
                    </button>
                    <button className="rounded-full bg-gradient-to-r from-teal-400 to-teal-600 px-6 py-3 text-base font-['Righteous'] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:from-teal-500 hover:to-teal-700 flex items-center gap-2" style={{ animation: 'fadeInUp 2s ease-out' }}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 2a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h12l4 4V2zM5 7h10v2H5V7zm0 4h10v2H5v-2z"/>
                      </svg>
                      Instagram
                    </button>
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
              
              {/* Decoración */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-16 opacity-20">
                <img src="/zanahoria.png" alt="" className="w-full h-full object-contain rotate-45" />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-16 opacity-20">
                <img src="/remolacha.png" alt="" className="w-full h-full object-contain -rotate-45" />
              </div>
            </div>

            <div className="relative h-[500px] flex items-start justify-between px-8 pt-2">
              <div className="relative w-full h-[320px] flex items-start justify-start pt-0 pl-0" style={{marginTop: '-40px'}}>
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
      <div className="w-full bg-gradient-to-b from-lime-50 via-white to-lime-50 py-6 pb-0">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <div className="relative w-full">
              {/* Imagen Verdi en diagonal, esquina superior izquierda */}
              <img
                src="/verdi.png"
                alt="Verdi verdulería"
                className="absolute left-0 top-0 z-30 object-contain drop-shadow-xl"
        style={{
          width: "270px",
          height: "270px",
          transform: "rotate(-18deg) translate(-30px, -120px)",
          maxHeight: "270px",
          filter: "drop-shadow(0 26px 26px rgb(20 184 166 / 0.26))",
          animation: "verdiFloat 3.2s ease-in-out infinite"
        }}
              />
              <h2 className="text-6xl md:text-7xl font-['Pacifico'] text-teal-400 mb-4 text-right absolute right-0 top-0 flex flex-row-reverse gap-4" style={{maxWidth: '700px'}}>
              <style>{`
                @keyframes verdiFloat {
                  0%, 100% { transform: rotate(-18deg) translate(10px, -190px); }
                  50% { transform: rotate(-18deg) translate(10px, -210px) scale(1.04); }
                }
              `}</style>
                <span style={{animation: 'slideInRight 0.7s cubic-bezier(0.4,0,0.2,1)'}}>Productos</span>
                <span style={{animation: 'slideInRight 1.1s cubic-bezier(0.4,0,0.2,1)'}}>Nuestros</span>
              </h2>
              <p className="text-pink-600 font-['Righteous'] text-lg text-right absolute right-0 top-24 flex flex-row-reverse gap-2" style={{maxWidth: '700px'}}>
                <span style={{animation: 'slideInRight 0.8s cubic-bezier(0.4,0,0.2,1)'}}>naturaleza</span>
                <span style={{animation: 'slideInRight 1.2s cubic-bezier(0.4,0,0.2,1)'}}>de</span>
                <span style={{animation: 'slideInRight 1.4s cubic-bezier(0.4,0,0.2,1)'}}>sabor</span>
                <span style={{animation: 'slideInRight 1.6s cubic-bezier(0.4,0,0.2,1)'}}>el</span>
                <span style={{animation: 'slideInRight 1.8s cubic-bezier(0.4,0,0.2,1)'}}>Descubre</span>
              </p>
              <div style={{height: '110px'}}></div>
              <style>{`
                @keyframes slideInRight {
                  0% { opacity: 0; transform: translateX(80px); }
                  100% { opacity: 1; transform: translateX(0); }
                }
              `}</style>
            </div>
          </div>
          <style>{`
            @keyframes flipIn {
              0% { transform: rotateY(90deg) scale(0.8); opacity: 0; }
              60% { transform: rotateY(-10deg) scale(1.05); opacity: 1; }
              100% { transform: rotateY(0deg) scale(1); opacity: 1; }
            }
            @keyframes iconPulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.18); }
            }
            @keyframes iconJumpSpin {
              0% { transform: scale(1) rotate(0deg); }
              30% { transform: scale(1.2) translateY(-18px) rotate(20deg); }
              60% { transform: scale(1.1) translateY(-8px) rotate(-20deg); }
              100% { transform: scale(1) rotate(0deg); }
            }
            @keyframes cardRotate {
              0% { transform: rotateY(0deg) scale(1); }
              100% { transform: rotateY(8deg) scale(1.04); }
            }
          `}</style>
          <div className="flex flex-wrap items-stretch justify-center gap-4 md:gap-0 max-w-5xl mx-auto px-2 md:px-0">
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
              },
              {
                title: "Sin Azúcar",
                description: "Endulzado naturalmente",
                icon: "🍯"
              },
              {
                title: "Vegano",
                description: "Apto para todos",
                icon: "🌱"
              },
              {
                title: "Fresco y Local",
                description: "Ingredientes de la región",
                icon: "🧺"
              }
            ].map((item, i) => (
              <article
                key={i}
                className={`relative rounded-3xl bg-white shadow-2xl ring-2 ring-teal-100 px-10 py-12 flex flex-col items-center transition-all duration-500 hover:ring-pink-200 z-10 group ${i % 2 === 0 ? 'md:-mt-12' : 'md:mt-12'}`}
                style={{
                  animation: `flipIn 1s cubic-bezier(0.4,0,0.2,1) ${i * 0.2 + 0.2}s both`,
                  marginLeft: i === 1 ? '-40px' : undefined,
                  marginRight: i === 1 ? '-40px' : undefined,
                  transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
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
                  <span 
                    className="text-6xl group-hover:animate-[iconJumpSpin_0.7s]"
                    style={{animation: 'iconPulse 2s infinite'}}
                  >{item.icon}</span>
                </div>
                <h3 className="text-center text-2xl font-['Righteous'] text-pink-600 mb-3">{item.title}</h3>
                <p className="text-center text-base text-teal-600 font-['Righteous'] mb-6">
                  {item.description}
                </p>
                <button className="rounded-full bg-gradient-to-r from-teal-400 to-teal-500 px-8 py-3 text-base font-['Righteous'] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-pink-400">
                  Descubrir
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      {/* Verdi Mascota */}
      {/* Eliminada la imagen Verdi del footer */}

      <Footer />
      </div>
      {/* Fin del contenedor principal */}
    </div>
  );
}
