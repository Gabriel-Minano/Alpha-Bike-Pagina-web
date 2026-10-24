/** Producto del catálogo (sirve tanto para bicicletas como para accesorios). */
export interface Product {
  /** Identificador único (sirve para el `track` del @for) */
  readonly id: string;
  readonly name: string;
  /** Slug de la categoría; su etiqueta visible se define en cada página */
  readonly category: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
}

export interface CategoryOption {
  readonly value: string;
  readonly label: string;
}

/** Valor del filtro que muestra todos los productos. */
export const ALL_FILTER = 'todas';
