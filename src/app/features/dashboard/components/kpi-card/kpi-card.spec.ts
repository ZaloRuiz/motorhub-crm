import { Component, input } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  imports: [],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.scss',
})
export class KpiCard {
  titulo = input.required<string>();
  valor = input.required<string>();
}