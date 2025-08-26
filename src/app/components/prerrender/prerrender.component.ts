import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prerrender',
  imports: [CommonModule],
  templateUrl: './prerrender.component.html',
  styleUrl: './prerrender.component.scss',
})
export class PrerrenderComponent {
  #httpClient = inject(HttpClient);
  data$ = this.#httpClient.get<any>('http://localhost:3001/api/delayed/3');
}
