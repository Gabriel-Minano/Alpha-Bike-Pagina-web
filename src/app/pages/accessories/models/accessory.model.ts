import { Product } from '../../../shared/catalog/models/product.model';

export type AccessoryCategory = 'cascos' | 'luces' | 'candados' | 'herramientas';

export interface Accessory extends Product {
  readonly category: AccessoryCategory;
}

/** Etiqueta visible de cada categoría. El orden define el orden de los filtros. */
export const ACCESSORY_CATEGORY_LABELS: Readonly<Record<AccessoryCategory, string>> = {
  cascos: 'Cascos',
  luces: 'Luces',
  candados: 'Candados',
  herramientas: 'Herramientas',
};

export function isAccessoryCategory(value: unknown): value is AccessoryCategory {
  return typeof value === 'string' && Object.keys(ACCESSORY_CATEGORY_LABELS).includes(value);
}
