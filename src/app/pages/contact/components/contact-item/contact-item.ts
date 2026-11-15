import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Icon, IconName } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-contact-item',
  imports: [Icon],
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactItem {
  readonly icon = input.required<IconName>();
  readonly label = input.required<string>();
  /** Cada elemento es una línea del valor */
  readonly lines = input.required<readonly string[]>();
  /** Si se indica, el valor es un enlace (p. ej. tel:...) */
  readonly href = input<string>();
}
