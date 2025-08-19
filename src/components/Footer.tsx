export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-lime-50 px-6 pb-0 pt-6 md:px-10 relative overflow-hidden" style={{marginBottom: 0}}>
      {/* Fondo decorativo con patrón de círculos */}
      <div className="absolute inset-0 pointer-events-none -z-10" style={{
        backgroundImage: `
          radial-gradient(circle at 40px 60px, rgba(20,184,166,0.08) 12px, transparent 0),
          radial-gradient(circle at 80% 80%, rgba(236,72,153,0.08) 18px, transparent 0),
          radial-gradient(circle at 60% 20%, rgba(132,204,22,0.08) 10px, transparent 0)
        `,
        backgroundSize: '180px 180px'
      }}></div>
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 relative">
        {/* Imagen decorativa de Verdi con animación 3D en la esquina inferior derecha */}
        <div className="hidden md:block absolute right-0 bottom-0 z-20" style={{pointerEvents: 'none'}}>
          <img
            src="/verdi.png"
            alt="Verdi decorativo"
            className="w-52 h-52 object-contain drop-shadow-2xl animate-verdiFloat3d"
            style={{filter: 'drop-shadow(0 18px 32px rgba(20,184,166,0.18))', transform: 'rotateY(12deg) scale(1.08)'}}
          />
          <style>{`
            @keyframes verdiFloat3d {
              0%, 100% { transform: rotateY(12deg) scale(1.08) translateY(0); }
              50% { transform: rotateY(-12deg) scale(1.12) translateY(-18px); }
            }
            .animate-verdiFloat3d {
              animation: verdiFloat3d 4.2s ease-in-out infinite;
            }
          `}</style>
        </div>
        {/* Información principal alineada a la izquierda */}
        <div className="flex-1 min-w-[260px] text-left text-teal-700">
          <div className="bg-white/80 rounded-2xl shadow-2xl p-8 backdrop-blur-md animate-fadeInUp">
            <h3 className="font-['Pacifico'] text-3xl text-teal-400 mb-4 drop-shadow">VerduHelados Sibaté</h3>
            <ul className="space-y-3 text-lg font-['Righteous'] tracking-wide">
              <li className="flex items-center gap-2"><span className="text-teal-400 text-xl">📍</span> <span className="text-teal-700 font-bold">Transversal 14 # 10 bis 30, Barrio San Martín, Sibaté</span></li>
              <li className="flex items-center gap-2"><span className="text-teal-400 text-xl">📞</span> <span className="text-teal-700 font-bold">311 4877766</span></li>
              <li className="flex items-center gap-2"><span className="text-teal-400 text-xl">✉️</span> <span className="text-teal-700 font-bold">verduhelados@gmail.com</span></li>
              <li className="flex items-center gap-2"><span className="text-teal-400 text-xl">🕒</span> <span className="text-teal-700 font-bold">Siempre abierto</span></li>
              <li className="flex items-center gap-2"><span className="text-teal-400 text-xl">�</span> <span className="text-teal-700 font-bold">Entrega a domicilio · Retiro en el negocio</span></li>
            </ul>
            <div className="flex gap-4 mt-8 text-2xl text-rose-400">
              <a href="#" aria-label="facebook" className="hover:text-rose-600 hover:scale-110 transition-transform">○</a>
              <a href="#" aria-label="youtube" className="hover:text-rose-600 hover:scale-110 transition-transform">▸</a>
            </div>
          </div>
        </div>
        {/* Mapa a la derecha */}
        <div className="flex-1 min-w-[320px] flex justify-end items-center">
          <div className="mt-8 rounded-2xl overflow-hidden border-2 border-teal-100 shadow-2xl w-[420px] h-[270px] bg-white/90 animate-fadeInUp" style={{ marginLeft: '-32px' }}>
            <iframe
              title="Mapa Sibaté"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.259%2C4.484%2C-74.255%2C4.488&amp;layer=mapnik&marker=4.486,-74.257"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Línea divisoria y derechos reservados */}
      <div className="w-full flex flex-col items-center mt-2">
        <hr className="w-full border-t-2 border-teal-100 mb-4 shadow-pink-200" style={{boxShadow: '0 0 12px 0 #f9a8d4'}} />
        <p className="text-xs text-pink-600 font-['Righteous'] animate-fadeInUp">© {new Date().getFullYear()} VerduHelados Sibaté. Todos los derechos reservados.</p>
      </div>
      <style>{`
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
      `}</style>
    </footer>
  )
}
