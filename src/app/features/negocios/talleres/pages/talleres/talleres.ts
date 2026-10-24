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
import { NegocioTallerDetalleDialog } from '../../../../../shared/dialogs/negocio-taller-detalle-dialog/negocio-taller-detalle-dialog';
import { ProspectoDetalleDialog } from '../../../../../shared/dialogs/prospecto-detalle-dialog/prospecto-detalle-dialog';

@Component({
  selector: 'app-talleres',
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
  templateUrl: './talleres.html',
  styleUrl: './talleres.scss',
})
export class NegociosTalleresComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  get totalNegocios(): number {
    return this.dataSource.filteredData.length;
  }

  get estadoVerificado(): number {
    return this.dataSource.filteredData.filter(x => x.verificado === 'Verificado').length;
  }
  
  get estadoSinverificar(): number {
    return this.dataSource.filteredData.filter(x => x.verificado === 'Sin verificar').length;
  }
  
  get tipoA(): number {
    return this.dataSource.filteredData.filter(x => x.tipo === 'A').length;
  }
  
  get tipoB(): number {
    return this.dataSource.filteredData.filter(x => x.tipo === 'B').length;
  }
  
  get tipoC(): number {
    return this.dataSource.filteredData.filter(x => x.tipo === 'C').length;
  }

  constructor(private dialog: MatDialog) {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
  
      const filtros = JSON.parse(filter);
  
      const coincideBusqueda =
        !filtros.busqueda ||
        data.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase());
  
        const coincideVerificado =
        !filtros.verificado ||
        data.verificado === filtros.verificado;
  
      const coincideTipo =
        !filtros.tipo ||
        data.tipo === filtros.tipo;
  
      const coincideCiudad =
        !filtros.ciudad ||
        data.ciudad === filtros.ciudad;
  
      return (
        coincideBusqueda &&
        coincideVerificado &&
        coincideTipo &&
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
      verificado: '',
      tipo: '',
      ciudad: ''
    };
  
    this.aplicarFiltros();
  }
  displayedColumns: string[] = [
    'nombre',
    'contacto',
    'telefono',
    'ciudad',
    'tipo',
    'verificado',
    'especialidad',
    'acciones'
  ];
  filtros = {
    busqueda: '',
    verificado: '',
    tipo: '',
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
      nombre: 'Taller ABC',
      contacto: 'Juan Pérez',
      telefono: '70123456',
      ciudad: 'Santa Cruz de la Sierra',
      tipo: 'A',
      estado: 'Nuevo',
      direccion: 'Av. Banzer Km 8',
      ubLatitud: '-17.7445',
      ubLongitud: '-63.1561',
      prioridad: 1,
      idTipoNegocio: 1,
      idVendedor: 101,
      especialidad: 'Mecánica General',
      verificado: 'Sin verificar'
      },
      {
      nombre: 'Moto Service',
      contacto: 'Carlos Flores',
      telefono: '71234567',
      ciudad: 'Santa Cruz de la Sierra',
      tipo: 'B',
      estado: 'Contactado',
      direccion: 'Av. Santos Dumont',
      ubLatitud: '-17.8123',
      ubLongitud: '-63.1812',
      prioridad: 2,
      idTipoNegocio: 1,
      idVendedor: 102,
      especialidad: 'Motocicletas',
      verificado: 'Verificado'
      },
      {
      nombre: 'Garage Premium',
      contacto: 'Luis Vargas',
      telefono: '72345678',
      ciudad: 'Warnes',
      tipo: 'A',
      estado: 'Negociación',
      direccion: 'Zona Industrial Warnes',
      ubLatitud: '-17.5123',
      ubLongitud: '-63.1734',
      prioridad: 1,
      idTipoNegocio: 1,
      idVendedor: 101,
      especialidad: 'Suspensión y Frenos',
      verificado: 'Sin verificar'
      },
      {
      nombre: 'Taller Express',
      contacto: 'Pedro Rojas',
      telefono: '73456789',
      ciudad: 'Montero',
      tipo: 'C',
      estado: 'Ganado',
      direccion: 'Av. Circunvalación',
      ubLatitud: '-17.3382',
      ubLongitud: '-63.2501',
      prioridad: 3,
      idTipoNegocio: 1,
      idVendedor: 103,
      especialidad: 'Electricidad Automotriz',
      verificado: 'Verificado'
      },
      {
        nombre: 'Taller Perez',
        contacto: 'Miguel Pérez',
        telefono: '74567890',
        ciudad: 'Montero',
        tipo: 'B',
        estado: 'Negociación',
        direccion: 'Barrio Centro',
        ubLatitud: '-17.3421',
        ubLongitud: '-63.2554',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 102,
        especialidad: 'Mecánica General',
        verificado: 'Sin verificar'
        },
        {
        nombre: 'Taller Los Junos',
        contacto: 'José Suárez',
        telefono: '75678901',
        ciudad: 'Santa Cruz de la Sierra',
        tipo: 'B',
        estado: 'Negociación',
        direccion: 'Av. Virgen de Cotoca',
        ubLatitud: '-17.7754',
        ubLongitud: '-63.1321',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 101,
        especialidad: 'Suspensión',
        verificado: 'Verificado'
        },
        {
        nombre: 'Pro Mecanics',
        contacto: 'Andrés Molina',
        telefono: '76789012',
        ciudad: 'Warnes',
        tipo: 'A',
        estado: 'Nuevo',
        direccion: 'Zona Norte Warnes',
        ubLatitud: '-17.5087',
        ubLongitud: '-63.1698',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 103,
        especialidad: 'Diagnóstico Computarizado',
        verificado: 'Verificado'
        },
        {
        nombre: 'Taller San Pedro',
        contacto: 'Mario Quiroga',
        telefono: '77890123',
        ciudad: 'Santa Cruz de la Sierra',
        tipo: 'C',
        estado: 'Nuevo',
        direccion: 'Barrio San Pedro',
        ubLatitud: '-17.7842',
        ubLongitud: '-63.1745',
        prioridad: 3,
        idTipoNegocio: 1,
        idVendedor: 102,
        especialidad: 'Mecánica General',
        verificado: 'Sin verificar'
        },
        {
        nombre: 'Masters',
        contacto: 'Raúl Fernández',
        telefono: '78901234',
        ciudad: 'Camiri',
        tipo: 'B',
        estado: 'Negociación',
        direccion: 'Zona Central',
        ubLatitud: '-20.0381',
        ubLongitud: '-63.5187',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 101,
        especialidad: 'Motores',
        verificado: 'Verificado'
        },
        {
        nombre: 'Don Julio',
        contacto: 'Julio Mendoza',
        telefono: '79012345',
        ciudad: 'Warnes',
        tipo: 'B',
        estado: 'Nuevo',
        direccion: 'Carretera al Norte',
        ubLatitud: '-17.5201',
        ubLongitud: '-63.1810',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 103,
        especialidad: 'Mecánica General',
        verificado: 'Sin verificar'
        },
        {
        nombre: 'Taller Rojas',
        contacto: 'Fernando Rojas',
        telefono: '70111222',
        ciudad: 'Santa Cruz de la Sierra',
        tipo: 'B',
        estado: 'Negociación',
        direccion: 'Av. Alemana',
        ubLatitud: '-17.7610',
        ubLongitud: '-63.1701',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 102,
        especialidad: 'Electricidad Automotriz',
        verificado: 'Sin verificar'
        },
        {
        nombre: 'Saucedo Motors',
        contacto: 'Ricardo Saucedo',
        telefono: '70222333',
        ciudad: 'Santa Cruz de la Sierra',
        tipo: 'A',
        estado: 'Negociación',
        direccion: 'Av. Cristo Redentor',
        ubLatitud: '-17.7350',
        ubLongitud: '-63.1654',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 101,
        especialidad: 'Mecánica Integral',
        verificado: 'Verificado'
        },
        {
        nombre: 'AutoWorks',
        contacto: 'Diego Salvatierra',
        telefono: '70333444',
        ciudad: 'Santa Cruz de la Sierra',
        tipo: 'A',
        estado: 'Negociación',
        direccion: 'Av. Beni',
        ubLatitud: '-17.7488',
        ubLongitud: '-63.1569',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 103,
        especialidad: 'Diagnóstico y Electrónica',
        verificado: 'Sin verificar'
        },
        {
          nombre: 'Turbo Center',
          contacto: 'Héctor Salinas',
          telefono: '70444555',
          ciudad: 'Santa Cruz de la Sierra',
          tipo: 'A',
          estado: 'Contactado',
          direccion: 'Av. Mutualista',
          ubLatitud: '-17.7812',
          ubLongitud: '-63.1458',
          prioridad: 1,
          idTipoNegocio: 1,
          idVendedor: 101,
          especialidad: 'Motores Turbo',
          verificado: 'Verificado'
          },
          {
          nombre: 'Elite Garage',
          contacto: 'Patricia Méndez',
          telefono: '70555666',
          ciudad: 'Cochabamba',
          tipo: 'A',
          estado: 'Negociación',
          direccion: 'Av. América',
          ubLatitud: '-17.3895',
          ubLongitud: '-66.1568',
          prioridad: 1,
          idTipoNegocio: 1,
          idVendedor: 102,
          especialidad: 'Mecánica Premium',
          verificado: 'Verificado'
          },
          {
          nombre: 'Taller El Mecánico',
          contacto: 'Roberto Velasco',
          telefono: '70666777',
          ciudad: 'Montero',
          tipo: 'C',
          estado: 'Nuevo',
          direccion: 'Barrio Villa Busch',
          ubLatitud: '-17.3465',
          ubLongitud: '-63.2492',
          prioridad: 3,
          idTipoNegocio: 1,
          idVendedor: 103,
          especialidad: 'Mecánica General',
          verificado: 'Sin verificar'
          },
          {
          nombre: 'Diesel Pro',
          contacto: 'Óscar Gutiérrez',
          telefono: '70777888',
          ciudad: 'Camiri',
          tipo: 'B',
          estado: 'Contactado',
          direccion: 'Av. Petrolera',
          ubLatitud: '-20.0405',
          ubLongitud: '-63.5202',
          prioridad: 2,
          idTipoNegocio: 1,
          idVendedor: 101,
          especialidad: 'Motores Diésel',
          verificado: 'Sin verificar'
          },
          {
          nombre: 'Auto Clínica',
          contacto: 'María Fernanda Ruiz',
          telefono: '70888999',
          ciudad: 'Warnes',
          tipo: 'B',
          estado: 'Ganado',
          direccion: 'Zona Industrial',
          ubLatitud: '-17.5174',
          ubLongitud: '-63.1763',
          prioridad: 2,
          idTipoNegocio: 1,
          idVendedor: 102,
          especialidad: 'Mantenimiento Preventivo',
          verificado: 'Verificado'
          },
          {
            nombre: 'MecanicPros',
            contacto: 'Carlos Mario Rojas',
            telefono: '70888123',
            ciudad: 'Santa Cruz de la Sierra',
            tipo: 'B',
            estado: 'Ganado',
            direccion: 'Zona Centro',
            ubLatitud: '-17.5174',
            ubLongitud: '-63.1763',
            prioridad: 2,
            idTipoNegocio: 1,
            idVendedor: 102,
            especialidad: 'Mantenimiento Correectivo',
            verificado: 'Sin verificar'
            }
  ]);
  ciudades = [
    ...new Set(
      this.dataSource.data.map(x => x.ciudad)
    )
  ].sort();
}