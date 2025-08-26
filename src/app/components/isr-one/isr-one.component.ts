import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-isr-one',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './isr-one.component.html',
  styleUrl: './isr-one.component.scss',
  standalone: true,
})
export class IsrOneComponent {
  pokemons$ = inject(ActivatedRoute).data;

  constructor() {}
}
