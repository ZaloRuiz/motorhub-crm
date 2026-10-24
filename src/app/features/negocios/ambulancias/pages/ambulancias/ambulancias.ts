import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatTooltipModule],
  templateUrl: './ambulancias.html',
  styleUrl: './ambulancias.scss',
})
export class NegociosAmbulanciasComponent  implements AfterViewInit{@ViewChild(MatSort) sort!: MatSort;
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
  
      const coincideVerificado =
      !filtros.verificado ||
      data.verificado === filtros.verificado;
  
      const coincideServicio =
        !filtros.servicio || filtros.servicio === '' ||
        data.otroServicio.includes(filtros.servicio);

      const coincideCiudad =
        !filtros.ciudad ||
        data.ciudad === filtros.ciudad;
  
      return (
        coincideBusqueda &&
        coincideVerificado &&
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
      verificado: '',
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
    'verificado',
    'acciones'
  ];
  filtros = {
    busqueda: '',
    verificado: '',
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
      estado: 'Activo',
      direccion: 'Av. Banzer Km 8',
      ubLatitud: '-17.7445',
      ubLongitud: '-63.1561',
      prioridad: 1,
      idTipoNegocio: 1,
      idVendedor: 101,
      verificado: 'Verificado'
      },
      {
      nombre: 'UTEM Ambulancias',
      contacto: 'Carlos Flores',
      telefono: '71234567',
      ciudad: 'Santa Cruz de la Sierra',
      otroServicio: ['asistencial', 'eventos'],
      estado: 'Activo',
      direccion: 'Av. Santos Dumont',
      ubLatitud: '-17.8123',
      ubLongitud: '-63.1812',
      prioridad: 2,
      idTipoNegocio: 1,
      idVendedor: 102,
          verificado: 'Sin verificar'
      },
      {
      nombre: 'AME Ambulancias',
      contacto: 'Luis Vargas',
      telefono: '72345678',
      ciudad: 'Warnes',
      otroServicio: ['eventos'],
      estado: 'Activo',
      direccion: 'Zona Industrial Warnes',
      ubLatitud: '-17.5123',
      ubLongitud: '-63.1734',
      prioridad: 1,
      idTipoNegocio: 1,
      idVendedor: 101,
      verificado: 'Verificado'
      },
      {
      nombre: 'Ambulancias Santa Cruz',
      contacto: 'Pedro Rojas',
      telefono: '73456789',
      ciudad: 'Montero',
      otroServicio: ['asistencial'],
      estado: 'Activo',
      direccion: 'Av. Circunvalación',
      ubLatitud: '-17.3382',
      ubLongitud: '-63.2501',
      prioridad: 3,
      idTipoNegocio: 1,
      idVendedor: 103,
      verificado: 'Verificado'
      },
      {
        nombre: 'SISME',
        contacto: 'Miguel Pérez',
        telefono: '74567890',
        ciudad: 'Montero',
        otroServicio: ['interhospitalario', 'asistencial', 'eventos'],
        estado: 'Activo',
        direccion: 'Barrio Centro',
        ubLatitud: '-17.3421',
        ubLongitud: '-63.2554',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 102,
          verificado: 'Sin verificar'
        },
        {
        nombre: 'Ambulancias Cardiomedcruz SRL',
        contacto: 'José Suárez',
        telefono: '75678901',
        ciudad: 'Santa Cruz de la Sierra',
        otroServicio: ['interhospitalario', 'eventos'],
        estado: 'Activo',        
        direccion: 'Av. Virgen de Cotoca',
        ubLatitud: '-17.7754',
        ubLongitud: '-63.1321',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 101,
          verificado: 'Sin verificar'
        },
        {
        nombre: 'CIEM Central',
        contacto: 'Andrés Molina',
        telefono: '76789012',
        ciudad: 'Warnes',
        otroServicio: ['interhospitalario', 'asistencial'],
        estado: 'Inactivo',
        direccion: 'Zona Norte Warnes',
        ubLatitud: '-17.5087',
        ubLongitud: '-63.1698',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 103,
      verificado: 'Verificado'
        },
        {
        nombre: 'Lemcruz SRL',
        contacto: 'Mario Quiroga',
        telefono: '77890123',
        ciudad: 'Santa Cruz de la Sierra',
        otroServicio: ['asistencial'],
        estado: 'Activo',        
        direccion: 'Barrio San Pedro',
        ubLatitud: '-17.7842',
        ubLongitud: '-63.1745',
        prioridad: 3,
        idTipoNegocio: 1,
        idVendedor: 102,
          verificado: 'Sin verificar'
        },
        {
        nombre: 'UMA',
        contacto: 'Raúl Fernández',
        telefono: '78901234',
        ciudad: 'Camiri',
        otroServicio: ['interhospitalario', 'asistencial', 'eventos'],
        estado: 'Activo',        
        direccion: 'Zona Central',
        ubLatitud: '-20.0381',
        ubLongitud: '-63.5187',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 101,
          verificado: 'Sin verificar'
        },
        {
        nombre: 'CIEM Parque Sur',
        contacto: 'Julio Mendoza',
        telefono: '79012345',
        ciudad: 'Warnes',
        otroServicio: ['asistencial', 'eventos'],
        estado: 'Activo',        
        direccion: 'Carretera al Norte',
        ubLatitud: '-17.5201',
        ubLongitud: '-63.1810',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 103,
      verificado: 'Verificado'
        },
        {
        nombre: 'Sepacruz Emergencias Medicas',
        contacto: 'Fernando Rojas',
        telefono: '70111222',
        ciudad: 'Santa Cruz de la Sierra',
        otroServicio: ['interhospitalario', 'asistencial'],
        estado: 'Inactivo',        
        direccion: 'Av. Alemana',
        ubLatitud: '-17.7610',
        ubLongitud: '-63.1701',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 102,
          verificado: 'Sin verificar'
        },
        {
        nombre: 'ATP SCZ',
        contacto: 'Ricardo Saucedo',
        telefono: '70222333',
        ciudad: 'Santa Cruz de la Sierra',
        otroServicio: ['asistencial'],
        estado: 'Activo',        
        direccion: 'Av. Cristo Redentor',
        ubLatitud: '-17.7350',
        ubLongitud: '-63.1654',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 101,
          verificado: 'Sin verificar'
        },
        {
        nombre: 'EMEDSA',
        contacto: 'Diego Salvatierra',
        telefono: '70333444',
        ciudad: 'Santa Cruz de la Sierra',
        otroServicio: ['interhospitalario', 'asistencial'],
        estado: 'Activo',        
        direccion: 'Av. Beni',
        ubLatitud: '-17.7488',
        ubLongitud: '-63.1569',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 103,
      verificado: 'Verificado'
        },
        {
          nombre: 'Ambulancia SAMED',
          contacto: 'Héctor Salinas',
          telefono: '70444555',
          ciudad: 'Santa Cruz de la Sierra',
          otroServicio: ['interhospitalario', 'asistencial', 'eventos'],
          estado: 'Inactivo',          
          direccion: 'Av. Mutualista',
          ubLatitud: '-17.7812',
          ubLongitud: '-63.1458',
          prioridad: 1,
          idTipoNegocio: 1,
          idVendedor: 101,
      verificado: 'Verificado'
          },
          {
          nombre: 'MIA Atencion Medica',
          contacto: 'Patricia Méndez',
          telefono: '70555666',
          ciudad: 'Cochabamba',
          otroServicio: ['asistencial'],
          estado: 'Activo',          
          direccion: 'Av. América',
          ubLatitud: '-17.3895',
          ubLongitud: '-66.1568',
          prioridad: 1,
          idTipoNegocio: 1,
          idVendedor: 102,
          verificado: 'Sin verificar'
          },
          {
          nombre: 'UDEM',
          contacto: 'Roberto Velasco',
          telefono: '70666777',
          ciudad: 'Montero',
          otroServicio: ['interhospitalario', 'asistencial', 'eventos'],
          estado: 'Activo',          
          direccion: 'Barrio Villa Busch',
          ubLatitud: '-17.3465',
          ubLongitud: '-63.2492',
          prioridad: 3,
          idTipoNegocio: 1,
          idVendedor: 103,
      verificado: 'Verificado'
          },
          {
          nombre: 'Ambulancias SEMP',
          contacto: 'Óscar Gutiérrez',
          telefono: '70777888',
          ciudad: 'Camiri',
          otroServicio: ['asistencial', 'eventos'],
          estado: 'Activo',          
          direccion: 'Av. Petrolera',
          ubLatitud: '-20.0405',
          ubLongitud: '-63.5202',
          prioridad: 2,
          idTipoNegocio: 1,
          idVendedor: 101,
          verificado: 'Sin verificar'
          },
          {
          nombre: 'CIEM Parqueo 4',
          contacto: 'María Fernanda Ruiz',
          telefono: '70888999',
          ciudad: 'Warnes',
          otroServicio: ['interhospitalario', 'asistencial'],
          estado: 'Activo',          
          direccion: 'Zona Industrial',
          ubLatitud: '-17.5174',
          ubLongitud: '-63.1763',
          prioridad: 2,
          idTipoNegocio: 1,
          idVendedor: 102,
      verificado: 'Verificado'
          }
        ]);
        ciudades = [
          ...new Set(
            this.dataSource.data.map(x => x.ciudad)
          )
        ].sort();
}
