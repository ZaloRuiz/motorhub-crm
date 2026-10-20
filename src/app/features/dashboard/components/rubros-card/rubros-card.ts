import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexChart,
  ApexNonAxisChartSeries,
  ApexLegend
} from 'ng-apexcharts';

@Component({
  selector: 'app-rubros-card',
  imports: [NgApexchartsModule],
  templateUrl: './rubros-card.html',
  styleUrl: './rubros-card.scss',
})
export class RubrosCard {
  chartSeries: ApexNonAxisChartSeries = [
    72,
    54,
    66,
    14,
    9,
    12
  ];

  chartDetails: ApexChart = {
    type: 'pie',
    height: 324
  };

  chartLabels = [
    'Talleres',
    'Lubricentros',
    'Repuestos',
    'Grúas',
    'Ambulancias',
    'Surtidores'
  ];
  chartColors = [
    '#2563eb', // Talleres
    '#800080', // Lubricentros
    '#DC4D01', // Repuestos
    '#22c55e', // Grúas
    '#f59e0b', // Ambulancias
    '#ef4444'  // Surtidores
  ];
  chartLegend: ApexLegend = {
    position: 'bottom'
  };
}
