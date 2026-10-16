import { ChangeDetectionStrategy, Component, computed, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BikeCard } from '../../components/bike-card/bike-card';
import { CategoryFilter, FilterOption } from '../../components/category-filter/category-filter';
import { BIKE_CATEGORIES, Bike, BikeFilter, CATEGORY_LABELS } from '../../models/bike.model';

/** Quita tildes y pasa a minúsculas para que "montana" encuentre "Montaña". */
const normalize = (text: string): string =>
  text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

@Component({
  selector: 'app-bike-catalog',
  imports: [RouterLink, BikeCard, CategoryFilter],
  templateUrl: './bike-catalog.html',
  styleUrl: './bike-catalog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeCatalog {
  readonly bikes = input.required<readonly Bike[]>();
  /** Filtro con el que se abre la página (según la URL) */
  readonly initialFilter = input<BikeFilter>('todas');
  /** Texto del buscador del header (?q=) */
  readonly query = input('');

  protected readonly options: readonly FilterOption[] = [
    { value: 'todas', label: 'Todas' },
    ...BIKE_CATEGORIES.map((value) => ({ value, label: CATEGORY_LABELS[value] })),
  ];

  /** Se inicializa con la URL, pero el usuario puede cambiarlo con los chips sin recargar. */
  protected readonly active = linkedSignal<BikeFilter>(() => this.initialFilter());

  protected readonly filtered = computed(() => {
    const category = this.active();
    const text = normalize(this.query());

    return this.bikes().filter((bike) => {
      const matchesCategory = category === 'todas' || bike.category === category;
      const matchesText =
        !text || normalize(`${bike.name} ${bike.description} ${CATEGORY_LABELS[bike.category]}`).includes(text);
      return matchesCategory && matchesText;
    });
  });

  protected select(filter: BikeFilter): void {
    this.active.set(filter);
  }
}
