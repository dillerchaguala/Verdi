export default function Nav() {
  return (
    <header className="flex items-center justify-between px-6 py-6">
      <div className="flex items-center">
        <div className="h-40 w-40 overflow-hidden">
          <img src="/logo.png" alt="Logo Verdu Helados" className="h-full w-full object-contain" />
        </div>
      </div>
      <nav className="hidden gap-8 text-sm text-teal-400 md:flex">
        <a href="#" className="hover:text-pink-600 transition-colors">Inicio</a>
        <a href="#" className="hover:text-pink-600 transition-colors">Catalogo</a>
        <a href="#" className="hover:text-pink-600 transition-colors">Nosotros</a>
        <a href="#" className="hover:text-pink-600 transition-colors">Contactos</a>
      </nav>
    </header>
  )
}
