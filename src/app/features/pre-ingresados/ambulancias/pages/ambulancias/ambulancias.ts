import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pre-ingresados-ambulancias',
  standalone: true,
  templateUrl: './ambulancias.html',
  styleUrl: './ambulancias.scss',
  imports: [MatIconModule],
})
export class PreIngresadosAmbulanciasComponent {
  readonly titulo = 'Pre-ingresados de ambulancias';
  readonly descripcion =
    'Gestiona los servicios de ambulancia pendientes de ingreso a MotorHub.';
}