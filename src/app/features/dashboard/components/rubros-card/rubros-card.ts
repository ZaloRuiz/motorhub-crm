
import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexChart,
  ApexNonAxisChartSeries,
  ApexLegend,
  ApexDataLabels,
  ApexStroke,
  ApexPlotOptions,
  ApexTooltip,
  ApexResponsive
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

  chartLabels: string[] = [
    'Talleres',
    'Lubricentros',
    'Repuestos',
    'Grúas',
    'Ambulancias',
    'Surtidores'
  ];

  chartColors: string[] = [
    '#0979EB',
    '#43A5F5',
    '#032D57',
    '#6B9BCB',
    '#94A3B8',
    '#CBD5E1'
  ];

  chartDetails: ApexChart = {
    type: 'donut',
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

  chartLegend: ApexLegend = {
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '12px',
    fontFamily: 'Inter, sans-serif',
    labels: {
      colors: '#475569'
    },
    itemMargin: {
      horizontal: 8,
      vertical: 5
    },
    markers: {
      size: 5
    }
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true,
    formatter: (value: number) => `${value.toFixed(1)}%`,
    style: {
      fontSize: '11px',
      fontWeight: '600',
      colors: ['#ffffff']
    },
    dropShadow: {
      enabled: false
    }
  };

  chartStroke: ApexStroke = {
    width: 3,
    colors: ['#ffffff']
  };

  chartPlotOptions: ApexPlotOptions = {
    pie: {
      expandOnClick: true,
      donut: {
        size: '62%'
      }
    }
  };

  chartTooltip: ApexTooltip = {
    y: {
      formatter: (value: number) => `${value} negocios`
    }
  };

  chartResponsive: ApexResponsive[] = [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 300
        },
        legend: {
          fontSize: '11px',
          itemMargin: {
            horizontal: 5,
            vertical: 4
          }
        },
        dataLabels: {
          enabled: false
        }
      }
    }
  ];
}
