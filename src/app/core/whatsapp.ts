import { SITE } from './site.config';

/** Enlace wa.me al WhatsApp del negocio, con un mensaje opcional ya escrito. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Mensaje predeterminado al consultar por un producto.
 * Ej.: productInquiryMessage('Trail Alpha 29', 'la bicicleta')
 *   → "Hola, estoy interesado en la bicicleta Trail Alpha 29. ¿Podría brindarme más información?"
 */
export function productInquiryMessage(name: string, kind = 'el producto'): string {
  return `Hola, estoy interesado en ${kind} ${name}. ¿Podría brindarme más información?`;
}

export function productInquiryUrl(name: string, kind = 'el producto'): string {
  return whatsappUrl(productInquiryMessage(name, kind));
}
