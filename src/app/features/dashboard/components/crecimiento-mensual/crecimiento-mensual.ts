
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexMarkers,
  ApexGrid,
  ApexDataLabels,
  ApexTooltip
} from 'ng-apexcharts';

@Component({
  selector: 'app-crecimiento-mensual',
  imports: [NgApexchartsModule, MatIconModule],
  templateUrl: './crecimiento-mensual.html',
  styleUrl: './crecimiento-mensual.scss',
})
export class CrecimientoMensual {
  // Datos ilustrativos. Sustituir por los datos reales del backend.
  private readonly meses = [
    'Abr 2026',
    'May 2026',
    'Jun 2026',
    'Jul 2026',
    'Ago 2026',
    'Sep 2026',
  ];

  private readonly negociosActivos = [
    42,
    49,
    57,
    64,
    73,
    83,
  ];

  chartSeries: ApexAxisChartSeries = [
    {
      name: 'Negocios activos',
      data: this.negociosActivos,
    },
  ];

  chartColors: string[] = ['#0979eb'];

  chartDetails: ApexChart = {
    type: 'line',
    height: 260,
    fontFamily: 'Inter, sans-serif',
    foreColor: '#64748b',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    animations: {
      enabled: true,
    },
  };

  chartXAxis: ApexXAxis = {
    categories: this.meses,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: '#64748b',
        fontSize: '10px',
      },
      rotate: -25,
      rotateAlways: false,
    },
  };

  chartYAxis: ApexYAxis = {
    min: 0,
    forceNiceScale: true,
    labels: {
      style: {
        colors: '#64748b',
        fontSize: '11px',
      },
      formatter: (value: number) => Math.round(value).toString(),
    },
  };

  chartStroke: ApexStroke = {
    curve: 'smooth',
    width: 3,
  };

  chartMarkers: ApexMarkers = {
    size: 4,
    colors: ['#0979eb'],
    strokeColors: '#ffffff',
    strokeWidth: 2,
    hover: {
      size: 6,
    },
  };

  chartGrid: ApexGrid = {
    borderColor: '#edf1f6',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: 8,
      right: 10,
    },
  };

  chartDataLabels: ApexDataLabels = {
    enabled: false,
  };

  chartTooltip: ApexTooltip = {
    y: {
      formatter: (value: number) => `${value} negocios activos`,
    },
  };

  get totalActual(): number {
    return this.negociosActivos.at(-1) ?? 0;
  }

  get variacionMensual(): number {
    const actual = this.negociosActivos.at(-1) ?? 0;
    const anterior = this.negociosActivos.at(-2) ?? 0;

    if (anterior === 0) {
      return actual === 0 ? 0 : 100;
    }

    return Math.round(((actual - anterior) / anterior) * 1000) / 10;
  }

  get crecimientoAcumulado(): number {
    const inicial = this.negociosActivos[0] ?? 0;

    if (inicial === 0) {
      return this.totalActual === 0 ? 0 : 100;
    }

    return Math.round(
      ((this.totalActual - inicial) / inicial) * 1000
    ) / 10;
  }

  get diferenciaPeriodo(): number {
    const inicial = this.negociosActivos[0] ?? 0;
    return this.totalActual - inicial;
  }

  get iconoVariacion(): string {
    if (this.variacionMensual > 0) {
      return 'trending_up';
    }

    if (this.variacionMensual < 0) {
      return 'trending_down';
    }

    return 'trending_flat';
  }
}
