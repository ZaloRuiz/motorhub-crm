import { Component } from '@angular/core';
import { KpiCard } from '../../components/kpi-card/kpi-card';
import { EstadosCard } from '../../components/estados-card/estados-card';
import { RubrosCard } from '../../components/rubros-card/rubros-card';
import { NuevosProspectosCard } from '../../components/nuevos-prospectos-card/nuevos-prospectos-card';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCard,
    EstadosCard,
    RubrosCard,
    NuevosProspectosCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
