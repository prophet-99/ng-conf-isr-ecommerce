import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoaderEvent } from '@core/events';
import { LoaderComponent } from '@shared/components';

const NG_IMPORTS = [RouterModule, AsyncPipe];
const IMPORTS = [LoaderComponent];

@Component({
  selector: 'app-root',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {
  // DI
  loaderEvent = inject(LoaderEvent);
}
