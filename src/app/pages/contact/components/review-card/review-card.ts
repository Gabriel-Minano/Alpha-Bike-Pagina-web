import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Avatar } from '../../../../shared/avatar/avatar';
import { Icon } from '../../../../shared/icon/icon';
import { Review } from '../../data/reviews.data';

@Component({
  selector: 'app-review-card',
  imports: [DatePipe, Avatar, Icon],
  templateUrl: './review-card.html',
  styleUrl: './review-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCard {
  readonly review = input.required<Review>();

  protected readonly stars = [0, 1, 2, 3, 4];
}
