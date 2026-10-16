import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { bikeInquiryUrl } from '../../../../core/whatsapp';
import { Icon } from '../../../../shared/icon/icon';
import { Bike, CATEGORY_LABELS } from '../../models/bike.model';

@Component({
  selector: 'app-bike-card',
  imports: [Icon],
  templateUrl: './bike-card.html',
  styleUrl: './bike-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeCard {
  readonly bike = input.required<Bike>();

  protected readonly categoryLabel = computed(() => CATEGORY_LABELS[this.bike().category]);

  /** Abre WhatsApp con: "Hola, estoy interesado en la bicicleta {nombre}. ¿Podría brindarme más información?" */
  protected readonly whatsappHref = computed(() => bikeInquiryUrl(this.bike().name));
}
