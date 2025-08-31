import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '@env/environment';

@Pipe({
  name: 'getResource',
})
export class GetResourcePipe implements PipeTransform {
  transform(url: string): string {
    return `${environment.serverURL}/${url}`;
  }
}
