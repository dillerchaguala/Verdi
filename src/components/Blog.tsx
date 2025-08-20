import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export interface BlogPost {
  title: string;
  content: string;
  image?: string;
}

export default function Blog() {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('verduadmin') === 'true';
  });
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [modalImage, setModalImage] = useState<string | null>(null);

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

  useEffect(() => {
    fetch('http://localhost:4000/api/blog')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const handleCreate = async (post: BlogPost) => {
    const res = await fetch('http://localhost:4000/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });
    const nuevo = await res.json();
    setPosts([nuevo, ...posts]);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Decoraciones temáticas en las esquinas */}
      <img src="/fresa-marco.png" alt="Fresa decorativa" className="fixed left-0 top-0 z-30 opacity-30 pointer-events-none" style={{width: '160px', height: '160px', transform: 'rotate(-12deg) translate(-18px, -18px)'}} />
      <img src="/fresa2.png" alt="Fresa decorativa 2" className="fixed right-0 bottom-0 z-30 opacity-30 pointer-events-none" style={{width: '160px', height: '160px', transform: 'rotate(10deg) translate(18px, 18px)'}} />
      <div className="fixed left-0 bottom-0 z-30 flex items-end justify-start pointer-events-none" style={{width: '520px', height: '520px'}}>
        <img
          src="/helado-decorativo.png"
          alt="Helado decorativo"
          className="relative z-10 object-contain drop-shadow-2xl animate-heladoDecorativo3d"
          style={{width: '620px', height: '620px', marginBottom: '-40px', marginLeft: '-90px', filter: 'drop-shadow(0 68px 120px rgba(180,0,255,0.38))', borderRadius: '80px', transform: 'rotateZ(6deg) rotateY(4deg)'}}
        />
        <style>{`
          @keyframes heladoDecorativo3d {
            0%, 100% { transform: rotateZ(6deg) rotateY(4deg) scale(1.12) translateY(0); }
            50% { transform: rotateZ(12deg) rotateY(10deg) scale(1.18) translateY(-48px); }
          }
          .animate-heladoDecorativo3d {
            animation: heladoDecorativo3d 4.2s ease-in-out infinite;
          }
        `}</style>
      </div>
      {/* Fondo gradiente y olas animadas igual que en el inicio, por debajo del contenedor principal */}
      <div style={{position: 'fixed', left: 0, top: 0, width: '100vw', height: '480px', zIndex: -10, pointerEvents: 'none', overflow: 'hidden', marginTop: '-64px'}}>
        <svg className="wave-bg-top" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{position: 'absolute', width: '200%', height: '480px', left: 0, top: 0, transform: 'scaleY(-1)'}}>
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
      <div style={{position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', zIndex: -10, pointerEvents: 'none', overflow: 'hidden'}}>
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
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10" style={{position: 'relative', zIndex: 2}}>
        <Nav />
        {/* Contenedor principal Blog con fondo blanco y sombra, igual que en el inicio */}
        <div className="w-full" style={{background: 'white', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.08)', borderRadius: '0 0 32px 32px', overflow: 'hidden'}}>
          <section className="relative h-auto min-h-[500px] overflow-hidden shadow-2xl flex flex-col items-center justify-center">
          <h1 className="text-7xl md:text-9xl font-['Pacifico'] text-teal-400 drop-shadow-lg leading-tight text-center mt-20 mb-8">Blog</h1>
          <p className="text-pink-600 text-2xl font-['Righteous'] mt-1 tracking-wide text-center mb-8">¡Lee nuestras novedades y artículos!</p>
          {isAdmin && <BlogForm onCreate={handleCreate} />}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-5xl mx-auto mt-8">
            {posts.length === 0 && (
              <p className="text-center text-gray-500 col-span-3">No hay publicaciones aún.</p>
            )}
            {posts.map((post, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-2xl ring-2 ring-teal-100 p-8 flex flex-col items-center relative mb-8">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-2 cursor-pointer"
                    onClick={() => setModalImage(post.image ?? null)}
                  />
                )}
                <h2 className="text-3xl font-['Pacifico'] text-teal-400 mb-2">{post.title}</h2>
                <p className="text-teal-600 font-['Righteous'] text-base mb-4 text-center">{post.content}</p>
              </div>
            ))}
            {modalImage && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setModalImage(null)}>
                <div className="bg-white rounded-xl shadow-2xl p-4 relative max-w-3xl w-full flex flex-col items-center">
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-pink-600 text-2xl font-bold" onClick={() => setModalImage(null)}>&times;</button>
                  <img src={modalImage} alt="Blog" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
                </div>
              </div>
            )}
          </div>
        </section>
          <div className="w-full" style={{ height: '64px' }}></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function BlogForm({ onCreate }: { onCreate: (post: BlogPost) => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({ title, content, image });
    setTitle("");
    setContent("");
    setImage(undefined);
  };

  return (
    <form className="bg-white rounded-xl shadow-lg p-6 mb-8 w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-4 text-teal-500">Crear nueva publicación</h3>
      <input
        type="text"
        placeholder="Título"
        className="w-full mb-2 p-2 border rounded"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Contenido"
        className="w-full mb-2 p-2 border rounded"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        className="w-full mb-2"
        onChange={handleImageChange}
      />
      {image && <img src={image} alt="Preview" className="w-full h-32 object-cover rounded mb-2" />}
      <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">Publicar</button>
    </form>
  );
}
