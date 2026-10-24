import { Routes } from "@angular/router";
import { Dashboard } from "./features/dashboard/pages/dashboard/dashboard";
import { ProspectosLubricentrosComponent } from "./features/prospectos/lubricentros/pages/lubricentros/lubricentros";
import { ProspectosTalleresComponent } from "./features/prospectos/talleres/pages/talleres/talleres";
import { ProspectosTiendaRepuestosComponent } from "./features/prospectos/tienda-repuestos/pages/tienda-repuestos/tienda-repuestos";
import { ProspectosGruasComponent } from "./features/prospectos/gruas/pages/gruas/gruas";
import { ProspectosAmbulanciasComponent } from "./features/prospectos/ambulancias/pages/ambulancias/ambulancias";
import { ProspectosSurtidoresComponent } from "./features/prospectos/surtidores/pages/surtidores/surtidores";
import { NegociosTalleresComponent } from "./features/negocios/talleres/pages/talleres/talleres";
import { NegociosLubricentrosComponent } from "./features/negocios/lubricentros/pages/lubricentros/lubricentros";
import { NegociosGruasComponent } from "./features/negocios/gruas/pages/gruas/gruas";
import { NegociosAmbulanciasComponent } from "./features/negocios/ambulancias/pages/ambulancias/ambulancias";
import { NegociosSurtidoresComponent } from "./features/negocios/surtidores/pages/surtidores/surtidores";
import { UsuariosComponent } from "./features/configuracion/usuarios/pages/usuarios/usuarios";
import { RolesComponent } from "./features/configuracion/roles/pages/roles/roles";
import { EmpresaComponent } from "./features/configuracion/empresa/pages/empresa/empresa";
import { PreIngresadosTalleresComponent } from "./features/pre-ingresados/talleres/pages/talleres/talleres";
import { PreIngresadosLubricentrosComponent } from "./features/pre-ingresados/lubricentros/pages/lubricentros/lubricentros";
import { PreIngresadosRepuestosComponent } from "./features/pre-ingresados/repuestos/pages/repuestos/repuestos";
import { PreIngresadosGruasComponent } from "./features/pre-ingresados/gruas/pages/gruas/gruas";
import { PreIngresadosAmbulanciasComponent } from "./features/pre-ingresados/ambulancias/pages/ambulancias/ambulancias";
import { PreIngresadosSurtidoresComponent } from "./features/pre-ingresados/surtidores/pages/surtidores/surtidores";
import { NegociosRepuestosComponent } from "./features/negocios/repuestos/pages/repuestos/repuestos";
import { RendimientoComercial } from "./features/rendimiento-comercial/dashboard/rendimiento-comercial/rendimiento-comercial";

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
    { path: 'dashboard', component: Dashboard },

    {path: 'rendimiento-comercial', component: RendimientoComercial},

    { path: 'negocios/talleres', component: NegociosTalleresComponent },
    { path: 'negocios/lubricentros', component: NegociosLubricentrosComponent },
    { path: 'negocios/tienda-repuestos', component: NegociosRepuestosComponent },
    { path: 'negocios/gruas', component: NegociosGruasComponent },
    { path: 'negocios/ambulancias', component: NegociosAmbulanciasComponent },
    { path: 'negocios/surtidores', component: NegociosSurtidoresComponent },

    { path: 'prospectos/talleres', component: ProspectosTalleresComponent },
    { path: 'prospectos/lubricentros', component: ProspectosLubricentrosComponent },
    { path: 'prospectos/tienda-repuestos', component: ProspectosTiendaRepuestosComponent },
    { path: 'prospectos/gruas', component: ProspectosGruasComponent },
    { path: 'prospectos/ambulancias', component: ProspectosAmbulanciasComponent },
    { path: 'prospectos/surtidores', component: ProspectosSurtidoresComponent },
  
    { path: 'pre-ingresados/talleres', component: PreIngresadosTalleresComponent },
    { path: 'pre-ingresados/lubricentros', component: PreIngresadosLubricentrosComponent },
    { path: 'pre-ingresados/repuestos', component: PreIngresadosRepuestosComponent },
    { path: 'pre-ingresados/gruas', component: PreIngresadosGruasComponent },
    { path: 'pre-ingresados/ambulancias', component: PreIngresadosAmbulanciasComponent },
    { path: 'pre-ingresados/surtidores', component: PreIngresadosSurtidoresComponent },
  
    { path: 'configuracion/usuarios', component: UsuariosComponent },
    { path: 'configuracion/roles', component: RolesComponent },
    { path: 'configuracion/empresa', component: EmpresaComponent },
  ];