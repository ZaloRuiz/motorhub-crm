import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pre-ingresados-gruas',
  standalone: true,
  templateUrl: './gruas.html',
  styleUrl: './gruas.scss',
  imports: [MatIconModule],
})
export class PreIngresadosGruasComponent {
  readonly titulo = 'Pre-ingresados de grúas';
  readonly descripcion =
    'Gestiona los servicios de grúa pendientes de ingreso a MotorHub.';
}