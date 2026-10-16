export type BikeCategory = 'montana' | 'ruta' | 'electricas' | 'bmx';
export type BikeFilter = BikeCategory | 'todas';

export interface Bike {
  /** Identificador único (sirve para el `track` del @for) */
  readonly id: string;
  readonly name: string;
  readonly category: BikeCategory;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
}

/** Etiqueta visible de cada categoría. El orden define el orden de los filtros. */
export const CATEGORY_LABELS: Readonly<Record<BikeCategory, string>> = {
  montana: 'Montaña',
  ruta: 'Ruta',
  electricas: 'Eléctricas',
  bmx: 'BMX',
};

export const BIKE_CATEGORIES = Object.keys(CATEGORY_LABELS) as BikeCategory[];

export function isBikeCategory(value: unknown): value is BikeCategory {
  return typeof value === 'string' && (BIKE_CATEGORIES as string[]).includes(value);
}
