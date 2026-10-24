import { ChangeDetectionStrategy, Component, computed, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CategoryFilter } from '../category-filter/category-filter';
import { ProductCard } from '../product-card/product-card';
import { ALL_FILTER, CategoryOption, Product } from '../models/product.model';

/** Quita tildes y pasa a minúsculas para que "montana" encuentre "Montaña". */
const normalize = (text: string): string =>
  text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

/**
 * Catálogo reutilizable: filtros por categoría + cuadrícula de tarjetas + estado vacío.
 * Lo usan las páginas de Bicicletas y de Accesorios.
 */
@Component({
  selector: 'app-product-catalog',
  imports: [RouterLink, CategoryFilter, ProductCard],
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalog {
  readonly products = input.required<readonly Product[]>();
  /** slug → etiqueta visible. El orden del objeto define el orden de los filtros. */
  readonly categories = input.required<Readonly<Record<string, string>>>();
  /** Ruta base de la página, para "Limpiar búsqueda" y "Ver todo" (p. ej. '/bicicletas') */
  readonly basePath = input.required<string>();

  readonly allLabel = input('Todas');
  /** Texto del mensaje de WhatsApp: "la bicicleta", "el accesorio"... */
  readonly inquiryKind = input('el producto');
  /** Título oculto para lectores de pantalla */
  readonly heading = input('Catálogo');

  /** Filtro con el que se abre la página (según la URL) */
  readonly initialFilter = input(ALL_FILTER);
  /** Texto del buscador del header (?q=) */
  readonly query = input('');

  protected readonly options = computed<readonly CategoryOption[]>(() => [
    { value: ALL_FILTER, label: this.allLabel() },
    ...Object.entries(this.categories()).map(([value, label]) => ({ value, label })),
  ]);

  /** Se inicializa con la URL, pero el usuario puede cambiarlo con los chips sin recargar. */
  protected readonly active = linkedSignal<string>(() => this.initialFilter());

  protected readonly filtered = computed(() => {
    const category = this.active();
    const text = normalize(this.query());
    const labels = this.categories();

    return this.products().filter((product) => {
      const matchesCategory = category === ALL_FILTER || product.category === category;
      const haystack = `${product.name} ${product.description} ${labels[product.category] ?? ''}`;
      return matchesCategory && (!text || normalize(haystack).includes(text));
    });
  });

  protected labelFor(product: Product): string {
    return this.categories()[product.category] ?? product.category;
  }

  protected select(filter: string): void {
    this.active.set(filter);
  }

  protected showAll(): void {
    this.active.set(ALL_FILTER);
  }
}
