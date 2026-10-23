import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { ProspectoDetalleOtrosDialog } from '../../../../../shared/dialogs/prospecto-detalle-otros-dialog/prospecto-detalle-otros-dialog';

@Component({
  selector: 'app-ambulancias',
  imports: [
    NgClass,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  templateUrl: './ambulancias.html',
  styleUrl: './ambulancias.scss',
})
export class ProspectosAmbulanciasComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  get totalProspectos(): number {
    return this.dataSource.filteredData.length;
  }
  
  get servicioInterhospitalario(): number {
    return this.dataSource.filteredData.filter(x => x.otroServicio.includes('interhospitalario')).length;
  }
  
  get servicioAsistencial(): number {
    return this.dataSource.filteredData.filter(x => x.otroServicio.includes('asistencial')).length;
  }
  
  get servicioEventos(): number {
    return this.dataSource.filteredData.filter(x => x.otroServicio.includes('eventos')).length;
  }

  constructor(private dialog: MatDialog) {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
  
      const filtros = JSON.parse(filter);
  
      const coincideBusqueda =
        !filtros.busqueda ||
        data.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase());
  
      const coincideEstado =
        !filtros.estado ||
        data.estado === filtros.estado;
  
        const coincideServicio =
        !filtros.servicio || filtros.servicio === '' ||
        data.otroServicio.includes(filtros.servicio);
  
      const coincideCiudad =
        !filtros.ciudad ||
        data.ciudad === filtros.ciudad;
  
      return (
        coincideBusqueda &&
        coincideEstado &&
        coincideServicio &&
        coincideCiudad
      );
    };
  }

  aplicarFiltros(): void {
    this.dataSource.filter = JSON.stringify(this.filtros);
  
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }
  limpiarFiltros(): void {
    this.filtros = {
      busqueda: '',
      estado: '',
      servicio: '',
      ciudad: ''
    };
  
    this.aplicarFiltros();
  }
  displayedColumns: string[] = [
    'nombre',
    'contacto',
    'telefono',
    'ciudad',
    'estado',
    'acciones'
  ];
  filtros = {
    busqueda: '',
    estado: '',
    servicio: '',
    ciudad: ''
  };
  verDetalle(prospecto: any): void {
    this.dialog.open(ProspectoDetalleOtrosDialog, {
      width: '900px',
      maxWidth: '95vw',
      data: prospecto
    });
  }
  dataSource = new MatTableDataSource([
    {
      nombre: 'Red Lozania Emergencias',
      contacto: 'Juan Pérez',
      telefono: '70123456',
      ciudad: 'Santa Cruz de la Sierra',
      otroServicio: ['interhospitalario', 'asistencial', 'eventos'],
      estado: 'Nuevo',
      direccion: 'Av. Banzer Km 8',
      ubLatitud: '-17.7445',
      ubLongitud: '-63.1561',
      prioridad: 1,
      idTipoNegocio: 1,
      idVendedor: 101,
      especialidad: 'Mecánica General',
      fechaActual: '15/06/2026',
      proximoContacto: '20/06/2026',
      metodoContacto: 'WhatsApp',
      respuestaContacto: 'Solicitó información',
      proximaAccion: 'Enviar propuesta comercial',
      tipoVehiculo: 'Automóviles',
      caracteristicasEtiqueta: 'Elevador, Scanner',
      caracteristicasAdicional: 'Área de recepción climatizada'
      },
      {
      nombre: 'UTEM Ambulancias',
      contacto: 'Carlos Flores',
      telefono: '71234567',
      ciudad: 'Santa Cruz de la Sierra',
      otroServicio: ['asistencial', 'eventos'],
      estado: 'Contactado',
      direccion: 'Av. Santos Dumont',
      ubLatitud: '-17.8123',
      ubLongitud: '-63.1812',
      prioridad: 2,
      idTipoNegocio: 1,
      idVendedor: 102,
      especialidad: 'Motocicletas',
      fechaActual: '14/06/2026',
      proximoContacto: '18/06/2026',
      metodoContacto: 'Llamada',
      respuestaContacto: 'Interesado',
      proximaAccion: 'Agendar visita',
      tipoVehiculo: 'Motocicletas',
      caracteristicasEtiqueta: 'Motores, Inyección',
      caracteristicasAdicional: 'Especialista en motos deportivas'
      },
      {
      nombre: 'AME Ambulancias',
      contacto: 'Luis Vargas',
      telefono: '72345678',
      ciudad: 'Warnes',
      otroServicio: ['eventos'],
      estado: 'Negociación',
      direccion: 'Zona Industrial Warnes',
      ubLatitud: '-17.5123',
      ubLongitud: '-63.1734',
      prioridad: 1,
      idTipoNegocio: 1,
      idVendedor: 101,
      especialidad: 'Suspensión y Frenos',
      fechaActual: '12/06/2026',
      proximoContacto: '19/06/2026',
      metodoContacto: 'Visita',
      respuestaContacto: 'Evaluando propuesta',
      proximaAccion: 'Presentar contrato',
      tipoVehiculo: 'Automóviles',
      caracteristicasEtiqueta: 'Elevador, Scanner, Alineadora',
      caracteristicasAdicional: 'Instalaciones modernas'
      },
      {
      nombre: 'Ambulancias Santa Cruz',
      contacto: 'Pedro Rojas',
      telefono: '73456789',
      ciudad: 'Montero',
      otroServicio: ['asistencial'],
      estado: 'Ganado',
      direccion: 'Av. Circunvalación',
      ubLatitud: '-17.3382',
      ubLongitud: '-63.2501',
      prioridad: 3,
      idTipoNegocio: 1,
      idVendedor: 103,
      especialidad: 'Electricidad Automotriz',
      fechaActual: '10/06/2026',
      proximoContacto: '25/06/2026',
      metodoContacto: 'Seguimiento',
      respuestaContacto: 'Aceptó trabajar con nosotros',
      proximaAccion: 'Capacitación inicial',
      tipoVehiculo: 'Automóviles',
      caracteristicasEtiqueta: 'Scanner',
      caracteristicasAdicional: 'Taller consolidado'
      },
      {
        nombre: 'SISME',
        contacto: 'Miguel Pérez',
        telefono: '74567890',
        ciudad: 'Montero',
        otroServicio: ['interhospitalario', 'asistencial', 'eventos'],
        estado: 'Negociación',
        direccion: 'Barrio Centro',
        ubLatitud: '-17.3421',
        ubLongitud: '-63.2554',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 102,
        especialidad: 'Mecánica General',
        fechaActual: '13/06/2026',
        proximoContacto: '18/06/2026',
        metodoContacto: 'Visita',
        respuestaContacto: 'Solicitó propuesta',
        proximaAccion: 'Presentar convenio',
        tipoVehiculo: 'Automóviles',
        caracteristicasEtiqueta: 'Elevador',
        caracteristicasAdicional: 'Negocio familiar'
        },
        {
        nombre: 'Ambulancias Cardiomedcruz SRL',
        contacto: 'José Suárez',
        telefono: '75678901',
        ciudad: 'Santa Cruz de la Sierra',
        otroServicio: ['interhospitalario', 'eventos'],
        estado: 'Negociación',        
        direccion: 'Av. Virgen de Cotoca',
        ubLatitud: '-17.7754',
        ubLongitud: '-63.1321',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 101,
        especialidad: 'Suspensión',
        fechaActual: '11/06/2026',
        proximoContacto: '17/06/2026',
        metodoContacto: 'Llamada',
        respuestaContacto: 'Interesado',
        proximaAccion: 'Coordinar visita',
        tipoVehiculo: 'Automóviles',
        caracteristicasEtiqueta: 'Alineadora',
        caracteristicasAdicional: 'Buen flujo de clientes'
        },
        {
        nombre: 'CIEM Central',
        contacto: 'Andrés Molina',
        telefono: '76789012',
        ciudad: 'Warnes',
        otroServicio: ['interhospitalario', 'asistencial'],
        estado: 'Nuevo',
        direccion: 'Zona Norte Warnes',
        ubLatitud: '-17.5087',
        ubLongitud: '-63.1698',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 103,
        especialidad: 'Diagnóstico Computarizado',
        fechaActual: '16/06/2026',
        proximoContacto: '19/06/2026',
        metodoContacto: 'WhatsApp',
        respuestaContacto: 'Pendiente',
        proximaAccion: 'Primer contacto',
        tipoVehiculo: 'Automóviles',
        caracteristicasEtiqueta: 'Scanner, Elevador',
        caracteristicasAdicional: 'Infraestructura moderna'
        },
        {
        nombre: 'Lemcruz SRL',
        contacto: 'Mario Quiroga',
        telefono: '77890123',
        ciudad: 'Santa Cruz de la Sierra',
        otroServicio: ['asistencial'],
        estado: 'Nuevo',        
        direccion: 'Barrio San Pedro',
        ubLatitud: '-17.7842',
        ubLongitud: '-63.1745',
        prioridad: 3,
        idTipoNegocio: 1,
        idVendedor: 102,
        especialidad: 'Mecánica General',
        fechaActual: '15/06/2026',
        proximoContacto: '21/06/2026',
        metodoContacto: 'WhatsApp',
        respuestaContacto: 'Sin respuesta',
        proximaAccion: 'Reintentar contacto',
        tipoVehiculo: 'Automóviles',
        caracteristicasEtiqueta: 'Herramientas básicas',
        caracteristicasAdicional: 'Taller pequeño'
        },
        {
        nombre: 'UMA',
        contacto: 'Raúl Fernández',
        telefono: '78901234',
        ciudad: 'Camiri',
        otroServicio: ['interhospitalario', 'asistencial', 'eventos'],
        estado: 'Negociación',        
        direccion: 'Zona Central',
        ubLatitud: '-20.0381',
        ubLongitud: '-63.5187',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 101,
        especialidad: 'Motores',
        fechaActual: '09/06/2026',
        proximoContacto: '18/06/2026',
        metodoContacto: 'Visita',
        respuestaContacto: 'Analizando propuesta',
        proximaAccion: 'Seguimiento',
        tipoVehiculo: 'Camionetas',
        caracteristicasEtiqueta: 'Banco de pruebas',
        caracteristicasAdicional: 'Experiencia en motores diésel'
        },
        {
        nombre: 'CIEM Parque Sur',
        contacto: 'Julio Mendoza',
        telefono: '79012345',
        ciudad: 'Warnes',
        otroServicio: ['asistencial', 'eventos'],
        estado: 'Nuevo',        
        direccion: 'Carretera al Norte',
        ubLatitud: '-17.5201',
        ubLongitud: '-63.1810',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 103,
        especialidad: 'Mecánica General',
        fechaActual: '16/06/2026',
        proximoContacto: '20/06/2026',
        metodoContacto: 'WhatsApp',
        respuestaContacto: 'Pendiente',
        proximaAccion: 'Primer contacto',
        tipoVehiculo: 'Automóviles',
        caracteristicasEtiqueta: 'Elevador',
        caracteristicasAdicional: 'Buen potencial comercial'
        },
        {
        nombre: 'Sepacruz Emergencias Medicas',
        contacto: 'Fernando Rojas',
        telefono: '70111222',
        ciudad: 'Santa Cruz de la Sierra',
        otroServicio: ['interhospitalario', 'asistencial'],
        estado: 'Negociación',        
        direccion: 'Av. Alemana',
        ubLatitud: '-17.7610',
        ubLongitud: '-63.1701',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 102,
        especialidad: 'Electricidad Automotriz',
        fechaActual: '08/06/2026',
        proximoContacto: '17/06/2026',
        metodoContacto: 'Llamada',
        respuestaContacto: 'Interesado',
        proximaAccion: 'Enviar información',
        tipoVehiculo: 'Automóviles',
        caracteristicasEtiqueta: 'Scanner',
        caracteristicasAdicional: 'Especialista en sistemas eléctricos'
        },
        {
        nombre: 'ATP SCZ',
        contacto: 'Ricardo Saucedo',
        telefono: '70222333',
        ciudad: 'Santa Cruz de la Sierra',
        otroServicio: ['asistencial'],
        estado: 'Negociación',        
        direccion: 'Av. Cristo Redentor',
        ubLatitud: '-17.7350',
        ubLongitud: '-63.1654',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 101,
        especialidad: 'Mecánica Integral',
        fechaActual: '07/06/2026',
        proximoContacto: '18/06/2026',
        metodoContacto: 'Visita',
        respuestaContacto: 'Muy interesado',
        proximaAccion: 'Revisión contractual',
        tipoVehiculo: 'Automóviles',
        caracteristicasEtiqueta: 'Elevador, Scanner, Alineadora',
        caracteristicasAdicional: 'Instalaciones premium'
        },
        {
        nombre: 'EMEDSA',
        contacto: 'Diego Salvatierra',
        telefono: '70333444',
        ciudad: 'Santa Cruz de la Sierra',
        otroServicio: ['interhospitalario', 'asistencial'],
        estado: 'Negociación',        
        direccion: 'Av. Beni',
        ubLatitud: '-17.7488',
        ubLongitud: '-63.1569',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 103,
        especialidad: 'Diagnóstico y Electrónica',
        fechaActual: '06/06/2026',
        proximoContacto: '19/06/2026',
        metodoContacto: 'Visita',
        respuestaContacto: 'Evaluando beneficios',
        proximaAccion: 'Presentar propuesta final',
        tipoVehiculo: 'Automóviles',
        caracteristicasEtiqueta: 'Scanner, Elevador',
        caracteristicasAdicional: 'Taller de alta tecnología'
        },
        {
          nombre: 'Ambulancia SAMED',
          contacto: 'Héctor Salinas',
          telefono: '70444555',
          ciudad: 'Santa Cruz de la Sierra',
          otroServicio: ['interhospitalario', 'asistencial', 'eventos'],
          estado: 'Contactado',          
          direccion: 'Av. Mutualista',
          ubLatitud: '-17.7812',
          ubLongitud: '-63.1458',
          prioridad: 1,
          idTipoNegocio: 1,
          idVendedor: 101,
          especialidad: 'Motores Turbo',
          fechaActual: '16/06/2026',
          proximoContacto: '21/06/2026',
          metodoContacto: 'Llamada',
          respuestaContacto: 'Interesado en conocer beneficios',
          proximaAccion: 'Agendar demostración',
          tipoVehiculo: 'Automóviles',
          caracteristicasEtiqueta: 'Scanner, Banco de pruebas',
          caracteristicasAdicional: 'Especialista en vehículos turbo'
          },
          {
          nombre: 'MIA Atencion Medica',
          contacto: 'Patricia Méndez',
          telefono: '70555666',
          ciudad: 'Cochabamba',
          otroServicio: ['asistencial'],
          estado: 'Negociación',          
          direccion: 'Av. América',
          ubLatitud: '-17.3895',
          ubLongitud: '-66.1568',
          prioridad: 1,
          idTipoNegocio: 1,
          idVendedor: 102,
          especialidad: 'Mecánica Premium',
          fechaActual: '15/06/2026',
          proximoContacto: '22/06/2026',
          metodoContacto: 'Visita',
          respuestaContacto: 'Solicitó propuesta formal',
          proximaAccion: 'Presentar propuesta económica',
          tipoVehiculo: 'Automóviles',
          caracteristicasEtiqueta: 'Elevador, Scanner, Alineadora',
          caracteristicasAdicional: 'Atención a vehículos de gama alta'
          },
          {
          nombre: 'UDEM',
          contacto: 'Roberto Velasco',
          telefono: '70666777',
          ciudad: 'Montero',
          otroServicio: ['interhospitalario', 'asistencial', 'eventos'],
          estado: 'Nuevo',          
          direccion: 'Barrio Villa Busch',
          ubLatitud: '-17.3465',
          ubLongitud: '-63.2492',
          prioridad: 3,
          idTipoNegocio: 1,
          idVendedor: 103,
          especialidad: 'Mecánica General',
          fechaActual: '17/06/2026',
          proximoContacto: '23/06/2026',
          metodoContacto: 'WhatsApp',
          respuestaContacto: 'Pendiente',
          proximaAccion: 'Realizar primer contacto',
          tipoVehiculo: 'Automóviles',
          caracteristicasEtiqueta: 'Herramientas básicas',
          caracteristicasAdicional: 'Taller de barrio con clientela estable'
          },
          {
          nombre: 'Ambulancias SEMP',
          contacto: 'Óscar Gutiérrez',
          telefono: '70777888',
          ciudad: 'Camiri',
          otroServicio: ['asistencial', 'eventos'],
          estado: 'Contactado',          
          direccion: 'Av. Petrolera',
          ubLatitud: '-20.0405',
          ubLongitud: '-63.5202',
          prioridad: 2,
          idTipoNegocio: 1,
          idVendedor: 101,
          especialidad: 'Motores Diésel',
          fechaActual: '16/06/2026',
          proximoContacto: '20/06/2026',
          metodoContacto: 'Llamada',
          respuestaContacto: 'Mostró interés',
          proximaAccion: 'Coordinar visita técnica',
          tipoVehiculo: 'Camiones',
          caracteristicasEtiqueta: 'Banco de pruebas',
          caracteristicasAdicional: 'Especializado en transporte pesado'
          },
          {
          nombre: 'CIEM Parqueo 4',
          contacto: 'María Fernanda Ruiz',
          telefono: '70888999',
          ciudad: 'Warnes',
          otroServicio: ['interhospitalario', 'asistencial'],
          estado: 'Ganado',          
          direccion: 'Zona Industrial',
          ubLatitud: '-17.5174',
          ubLongitud: '-63.1763',
          prioridad: 2,
          idTipoNegocio: 1,
          idVendedor: 102,
          especialidad: 'Mantenimiento Preventivo',
          fechaActual: '14/06/2026',
          proximoContacto: '30/06/2026',
          metodoContacto: 'Seguimiento',
          respuestaContacto: 'Aceptó la propuesta',
          proximaAccion: 'Capacitación y onboarding',
          tipoVehiculo: 'Automóviles',
          caracteristicasEtiqueta: 'Elevador, Scanner',
          caracteristicasAdicional: 'Cliente recientemente incorporado'
          }
        ]);
        ciudades = [
          ...new Set(
            this.dataSource.data.map(x => x.ciudad)
          )
        ].sort();
}
