import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-prospecto-detalle-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './prospecto-detalle-dialog.html',
  styleUrl: './prospecto-detalle-dialog.scss',
})
export class ProspectoDetalleDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
