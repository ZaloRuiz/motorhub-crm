import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pre-ingresados-talleres',
  standalone: true,
  templateUrl: './talleres.html',
  styleUrl: './talleres.scss',
  imports: [MatIconModule],
})
export class PreIngresadosTalleresComponent {
  readonly titulo = 'Pre-ingresados de talleres';
  readonly descripcion =
    'Gestiona los talleres pendientes de ingreso a MotorHub.';
}