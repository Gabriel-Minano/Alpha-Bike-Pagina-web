import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CategoryOption } from '../models/product.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFilter {
  readonly options = input.required<readonly CategoryOption[]>();
  readonly active = input.required<string>();
  readonly selected = output<string>();
}
