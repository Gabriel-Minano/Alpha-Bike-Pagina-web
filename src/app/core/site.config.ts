/**
 * Datos de contacto del negocio. Es el ÚNICO lugar donde se edita el número de WhatsApp,
 * el teléfono y la dirección: header, footer, botón flotante y catálogo lo leen de aquí.
 */
export const SITE = {
  name: 'Alpha Bike',
  /** Formato internacional, sin "+", espacios ni guiones (Perú = 51). */
  whatsappNumber: '51912543818',
  phoneLabel: '+51 912 543 818',
  phoneHref: 'tel:+51912543818',
  address: 'Av. A Mz 190 Los Olivos - Lima - Perú',
} as const;
