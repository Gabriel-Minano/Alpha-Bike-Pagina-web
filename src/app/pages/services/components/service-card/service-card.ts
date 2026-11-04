import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { productInquiryUrl } from '../../../../core/whatsapp';
import { Icon } from '../../../../shared/icon/icon';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  imports: [Icon],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCard {
  readonly service = input.required<Service>();
  /** Posición en la lista (1, 2, 3...) */
  readonly position = input.required<number>();
  /** La tarjeta destacada se muestra en azul oscuro */
  readonly active = input(false);
  /** Se emite al pasar el mouse, enfocar con teclado o tocar la tarjeta */
  readonly activated = output<void>();

  protected readonly number = computed(() => String(this.position()).padStart(2, '0'));

  /** "Hola, estoy interesado en el servicio de {nombre}. ¿Podría brindarme más información?" */
  protected readonly whatsappHref = computed(() =>
    productInquiryUrl(this.service().name, 'el servicio de'),
  );
}
