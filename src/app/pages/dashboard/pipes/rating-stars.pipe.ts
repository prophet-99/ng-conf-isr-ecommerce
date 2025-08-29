import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingStars',
  standalone: true,
})
export class RatingStarsPipe implements PipeTransform {
  transform(rating: number): string {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsHtml += '<span class="star star--filled">★</span>';
      } else if (i === fullStars && hasHalfStar) {
        starsHtml += '<span class="star star--filled">★</span>';
      } else {
        starsHtml += '<span class="star">★</span>';
      }
    }

    return starsHtml;
  }
}
