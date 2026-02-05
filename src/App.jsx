import React from 'react';
import { MessageCircle, MapPin, ChevronRight } from 'lucide-react';

function App() {
 
  const [proyectoActivo, setProyectoActivo] = React.useState(null);
  const [menuAbierto, setMenuAbierto] = React.useState(false); // <--- Revisa que esté esta
 
const proyectos = [
  { 
    name: "Añelo Roots I", 
    loc: "Casco Urbano", 
    status: "FINALIZADO", 
    desc: "4 Departos de 100m² ubicados en dos plantas. 16 plazas totales. 100% de ocupación sostenida. A 100 metros de ruta 7.",
    image: "/proyectos/roots-1/portada.png",
    gallery: [
      "/proyectos/roots-1/galeria1.jpeg",
      "/proyectos/roots-1/galeria2.jpeg",
      "/proyectos/roots-1/galeria3.jpg",
      "/proyectos/roots-1/galeria4.jpg",
      "/proyectos/roots-1/galeria5.jpg",
      "/proyectos/roots-1/galeria6.jpg",
      "/proyectos/roots-1/galeria7.jpg",
      "/proyectos/roots-1/galeria8.jpg",
      "/proyectos/roots-1/galeria9.jpg",
      "/proyectos/roots-1/galeria10.jpg"
    ],
    servicios: ["Unidades de Dos Plantas", "Habitaciones para 2 personas con baño en suite", "3 er baño en comedor", "Aire Acondicionado / TV / Parrilla / Estacionamiento", "Servicio de limpieza / Gas Natural / Electricidad", "Agua corriente / Cable e internet", "Totalmente equipados / Vajilla y electrodomesticos"],
    tags: ["PREMIUM", "16 Plazas"]
  },
  { 
    name: "Añelo Roots II", 
    loc: "Casco Urbano", 
    status: "FINALIZADO", 
    desc: "3 Departamentos de 60m² mas 1 Departamento de 88 mts para 6 personas. Excelente ubicacion a 150 metros de ruta 7.",
    image: "/proyectos/roots-2/portada.jpeg",
       gallery: [
       "/proyectos/roots-2/galeria1.jpeg",
      "/proyectos/roots-2/galeria2.jpeg",
      "/proyectos/roots-2/galeria3.jpg",
      "/proyectos/roots-2/galeria4.jpg",
      "/proyectos/roots-2/galeria5.jpg",
      "/proyectos/roots-2/galeria6.jpg",
      "/proyectos/roots-2/galeria7.jpg",
      "/proyectos/roots-2/galeria8.jpg",
      "/proyectos/roots-2/galeria9.jpg"
      
    ],
    tags: ["versatil", "18 Plazas"],
    servicios: [ "Habitaciones para 2 personas con baño en suite",  "Aire Acondicionado / TV / Parrilla / Estacionamiento", "Servicio de limpieza / Gas Natural / Electricidad", "Agua corriente / Cable e internet", "Totalmente equipados / Vajilla y electrodomesticos"]
  },
  { 
    name: "Añelo Roots III", 
    loc: "La Meseta / Ruta 17", 
    status: "FINALIZADO", 
    desc: "Unidades de 60m² con baño en suite. Ubicación estratégica para logística, a 200 metrs de la Ruta 17, en la Meseta. Nuevo!",
    image: "/proyectos/roots-3/principal.jpeg", // Asegúrate de tener la foto real aquí
       gallery: [
      "/proyectos/roots-3/galeria1.jpeg",
      "/proyectos/roots-3/galeria2.jpeg",
      "/proyectos/roots-3/galeria3.jpeg",
      "/proyectos/roots-3/galeria4.jpeg",
      "/proyectos/roots-3/galeria5.jpeg",
      "/proyectos/roots-3/galeria6.jpeg",
      "/proyectos/roots-3/galeria7.jpeg",
    
    ],
    tags: ["A estrenar", "16 Plazas"],
    servicios: ["4 Departamentos para 4 personas", "Habitaciones para 2 personas con baño en suite", "Aire Acondicionado / TV / Parrilla / Estacionamiento", "Servicio de Limpieza y Blanco", "Agua corriente / Cable e internet", "Totalmente equipados / Vajilla y electrodomesticos"]
  },
  { 
    name: "Añelo Roots IV", 
    loc: "Casco Urbano (Barrio Mirador)", 
    status: "EN OBRA - MARZO 2026", 
    desc: "4 Unidades Funcionales de ~55m² y 1 Unidad de ~87m². Incluye cocheras, parrilla propia y mobiliario completo premium.",
    image: "/proyectos/roots-4/portada.png",
       gallery: [
      "/proyectos/roots-4/galeria1.jpeg",
      "/proyectos/roots-4/galeria2.jpeg",
      "/proyectos/roots-4/galeria3.jpeg",
      "/proyectos/roots-4/galeria4.jpeg",
      "/proyectos/roots-4/galeria5.jpeg",
      "/proyectos/roots-4/galeria6.jpeg"
    ],
    tags: ["En Obra", "22 Plazas"],
    servicios: ["4 Deptos para 4 personas más un Depto para 6 personas", "Baños en Suite", "Aire Acondicionado / TV / Parrilla / Estacionamiento", "Servicio de limpieza / Gas Natural / Electricidad", "Agua corriente / Cable e internet", "Totalmente equipados / Vajilla y electrodomesticos" ],
  }
];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
    {/* NAVBAR RESTAURADO src="/header/LogoCrux.png*/}
<nav style={{ 
  position: 'fixed', top: 0, left: 0, right: 0, 
  height: '125px', // Navbar más alto para albergar un logo grande
  backgroundColor: '#002D57', display: 'flex', alignItems: 'center', 
  justifyContent: 'center', zIndex: 999999, boxShadow: '0 4px 25px rgba(0,0,0,0.4)' 
}}>
  <style>{`
    @media (min-width: 769px) {
      .menu-desktop { display: flex !important; }
      .boton-movil { display: none !important; }
    }
    @media (max-width: 768px) {
      .menu-desktop { display: none !important; }
      .boton-movil { display: block !important; }
    }
  `}</style>

  <div style={{ 
    width: '100%', maxWidth: '1400px', padding: '0 40px', 
    display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
  }}>
    
    {/* LOGO IMPACTANTE */}
    <div style={{ flexShrink: 0, cursor: 'pointer' }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
      <img 
        src="/header/LogoCrux.png" 
        alt="Crux Desarrollos" 
        style={{ 
          height: '90px', // Tamaño XL para el logo
          width: 'auto',
          display: 'block',
          filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.2))' // Sutil relieve
        }} 
      />
    </div>

    {/* MENU DESKTOP */}
    <div className="menu-desktop" style={{ alignItems: 'center', gap: '40px' }}>
      <a href="#proyectos" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px' }}>Complejos</a>
      <a href="#ubicacion" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px' }}>Ubicación</a>
      <a href="#servicios" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '13px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px' }}>Servicios</a>
      <a 
        href="https://wa.me/541151454104" 
        target="_blank"
        style={{ 
          backgroundColor: '#00d1ff', 
          color: '#002D57', 
          padding: '14px 32px', 
          borderRadius: '4px', 
          textDecoration: 'none', 
          fontSize: '12px', 
          fontWeight: '900',
          boxShadow: '0 4px 15px rgba(0,209,255,0.3)'
        }}
      >
        RESERVAR AHORA
      </a>
    </div>

    {/* BOTÓN MÓVIL */}
    <div className="boton-movil">
      <button 
        onClick={() => setMenuAbierto(!menuAbierto)} 
        style={{ background: 'none', border: 'none', color: '#FFFFFF', fontSize: '42px', cursor: 'pointer' }}
      >
        {menuAbierto ? '✕' : '☰'}
      </button>
    </div>
  </div>

  {/* MENU MÓVIL (Ajustado a 125px) */}
  {menuAbierto && (
    <div style={{ 
      position: 'absolute', top: '125px', left: 0, width: '100%', backgroundColor: '#002D57', 
      padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px', zIndex: 999998,
      borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'
    }}>
      <a href="#proyectos" onClick={() => setMenuAbierto(false)} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '900', fontSize: '20px' }}>COMPLEJOS</a>
      <a href="#ubicacion" onClick={() => setMenuAbierto(false)} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '900', fontSize: '20px' }}>UBICACIÓN</a>
      <a href="https://wa.me/541151454104" style={{ backgroundColor: '#00d1ff', color: '#002D57', padding: '18px', borderRadius: '5px', textDecoration: 'none', fontWeight: '900' }}>WHATSAPP</a>
    </div>
  )}
