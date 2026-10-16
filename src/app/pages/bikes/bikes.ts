import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { BIKES } from './data/bikes.data';
import { BikeFilter, isBikeCategory } from './models/bike.model';
import { BikesHero } from './sections/bikes-hero/bikes-hero';
import { BikeCatalog } from './sections/bike-catalog/bike-catalog';

@Component({
  selector: 'app-bikes',
  imports: [BikesHero, BikeCatalog],
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

  protected readonly initialFilter = computed<BikeFilter>(() => {
    const value = this.categoria();
    return isBikeCategory(value) ? value : 'todas';
  });

  protected readonly searchText = computed(() => this.q()?.trim() ?? '');
}
