import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Cabecera azul de las páginas de catálogo (bicicletas, accesorios...). */
@Component({
  selector: 'app-catalog-hero',
  templateUrl: './catalog-hero.html',
  styleUrl: './catalog-hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogHero {
  readonly eyebrow = input.required<string>();
  readonly heading = input.required<string>();
  readonly subtitle = input.required<string>();
}
