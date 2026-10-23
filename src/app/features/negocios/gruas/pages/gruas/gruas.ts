import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProspectoDetalleOtrosDialog } from '../../../../../shared/dialogs/prospecto-detalle-otros-dialog/prospecto-detalle-otros-dialog';

@Component({
  selector: 'app-gruas',
  imports: [NgClass,
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
  templateUrl: './gruas.html',
  styleUrl: './gruas.scss',
})
export class NegociosGruasComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  get totalNegocios(): number {
    return this.dataSource.filteredData.length;
  }
  
  get tipoIntegral(): number {
    return this.dataSource.filteredData.filter(x => x.tipoGrua === 'Integral').length;
  }
  
  get tipoPlataforma(): number {
    return this.dataSource.filteredData.filter(x => x.tipoGrua === 'Plataforma').length;
  }
  
  get tipoArrastreGancho(): number {
    return this.dataSource.filteredData.filter(x => x.tipoGrua === 'Arrastre con gancho').length;
  }

  get tipoArrastreElevador(): number {
    return this.dataSource.filteredData.filter(x => x.tipoGrua === 'Arrastre con elevador').length;
  }

  constructor(private dialog: MatDialog) {
    this.dataSource.filterPredicate = (data, filter) => {
      const filtros = JSON.parse(filter);
  
      const coincideBusqueda =
        !filtros.busqueda ||
        (data.nombre ?? '')
          .toLowerCase()
          .includes(filtros.busqueda.toLowerCase().trim());
  
      const coincideEstado =
        !filtros.estado || data.estado === filtros.estado;
  
      const coincideTipo =
        !filtros.tipo || data.tipoGrua === filtros.tipo;
  
      const coincideCiudad =
        !filtros.ciudad || data.ciudad === filtros.ciudad;
  
      return (
        coincideBusqueda &&
        coincideEstado &&
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
      estado: '',
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
    'tipoGrua',
    'estado',
    'acciones'
  ];
  filtros = {
    busqueda: '',
    estado: '',
    tipo: '',
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
      nombre: 'Gruas Rodas',
      contacto: 'Juan Pérez',
      telefono: '70123456',
      ciudad: 'Santa Cruz de la Sierra',
      estado: 'Activo',
      direccion: 'Av. Banzer Km 8',
      ubLatitud: '-17.7445',
      ubLongitud: '-63.1561',
      prioridad: 1,
      idTipoNegocio: 1,
      idVendedor: 101,
      tipoGrua: 'Arrastre con gancho',
      },
      {
      nombre: 'Grua Service',
      contacto: 'Carlos Flores',
      telefono: '71234567',
      ciudad: 'Santa Cruz de la Sierra',
      estado: 'Activo',
      direccion: 'Av. Santos Dumont',
      ubLatitud: '-17.8123',
      ubLongitud: '-63.1812',
      prioridad: 2,
      idTipoNegocio: 1,
      idVendedor: 102,
      tipoGrua: 'Arrastre con elevador',
      },
      {
      nombre: 'Servicio de asistencia vehicular Garage Premium',
      contacto: 'Luis Vargas',
      telefono: '72345678',
      ciudad: 'Warnes',
      estado: 'Inactivo',
      direccion: 'Zona Industrial Warnes',
      ubLatitud: '-17.5123',
      ubLongitud: '-63.1734',
      prioridad: 1,
      idTipoNegocio: 1,
      idVendedor: 101,
      tipoGrua: 'Integral',
      },
      {
      nombre: 'Express Gruas',
      contacto: 'Pedro Rojas',
      telefono: '73456789',
      ciudad: 'Montero',
      estado: 'Activo',
      direccion: 'Av. Circunvalación',
      ubLatitud: '-17.3382',
      ubLongitud: '-63.2501',
      prioridad: 3,
      idTipoNegocio: 1,
      idVendedor: 103,
      tipoGrua: 'Plataforma',
      },
      {
        nombre: 'Servicio de grua Perez',
        contacto: 'Miguel Pérez',
        telefono: '74567890',
        ciudad: 'Montero',
        estado: 'Activo',
        direccion: 'Barrio Centro',
        ubLatitud: '-17.3421',
        ubLongitud: '-63.2554',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 102,
        tipoGrua: 'Arrastre con gancho',
        },
        {
        nombre: 'Gruas Los Junos',
        contacto: 'José Suárez',
        telefono: '75678901',
        ciudad: 'Santa Cruz de la Sierra',
        estado: 'Inactivo',
        direccion: 'Av. Virgen de Cotoca',
        ubLatitud: '-17.7754',
        ubLongitud: '-63.1321',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 101,
        tipoGrua: 'Plataforma',
        },
        {
        nombre: 'Pro Gruas',
        contacto: 'Andrés Molina',
        telefono: '76789012',
        ciudad: 'Warnes',
        estado: 'Activo',
        direccion: 'Zona Norte Warnes',
        ubLatitud: '-17.5087',
        ubLongitud: '-63.1698',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 103,
        tipoGrua: 'Plataforma',
        },
        {
        nombre: 'Servicios San Pedro',
        contacto: 'Mario Quiroga',
        telefono: '77890123',
        ciudad: 'Santa Cruz de la Sierra',
        estado: 'Activo',
        direccion: 'Barrio San Pedro',
        ubLatitud: '-17.7842',
        ubLongitud: '-63.1745',
        prioridad: 3,
        idTipoNegocio: 1,
        idVendedor: 102,
        tipoGrua: 'Integral',
        },
        {
        nombre: 'Masters Gruas',
        contacto: 'Raúl Fernández',
        telefono: '78901234',
        ciudad: 'Camiri',
        estado: 'Activo',
        direccion: 'Zona Central',
        ubLatitud: '-20.0381',
        ubLongitud: '-63.5187',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 101,
        tipoGrua: 'Arrastre con elevador',
        },
        {
        nombre: 'Don Julio Servicios',
        contacto: 'Julio Mendoza',
        telefono: '79012345',
        ciudad: 'Warnes',
        estado: 'Activo',
        direccion: 'Carretera al Norte',
        ubLatitud: '-17.5201',
        ubLongitud: '-63.1810',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 103,
        tipoGrua: 'Plataforma',
        },
        {
        nombre: 'Gruas Rojas',
        contacto: 'Fernando Rojas',
        telefono: '70111222',
        ciudad: 'Santa Cruz de la Sierra',
        estado: 'Inactivo',
        direccion: 'Av. Alemana',
        ubLatitud: '-17.7610',
        ubLongitud: '-63.1701',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 102,
        tipoGrua: 'Arrastre con elevador',
        },
        {
        nombre: 'Servicio de asistencia Saucedo',
        contacto: 'Ricardo Saucedo',
        telefono: '70222333',
        ciudad: 'Santa Cruz de la Sierra',
        estado: 'Activo',
        direccion: 'Av. Cristo Redentor',
        ubLatitud: '-17.7350',
        ubLongitud: '-63.1654',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 101,
        tipoGrua: 'Plataforma',
        },
        {
        nombre: 'MotorWorks Gruas',
        contacto: 'Diego Salvatierra',
        telefono: '70333444',
        ciudad: 'Santa Cruz de la Sierra',
        estado: 'Activo',
        direccion: 'Av. Beni',
        ubLatitud: '-17.7488',
        ubLongitud: '-63.1569',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 103,
        tipoGrua: 'Arrastre con elevador',
        },
        {
          nombre: 'Turbo Servicios Gruas',
          contacto: 'Héctor Salinas',
          telefono: '70444555',
          ciudad: 'Santa Cruz de la Sierra',
          estado: 'Activo',
          direccion: 'Av. Mutualista',
          ubLatitud: '-17.7812',
          ubLongitud: '-63.1458',
          prioridad: 1,
          idTipoNegocio: 1,
          idVendedor: 101,
          tipoGrua: 'Arrastre con gancho',
          },
          {
          nombre: 'ServiGruas',
          contacto: 'Patricia Méndez',
          telefono: '70555666',
          ciudad: 'Cochabamba',
          estado: 'Activo',
          direccion: 'Av. América',
          ubLatitud: '-17.3895',
          ubLongitud: '-66.1568',
          prioridad: 1,
          idTipoNegocio: 1,
          idVendedor: 102,
          tipoGrua: 'Plataforma',
          },
          {
          nombre: 'Gruas Las Palmas',
          contacto: 'Roberto Velasco',
          telefono: '70666777',
          ciudad: 'Montero',
          estado: 'Activo',
          direccion: 'Barrio Villa Busch',
          ubLatitud: '-17.3465',
          ubLongitud: '-63.2492',
          prioridad: 3,
          idTipoNegocio: 1,
          idVendedor: 103,
          tipoGrua: 'Plataforma',
          },
          {
          nombre: 'Pro Service Gruas',
          contacto: 'Óscar Gutiérrez',
          telefono: '70777888',
          ciudad: 'Camiri',
          estado: 'Activo',
          direccion: 'Av. Petrolera',
          ubLatitud: '-20.0405',
          ubLongitud: '-63.5202',
          prioridad: 2,
          idTipoNegocio: 1,
          idVendedor: 101,
          tipoGrua: 'Arrastre con gancho',
          },
          {
          nombre: 'Grua vehicular',
          contacto: 'María Fernanda Ruiz',
          telefono: '70888999',
          ciudad: 'Warnes',
          estado: 'Activo',
          direccion: 'Zona Industrial',
          ubLatitud: '-17.5174',
          ubLongitud: '-63.1763',
          prioridad: 2,
          idTipoNegocio: 1,
          idVendedor: 102,
          tipoGrua: 'Plataforma',
          }
        ]);
        ciudades = [
          ...new Set(
            this.dataSource.data.map(x => x.ciudad)
          )
        ].sort();
}
