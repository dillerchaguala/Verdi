export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-lime-50 px-0 pb-0 pt-0 relative" style={{marginBottom: 0}}>
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-stretch gap-0 relative py-0">
        {/* Columna izquierda: Marca */}
        <div className="flex-1 flex flex-col justify-center pl-8 py-10 min-w-[260px]">
          <h3 className="font-['Pacifico'] text-4xl text-teal-400 mb-4 drop-shadow">VerduHelados Sibaté</h3>
        </div>
        {/* Columna centro: Contacto */}
        <div className="flex-1 flex flex-col justify-center items-start px-8 py-10 min-w-[260px]">
          <h4 className="font-['Righteous'] text-2xl text-teal-700 mb-2">CONTACTO</h4>
          <div className="mb-2 text-base font-['Righteous'] text-teal-700">verduhelados@gmail.com</div>
          <div className="w-32 h-0.5 bg-teal-200 mb-2" />
          <div className="text-base font-['Righteous'] text-teal-700">Transversal 14 # 10 bis 30, Barrio San Martín, Sibaté</div>
          <div className="text-base font-['Righteous'] text-teal-700">311 4877766</div>
        </div>
        {/* Columna derecha: Links */}
        <div className="flex-1 flex flex-col justify-center items-end pr-8 py-10 min-w-[260px]">
          <ul className="space-y-3 text-lg font-['Righteous'] text-teal-700 text-right">
            <li><a href="#" className="hover:text-pink-600 transition-colors">Sobre nosotros</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Productos</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Eventos</a></li>
            <li><a href="#" className="hover:text-pink-600 transition-colors">Blog</a></li>
          </ul>
        </div>
      </div>
      {/* Línea divisoria y derechos reservados */}
      <div className="w-full flex flex-col items-center mt-2">
        <hr className="w-full border-t-2 border-teal-100 mb-4 shadow-pink-200" style={{boxShadow: '0 0 12px 0 #f9a8d4'}} />
        <p className="text-xs text-pink-600 font-['Righteous'] animate-fadeInUp">© {new Date().getFullYear()} VerduHelados Sibaté. Todos los derechos reservados.</p>
      </div>
      {/* Imagen decorativa de Verdi eliminada para que solo esté en el contenedor de productos */}
      <style>{`
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
      `}</style>
    </footer>
  )
}
