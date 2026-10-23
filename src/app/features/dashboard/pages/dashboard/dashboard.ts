import { Component } from '@angular/core';
import { KpiCard } from '../../components/kpi-card/kpi-card';
import { EstadosCard } from '../../components/estados-card/estados-card';
import { RubrosCard } from '../../components/rubros-card/rubros-card';
import { NuevosProspectosCard } from '../../components/nuevos-prospectos-card/nuevos-prospectos-card';
import { EmbudoComercial } from '../../components/embudo-comercial/embudo-comercial';
import { NuevosNegociosPeriodo } from '../../components/nuevos-negocios-periodo/nuevos-negocios-periodo';
import { CrecimientoMensual } from '../../components/crecimiento-mensual/crecimiento-mensual';
import { AvanceObjetivos } from '../../components/avance-objetivos/avance-objetivos';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCard,
    EstadosCard,
    RubrosCard,
    NuevosProspectosCard, EmbudoComercial, NuevosNegociosPeriodo, CrecimientoMensual, AvanceObjetivos],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
