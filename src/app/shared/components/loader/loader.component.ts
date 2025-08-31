import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styles: ``,
})
export class LoaderComponent {
  height = input<string>('60vh');
}
