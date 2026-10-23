
import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexPlotOptions
} from 'ng-apexcharts';

@Component({
  selector: 'app-estados-card',
  imports: [NgApexchartsModule],
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
    height: 320,
    fontFamily: 'Inter, sans-serif',
    foreColor: '#64748b',
    toolbar: {
      show: false
    },
    animations: {
      enabled: true
    }
  };

  chartPlotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true,
      barHeight: '55%',
      borderRadius: 4
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
    ],
    min: 0,
    tickAmount: 5,
    labels: {
      style: {
        colors: '#64748b',
        fontSize: '11px'
      }
    }
  };
  
  chartYAxis: ApexYAxis = {
    labels: {
      style: {
        colors: '#475569',
        fontSize: '12px'
      },
      maxWidth: 105
    }
  };
}
