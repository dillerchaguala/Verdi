import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLogin from './AdminLogin';

export default function Nav() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('verduadmin') === 'true';
  });

  React.useEffect(() => {
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

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.setItem('verduadmin', 'false');
    window.dispatchEvent(new Event('verduadmin-logout'));
  };

  return (
    <header className="w-full bg-transparent">
      <div className="max-w-[1440px] mx-auto pt-0 pb-0 flex items-center justify-between">
        <div className="flex items-center pl-0">
          <div className="h-32 w-32 overflow-hidden mt-[-8px] flex items-center">
            <img src="/logo.png" alt="Logo Verdu Helados" className="h-full w-full object-contain" />
          </div>
        </div>
        <nav className="hidden gap-16 text-lg font-['Fredoka_One'] text-teal-400 md:flex items-center pr-0 mt-0">
          {/* Botón de carrito de compras, visible para todos */}
          <button
            className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-400 to-teal-400 text-white shadow-lg hover:scale-105 hover:from-teal-500 hover:to-lime-500 transition-all duration-300"
            style={{ fontWeight: 600 }}
            aria-label="Carrito de compras"
            onClick={() => window.dispatchEvent(new Event('verdu-cart-open'))}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
            </svg>
            <span>Carrito</span>
          </button>
          <Link to="/" className="hover:text-pink-600 transition-colors hover:scale-105 transform duration-200">INICIO</Link>
          <Link to="/eventos" className="hover:text-pink-600 transition-colors hover:scale-105 transform duration-200">EVENTOS</Link>
          <Link to="/blog" className="hover:text-pink-600 transition-colors hover:scale-105 transform duration-200">BLOG</Link>
          <a href="#" className="hover:text-pink-600 transition-colors hover:scale-105 transform duration-200">NOSOTROS</a>
          {!isAdmin && (
            <button
              className="ml-6 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-bold"
              onClick={() => setShowLogin(true)}
            >
              Iniciar sesión
            </button>
          )}
          {isAdmin && (
            <button
              className="ml-6 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-bold"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          )}
        </nav>
      </div>
      {/* Modal de login admin */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-pink-600 text-2xl font-bold" onClick={() => setShowLogin(false)}>&times;</button>
            <AdminLogin onLogin={() => {
              setShowLogin(false);
              setIsAdmin(true);
              window.dispatchEvent(new Event('verduadmin-login'));
            }} />
          </div>
        </div>
      )}
    </header>
  );
}
