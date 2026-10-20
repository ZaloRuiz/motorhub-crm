import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pre-ingresados-surtidores',
  standalone: true,
  templateUrl: './surtidores.html',
  styleUrl: './surtidores.scss',
  imports: [MatIconModule],
})
export class PreIngresadosSurtidoresComponent {
  readonly titulo = 'Pre-ingresados de surtidores';
  readonly descripcion =
    'Gestiona los surtidores pendientes de ingreso a MotorHub.';
}