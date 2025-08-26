import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param',
  imports: [],
  templateUrl: './query-param.component.html',
  styleUrl: './query-param.component.scss',
})
export class QueryParamComponent {
  private activatedRoute = inject(ActivatedRoute);

  id: string | null = null;
  framework: string | null = null;
  language: string | null = null;

  constructor() {
    const params = this.activatedRoute.snapshot.queryParamMap;
    this.id = params.get('id');
    this.framework = params.get('framework');
    this.language = params.get('language');
  }
}
