import { Accessory } from '../models/accessory.model';

/**
 * Catálogo de accesorios.
 * Para agregar uno: copia un bloque, cambia sus datos y guarda la foto en `public/images/`.
 * No necesita backend: la lista se muestra tal cual está aquí.
 */
export const ACCESSORIES: readonly Accessory[] = [
  {
    id: 'casco-aero-shield',
    name: 'Casco Aero Shield',
    category: 'cascos',
    description: 'Protección ventilada y ajuste preciso para tus recorridos.',
    image: 'images/acc-casco-aero-shield.jpg',
    imageAlt: 'Ciclista con casco con luz trasera frente a la Torre Eiffel al atardecer',
  },
  {
    id: 'casco-urban-fold',
    name: 'Casco Urban Fold',
    category: 'cascos',
    description: 'Diseño compacto para moverte seguro todos los días.',
    image: 'images/acc-casco-urban-fold.jpg',
    imageAlt: 'Ciclista de perfil con casco claro frente a un edificio iluminado de noche',
  },
  {
    id: 'luz-alpha-beam',
    name: 'Luz Alpha Beam',
    category: 'luces',
    description: 'Mayor visibilidad delantera con distintos modos de potencia.',
    image: 'images/acc-luz-alpha-beam.jpg',
    imageAlt: 'Casco negro visto desde atrás con una luz roja encendida al anochecer',
  },
  {
    id: 'set-night-ride',
    name: 'Set Night Ride',
    category: 'luces',
    description: 'Iluminación delantera y posterior para rodar más seguro.',
    image: 'images/acc-set-night-ride.jpg',
    imageAlt: 'Manos sosteniendo un casco con una luz LED naranja encendida de noche',
  },
  {
    id: 'candado-steel-loop',
    name: 'Candado Steel Loop',
    category: 'candados',
    description: 'Construcción reforzada y formato práctico para la ciudad.',
    image: 'images/acc-candado-steel-loop.jpg',
    imageAlt: 'Banco de trabajo con herramientas de bicicleta, bielas y cadena',
  },
  {
    id: 'kit-taller-compact',
    name: 'Kit Taller Compact',
    category: 'herramientas',
    description: 'Los esenciales para ajustes rápidos dentro y fuera de casa.',
    image: 'images/acc-kit-taller-compact.jpg',
    imageAlt: 'Estuche de herramientas con destornilladores y llaves sobre espuma azul',
  },
];
