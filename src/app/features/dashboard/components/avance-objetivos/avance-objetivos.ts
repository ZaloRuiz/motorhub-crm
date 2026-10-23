
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-avance-objetivos',
  imports: [MatIconModule],
  templateUrl: './avance-objetivos.html',
  styleUrl: './avance-objetivos.scss',
})
export class AvanceObjetivos {
  // Datos ilustrativos. Posteriormente vendrán del backend.
  objetivo = 20;
  incorporados = 13;

  // Ejemplo: día actual y duración del mes analizado.
  // En producción, estos datos deben calcularse con la fecha local
  // del negocio o recibirse desde el backend.
  diaActual = 23;
  diasDelMes = 31;

  get porcentajeAvance(): number {
    if (this.objetivo <= 0) {
      return 0;
    }

    return Math.round((this.incorporados / this.objetivo) * 100);
  }

  get anchoProgreso(): number {
    return Math.min(100, Math.max(0, this.porcentajeAvance));
  }

  get negociosRestantes(): number {
    return Math.max(0, this.objetivo - this.incorporados);
  }

  get porcentajeTiempoTranscurrido(): number {
    if (this.diasDelMes <= 0) {
      return 0;
    }

    return Math.min(
      100,
      Math.round((this.diaActual / this.diasDelMes) * 100)
    );
  }

  get estadoObjetivo(): string {
    if (this.objetivo <= 0) {
      return 'Sin meta definida';
    }

    if (this.porcentajeAvance >= 100) {
      return 'Meta cumplida';
    }

    if (this.porcentajeAvance >= this.porcentajeTiempoTranscurrido) {
      return 'En ritmo';
    }

    return 'Requiere atención';
  }

  get descripcionEstado(): string {
    if (this.objetivo <= 0) {
      return 'Configura una meta mensual';
    }

    if (this.porcentajeAvance >= 100) {
      return 'Objetivo alcanzado';
    }

    if (this.porcentajeAvance >= this.porcentajeTiempoTranscurrido) {
      return 'Avance acorde al calendario';
    }

    return 'Por debajo del ritmo esperado';
  }

  get iconoEstado(): string {
    if (this.porcentajeAvance >= 100) {
      return 'check_circle';
    }

    if (this.porcentajeAvance >= this.porcentajeTiempoTranscurrido) {
      return 'trending_up';
    }

    return 'schedule';
  }

  get iconoMensaje(): string {
    if (this.objetivo <= 0) {
      return 'info_outline';
    }

    if (this.porcentajeAvance >= 100) {
      return 'check_circle';
    }

    if (this.porcentajeAvance >= this.porcentajeTiempoTranscurrido) {
      return 'lightbulb';
    }

    return 'priority_high';
  }

  get mensajeObjetivo(): string {
    if (this.objetivo <= 0) {
      return 'Define una meta comercial mensual para comenzar a medir el avance.';
    }

    if (this.porcentajeAvance >= 100) {
      return `¡Objetivo cumplido! Se incorporaron ${this.incorporados - this.objetivo} negocios por encima de la meta.`;
    }

    if (this.porcentajeAvance >= this.porcentajeTiempoTranscurrido) {
      return `Buen ritmo: llevas ${this.porcentajeAvance}% de la meta. Faltan ${this.negociosRestantes} negocios para completarla.`;
    }

    return `Se ha alcanzado el ${this.porcentajeAvance}% de la meta y ha transcurrido el ${this.porcentajeTiempoTranscurrido}% del mes. Faltan ${this.negociosRestantes} negocios; conviene reforzar el seguimiento comercial.`;
  }
}
