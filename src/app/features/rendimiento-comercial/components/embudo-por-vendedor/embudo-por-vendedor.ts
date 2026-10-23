import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

type PeriodoComercial = '7d' | '30d' | '90d';
type VendedorId = 'todos' | 'vendedor-1' | 'vendedor-2';

interface EtapasVendedor {
  identificados: number;
  contactados: number;
  negociacion: number;
  incorporados: number;
}

interface EtapaEmbudo {
  titulo: string;
  cantidad: number;
  porcentaje: number;
  icono: string;
  descripcion: string;
}

@Component({
  selector: 'app-embudo-por-vendedor',
  imports: [MatIconModule],
  templateUrl: './embudo-por-vendedor.html',
  styleUrl: './embudo-por-vendedor.scss',
})
export class EmbudoPorVendedor {
  readonly periodo = input.required<PeriodoComercial>();
  readonly vendedorId = input.required<VendedorId>();

  private readonly datosDemo: Record<
    PeriodoComercial,
    Record<Exclude<VendedorId, 'todos'>, EtapasVendedor>
  > = {
    '7d': {
      'vendedor-1': {
        identificados: 18,
        contactados: 12,
        negociacion: 4,
        incorporados: 2,
      },
      'vendedor-2': {
        identificados: 15,
        contactados: 9,
        negociacion: 3,
        incorporados: 2,
      },
    },
    '30d': {
      'vendedor-1': {
        identificados: 65,
        contactados: 42,
        negociacion: 12,
        incorporados: 8,
      },
      'vendedor-2': {
        identificados: 54,
        contactados: 35,
        negociacion: 9,
        incorporados: 6,
      },
    },
    '90d': {
      'vendedor-1': {
        identificados: 155,
        contactados: 105,
        negociacion: 31,
        incorporados: 21,
      },
      'vendedor-2': {
        identificados: 138,
        contactados: 91,
        negociacion: 25,
        incorporados: 17,
      },
    },
  };

  readonly datosActuales = computed<EtapasVendedor>(() => {
    const datosPeriodo = this.datosDemo[this.periodo()];
    const vendedor = this.vendedorId();

    if (vendedor !== 'todos') {
      return datosPeriodo[vendedor];
    }

    const vendedor1 = datosPeriodo['vendedor-1'];
    const vendedor2 = datosPeriodo['vendedor-2'];

    return {
      identificados:
        vendedor1.identificados + vendedor2.identificados,
      contactados: vendedor1.contactados + vendedor2.contactados,
      negociacion: vendedor1.negociacion + vendedor2.negociacion,
      incorporados: vendedor1.incorporados + vendedor2.incorporados,
    };
  });

  readonly etapas = computed<EtapaEmbudo[]>(() => {
    const datos = this.datosActuales();
    const totalIdentificados = datos.identificados;

    const definirPorcentaje = (cantidad: number): number =>
      totalIdentificados > 0
        ? Math.round((cantidad / totalIdentificados) * 100)
        : 0;

    return [
      {
        titulo: 'Prospectos identificados',
        cantidad: datos.identificados,
        porcentaje: definirPorcentaje(datos.identificados),
        icono: 'person_search',
        descripcion: 'Prospectos registrados',
      },
      {
        titulo: 'Contactados',
        cantidad: datos.contactados,
        porcentaje: definirPorcentaje(datos.contactados),
        icono: 'call',
        descripcion: 'Con contacto registrado',
      },
      {
        titulo: 'En negociación',
        cantidad: datos.negociacion,
        porcentaje: definirPorcentaje(datos.negociacion),
        icono: 'handshake',
        descripcion: 'Oportunidades en negociación',
      },
      {
        titulo: 'Negocios incorporados',
        cantidad: datos.incorporados,
        porcentaje: definirPorcentaje(datos.incorporados),
        icono: 'domain_add',
        descripcion: 'Incorporaciones registradas',
      },
    ];
  });

  readonly nombreVendedor = computed(() => {
    switch (this.vendedorId()) {
      case 'vendedor-1':
        return 'Vendedor 1';
      case 'vendedor-2':
        return 'Vendedor 2';
      default:
        return 'Todo el equipo';
    }
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

  readonly tasaIncorporacion = computed(() => {
    const datos = this.datosActuales();

    return datos.identificados > 0
      ? Math.round(
          (datos.incorporados / datos.identificados) * 1000,
        ) / 10
      : 0;
  });
}