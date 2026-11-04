// ============================================================
// CONFIGURACIÓN — NR Academia
// Datos reales de la reunión con Nacho del 3/11/2026.
// Campos marcados "PROVISORIO" todavía no están confirmados —
// no publicar como definitivo hasta cerrarlos con Nacho.
// ============================================================

const CONFIG = {
  // ---- Datos de la academia ----
  nombre: "NR Academia",
  tagline: "Aprendé a jugar al aire libre",

  // ---- Contacto (real) ----
  whatsapp: "5493704610720",
  whatsappDisplay: "+54 370 461-0720",
  tiktok: "NACHOROMAN637",
  // Instagram y WhatsApp Business: se están creando, el usuario puede cambiar. No publicar todavía.
  // YouTube: arranca en diciembre. Se muestra como "Próximamente" en el footer.

  // ---- Ubicación ----
  // PROVISORIO: dirección sacada por geocodificación inversa de las coordenadas
  // del mapa que pasó Guillermo (Le Club 2, Fontana). Confirmar calle/altura exacta
  // y si conviene mostrar la ciudad como "Fontana" o "Gran Formosa".
  sedeNombre: "Le Club Formosa",
  canchas: 4,
  direccion: "Freitas 768, Fontana, Formosa",
  lat: -26.18892557116515,
  lng: -58.187295440168484,

  // ---- Horarios (confirmado: lunes a viernes) ----
  horarios: [
    { dia: "Lunes a viernes", horario: "8 a 12 y 14 a 20 hs" },
  ],

  // ---- El profe ----
  profe: {
    nombre: 'Ignacio "Nacho" Román',
    // PROVISORIO: bio mínima armada solo con los datos confirmados (nada inventado).
    // Falta la historia real de Nacho como jugador y profe (llega en audio) para reemplazar esto.
    bio: "Profesor y fundador de NR Academia en Le Club Formosa. Se anima a cada alumno con disponibilidad, ganas, responsabilidad y valores, desde el primer día hasta la competencia.",
    // PROVISORIO: todavía no hay foto real de Nacho (sesión de fotos el 5/11).
    // Se deja sin foto (placeholder con iniciales) para no mostrar a otra persona con su nombre.
    // Cuando llegue nacho.jpg a assets/, poner acá "assets/nacho.jpg".
    foto: null,
  },

  // ---- Assets reales (logo, video de fondo, foto de la academia) ----
  // Todos null hasta que lleguen los archivos a NR-ACADEMIA-CARGAR en el Escritorio.
  // Rutas esperadas una vez cargados: "assets/logo.png" (o .svg), "assets/hero.mp4", "assets/academia.jpg".
  logoUrl: null,
  heroVideo: null,
  academiaFoto: null,

  // ---- Tipos de clases ----
  clases: [
    { nombre: "Individuales", desc: "Una hora a solas con el profe, a tu ritmo. Ideal para corregir técnica o prepararte para un torneo puntual." },
    { nombre: "Grupales", desc: "Grupos de hasta 4 personas, mismo nivel. La forma más social de progresar — y la más elegida." },
    { nombre: "Para chicos", desc: "Desde los 6 años, con pelotas y canchas adaptadas. Clases cortas, mucho juego, cero presión." },
    { nombre: "Competencia", desc: "Para quienes ya juegan y quieren dar el salto a torneos: táctica, volea alta y trabajo físico específico." },
  ],

  // ---- Precios (reales) ----
  precios: {
    claseSuelta: 10000,
    mensual: { clases: 8, precio: 80000 },
    canchaPorHora: 24000,
    // Confirmado por Guillermo: la clase de prueba es sin cargo.
    pruebaTexto: "Clase de prueba sin cargo, consultá por WhatsApp",
  },

  // ---- Por qué NR Academia ----
  porQue: {
    paraQuien: "Para todos: chicos, mujeres, principiantes y competidores.",
    diferencial: "Disponibilidad, ganas, responsabilidad y valores.",
    alumnos: "+30 alumnos entrenando",
  },

  // ---- Novedades (1 sola tarjeta, real — no es contenido de ejemplo) ----
  novedades: [
    {
      titulo: "Lanzamiento de NR Academia",
      texto: "Abrimos oficialmente en Le Club Formosa. Sumate desde el primer día.",
      fecha: "Sábado 7 de noviembre",
      foto: "https://images.unsplash.com/photo-1673266893159-f522a5e9e036?fm=jpg&q=80&w=900&auto=format&fit=crop",
    },
  ],

  // ---- Opiniones ----
  // Se dejan de ejemplo a pedido de Guillermo: sigue siendo una página de revisión,
  // no se inventan testimonios reales. Reemplazar por testimonios reales con permiso
  // del alumno antes de la aprobación final de Nacho.
  opiniones: [
    { nombre: "Marina T.", texto: "Empecé sin haber tocado una pala en mi vida y en dos meses ya jugaba partidos sociales. El profe tiene mucha paciencia." },
    { nombre: "Rodrigo A.", texto: "Las clases grupales son un golazo: se arma buen grupo y terminás quedando con los compañeros para jugar aparte." },
    { nombre: "Celeste B.", texto: "Llevé a mi hijo a las clases de chicos y quedó encantado. Vuelve cansado pero feliz todas las semanas." },
  ],
};
