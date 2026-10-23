
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  NgApexchartsModule,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexGrid,
  ApexTooltip
} from 'ng-apexcharts';

type PeriodoValor = '7d' | '30d' | '90d';

interface DatosPeriodo {
  categorias: string[];
  cantidades: number[];
  totalAnterior: number;
}

@Component({
  selector: 'app-nuevos-negocios-periodo',
  imports: [NgApexchartsModule, MatIconModule],
  templateUrl: './nuevos-negocios-periodo.html',
  styleUrl: './nuevos-negocios-periodo.scss',
})
export class NuevosNegociosPeriodo {
  periodos: { etiqueta: string; valor: PeriodoValor }[] = [
    { etiqueta: '7 días', valor: '7d' },
    { etiqueta: '30 días', valor: '30d' },
    { etiqueta: '90 días', valor: '90d' },
  ];

  periodoSeleccionado: PeriodoValor = '30d';

  // Datos ilustrativos: sustituir por la respuesta del backend.
  private readonly datos: Record<PeriodoValor, DatosPeriodo> = {
    '7d': {
      categorias: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
      cantidades: [2, 4, 1, 3, 5, 2, 1],
      totalAnterior: 15,
    },
    '30d': {
      categorias: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      cantidades: [8, 12, 9, 14],
      totalAnterior: 38,
    },
    '90d': {
      categorias: [
        'Sem. 1', 'Sem. 2', 'Sem. 3', 'Sem. 4',
        'Sem. 5', 'Sem. 6', 'Sem. 7', 'Sem. 8',
        'Sem. 9', 'Sem. 10', 'Sem. 11', 'Sem. 12', 'Sem. 13'
      ],
      cantidades: [5, 7, 6, 8, 9, 7, 10, 8, 11, 9, 12, 10, 14],
      totalAnterior: 102,
    },
  };

  chartSeries: ApexAxisChartSeries = [];
  chartXAxis: ApexXAxis = { categories: [] };

  chartDetails: ApexChart = {
    type: 'bar',
    height: 270,
    fontFamily: 'Inter, sans-serif',
    foreColor: '#64748b',
    toolbar: { show: false },
    animations: { enabled: true },
  };

  chartYAxis: ApexYAxis = {
    min: 0,
    forceNiceScale: true,
    labels: {
      style: {
        colors: '#64748b',
        fontSize: '11px',
      },
    },
  };

  chartPlotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false,
      columnWidth: '45%',
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  };

  chartDataLabels: ApexDataLabels = {
    enabled: false,
  };

  chartGrid: ApexGrid = {
    borderColor: '#edf1f6',
    strokeDashArray: 4,
    xaxis: {
      lines: { show: false },
    },
    padding: {
      left: 4,
      right: 8,
    },
  };

  chartTooltip: ApexTooltip = {
    y: {
      formatter: (value: number) => `${value} negocios`,
    },
  };

  constructor() {
    this.actualizarGrafico();
  }

  get datosActuales(): DatosPeriodo {
    return this.datos[this.periodoSeleccionado];
  }

  get totalPeriodo(): number {
    return this.datosActuales.cantidades.reduce(
      (total, cantidad) => total + cantidad,
      0
    );
  }

  get variacionPorcentual(): number {
    const anterior = this.datosActuales.totalAnterior;

    if (anterior === 0) {
      return this.totalPeriodo === 0 ? 0 : 100;
    }

    return Math.round(
      ((this.totalPeriodo - anterior) / anterior) * 100
    );
  }

  get iconoVariacion(): string {
    if (this.variacionPorcentual > 0) {
      return 'trending_up';
    }

    if (this.variacionPorcentual < 0) {
      return 'trending_down';
    }

    return 'trending_flat';
  }

  get descripcionPeriodo(): string {
    switch (this.periodoSeleccionado) {
      case '7d':
        return 'Últimos 7 días';
      case '30d':
        return 'Últimos 30 días';
      case '90d':
        return 'Últimos 90 días';
    }
  }

  get textoPie(): string {
    return `Comparación frente a los ${this.periodoSeleccionado === '7d' ? '7' : this.periodoSeleccionado === '30d' ? '30' : '90'} días inmediatamente anteriores.`;
  }

  cambiarPeriodo(periodo: PeriodoValor): void {
    if (this.periodoSeleccionado === periodo) {
      return;
    }

    this.periodoSeleccionado = periodo;
    this.actualizarGrafico();
  }

  private actualizarGrafico(): void {
    const datosPeriodo = this.datosActuales;

    this.chartSeries = [
      {
        name: 'Negocios incorporados',
        data: datosPeriodo.cantidades,
        color: '#0979eb',
      },
    ];

    this.chartXAxis = {
      categories: datosPeriodo.categorias,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: '#64748b',
          fontSize: '11px',
        },
        rotate: 0,
      },
    };
  }
}
