import { Service } from '../models/service.model';

/**
 * Servicios del taller. Para agregar uno: copia un bloque, cambia sus datos
 * y guarda la foto en `public/images/`. El número (01, 02...) se calcula solo.
 */
export const SERVICES: readonly Service[] = [
  {
    slug: 'mantenimiento',
    name: 'Mantenimiento',
    description: 'Puesta a punto integral para que cada componente trabaje como debe.',
    icon: 'wrench',
    image: 'images/service-mantenimiento.jpg',
    imageAlt: 'Mecánico con guantes rojos armando un cassette sobre una rueda en el taller',
  },
  {
    slug: 'reparaciones',
    name: 'Reparaciones',
    description: 'Diagnóstico preciso y soluciones confiables para volver a rodar.',
    icon: 'check',
    image: 'images/service-reparaciones.jpg',
    imageAlt: 'Mano aplicando lubricante a la cadena de una bicicleta',
  },
  {
    slug: 'personalizacion',
    name: 'Personalización',
    description: 'Ajustes y componentes elegidos para tu estilo y tus objetivos.',
    icon: 'bike',
    image: 'images/service-personalizacion.jpg',
    imageAlt: 'Plato y biela de colores sobre una bicicleta de ruta blanca',
  },
  {
    slug: 'consultoria',
    name: 'Consultoría',
    description: 'Te asesoramos para elegir la bici, los componentes y el plan de mantenimiento ideales.',
    icon: 'message-circle',
    // Foto provisional (la del taller de "Nosotros"); reemplázala por una propia de asesoría.
    image: 'images/about-workshop.jpg',
    imageAlt: 'Técnico de Alpha Bike atendiendo en el taller, rodeado de herramientas',
  },
];
