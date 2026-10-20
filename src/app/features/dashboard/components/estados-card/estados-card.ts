import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis
} from 'ng-apexcharts';
@Component({
  selector: 'app-estados-card',
  imports: [
    NgApexchartsModule
  ],
  templateUrl: './estados-card.html',
  styleUrl: './estados-card.scss',
})
export class EstadosCard {
  chartSeries: ApexAxisChartSeries = [
    {
      name: 'Prospectos',
      data: [15, 22, 8, 5, 12, 3]
    }
  ];

  chartDetails: ApexChart = {
    type: 'bar',
    height: 324,
    toolbar: {
      show: false
    }
  };

  chartXAxis: ApexXAxis = {
    categories: [
      'Nuevo',
      'Contactado',
      'Negociación',
      'Pendiente',
      'Ganado',
      'Perdido'
    ]
  };
}
