import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** Avatar circular: muestra la foto si existe; si no, las iniciales del nombre. */
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
  },
})
export class Avatar {
  readonly name = input.required<string>();
  readonly src = input<string>();
  readonly size = input(50);

  protected readonly initials = computed(() =>
    this.name()
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase(),
  );
}
