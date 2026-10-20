import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-negocio-taller-detalle-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
],
  templateUrl: './negocio-taller-detalle-dialog.html',
  styleUrl: './negocio-taller-detalle-dialog.scss',
})
export class NegocioTallerDetalleDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
