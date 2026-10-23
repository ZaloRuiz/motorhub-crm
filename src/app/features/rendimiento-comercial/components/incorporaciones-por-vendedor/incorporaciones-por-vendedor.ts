import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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

type PeriodoComercial = '7d' | '30d' | '90d';
type VendedorId = 'todos' | 'vendedor-1' | 'vendedor-2';

interface DatosIncorporaciones {
  categorias: string[];
  vendedor1: number[];
  vendedor2: number[];
}

@Component({
  selector: 'app-incorporaciones-por-vendedor',
  imports: [NgApexchartsModule, MatIconModule],
  templateUrl: './incorporaciones-por-vendedor.html',
  styleUrl: './incorporaciones-por-vendedor.scss',
})
export class IncorporacionesPorVendedor {
  readonly periodo = input.required<PeriodoComercial>();
  readonly vendedorId = input.required<VendedorId>();

  private readonly datosDemo: Record<PeriodoComercial, DatosIncorporaciones> = {
    '7d': {
      categorias: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
      vendedor1: [0, 1, 0, 0, 1, 0, 0],
      vendedor2: [1, 0, 0, 1, 0, 0, 0],
    },
    '30d': {
      categorias: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      vendedor1: [2, 1, 3, 2],
      vendedor2: [1, 2, 1, 2],
    },
    '90d': {
      categorias: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4'],
      vendedor1: [4, 5, 6, 6],
      vendedor2: [3, 4, 5, 5],
    },
  };

  readonly datosActuales = computed(() => this.datosDemo[this.periodo()]);

  readonly categorias = computed(() => this.datosActuales().categorias);

  readonly chartSeries = computed<ApexAxisChartSeries>(() => {
    const datos = this.datosActuales();
    const vendedor = this.vendedorId();

    const series: ApexAxisChartSeries = [];

    if (vendedor === 'todos' || vendedor === 'vendedor-1') {
      series.push({
        name: 'Vendedor 1',
        data: datos.vendedor1,
      });
    }

    if (vendedor === 'todos' || vendedor === 'vendedor-2') {
      series.push({
        name: 'Vendedor 2',
        data: datos.vendedor2,
      });
    }

    return series;
  });

  readonly chartDetails: ApexChart = {
    type: 'bar',
    height: 280,
    fontFamily: 'Inter, sans-serif',
    foreColor: '#64748b',
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
    },
  };

  readonly chartColors = ['#0979EB', '#94A3B8'];

  readonly chartPlotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false,
      columnWidth: '48%',
      borderRadius: 4,
      borderRadiusApplication: 'end',
    },
  };

  readonly chartXAxis = computed<ApexXAxis>(() => ({
    categories: this.categorias(),
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
  }));

  readonly chartYAxis: ApexYAxis = {
    min: 0,
    forceNiceScale: true,
    decimalsInFloat: 0,
    labels: {
      style: {
        colors: '#64748b',
        fontSize: '11px',
      },
      formatter: (valor: number) => String(Math.round(valor)),
    },
  };

  readonly chartLegend: ApexLegend = {
    show: true,
    position: 'top',
    horizontalAlign: 'right',
    fontFamily: 'Inter, sans-serif',
    fontSize: '11px',
    markers: {
      size: 5,
    },
    itemMargin: {
      horizontal: 8,
    },
  };

  readonly chartDataLabels: ApexDataLabels = {
    enabled: false,
  };

  readonly chartGrid: ApexGrid = {
    borderColor: '#edf1f6',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      left: 4,
      right: 8,
    },
  };

  readonly chartTooltip: ApexTooltip = {
    y: {
      formatter: (valor: number) =>
        `${valor} ${valor === 1 ? 'negocio incorporado' : 'negocios incorporados'}`,
    },
  };

  readonly totalIncorporaciones = computed(() => {
    const datos = this.datosActuales();
    const vendedor = this.vendedorId();

    const totalVendedor1 = datos.vendedor1.reduce(
      (total, cantidad) => total + cantidad,
      0,
    );

    const totalVendedor2 = datos.vendedor2.reduce(
      (total, cantidad) => total + cantidad,
      0,
    );

    if (vendedor === 'vendedor-1') {
      return totalVendedor1;
    }

    if (vendedor === 'vendedor-2') {
      return totalVendedor2;
    }

    return totalVendedor1 + totalVendedor2;
  });

  readonly liderIncorporaciones = computed(() => {
    const datos = this.datosActuales();
    const vendedor = this.vendedorId();

    if (vendedor !== 'todos') {
      return vendedor === 'vendedor-1' ? 'Vendedor 1' : 'Vendedor 2';
    }

    const totalVendedor1 = datos.vendedor1.reduce(
      (total, cantidad) => total + cantidad,
      0,
    );

    const totalVendedor2 = datos.vendedor2.reduce(
      (total, cantidad) => total + cantidad,
      0,
    );

    if (totalVendedor1 === totalVendedor2) {
      return 'Empate';
    }

    return totalVendedor1 > totalVendedor2 ? 'Vendedor 1' : 'Vendedor 2';
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

  readonly nombreVendedor = computed(() => {
    switch (this.vendedorId()) {
      case 'vendedor-1':
        return 'Vendedor 1';
      case 'vendedor-2':
        return 'Vendedor 2';
      default:
        return 'Todos los vendedores';
    }
  });
}