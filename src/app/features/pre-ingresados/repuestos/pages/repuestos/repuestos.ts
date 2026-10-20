import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pre-ingresados-repuestos',
  standalone: true,
  templateUrl: './repuestos.html',
  styleUrl: './repuestos.scss',
  imports: [MatIconModule],
})
export class PreIngresadosRepuestosComponent {
  readonly titulo = 'Pre-ingresados de tiendas de repuestos';
  readonly descripcion =
    'Gestiona las tiendas de repuestos pendientes de ingreso a MotorHub.';
}