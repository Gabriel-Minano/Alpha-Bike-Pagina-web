import { Bike } from '../models/bike.model';

/**
 * Catálogo de bicicletas.
 * Para agregar una: copia un bloque, cambia sus datos y guarda la foto en `public/images/`.
 * No necesita backend: la lista se muestra tal cual está aquí.
 */
export const BIKES: readonly Bike[] = [
  {
    id: 'trail-alpha-29',
    name: 'Trail Alpha 29',
    category: 'montana',
    description: 'Control, resistencia y confianza para explorar nuevos caminos.',
    image: 'images/bike-trail-alpha.jpg',
    imageAlt: 'Ciclista de montaña avanzando por un sendero dentro de un bosque',
  },
  {
    id: 'summit-pro',
    name: 'Summit Pro',
    category: 'montana',
    description: 'Geometría deportiva para subir fuerte y bajar con seguridad.',
    image: 'images/bike-summit-pro.jpg',
    imageAlt: 'Ciclista tomando una curva levantando polvo en un sendero de bosque',
  },
  {
    id: 'velocity-carbon',
    name: 'Velocity Carbon',
    category: 'ruta',
    description: 'Ligera y eficiente para acumular kilómetros con velocidad.',
    image: 'images/bike-velocity-carbon.jpg',
    imageAlt: 'Bicicleta de ruta negra sobre fondo oscuro',
  },
  {
    id: 'endurance-one',
    name: 'Endurance One',
    category: 'ruta',
    description: 'Comodidad y respuesta para fondos largos y rutas exigentes.',
    image: 'images/bike-endurance-one.jpg',
    imageAlt: 'Bicicleta de ruta marrón apoyada contra una pared de madera',
  },
  {
    id: 'urban-e-motion',
    name: 'Urban E-Motion',
    category: 'electricas',
    description: 'Asistencia suave y autonomía para moverte por toda la ciudad.',
    image: 'images/bike-urban-e-motion.jpg',
    imageAlt: 'Persona montando una bicicleta eléctrica por una calle de la ciudad',
  },
  {
    id: 'street-flow',
    name: 'Street Flow',
    category: 'bmx',
    description: 'Ágil, resistente y preparada para llevar tu estilo más lejos.',
    image: 'images/bike-street-flow.jpg',
    imageAlt: 'Persona con jeans sentada en una bicicleta BMX de llantas rojas y negras',
  },
];
