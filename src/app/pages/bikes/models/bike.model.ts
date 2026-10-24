import { Product } from '../../../shared/catalog/models/product.model';

export type BikeCategory = 'montana' | 'ruta' | 'electricas' | 'bmx';

export interface Bike extends Product {
  readonly category: BikeCategory;
}

/** Etiqueta visible de cada categoría. El orden define el orden de los filtros. */
export const CATEGORY_LABELS: Readonly<Record<BikeCategory, string>> = {
  montana: 'Montaña',
  ruta: 'Ruta',
  electricas: 'Eléctricas',
  bmx: 'BMX',
};

export function isBikeCategory(value: unknown): value is BikeCategory {
  return typeof value === 'string' && Object.keys(CATEGORY_LABELS).includes(value);
}
