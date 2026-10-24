import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { CatalogHero } from '../../shared/catalog/catalog-hero/catalog-hero';
import { ProductCatalog } from '../../shared/catalog/product-catalog/product-catalog';
import { ALL_FILTER } from '../../shared/catalog/models/product.model';
import { BIKES } from './data/bikes.data';
import { CATEGORY_LABELS, isBikeCategory } from './models/bike.model';

@Component({
  selector: 'app-bikes',
  imports: [CatalogHero, ProductCatalog],
  templateUrl: './bikes.html',
  styleUrl: './bikes.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Bikes {
  /** Viene de la URL: /bicicletas/:categoria  (withComponentInputBinding) */
  readonly categoria = input<string>();
  /** Viene de la URL: /bicicletas?q=texto  (lo envía el buscador del header) */
  readonly q = input<string>();

  protected readonly bikes = BIKES;
  protected readonly categories = CATEGORY_LABELS;

  protected readonly initialFilter = computed(() => {
    const value = this.categoria();
    return isBikeCategory(value) ? value : ALL_FILTER;
  });

  protected readonly searchText = computed(() => this.q()?.trim() ?? '');
}
