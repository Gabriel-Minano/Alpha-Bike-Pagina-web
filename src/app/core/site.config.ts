/**
 * Datos de contacto del negocio. Es el ÚNICO lugar donde se edita el número de WhatsApp,
 * el teléfono y la dirección: header, footer, botón flotante, catálogos y Contacto lo leen de aquí.
 */
const MAP_QUERY = 'Av. A Mz 190, Los Olivos 15306, Lima, Perú';

export const SITE = {
  name: 'Alpha Bike',
  /** Formato internacional, sin "+", espacios ni guiones (Perú = 51). */
  whatsappNumber: '51912543818',
  phoneLabel: '+51 912 543 818',
  phoneHref: 'tel:+51912543818',
  /** Versión corta (footer) */
  address: 'Av. A Mz 190 Los Olivos - Lima - Perú',
  /** Versión por líneas (página de Contacto) */
  addressLines: ['Av. A Mz 190, Los Olivos 15306', 'Lima, Perú'],
  /** Horario de la página de Contacto (el footer tiene el suyo en footer.ts) */
  hoursLines: ['Lun–Vie: 9:00 a.m. – 7:00 p.m.', 'Sáb: 9:00 a.m. – 5:00 p.m.'],
  /** Mapa incrustado (no necesita clave de API) y enlace para abrirlo en Google Maps */
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`,
} as const;
