import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CatalogHero } from '../../shared/catalog/catalog-hero/catalog-hero';
import { ServiceList } from './sections/service-list/service-list';
import { RequestSteps } from './sections/request-steps/request-steps';

@Component({
  selector: 'app-services',
  imports: [CatalogHero, ServiceList, RequestSteps],
  templateUrl: './services.html',
  styleUrl: './services.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  /** Viene de la URL: /servicios/:servicio  (withComponentInputBinding) */
  readonly servicio = input<string>();
}
