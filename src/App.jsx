import React from 'react';
import { motion } from 'framer-motion';

export default function LaPampaFinal() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen font-sans selection:bg-[#c29c6d] selection:text-black overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer">
            <span className="text-2xl font-black tracking-[0.3em] text-[#c29c6d] leading-none">LA PAMPA</span>
            <span className="text-[9px] tracking-[0.5em] text-white/40 uppercase mt-1">Authentic Argentine Grill</span>
          </div>
          <a 
  href="https://w.app/lkgjii" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="bg-[#c29c6d] text-black px-6 py-2.5 text-[10px] font-black uppercase tracking-tighter hover:bg-white transition duration-500 shadow-lg shadow-[#c29c6d]/10">
    Reservar Mesa
  </button>
</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Fuego"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#0a0a0a]"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-7xl md:text-[120px] font-black uppercase leading-none tracking-tighter">
            Pura <span className="text-[#c29c6d] italic font-light lowercase">llama</span>
          </h1>
          <p className="text-[#c29c6d] tracking-[0.5em] uppercase text-xs font-bold mt-4 italic">Desde las pampas a tu mesa</p>
        </motion.div>
      </section>

      {/* 3. EXPERIENCIA (RITUAL) */}
      <section id="experiencia" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200" 
              className="w-full h-[500px] object-cover border border-white/10 shadow-2xl"
              alt="Corte Argentino"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#c29c6d] p-8 hidden md:block text-black font-black text-3xl italic">Est. 1984</div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none text-white">
              El ritual del <span className="text-[#c29c6d]">quebracho</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed font-light italic">
              "No usamos carbón convencional. Seleccionamos leña seca de monte alto para ahumar ligeramente cada corte."
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10 text-[#c29c6d] font-black uppercase text-[10px] tracking-widest">
              <div>Angus Certificado</div>
              <div>21 Días Dry-Aged</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALERÍA BOUTIQUE */}
      <section className="py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
    <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800" className="w-full h-48 object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition duration-700 rounded-sm" alt="Cocktail" />
    <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800" className="w-full h-64 object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition duration-700 rounded-sm mt-8 md:mt-12" alt="Interior" />
    <img src="https://images.pexels.com/photos/35437138/pexels-photo-35437138.png" className="w-full h-48 object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition duration-700 rounded-sm" alt="Parrilla" />
    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800" className="w-full h-64 object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition duration-700 rounded-sm mt-8 md:mt-12" alt="Cena" />
  </div>
</section>

      {/* 5. MENÚ DE CORTES */}
      <section id="menu" className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black uppercase mb-12 text-center tracking-tighter">Nuestra Selección</h2>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
            {[
              {n:'Ojo de Bife Master', d:'500g de puro marmoleo', p:'$45'}, 
              {n:'Bife de Chorizo', d:'Clásico argentino 400g', p:'$38'}, 
              {n:'Tomahawk Premium', d:'Corte de hacha 1.2kg', p:'$85'}, 
              {n:'Entraña de la Casa', d:'Jugosa y tierna', p:'$32'}
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4 group hover:border-[#c29c6d] transition duration-500">
                <div>
                  <h3 className="text-xl font-bold uppercase group-hover:text-[#c29c6d]">{item.n}</h3>
                  <p className="text-xs text-white/30 italic">{item.d}</p>
                </div>
                <span className="text-[#c29c6d] font-black text-xl">{item.p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CAVA DE VINOS */}
      <section id="vinos" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black uppercase mb-20 text-center tracking-tighter text-[#c29c6d]">Bodega & Cava</h2>
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-xs font-black tracking-widest uppercase mb-10 border-b border-[#c29c6d]/30 pb-2">Tintos de Guarda</h3>
              <div className="space-y-6 text-sm italic text-white/60">
                <div className="flex justify-between"><span>Catena Zapata Malbec</span><span>$145</span></div>
                <div className="flex justify-between"><span>Gran Enemigo Franc</span><span>$120</span></div>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-black tracking-widest uppercase mb-10 border-b border-[#c29c6d]/30 pb-2">Blancos & Rosados</h3>
              <div className="space-y-6 text-sm italic text-white/60">
                <div className="flex justify-between"><span>Angélica Chardonnay</span><span>$85</span></div>
                <div className="flex justify-between"><span>Monte Xanic Rose</span><span>$70</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER CON ICONO INSTAGRAM CORREGIDO */}
      <footer className="bg-black border-t border-white/5 py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto space-y-10">
          <div>
            <span className="text-3xl font-black tracking-widest text-[#c29c6d]">LA PAMPA</span>
            <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] mt-2 font-bold italic">The Art of Fire</p>
          </div>
          
          <div className="flex justify-center gap-8">
            {/* INSTAGRAM ICON - REVISADO */}
            <a href="#" className="text-white/40 hover:text-[#c29c6d] transition-all transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.999 0h.001zm1.978 1.864c.812.037 1.24.17 1.533.284.388.15.665.33.957.622.292.292.472.569.622.957.114.293.247.72.284 1.533.037.812.048 1.05.048 3.033 0 1.983-.011 2.221-.048 3.033-.037.812-.17 1.24-.284 1.533a2.708 2.708 0 0 1-.622.957 2.708 2.708 0 0 1-.957.622c-.293.114-.72.247-1.533.284-.812.037-1.05.048-3.033.048-1.983 0-2.221-.011-3.033-.048-.812-.037-1.24-.17-1.533-.284a2.708 2.708 0 0 1-.957-.622 2.708 2.708 0 0 1-.622-.957c-.114-.293-.247-.72-.284-1.533-.037-.812-.048-1.05-.048-3.033 0-1.983.011-2.221.048-3.033.037-.812.17-1.24.284-1.533s.33-.665.622-.957a2.708 2.708 0 0 1 .957-.622c.293-.114.72-.247 1.533-.284.812-.037 1.05-.048 3.033-.048 1.983 0 2.221.01 3.033.048zM8 3.891a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334zm4.328-.564a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z"/>
              </svg>
            </a>
            {/* FACEBOOK ICON */}
            <a href="#" className="text-white/40 hover:text-[#c29c6d] transition-all transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
          </div>

          <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-bold">
            © {currentYear} LA PAMPA RESTAURANTS GROUP • LUXURY GRIDS
          </p>
        </div>
      </footer>

      {/* 8. BOTÓN WHATSAPP VERDE FLOTANTE */}
      <a 
        href="https://w.app/lkgjii" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-all z-50 border-2 border-white/20 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.104-1.076a7.864 7.864 0 0 0 3.89 1.024h.004c4.367 0 7.926-3.558 7.93-7.93a7.859 7.859 0 0 0-2.327-5.692zM7.994 14.52a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}