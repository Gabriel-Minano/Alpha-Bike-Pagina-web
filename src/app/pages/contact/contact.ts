import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CatalogHero } from '../../shared/catalog/catalog-hero/catalog-hero';
import { VisitUs } from './sections/visit-us/visit-us';
import { Reviews } from './sections/reviews/reviews';

@Component({
  selector: 'app-contact',
  imports: [CatalogHero, VisitUs, Reviews],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {}
