import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { BikeFilter } from '../../models/bike.model';

export interface FilterOption {
  readonly value: BikeFilter;
  readonly label: string;
}

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFilter {
  readonly options = input.required<readonly FilterOption[]>();
  readonly active = input.required<BikeFilter>();
  readonly selected = output<BikeFilter>();
}
