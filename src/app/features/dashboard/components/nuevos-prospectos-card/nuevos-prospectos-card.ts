
import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexMarkers,
  ApexFill,
  ApexGrid,
  ApexDataLabels,
  ApexTooltip
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
    type: 'area',
    height: 320,
    fontFamily: 'Inter, sans-serif',
    foreColor: '#64748b',
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    animations: {
      enabled: true
    }
  };

  chartStroke: ApexStroke = {
    curve: 'smooth',
    width: 3,
    colors: ['#0979eb']
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
    ],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#64748b',
        fontSize: '11px'
      }
    }
  };

  chartYAxis: ApexYAxis = {
    min: 0,
    forceNiceScale: true,
    labels: {
      style: {
        colors: '#64748b',
        fontSize: '11px'
      }
    }
  };

  chartMarkers: ApexMarkers = {
    size: 4,
    colors: ['#0979eb'],
    strokeColors: '#ffffff',
    strokeWidth: 2,
    hover: {
      size: 6
    }
  };

  chartFill: ApexFill = {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0,
      opacityFrom: 0.24,
      opacityTo: 0.02,
      stops: [0, 90, 100]
    }
  };

  chartGrid: ApexGrid = {
    borderColor: '#edf1f6',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: false
      }
    },
    padding: {
      left: 8,
      right: 12
    }
  };

  chartDataLabels: ApexDataLabels = {
    enabled: false
  };

  chartTooltip: ApexTooltip = {
    enabled: true,
    y: {
      formatter: (value: number) =>
        `${value} prospectos`
    }
  };
}
