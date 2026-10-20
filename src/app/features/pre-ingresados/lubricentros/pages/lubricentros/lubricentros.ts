import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pre-ingresados-lubricentros',
  standalone: true,
  templateUrl: './lubricentros.html',
  styleUrl: './lubricentros.scss',
  imports: [MatIconModule],
})
export class PreIngresadosLubricentrosComponent {
  readonly titulo = 'Pre-ingresados de lubricentros';
  readonly descripcion =
    'Gestiona los lubricentros pendientes de ingreso a MotorHub.';
}