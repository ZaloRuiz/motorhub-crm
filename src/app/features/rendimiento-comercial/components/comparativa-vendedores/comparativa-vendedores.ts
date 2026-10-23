
import { Component, computed, input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { MatIcon } from '@angular/material/icon';

type PeriodoComercial = '7d' | '30d' | '90d';

interface DatosVendedor {
  contactados: number;
  negociacion: number;
  incorporados: number;
}

@Component({
  selector: 'app-comparativa-vendedores',
  imports: [NgApexchartsModule, MatIcon],
  templateUrl: './comparativa-vendedores.html',
  styleUrl: './comparativa-vendedores.scss',
})
export class ComparativaVendedores {
  readonly periodo = input.required<PeriodoComercial>();
  readonly Math = Math;
  private readonly datosDemo: Record<
    PeriodoComercial,
    { vendedor1: DatosVendedor; vendedor2: DatosVendedor }
  > = {
    '7d': {
      vendedor1: { contactados: 12, negociacion: 4, incorporados: 2 },
      vendedor2: { contactados: 9, negociacion: 3, incorporados: 2 },
    },
    '30d': {
      vendedor1: { contactados: 42, negociacion: 12, incorporados: 8 },
      vendedor2: { contactados: 35, negociacion: 9, incorporados: 6 },
    },
    '90d': {
      vendedor1: { contactados: 105, negociacion: 31, incorporados: 21 },
      vendedor2: { contactados: 91, negociacion: 25, incorporados: 17 },
    },
  };

  readonly datosActuales = computed(() => this.datosDemo[this.periodo()]);

  readonly chartSeries = computed<ApexAxisChartSeries>(() => {
    const datos = this.datosActuales();

    return [
      {
        name: 'Vendedor 1',
        data: [
          datos.vendedor1.contactados,
          datos.vendedor1.negociacion,
          datos.vendedor1.incorporados,
        ],
      },
      {
        name: 'Vendedor 2',
        data: [
          datos.vendedor2.contactados,
          datos.vendedor2.negociacion,
          datos.vendedor2.incorporados,
        ],
      },
    ];
  });

  readonly chartDetails: ApexChart = {
    type: 'bar',
    height: 265,
    fontFamily: 'Inter, sans-serif',
    foreColor: '#64748b',
    toolbar: { show: false },
    animations: { enabled: true },
  };

  readonly chartColors = ['#0979EB', '#94A3B8'];

  readonly chartPlotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true,
      barHeight: '58%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
    },
  };

  readonly chartXAxis: ApexXAxis = {
    categories: ['Contactados', 'En negociación', 'Incorporados'],
    min: 0,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: '#64748b',
        fontSize: '11px',
      },
    },
  };

  readonly chartYAxis: ApexYAxis = {
    labels: {
      style: {
        colors: '#475569',
        fontSize: '12px',
      },
      maxWidth: 105,
    },
  };

  readonly chartLegend: ApexLegend = {
    position: 'top',
    horizontalAlign: 'right',
    fontFamily: 'Inter, sans-serif',
    fontSize: '11px',
    markers: { size: 5 },
    itemMargin: { horizontal: 8 },
  };

  readonly chartDataLabels: ApexDataLabels = {
    enabled: true,
    textAnchor: 'start',
    style: {
      fontSize: '10px',
      fontWeight: 600,
      colors: ['#ffffff'],
    },
    formatter: (valor: number) => String(valor),
  };

  readonly chartGrid: ApexGrid = {
    borderColor: '#edf1f6',
    strokeDashArray: 4,
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: false } },
    padding: { left: 4, right: 12 },
  };

  readonly chartTooltip: ApexTooltip = {
    y: {
      formatter: (valor: number) => `${valor} negocios`,
    },
  };

  readonly diferenciaContactados = computed(() => {
    const datos = this.datosActuales();
    return datos.vendedor1.contactados - datos.vendedor2.contactados;
  });

  readonly diferenciaIncorporados = computed(() => {
    const datos = this.datosActuales();
    return datos.vendedor1.incorporados - datos.vendedor2.incorporados;
  });

  readonly liderIncorporaciones = computed(() => {
    const diferencia = this.diferenciaIncorporados();

    if (diferencia === 0) return 'Empate';
    return diferencia > 0 ? 'Vendedor 1' : 'Vendedor 2';
  });

  readonly textoPeriodo = computed(() => {
    switch (this.periodo()) {
      case '7d':
        return 'Últimos 7 días';
      case '30d':
        return 'Últimos 30 días';
      case '90d':
        return 'Últimos 90 días';
    }
  });
}