</nav>
   {/* HERO SECTION CON IMAGEN DE PORTADA.PNG */}
<header id="inicio" style={{ paddingTop: '90px' }} className="relative  h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
  <div className="absolute inset-0 z-0">
    <img 
      src="/hero/portada.png" 
      alt="Alojamiento Ejecutivo Vaca Muerta" 
      className="w-full h-full object-cover opacity-60"
    />
    {/* Este degradado hace que el texto sea legible y le da el toque Crux */}
    <div className="absolute inset-0 bg-black/10 z-10"></div>
  </div>

  <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
    <div className="max-w-2xl">
      <h1 className="text-5xl md:text-7xl font-black text-white italic mb-4 uppercase tracking-tighter leading-[0.9]">
        Alojamiento <br />
        <span className="text-cruxCeleste">Corporativo</span>
      </h1>
      <p className="text-white text-lg md:text-xl mb-8 font-light italic border-l-2 border-cruxCeleste pl-4">
        Estrategia y confort en el epicentro de Vaca Muerta. <br />
        Unidades ejecutivas para personal jerárquico en Añelo.
      </p>
 <div className="flex flex-wrap gap-4">
  {/* Este link baja a la sección de complejos */}
  <a href="#proyectos" className="bg-cruxCeleste hover:bg-white hover:text-cruxAzul text-white px-8 py-4 rounded font-bold transition-all uppercase tracking-widest text-xs shadow-lg">
    Ver Complejos Disponibles
  </a>
  
  {/* Este link va directo al WhatsApp de reservas */}
  <a href="https://wa.me/541151454104?text=Hola!%20Solicito%20cotización%20por%20alojamiento%20corporativo." 
     target="_blank" 
     className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-cruxAzul px-8 py-4 rounded font-bold transition-all uppercase tracking-widest text-xs">
    Consultar Disponibilidad
  </a>
