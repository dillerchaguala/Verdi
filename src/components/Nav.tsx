export default function Nav() {
  return (
    <header className="w-full bg-transparent">
      <div className="max-w-[1860px] mx-auto py-0 flex items-center justify-between">
        <div className="flex items-center pl-0">
          <div className="h-40 w-40 overflow-hidden">
            <img src="/logo.png" alt="Logo Verdu Helados" className="h-full w-full object-contain" />
          </div>
        </div>
        <nav className="hidden gap-16 text-lg font-['Fredoka_One'] text-teal-400 md:flex items-center pr-0">
          <a href="#" className="hover:text-pink-600 transition-colors hover:scale-105 transform duration-200">INICIO</a>
          <a href="#" className="hover:text-pink-600 transition-colors hover:scale-105 transform duration-200">EVENTOS</a>
          <a href="#" className="hover:text-pink-600 transition-colors hover:scale-105 transform duration-200">BLOG</a>
          <a href="#" className="hover:text-pink-600 transition-colors hover:scale-105 transform duration-200">NOSOTROS</a>
        </nav>
      </div>
    </header>
  );
};
