import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexStroke
} from 'ng-apexcharts';

@Component({
  selector: 'app-nuevos-prospectos-card',
  imports: [NgApexchartsModule],
  templateUrl: './nuevos-prospectos-card.html',
  styleUrl: './nuevos-prospectos-card.scss',
})
export class NuevosProspectosCard {
  chartSeries: ApexAxisChartSeries = [
    {
      name: 'Prospectos',
      data: [13, 7, 15, 12, 18, 14, 11]
    }
  ];

  chartDetails: ApexChart = {
    type: 'line',
    height: 320,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  };

  chartStroke: ApexStroke = {
    curve: 'smooth',
    width: 3
  };

  chartXAxis: ApexXAxis = {
    categories: [
      '1 Jun',
      '5 Jun',
      '10 Jun',
      '15 Jun',
      '20 Jun',
      '25 Jun',
      '30 Jun'
    ]
  };
}