</div>
    </div>
  </div>
</header>


      
{/* BLOQUE CIFRAS DE VALOR */}
<div className="relative z-20 px-6">
  <div className="bg-white py-10 px-4 shadow-2xl mt-[-60px] max-w-7xl mx-auto rounded-xl grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-4 text-center border-b-4 border-[#00d1ff]">
    
    {/* DATO 1: METROS */}
    <div className="flex flex-col justify-center px-2">
      <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#002D57] leading-none">1500m²</p>
      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-slate-500 font-bold mt-3">Desarrollados</p>
    </div>

    {/* DATO 2: COMPLEJOS */}
    <div className="flex flex-col justify-center border-l border-slate-100 px-2">
      <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#002D57] leading-none">3</p>
      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-slate-500 font-bold mt-3">Complejos Finalizados</p>
    </div>

    {/* DATO 3: SISTEMA CONSTRUCTIVO (NUEVO) */}
    <div className="flex flex-col justify-center border-l border-slate-100 px-2">
      <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#00d1ff] leading-none">100%</p>
      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-[#002D57] font-black mt-3">Construcción Tradicional</p>
    </div>

    {/* DATO 4: CAMAS */}
    <div className="flex flex-col justify-center border-l border-slate-100 px-2">
      <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#002D57] leading-none">50</p>
      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-slate-500 font-bold mt-3">Camas Administradas</p>
    </div>

    {/* DATO 5: OBRA NUEVA */}
    <div className="flex flex-col justify-center border-l border-slate-100 px-2">
      <div className="flex items-center justify-center gap-1 mb-1">
         <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
         <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#002D57] leading-none">22</p>
      </div>
      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-orange-600 font-black mt-2">Camas en Ejecución 2026</p>
    </div>

  </div>
</div>
    

      {/* PROYECTOS */}
      <section id="proyectos" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12 border-l-4 border-cyan-400 pl-6">
          <h2 className="text-3xl font-black text-[#003366] italic uppercase">Ecosistema Roots</h2>
          <p className="text-slate-500 uppercase text-xs tracking-widest font-bold">Nuestros Complejos</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proyectos.map((p, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Crux+Desarrollos"; }}
                />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-cyan-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase">
                    {p.status}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <h3 className="text-lg font-bold text-[#003366] mb-1 uppercase tracking-tight">{p.name}</h3>
                <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase mb-3">
                  <MapPin size={12} className="mr-1 text-cyan-500" /> {p.loc}
                </div>
                <p className="text-sm text-slate-600 italic mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, idx) => (
                    <span key={idx} className="text-[9px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold uppercase tracking-tighter border border-slate-200">
                      {tag}
                    </span>
                  ))}

                                <button 
    onClick={() => setProyectoActivo(p)} 
    className="mt-auto w-full border-2 border-cruxAzul text-cruxAzul hover:bg-cruxAzul hover:text-white py-3 rounded font-black text-[10px] uppercase tracking-[0.2em] transition-all"
  >
    Ver Detalles y Fotos
  </button>
                </div>
  
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SECCIÓN UBICACIÓN ESTRATÉGICA */}
<section id="ubicacion" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Texto a la izquierda */}
      <div className="md:w-1/3 space-y-6">
        <h2 className="text-4xl font-black text-cruxAzul uppercase italic leading-none">
          Ubicación <br />
          <span className="text-cruxCeleste">Estratégica</span>
        </h2>
        <div className="w-20 h-2 bg-cruxCeleste"></div>
        <p className="text-slate-600 font-medium leading-relaxed">
          Nuestros 4 complejos están distribuidos en los puntos con mejor conectividad de Añelo, garantizando acceso inmediato a las <strong>Rutas Provinciales 7 y 17</strong>.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-xs font-bold text-cruxAzul uppercase tracking-wider">
            <span className="w-2 h-2 bg-cruxCeleste rounded-full"></span>
            Proximidad a Yacimientos
          </li>
          <li className="flex items-center gap-3 text-xs font-bold text-cruxAzul uppercase tracking-wider">
            <span className="w-2 h-2 bg-cruxCeleste rounded-full"></span>
            Zona Segura y Residencial
          </li>
          <li className="flex items-center gap-3 text-xs font-bold text-cruxAzul uppercase tracking-wider">
            <span className="w-2 h-2 bg-cruxCeleste rounded-full"></span>
            Acceso a Centros de Servicios
          </li>
        </ul>
      </div>

      {/* La Imagen del Mapa a la derecha */}
      <div className="md:w-2/3 w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-50 group">
          <img 
            src="/ubicacion/mapa.jpg" // Asegúrate de que el nombre coincida con tu archivo
            alt="Mapa de ubicación Crux en Añelo" 
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay sutil para que se vea más profesional */}
          <div className="absolute inset-0 bg-cruxAzul/5 pointer-events-none"></div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* SECCIÓN SERVICIOS (Formato Original - Íconos XL) */}
