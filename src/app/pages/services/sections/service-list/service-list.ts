import { ChangeDetectionStrategy, Component, input, linkedSignal } from '@angular/core';

import { SERVICES } from '../../data/services.data';
import { ServiceCard } from '../../components/service-card/service-card';

@Component({
  selector: 'app-service-list',
  imports: [ServiceCard],
  templateUrl: './service-list.html',
  styleUrl: './service-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceList {
  /** Servicio que se muestra destacado al abrir (viene de /servicios/:servicio) */
  readonly initialSlug = input<string>();

  protected readonly services = SERVICES;

  /** La tarjeta destacada cambia al pasar el mouse / enfocar / tocar otra. */
  protected readonly activeSlug = linkedSignal<string>(() => {
    const requested = this.initialSlug();
    return SERVICES.some((s) => s.slug === requested) ? requested! : SERVICES[0].slug;
  });
}
