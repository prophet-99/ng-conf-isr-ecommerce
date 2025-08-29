import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryDisplay',
  standalone: true,
})
export class CategoryDisplayPipe implements PipeTransform {
  private categoryMap: { [key: string]: string } = {
    'skin-care': 'Skin Care',
    makeup: 'Makeup',
    'hair-care': 'Hair Care',
    fragrances: 'Fragrances',
    'nail-care': 'Nail Care',
    'body-care': 'Body Care',
  };

  transform(category: string): string {
    return this.categoryMap[category] || category;
  }
}