<section id="servicios" className="py-20 bg-white border-t border-slate-100">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-black text-[#002D57] uppercase tracking-tighter">
        Soluciones <span className="text-[#00d1ff]">All-Inclusive</span>
      </h2>
    </div>

    {/* Grilla más compacta con gap-x-4 */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-4 text-center">
      
      {/* 1. BAÑOS EN SUITE */}
      <div>
        <div className="text-[#00d1ff] mb-3 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h4 className="font-bold text-[#002D57] text-[11px] uppercase tracking-widest leading-tight">1 Baño cada 2 personas</h4>
        <p className="text-[9px] text-slate-400 mt-1 font-bold">SUITE PRIVADA</p>
      </div>

      {/* 2. CALEFACCIÓN A GAS */}
      <div>
        <div className="text-[#00d1ff] mb-3 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z"></path></svg>
        </div>
        <h4 className="font-bold text-[#002D57] text-[11px] uppercase tracking-widest leading-tight">Calefacción a Gas</h4>
        <p className="text-[9px] text-slate-400 mt-1 font-bold">CONFORT TÉRMICO</p>
      </div>

      {/* 3. LIMPIEZA */}
      <div>
        <div className="text-[#00d1ff] mb-3 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        </div>
        <h4 className="font-bold text-[#002D57] text-[11px] uppercase tracking-widest leading-tight">Limpieza y Blanco</h4>
        <p className="text-[9px] text-slate-400 mt-1 font-bold">MANTENIMIENTO</p>
      </div>

      {/* 4. INTERNET SATELITAL */}
      <div>
        <div className="text-[#00d1ff] mb-3 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 117.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.257-3.905 14.162 0"></path></svg>
        </div>
        <h4 className="font-bold text-[#002D57] text-[11px] uppercase tracking-widest leading-tight">Internet Satelital</h4>
        <p className="text-[9px] text-slate-400 mt-1 font-bold">ALTA VELOCIDAD</p>
      </div>

      {/* 5. AA INVERTER */}
      <div>
        <div className="text-[#00d1ff] mb-3 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <h4 className="font-bold text-[#002D57] text-[11px] uppercase tracking-widest leading-tight">AA Inverter + Cable</h4>
        <p className="text-[9px] text-slate-400 mt-1 font-bold">CLIMATIZACIÓN</p>
      </div>

      {/* 6. COCHERA PRIVADA */}
      <div>
        <div className="text-[#00d1ff] mb-3 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </div>
        <h4 className="font-bold text-[#002D57] text-[11px] uppercase tracking-widest leading-tight">Cochera Privada</h4>
        <p className="text-[9px] text-slate-400 mt-1 font-bold">ESTACIONAMIENTO</p>
      </div>

      {/* 7. PARRILLA PRIVADA */}
      <div>
        <div className="text-[#00d1ff] mb-3 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </div>
        <h4 className="font-bold text-[#002D57] text-[11px] uppercase tracking-widest leading-tight">Parrilla Privada</h4>
        <p className="text-[9px] text-slate-400 mt-1 font-bold">EXCLUSIVO</p>
      </div>

      {/* 8. SEGURIDAD */}
      <div>
        <div className="text-[#00d1ff] mb-3 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04"></path></svg>
        </div>
        <h4 className="font-bold text-[#002D57] text-[11px] uppercase tracking-widest leading-tight">Seguridad</h4>
        <p className="text-[9px] text-slate-400 mt-1 font-bold">MONITOREO</p>
      </div>

      {/* 9. CONTROL DE PLAGAS */}
      <div>
        <div className="text-[#00d1ff] mb-3 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        </div>
        <h4 className="font-bold text-[#002D57] text-[11px] uppercase tracking-widest leading-tight">Control de Plagas</h4>
        <p className="text-[9px] text-slate-400 mt-1 font-bold">SANITIZACIÓN</p>
      </div>

      {/* 10. SERVICIOS COMPLETOS */}
      <div>
        <div className="text-[#00d1ff] mb-3 flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1z"></path></svg>
        </div>
        <h4 className="font-bold text-[#002D57] text-[11px] uppercase tracking-widest leading-tight">Luz, Gas y Agua</h4>
        <p className="text-[9px] text-slate-400 mt-1 font-bold">GARANTIZADOS</p>
      </div>

    </div>
  </div>
</section>

{/* SECCIÓN GARANTÍA CORPORATIVA */}
<section className="py-20 bg-cruxAzul">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-white text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
        Soluciones para <span className="text-cruxCeleste">Empresas</span>
      </h2>
      <p className="text-white/60 mt-4 font-light italic uppercase tracking-widest text-sm">Logística habitacional eficiente en Vaca Muerta</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
 

      {/* Item 2 */}
      <div className="text-center space-y-4">
        <div className="text-cruxCeleste flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <h3 className="text-white font-bold uppercase tracking-widest text-lg">Mantenimiento 24/7</h3>
        <p className="text-white/50 text-sm leading-relaxed">Equipo técnico propio para resolver cualquier incidencia de forma inmediata sin afectar el descanso.</p>
      </div>

      {/* Item 3 */}
      <div className="text-center space-y-4">
        <div className="text-cruxCeleste flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </div>
        <h3 className="text-white font-bold uppercase tracking-widest text-lg">Ubicación Clave</h3>
        <p className="text-white/50 text-sm leading-relaxed">Unidades en puntos estratégicos de Añelo para minimizar los tiempos de traslado a yacimiento.</p>
      </div>

           {/* Item 1 */}
      <div className="text-center space-y-4">
        <div className="text-cruxCeleste flex justify-center">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h3 className="text-white font-bold uppercase tracking-widest text-lg">Facturación A</h3>
        <p className="text-white/50 text-sm leading-relaxed">Procesos administrativos simplificados y cumplimiento fiscal total para departamentos de compras.</p>
      </div>
    </div>
  </div>
</section>

{/* FOOTER / CONTACTO CON REDES SOCIALES */}
<footer id="contacto" style={{ backgroundColor: '#002D57', color: 'white', padding: '60px 20px 40px 20px', borderTop: '4px solid #00d1ff' }}>
  <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
    
    {/* LOGO */}
    <div style={{ marginBottom: '30px' }}>
      <img 
        src="/header/LogoCrux.png" 
        alt="Crux Desarrollos" 
        style={{ height: '80px', width: 'auto', margin: '0 auto' }} 
      />
    </div>

    {/* BOTÓN WHATSAPP */}
    <div style={{ marginBottom: '40px' }}>
      <a 
        href="https://wa.me/541151454104" 
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          backgroundColor: '#25D366', 
          color: 'white', 
          padding: '15px 35px', 
          borderRadius: '50px', 
          fontSize: '16px', 
          fontWeight: '900', 
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 10px 20px rgba(37, 211, 102, 0.2)'
        }}
      >
        <span>CONSULTAR POR WHATSAPP</span>
      </a>
    </div>

    {/* REDES SOCIALES */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '40px' }}>
      {/* Instagram */}
      <a href="https://www.instagram.com/aneloroots" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: '0.8', transition: '0.3s' }}>
        <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/company/cruxdesarrollos/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: '0.8', transition: '0.3s' }}>
        <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      {/* YouTube */}
      <a href="https://youtu.be/WxFlJlIg5GI" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: '0.8', transition: '0.3s' }}>
        <svg style={{ width: '28px', height: '28px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
      </a>
    </div>

    {/* INFO DE CONTACTO */}
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <a href="mailto:cruxdesarrollos@gmail.com" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold' }}>
          ✉️ cruxdesarrollos@gmail.com
        </a>
        <p style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
          📍 Añelo, Neuquén - Argentina
        </p>
      </div>
      <p style={{ fontSize: '11px', opacity: '0.4' }}>
        © {new Date().getFullYear()} Crux Desarrollos. Todos los derechos reservados.
      </p>
    </div>

  </div>
</footer>

{/* BOTÓN FLOTANTE DE WHATSAPP */}
<a 
  href="https://wa.me/541151454104?text=Hola!%20Me%20interesa%20obtener%20información%20sobre%20los%20desarrollos%20de%20Crux." 
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 group flex items-center gap-2"
  aria-label="Contactar por WhatsApp"
>
  {/* Texto que aparece al pasar el mouse (solo en desktop) */}
  <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap">
    Consultar ahora
  </span>
  <svg 
    viewBox="0 0 24 24" 
    className="w-7 h-7 fill-current"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
</a>

{/* VENTANA MODAL */}
{proyectoActivo && (
  <div className="fixed inset-0 z-[2000000] flex items-start justify-center p-0 md:p-4 bg-black/90 backdrop-blur-sm overflow-y-auto pt-[130px] md:pt-[140px]">
    <div className="bg-white w-full max-w-6xl h-auto md:h-[85vh] overflow-hidden md:rounded-xl shadow-2xl flex flex-col mb-10">
      
      {/* CABECERA (Header) - Ahora será visible siempre */}
      <div className="p-4 border-b flex justify-between items-center bg-white z-10 sticky top-0">
        <div>
          <h2 className="text-xl font-black text-[#002D57] uppercase italic">{proyectoActivo.name}</h2>
          <p className="text-[10px] text-[#00d1ff] font-bold tracking-widest">{proyectoActivo.loc}</p>
        </div>
        <button 
          onClick={() => setProyectoActivo(null)} 
          className="p-2 text-slate-400 hover:text-[#002D57] transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      {/* CUERPO CON DOS COLUMNAS FORZADAS */}
      <div className="flex-grow overflow-hidden">
        <div style={{ display: 'flex', flexDirection: window.innerWidth > 768 ? 'row' : 'column', height: '100%' }}>
          
          {/* COLUMNA IZQUIERDA: GALERÍA (Scroll independiente) */}
          <div style={{ 
            width: window.innerWidth > 768 ? '65%' : '100%', 
            overflowY: 'auto', 
            padding: '2rem',
            backgroundColor: '#f8fafc'
          }}>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 text-center md:text-left">Galería de la Unidad</h4>
            <div className="flex flex-col gap-6">
              {proyectoActivo.gallery?.map((foto, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg border bg-white">
                  <img 
                    src={foto} 
                    className="w-full h-auto object-cover" 
                    alt={`Ambiente ${index + 1}`}
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: FICHA DE DATOS */}
          <div style={{ 
            width: window.innerWidth > 768 ? '35%' : '100%', 
            padding: '2rem',
            borderLeft: '1px solid #e2e8f0',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div className="space-y-6">
              <div className="bg-[#002D57] text-white p-4 rounded-lg italic">
                <span className="text-[9px] font-black uppercase opacity-70">Estado del complejo</span>
                <p className="font-bold uppercase tracking-tighter">{proyectoActivo.status}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-2">Equipamiento y Servicios</h4>
                <ul className="space-y-3">
                  {proyectoActivo.servicios?.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-bold text-[#002D57] uppercase italic">
                      <span className="w-1.5 h-1.5 bg-[#00d1ff] rounded-full"></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href={`https://wa.me/541151454104?text=Consulta%20alojamiento%20${proyectoActivo.name}`}
                  target="_blank"
                  className="block w-full bg-[#25D366] text-white text-center py-4 rounded font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-[#128C7E] transition-all"
                >
                  Consultar Disponibilidad
                </a>
                <p className="text-[9px] text-slate-400 text-center mt-4 italic font-medium">
                  Ideal para personal jerárquico y equipos técnicos.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
)}

{/* FIN VENTAN MODAL */}

    </div>
 


);
}

export default App;