import { SITE } from './site.config';

/** Enlace wa.me al WhatsApp del negocio, con un mensaje opcional ya escrito. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Mensaje predeterminado cuando alguien consulta por una bicicleta. */
export function bikeInquiryMessage(bikeName: string): string {
  return `Hola, estoy interesado en la bicicleta ${bikeName}. ¿Podría brindarme más información?`;
}

export function bikeInquiryUrl(bikeName: string): string {
  return whatsappUrl(bikeInquiryMessage(bikeName));
}
