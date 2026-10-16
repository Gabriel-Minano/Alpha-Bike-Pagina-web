import { ChangeDetectionStrategy, Component } from '@angular/core';

import { whatsappUrl } from '../../core/whatsapp';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButton {
  protected readonly href = whatsappUrl('Hola, quisiera más información sobre Alpha Bike.');
}
