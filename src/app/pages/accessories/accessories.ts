import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { CatalogHero } from '../../shared/catalog/catalog-hero/catalog-hero';
import { ProductCatalog } from '../../shared/catalog/product-catalog/product-catalog';
import { ALL_FILTER } from '../../shared/catalog/models/product.model';
import { ACCESSORIES } from './data/accessories.data';
import { ACCESSORY_CATEGORY_LABELS, isAccessoryCategory } from './models/accessory.model';

@Component({
  selector: 'app-accessories',
  imports: [CatalogHero, ProductCatalog],
  templateUrl: './accessories.html',
  styleUrl: './accessories.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accessories {
  /** Viene de la URL: /accesorios/:categoria  (withComponentInputBinding) */
  readonly categoria = input<string>();
  /** Viene de la URL: /accesorios?q=texto  (lo envía el buscador del header) */
  readonly q = input<string>();

  protected readonly accessories = ACCESSORIES;
  protected readonly categories = ACCESSORY_CATEGORY_LABELS;

  protected readonly initialFilter = computed(() => {
    const value = this.categoria();
    return isAccessoryCategory(value) ? value : ALL_FILTER;
  });

  protected readonly searchText = computed(() => this.q()?.trim() ?? '');
}
