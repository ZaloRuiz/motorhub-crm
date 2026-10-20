import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-prospecto-detalle-otros-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './prospecto-detalle-otros-dialog.html',
  styleUrl: './prospecto-detalle-otros-dialog.scss',
})
export class ProspectoDetalleOtrosDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
