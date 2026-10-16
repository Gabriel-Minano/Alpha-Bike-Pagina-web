import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bikes-hero',
  templateUrl: './bikes-hero.html',
  styleUrl: './bikes-hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikesHero {}
