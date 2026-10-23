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
import { ProspectoDetalleDialog } from '../../../../../shared/dialogs/prospecto-detalle-dialog/prospecto-detalle-dialog';

@Component({
  selector: 'app-surtidores',
  standalone: true,
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
  templateUrl: './surtidores.html',
  styleUrl: './surtidores.scss',
})
export class ProspectosSurtidoresComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  get totalNegocios(): number {
    return this.dataSource.filteredData.length;
  }
  
  get tipoGasolina(): number {
    return this.dataSource.filteredData.filter(x => x.combustibles.includes('Gasolina')).length;
  }
  
  get tipoGas(): number {
    return this.dataSource.filteredData.filter(x => x.combustibles.includes('Gas')).length;
  }
  
  get tipoDiesel(): number {
    return this.dataSource.filteredData.filter(x => x.combustibles.includes('Diesel')).length;
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
  
        const coincideCombustibles =
        !filtros.combustible ||
        filtros.combustible === '' ||
        data.combustibles.includes(filtros.combustible);
  
      const coincideCiudad =
        !filtros.ciudad ||
        data.ciudad === filtros.ciudad;
  
      return (
        coincideBusqueda &&
        coincideEstado &&
        coincideCombustibles &&
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
      combustible: '',
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
    combustible: '',
    ciudad: ''
  };
  verDetalle(prospecto: any): void {
    this.dialog.open(ProspectoDetalleDialog, {
      width: '900px',
      maxWidth: '95vw',
      data: prospecto
    });
  }
  dataSource = new MatTableDataSource([
    {
      nombre: 'Surtidor ABC',
      contacto: 'Juan Pérez',
      telefono: '70123456',
      ciudad: 'Santa Cruz de la Sierra',
      estado: 'Nuevo',
      direccion: 'Av. Banzer Km 8',
      ubLatitud: '-17.7445',
      ubLongitud: '-63.1561',
      prioridad: 1,
      idTipoNegocio: 1,
      combustibles: ['Gasolina', 'Gas'],
      idVendedor: 101,
      fechaActual: '15/06/2026',
      proximoContacto: '20/06/2026',
      metodoContacto: 'WhatsApp',
      respuestaContacto: 'Solicitó información',
      proximaAccion: 'Enviar propuesta comercial',
      caracteristicasEtiqueta: 'Gasolina, Diésel, GNV',
      caracteristicasAdicional: 'Atención para vehículos livianos y pesados'
    },
    {
      nombre: 'Surtidor 3F',
      contacto: 'Carlos Flores',
      telefono: '71234567',
      ciudad: 'Santa Cruz de la Sierra',
      estado: 'Contactado',
      direccion: 'Av. Santos Dumont',
      ubLatitud: '-17.8123',
      ubLongitud: '-63.1812',
      prioridad: 2,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Gas', 'Diesel'],
      idVendedor: 102,
      fechaActual: '14/06/2026',
      proximoContacto: '18/06/2026',
      metodoContacto: 'Llamada',
      respuestaContacto: 'Interesado',
      proximaAccion: 'Agendar visita',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Servicio de abastecimiento para automóviles y camionetas'
    },
    {
      nombre: 'Estación El Cristo',
      contacto: 'María Fernanda Rojas',
      telefono: '71345678',
      ciudad: 'Santa Cruz de la Sierra',
      estado: 'Negociación',
      direccion: 'Av. Cristo Redentor, zona norte',
      ubLatitud: '-17.7480',
      ubLongitud: '-63.1800',
      prioridad: 1,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Gas'],
      idVendedor: 103,
      fechaActual: '12/06/2026',
      proximoContacto: '19/06/2026',
      metodoContacto: 'Visita',
      respuestaContacto: 'Evaluando propuesta',
      proximaAccion: 'Presentar propuesta comercial',
      caracteristicasEtiqueta: 'Gasolina, Diésel, GNV',
      caracteristicasAdicional: 'Ubicación estratégica para transporte urbano'
    },
    {
      nombre: 'Surtidor La Ramada',
      contacto: 'Roberto Méndez',
      telefono: '71456789',
      ciudad: 'Santa Cruz de la Sierra',
      estado: 'Nuevo',
      direccion: 'Zona La Ramada',
      ubLatitud: '-17.8060',
      ubLongitud: '-63.1900',
      prioridad: 2,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Diesel'],
      idVendedor: 104,
      fechaActual: '16/06/2026',
      proximoContacto: '21/06/2026',
      metodoContacto: 'WhatsApp',
      respuestaContacto: 'Pendiente de respuesta',
      proximaAccion: 'Realizar seguimiento',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Atención a vehículos particulares y comerciales'
    },
    {
      nombre: 'Estación Mutualista',
      contacto: 'Andrea Suárez',
      telefono: '71567890',
      ciudad: 'Santa Cruz de la Sierra',
      estado: 'Contactado',
      direccion: 'Av. Mutualista',
      ubLatitud: '-17.7700',
      ubLongitud: '-63.1660',
      prioridad: 3,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Gas', 'Diesel'],
      idVendedor: 105,
      fechaActual: '13/06/2026',
      proximoContacto: '22/06/2026',
      metodoContacto: 'Llamada',
      respuestaContacto: 'Solicitó información general',
      proximaAccion: 'Enviar información de MotorHub',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Estación de abastecimiento para vehículos livianos'
    },
    {
      nombre: 'Surtidor Pampa de la Isla',
      contacto: 'Miguel Ángel Suárez',
      telefono: '71678901',
      ciudad: 'Santa Cruz de la Sierra',
      estado: 'Negociación',
      direccion: 'Av. Virgen de Cotoca, Pampa de la Isla',
      ubLatitud: '-17.7650',
      ubLongitud: '-63.1300',
      prioridad: 1,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Gas', 'Diesel'],
      idVendedor: 101,
      fechaActual: '11/06/2026',
      proximoContacto: '18/06/2026',
      metodoContacto: 'Visita',
      respuestaContacto: 'Interesado en conocer la plataforma',
      proximaAccion: 'Coordinar segunda reunión',
      caracteristicasEtiqueta: 'Gasolina, Diésel, GNV',
      caracteristicasAdicional: 'Orientado a vehículos particulares y transporte'
    },
    {
      nombre: 'Estación Doble Vía La Guardia',
      contacto: 'Patricia Suárez',
      telefono: '71789012',
      ciudad: 'Santa Cruz de la Sierra',
      estado: 'Nuevo',
      direccion: 'Carretera a La Guardia, zona sur',
      ubLatitud: '-17.8300',
      ubLongitud: '-63.2050',
      prioridad: 2,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Diesel'],
      idVendedor: 102,
      fechaActual: '17/06/2026',
      proximoContacto: '23/06/2026',
      metodoContacto: 'WhatsApp',
      respuestaContacto: 'Sin respuesta',
      proximaAccion: 'Intentar nuevo contacto',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Punto de abastecimiento en corredor vial'
    },
    {
      nombre: 'Surtidor Warnes Norte',
      contacto: 'Fernando Vaca',
      telefono: '71890123',
      ciudad: 'Warnes',
      estado: 'Contactado',
      direccion: 'Carretera Santa Cruz–Warnes',
      ubLatitud: '-17.5100',
      ubLongitud: '-63.1670',
      prioridad: 1,
      idTipoNegocio: 1,combustibles: ['Gas'],
      idVendedor: 103,
      fechaActual: '15/06/2026',
      proximoContacto: '20/06/2026',
      metodoContacto: 'Llamada',
      respuestaContacto: 'Interesado en una demostración',
      proximaAccion: 'Coordinar demostración',
      caracteristicasEtiqueta: 'Gasolina, Diésel, GNV',
      caracteristicasAdicional: 'Atención a vehículos particulares y transporte pesado'
    },
    {
      nombre: 'Estación Satélite Norte',
      contacto: 'Daniela Gutiérrez',
      telefono: '71901234',
      ciudad: 'Warnes',
      estado: 'Negociación',
      direccion: 'Zona Satélite Norte',
      ubLatitud: '-17.5250',
      ubLongitud: '-63.1550',
      prioridad: 2,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Gas', 'Diesel'],
      idVendedor: 104,
      fechaActual: '12/06/2026',
      proximoContacto: '19/06/2026',
      metodoContacto: 'WhatsApp',
      respuestaContacto: 'Solicitó condiciones comerciales',
      proximaAccion: 'Enviar propuesta comercial',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Servicio para la zona urbana y alrededores'
    },
    {
      nombre: 'Surtidor Montero Central',
      contacto: 'Óscar Rojas',
      telefono: '72012345',
      ciudad: 'Montero',
      estado: 'Nuevo',
      direccion: 'Av. Circunvalación',
      ubLatitud: '-17.3390',
      ubLongitud: '-63.2550',
      prioridad: 1,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Gas'],
      idVendedor: 105,
      fechaActual: '18/06/2026',
      proximoContacto: '24/06/2026',
      metodoContacto: 'WhatsApp',
      respuestaContacto: 'Pendiente de respuesta',
      proximaAccion: 'Contactar al administrador',
      caracteristicasEtiqueta: 'Gasolina, Diésel, GNV',
      caracteristicasAdicional: 'Atención a automóviles, motocicletas y transporte'
    },
    {
      nombre: 'Estación Guabirá',
      contacto: 'Claudia Justiniano',
      telefono: '72123456',
      ciudad: 'Montero',
      estado: 'Contactado',
      direccion: 'Carretera al norte',
      ubLatitud: '-17.3500',
      ubLongitud: '-63.2400',
      prioridad: 2,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Gas'],
      idVendedor: 101,
      fechaActual: '14/06/2026',
      proximoContacto: '21/06/2026',
      metodoContacto: 'Llamada',
      respuestaContacto: 'Aceptó recibir información',
      proximaAccion: 'Enviar presentación',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Servicio de abastecimiento para transporte regional'
    },
    {
      nombre: 'Surtidor Cotoca',
      contacto: 'Jorge Aguilera',
      telefono: '72234567',
      ciudad: 'Cotoca',
      estado: 'Nuevo',
      direccion: 'Carretera Santa Cruz–Cotoca',
      ubLatitud: '-17.7550',
      ubLongitud: '-62.9950',
      prioridad: 3,
      idTipoNegocio: 1,combustibles: ['Gas'],
      idVendedor: 102,
      fechaActual: '16/06/2026',
      proximoContacto: '23/06/2026',
      metodoContacto: 'WhatsApp',
      respuestaContacto: 'Sin respuesta',
      proximaAccion: 'Realizar seguimiento',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Punto de abastecimiento en carretera'
    },
    {
      nombre: 'Estación El Torno',
      contacto: 'Verónica Áñez',
      telefono: '72345678',
      ciudad: 'El Torno',
      estado: 'Contactado',
      direccion: 'Carretera antigua a Cochabamba',
      ubLatitud: '-18.0000',
      ubLongitud: '-63.4300',
      prioridad: 2,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Diesel'],
      idVendedor: 103,
      fechaActual: '13/06/2026',
      proximoContacto: '20/06/2026',
      metodoContacto: 'Visita',
      respuestaContacto: 'Interesada en conocer los beneficios',
      proximaAccion: 'Programar reunión',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Atención a usuarios de la carretera y comunidades cercanas'
    },
    {
      nombre: 'Surtidor La Guardia Centro',
      contacto: 'Raúl Chávez',
      telefono: '72456789',
      ciudad: 'La Guardia',
      estado: 'Negociación',
      direccion: 'Av. principal de La Guardia',
      ubLatitud: '-17.8900',
      ubLongitud: '-63.3400',
      prioridad: 1,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Gas', 'Diesel'],
      idVendedor: 104,
      fechaActual: '12/06/2026',
      proximoContacto: '19/06/2026',
      metodoContacto: 'Llamada',
      respuestaContacto: 'Revisando la propuesta',
      proximaAccion: 'Consultar decisión comercial',
      caracteristicasEtiqueta: 'Gasolina, Diésel, GNV',
      caracteristicasAdicional: 'Abastecimiento para transporte particular y comercial'
    },
    {
      nombre: 'Estación San Ignacio',
      contacto: 'Silvia Méndez',
      telefono: '72567890',
      ciudad: 'San Ignacio de Velasco',
      estado: 'Nuevo',
      direccion: 'Acceso principal a San Ignacio',
      ubLatitud: '-16.3700',
      ubLongitud: '-60.9600',
      prioridad: 3,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Gas'],
      idVendedor: 105,
      fechaActual: '17/06/2026',
      proximoContacto: '25/06/2026',
      metodoContacto: 'WhatsApp',
      respuestaContacto: 'Pendiente de respuesta',
      proximaAccion: 'Volver a contactar',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Servicio para vehículos particulares y transporte local'
    },
    {
      nombre: 'Surtidor Puerto Suárez',
      contacto: 'Eduardo Salvatierra',
      telefono: '72678901',
      ciudad: 'Puerto Suárez',
      estado: 'Contactado',
      direccion: 'Acceso a Puerto Suárez',
      ubLatitud: '-18.9500',
      ubLongitud: '-57.8000',
      prioridad: 2,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Diesel'],
      idVendedor: 101,
      fechaActual: '15/06/2026',
      proximoContacto: '22/06/2026',
      metodoContacto: 'Llamada',
      respuestaContacto: 'Solicitó detalles del servicio',
      proximaAccion: 'Enviar información',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Atención a vehículos particulares y transporte fronterizo'
    },
    {
      nombre: 'Estación San José de Chiquitos',
      contacto: 'Natalia Flores',
      telefono: '72789012',
      ciudad: 'San José de Chiquitos',
      estado: 'Nuevo',
      direccion: 'Carretera Bioceánica',
      ubLatitud: '-17.8500',
      ubLongitud: '-60.7400',
      prioridad: 1,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Diesel'],
      idVendedor: 102,
      fechaActual: '18/06/2026',
      proximoContacto: '26/06/2026',
      metodoContacto: 'WhatsApp',
      respuestaContacto: 'Pendiente de contacto',
      proximaAccion: 'Presentar MotorHub',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Abastecimiento para transporte interprovincial'
    },
    {
      nombre: 'Surtidor Yapacaní',
      contacto: 'Héctor Rivero',
      telefono: '72890123',
      ciudad: 'Yapacaní',
      estado: 'Perdido',
      direccion: 'Carretera Santa Cruz–Cochabamba',
      ubLatitud: '-17.4000',
      ubLongitud: '-63.8800',
      prioridad: 3,
      idTipoNegocio: 1,combustibles: ['Gasolina', 'Gas', 'Diesel'],
      idVendedor: 103,
      fechaActual: '10/06/2026',
      proximoContacto: '25/06/2026',
      metodoContacto: 'Llamada',
      respuestaContacto: 'No está interesado por el momento',
      proximaAccion: 'Reevaluar contacto en el futuro',
      caracteristicasEtiqueta: 'Gasolina, Diésel',
      caracteristicasAdicional: 'Prospecto de demostración para seguimiento comercial'
    }
  ]);
  ciudades = [
    ...new Set(
      this.dataSource.data.map(x => x.ciudad)
    )
  ].sort();
}