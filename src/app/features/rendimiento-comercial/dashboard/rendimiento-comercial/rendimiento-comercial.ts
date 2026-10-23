
import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { ResumenVendedores } from '../../components/resumen-vendedores/resumen-vendedores';
import { ComparativaVendedores } from '../../components/comparativa-vendedores/comparativa-vendedores';
import { EmbudoPorVendedor } from '../../components/embudo-por-vendedor/embudo-por-vendedor';
import { IncorporacionesPorVendedor } from '../../components/incorporaciones-por-vendedor/incorporaciones-por-vendedor';



type PeriodoComercial = '7d' | '30d' | '90d';
type VendedorId = 'todos' | 'vendedor-1' | 'vendedor-2';

@Component({
  selector: 'app-rendimiento-comercial',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    ResumenVendedores,
    ComparativaVendedores,
    EmbudoPorVendedor,
    IncorporacionesPorVendedor
],
  templateUrl: './rendimiento-comercial.html',
  styleUrl: './rendimiento-comercial.scss',
})
export class RendimientoComercial {
  readonly periodoSeleccionado = signal<PeriodoComercial>('30d');
  readonly vendedorSeleccionado = signal<VendedorId>('todos');

  readonly periodos: {
    etiqueta: string;
    valor: PeriodoComercial;
  }[] = [
    { etiqueta: 'Últimos 7 días', valor: '7d' },
    { etiqueta: 'Últimos 30 días', valor: '30d' },
    { etiqueta: 'Últimos 90 días', valor: '90d' },
  ];

  readonly vendedores: {
    nombre: string;
    id: VendedorId;
  }[] = [
    { nombre: 'Todos los vendedores', id: 'todos' },
    { nombre: 'Nombre del Vendedor 1', id: 'vendedor-1' },
    { nombre: 'Nombre del Vendedor 2', id: 'vendedor-2' },
  ];

  cambiarPeriodo(periodo: PeriodoComercial): void {
    this.periodoSeleccionado.set(periodo);
  }

  cambiarVendedor(vendedorId: VendedorId): void {
    this.vendedorSeleccionado.set(vendedorId);
  }
}
