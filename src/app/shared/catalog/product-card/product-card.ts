import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { productInquiryUrl } from '../../../core/whatsapp';
import { Icon } from '../../icon/icon';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [Icon],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly categoryLabel = input.required<string>();
  /** Cómo se nombra al producto en el mensaje: "la bicicleta", "el accesorio"... */
  readonly inquiryKind = input('el producto');

  /** Abre WhatsApp con: "Hola, estoy interesado en {tipo} {nombre}. ¿Podría brindarme más información?" */
  protected readonly whatsappHref = computed(() =>
    productInquiryUrl(this.product().name, this.inquiryKind()),
  );
}
