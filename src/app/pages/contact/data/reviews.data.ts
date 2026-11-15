export interface Review {
  readonly id: string;
  readonly author: string;
  readonly title: string;
  readonly text: string;
  /** Fecha ISO (AAAA-MM-DD); se muestra como dd/MM/aaaa */
  readonly date: string;
  /** De 1 a 5 */
  readonly rating: number;
  /** Foto opcional; si no hay, se muestran las iniciales */
  readonly avatar?: string;
}

/** Reseñas de clientes. Se muestran las primeras VISIBLE_REVIEWS tarjetas. */
export const REVIEWS: readonly Review[] = [
  {
    id: 'ana-torres',
    author: 'Ana Torres',
    title: 'Excelente Servicio',
    text: 'El trato fue excelente y el tiempo de entrega fue en menos de 24 horas.',
    date: '2026-10-10',
    rating: 5,
    avatar: 'images/avatar-ana.png',
  },
  {
    id: 'ricardo-paredes',
    author: 'Ricardo Paredes',
    title: 'Buena Calidad',
    text: 'Tienen las mejores marcas para bicicletas de cualquier tipo.',
    date: '2026-10-05',
    rating: 5,
    avatar: 'images/avatar-ricardo.png',
  },
  {
    id: 'lucia-campos',
    author: 'Lucía Campos',
    title: 'Muy buena asesoría',
    text: 'Me ayudaron a elegir mi primera bici de ruta sin presionarme.',
    date: '2026-10-02',
    rating: 5,
    avatar: 'images/avatar-green.png',
  },
  {
    id: 'diego-salazar',
    author: 'Diego Salazar',
    title: 'Rápidos y honestos',
    text: 'Repararon mi bici el mismo día y me explicaron todo lo que le hicieron.',
    date: '2026-09-28',
    rating: 5,
  },
];

export const VISIBLE_REVIEWS = 2;
