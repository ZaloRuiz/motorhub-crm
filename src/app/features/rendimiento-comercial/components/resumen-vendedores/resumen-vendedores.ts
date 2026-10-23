
import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

type PeriodoComercial = '7d' | '30d' | '90d';
type VendedorId = 'todos' | 'vendedor-1' | 'vendedor-2';

interface IndicadoresVendedor {
  contactados: number;
  negociacion: number;
  incorporados: number;
  conversion: number;
}

@Component({
  selector: 'app-resumen-vendedores',
  imports: [MatIconModule],
  templateUrl: './resumen-vendedores.html',
  styleUrl: './resumen-vendedores.scss',
})
export class ResumenVendedores {
  readonly periodo = input.required<PeriodoComercial>();
  readonly vendedorId = input.required<VendedorId>();

  // Datos ficticios para validar la interfaz.
  // La conversión es ilustrativa; no representa todavía
  // una conversión calculada mediante cohortes históricas.
  private readonly datosDemo: Record<
    PeriodoComercial,
    Record<Exclude<VendedorId, 'todos'>, IndicadoresVendedor>
  > = {
    '7d': {
      'vendedor-1': {
        contactados: 12,
        negociacion: 4,
        incorporados: 2,
        conversion: 16.7,
      },
      'vendedor-2': {
        contactados: 9,
        negociacion: 3,
        incorporados: 2,
        conversion: 22.2,
      },
    },
    '30d': {
      'vendedor-1': {
        contactados: 42,
        negociacion: 12,
        incorporados: 8,
        conversion: 19.0,
      },
      'vendedor-2': {
        contactados: 35,
        negociacion: 9,
        incorporados: 6,
        conversion: 17.1,
      },
    },
    '90d': {
      'vendedor-1': {
        contactados: 105,
        negociacion: 31,
        incorporados: 21,
        conversion: 20.0,
      },
      'vendedor-2': {
        contactados: 91,
        negociacion: 25,
        incorporados: 17,
        conversion: 18.7,
      },
    },
  };

  readonly indicadores = computed<IndicadoresVendedor>(() => {
    const datosPeriodo = this.datosDemo[this.periodo()];
    const seleccionado = this.vendedorId();

    if (seleccionado !== 'todos') {
      return datosPeriodo[seleccionado];
    }

    const vendedor1 = datosPeriodo['vendedor-1'];
    const vendedor2 = datosPeriodo['vendedor-2'];

    const contactados = vendedor1.contactados + vendedor2.contactados;
    const incorporados = vendedor1.incorporados + vendedor2.incorporados;

    return {
      contactados,
      negociacion: vendedor1.negociacion + vendedor2.negociacion,
      incorporados,
      conversion: contactados > 0
        ? Math.round((incorporados / contactados) * 1000) / 10
        : 0,
    };
  });

  readonly tarjetas = computed(() => {
    const datos = this.indicadores();

    return [
      {
        titulo: 'Negocios contactados',
        valor: datos.contactados,
        icono: 'call',
        descripcion: 'Con contacto registrado',
        tipo: 'cantidad',
      },
      {
        titulo: 'En negociación',
        valor: datos.negociacion,
        icono: 'handshake',
        descripcion: 'Oportunidades en negociación',
        tipo: 'cantidad',
      },
      {
        titulo: 'Negocios incorporados',
        valor: datos.incorporados,
        icono: 'domain_add',
        descripcion: 'Incorporaciones del período',
        tipo: 'cantidad',
      },
      {
        titulo: 'Conversión comercial',
        valor: datos.conversion,
        icono: 'trending_up',
        descripcion: 'Porcentaje ilustrativo',
        tipo: 'porcentaje',
      },
    ];
  });
}
