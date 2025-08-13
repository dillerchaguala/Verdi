import Nav from './Nav'
import Footer from './Footer'

export default function IceCreamLanding() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-lime-100 via-lime-50 to-lime-100">
      <div className="container mx-auto">
        <Nav />

        {/* HERO */}
        <section className="container mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-pink-600 font-semibold tracking-wider uppercase">Verdu</p>
              <h1 className="mt-1 text-4xl font-extrabold text-teal-400 drop-shadow-sm md:text-5xl">
                Helados
              </h1>
              <p className="text-pink-600 text-lg">Del Campo a tu nevera</p>
              <div className="mt-5 flex items-center gap-3">
                <button className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-pink-600 shadow hover:shadow-md">
                  Ver Catalogo
                </button>
                <button className="rounded-full bg-teal-400 px-4 py-1.5 text-sm font-semibold text-white shadow hover:shadow-md">
                  Contactenos
                </button>
              </div>
              {/* Sabías que? */}
              <div className="mt-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg ring-1 ring-teal-100">
                  <h3 className="text-lg font-semibold text-pink-600 mb-2">¿Sabías que?</h3>
                  <p className="text-teal-600 text-sm leading-relaxed">
                    Nuestros helados son elaborados con ingredientes naturales directamente del campo, 
                    asegurando la mejor calidad y frescura en cada bocado.
                  </p>
                </div>
              </div>
            </div>

            {/* HELADOS SUPERIORES */}
            <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
              {/* Círculos decorativos de fondo */}
              <div className="absolute right-4 top-4 h-96 w-96 rounded-full bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300 opacity-80 blur-2xl"></div>
              <div className="absolute right-8 top-8 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-100 via-pink-200 to-pink-300 opacity-70 blur-xl"></div>
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-gradient-to-bl from-amber-100 via-amber-200 to-amber-300 opacity-60 blur-lg"></div>
              
              {/* Contenedor de la imagen con efecto 3D */}
              <div className="relative w-[400px] h-[400px] transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Múltiples capas de fondos para profundidad */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300 opacity-90 blur-md"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white/90 via-teal-50/90 to-teal-100/90 blur-sm"></div>
                <div className="absolute inset-4 rounded-full shadow-lg bg-gradient-to-br from-white/80 via-teal-50/80 to-teal-100/80"></div>
                
                {/* Imagen principal */}
                <img
                  src="/verdi.png"
                  alt="Verdi verdulería"
                  className="relative w-[120%] h-[120%] -mt-16 ml-16 object-contain transform transition-all duration-500"
                  style={{
                    transform: "perspective(2000px) rotateY(-15deg) rotateX(5deg) translateZ(75px) translateX(-60px)",
                    filter: "drop-shadow(0 30px 30px rgb(20 184 166 / 0.2)) drop-shadow(0 20px 20px rgb(56 189 248 / 0.2))"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* HERO CARDS */}
        <section className="container mx-auto max-w-6xl px-6 py-10 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-teal-100">
                <div className="mx-auto mb-3 h-36 w-36">
                  <img
                    src="/logo.png"
                    className="h-full w-full object-cover rounded-xl"
                    alt="Helado Verdi"
                  />
                </div>
                <h3 className="text-center text-lg font-extrabold text-pink-600">Helados Verdi</h3>
                <p className="mt-2 text-center text-xs text-teal-400">
                  Del Campo a tu nevera
                </p>
                <div className="mt-4 flex justify-center">
                  <button className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-pink-600 shadow-sm ring-1 ring-pink-100 hover:shadow">
                    ➜
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
