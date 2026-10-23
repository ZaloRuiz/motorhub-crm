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
import { ProspectoDetalleDialog } from '../../../../../shared/dialogs/prospecto-detalle-dialog/prospecto-detalle-dialog';

@Component({
  selector: 'app-pre-ingresados-repuestos',
  standalone: true,
  templateUrl: './repuestos.html',
  styleUrl: './repuestos.scss',
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
})
export class PreIngresadosRepuestosComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  get totalNegocios(): number {
    return this.dataSource.filteredData.length;
  }
  
  get tipoA(): number {
    return this.dataSource.filteredData.filter(x => x.tipo === 'A').length;
  }
  
  get tipoB(): number {
    return this.dataSource.filteredData.filter(x => x.tipo === 'B').length;
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
  
      const coincideTipo =
        !filtros.tipo ||
        data.tipo === filtros.tipo;
  
      const coincideCiudad =
        !filtros.ciudad ||
        data.ciudad === filtros.ciudad;
  
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
    'tipo',
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
    this.dialog.open(ProspectoDetalleDialog, {
      width: '900px',
      maxWidth: '95vw',
      data: prospecto
    });
  }
  dataSource = new MatTableDataSource([
    {
      nombre: 'Tienda de repuestos ABC',
      contacto: 'Juan Pérez',
      telefono: '70123456',
      ciudad: 'Santa Cruz de la Sierra',
      tipo: 'A',
      estado: 'Pendiente',
      direccion: 'Av. Banzer Km 8',
      ubLatitud: '-17.7445',
      ubLongitud: '-63.1561',
      prioridad: 1,
      idTipoNegocio: 1,
      idVendedor: 101,
      },
      {
      nombre: 'Moto repuestos',
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
      },
      {
      nombre: 'Repuestos Premium',
      contacto: 'Luis Vargas',
      telefono: '72345678',
      ciudad: 'Warnes',
      tipo: 'A',
      estado: 'Pendiente',
      direccion: 'Zona Industrial Warnes',
      ubLatitud: '-17.5123',
      ubLongitud: '-63.1734',
      prioridad: 1,
      idTipoNegocio: 1,
      idVendedor: 101,
      },
      {
      nombre: 'Repuestos Express',
      contacto: 'Pedro Rojas',
      telefono: '73456789',
      ciudad: 'Montero',
      tipo: 'B',
      estado: 'Contactado',
      direccion: 'Av. Circunvalación',
      ubLatitud: '-17.3382',
      ubLongitud: '-63.2501',
      prioridad: 3,
      idTipoNegocio: 1,
      idVendedor: 103,
      },
      {
        nombre: 'Tienda Perez',
        contacto: 'Miguel Pérez',
        telefono: '74567890',
        ciudad: 'Montero',
        tipo: 'B',
        estado: 'Pendiente',
        direccion: 'Barrio Centro',
        ubLatitud: '-17.3421',
        ubLongitud: '-63.2554',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 102,
        },
        {
        nombre: 'Tienda Los Junos',
        contacto: 'José Suárez',
        telefono: '75678901',
        ciudad: 'Santa Cruz de la Sierra',
        tipo: 'B',
        estado: 'Pendiente', 
        direccion: 'Av. Virgen de Cotoca',
        ubLatitud: '-17.7754',
        ubLongitud: '-63.1321',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 101,
        },
        {
        nombre: 'Pro Parts',
        contacto: 'Andrés Molina',
        telefono: '76789012',
        ciudad: 'Warnes',
        tipo: 'A',
        estado: 'Pendiente',
        direccion: 'Zona Norte Warnes',
        ubLatitud: '-17.5087',
        ubLongitud: '-63.1698',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 103,
        },
        {
        nombre: 'Auto Partes San Pedro',
        contacto: 'Mario Quiroga',
        telefono: '77890123',
        ciudad: 'Santa Cruz de la Sierra',
        tipo: 'B',
        estado: 'Contactado',
        direccion: 'Barrio San Pedro',
        ubLatitud: '-17.7842',
        ubLongitud: '-63.1745',
        prioridad: 3,
        idTipoNegocio: 1,
        idVendedor: 102,
        },
        {
        nombre: 'Masters',
        contacto: 'Raúl Fernández',
        telefono: '78901234',
        ciudad: 'Camiri',
        tipo: 'B',
        estado: 'Perdido',
        direccion: 'Zona Central',
        ubLatitud: '-20.0381',
        ubLongitud: '-63.5187',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 101,
        },
        {
        nombre: 'Don Julio Repuestos',
        contacto: 'Julio Mendoza',
        telefono: '79012345',
        ciudad: 'Warnes',
        tipo: 'B',
        estado: 'Pendiente',
        direccion: 'Carretera al Norte',
        ubLatitud: '-17.5201',
        ubLongitud: '-63.1810',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 103,
        },
        {
        nombre: 'Repuestos Rojas',
        contacto: 'Fernando Rojas',
        telefono: '70111222',
        ciudad: 'Santa Cruz de la Sierra',
        tipo: 'B',
        estado: 'Pendiente',
        direccion: 'Av. Alemana',
        ubLatitud: '-17.7610',
        ubLongitud: '-63.1701',
        prioridad: 2,
        idTipoNegocio: 1,
        idVendedor: 102,
        },
        {
        nombre: 'Saucedo Moto partes',
        contacto: 'Ricardo Saucedo',
        telefono: '70222333',
        ciudad: 'Santa Cruz de la Sierra',
        tipo: 'A',
        estado: 'Pendiente',
        direccion: 'Av. Cristo Redentor',
        ubLatitud: '-17.7350',
        ubLongitud: '-63.1654',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 101,
        },
        {
        nombre: 'AutoParts Salvatierra',
        contacto: 'Diego Salvatierra',
        telefono: '70333444',
        ciudad: 'Santa Cruz de la Sierra',
        tipo: 'A',
        estado: 'Perdido',
        direccion: 'Av. Beni',
        ubLatitud: '-17.7488',
        ubLongitud: '-63.1569',
        prioridad: 1,
        idTipoNegocio: 1,
        idVendedor: 103,
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
          },
          {
          nombre: 'Elite Garage',
          contacto: 'Patricia Méndez',
          telefono: '70555666',
          ciudad: 'Cochabamba',
          tipo: 'A',
          estado: 'Pendiente',
          direccion: 'Av. América',
          ubLatitud: '-17.3895',
          ubLongitud: '-66.1568',
          prioridad: 1,
          idTipoNegocio: 1,
          idVendedor: 102,
          },
          {
          nombre: 'Tienda El Mecánico',
          contacto: 'Roberto Velasco',
          telefono: '70666777',
          ciudad: 'Montero',
          tipo: 'B',
          estado: 'Pendiente',
          direccion: 'Barrio Villa Busch',
          ubLatitud: '-17.3465',
          ubLongitud: '-63.2492',
          prioridad: 3,
          idTipoNegocio: 1,
          idVendedor: 103,
          },
          {
          nombre: 'AutoPartes Pro',
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
          },
          {
          nombre: 'Auto Clínica',
          contacto: 'María Fernanda Ruiz',
          telefono: '70888999',
          ciudad: 'Warnes',
          tipo: 'B',
          estado: 'Pendiente',
          direccion: 'Zona Industrial',
          ubLatitud: '-17.5174',
          ubLongitud: '-63.1763',
          prioridad: 2,
          idTipoNegocio: 1,
          idVendedor: 102,
          }
  ]);
  ciudades = [
    ...new Set(
      this.dataSource.data.map(x => x.ciudad)
    )
  ].sort();
}