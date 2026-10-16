import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Banner de cabecera con imagen de fondo y título (reutilizable en las demás páginas). */
@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.html',
  styleUrl: './page-banner.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageBanner {
  readonly title = input.required<string>();
  readonly image = input.required<string>();
  readonly alt = input('');
}
