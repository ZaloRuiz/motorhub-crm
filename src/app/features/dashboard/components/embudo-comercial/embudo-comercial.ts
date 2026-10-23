
import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface EtapaComercial {
  nombre: string;
  descripcion: string;
  cantidad: number;
  porcentaje: number;
}

@Component({
  selector: 'app-embudo-comercial',
  imports: [DecimalPipe, MatIconModule],
  templateUrl: './embudo-comercial.html',
  styleUrl: './embudo-comercial.scss',
})
export class EmbudoComercial {
  // Datos de ejemplo. Sustituir por los datos del backend.
  private readonly datosEtapas = [
    {
      nombre: 'Prospectos identificados',
      descripcion: 'Oportunidades registradas',
      cantidad: 128,
    },
    {
      nombre: 'Contactados',
      descripcion: 'Primer contacto realizado',
      cantidad: 83,
    },
    {
      nombre: 'En negociación',
      descripcion: 'Oportunidades en evaluación',
      cantidad: 46,
    },
    {
      nombre: 'Negocios incorporados',
      descripcion: 'Proceso de incorporación completado',
      cantidad: 30,
    },
  ];

  get totalInicial(): number {
    return this.datosEtapas[0]?.cantidad ?? 0;
  }

  get totalIncorporados(): number {
    return this.datosEtapas[this.datosEtapas.length - 1]?.cantidad ?? 0;
  }

  get etapas(): EtapaComercial[] {
    return this.datosEtapas.map((etapa) => ({
      ...etapa,
      porcentaje:
        this.totalInicial > 0
          ? (etapa.cantidad / this.totalInicial) * 100
          : 0,
    }));
  }
}
