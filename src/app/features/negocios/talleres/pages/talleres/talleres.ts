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

@Component({
  selector: 'app-talleres',
  imports: [
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

  get totalTalleres(): number {
    return this.dataSource.filteredData.length;
  }
  
  get mecGeneral(): number {
    return this.dataSource.filteredData.filter(x => x.especialidad === 'Mecánico General').length;
  }
  
  get mecElectrico(): number {
    return this.dataSource.filteredData.filter(x => x.especialidad === 'Eléctrico').length;
  }
  
  get mecGomero(): number {
    return this.dataSource.filteredData.filter(x => x.especialidad === 'Gomero').length;
  }

  get mecChapero(): number {
    return this.dataSource.filteredData.filter(x => x.especialidad === 'Chapero').length;
  }

  get mecDiesel(): number {
    return this.dataSource.filteredData.filter(x => x.especialidad === 'Diésel').length;
  }

  get mecGas(): number {
    return this.dataSource.filteredData.filter(x => x.especialidad === 'Gas').length;
  }

  constructor(private dialog: MatDialog) {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
  
      const filtros = JSON.parse(filter);
  
      const coincideBusqueda =
        !filtros.busqueda ||
        data.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase());
  
      const coincideTipoVehiculo =
        !filtros.tipoVehiculo ||
        data.tipoVehiculo === filtros.tipoVehiculo;
  
      const coincideEspecialidad =
        !filtros.especialidad ||
        data.especialidad === filtros.especialidad;
  
      const coincideCiudad =
        !filtros.ciudad ||
        data.ciudad === filtros.ciudad;

      const coincideRescate = filtros.haceRescate === null || data.haceRescate === filtros.haceRescate;

      const coincideVerficado = filtros.verificado === null || data.verificado === filtros.verificado;
  
      return (
        coincideBusqueda &&
        coincideTipoVehiculo &&
        coincideEspecialidad &&
        coincideCiudad && coincideRescate && coincideVerficado
      );
    };
  }

  aplicarFiltros(): void {
    this.dataSource.filter = JSON.stringify(this.filtros);
  
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  displayedColumns: string[] = [
    'nombre',
    'ciudad',
    'especialidad',
    'tipoVehiculo',
    'haceRescate',
    'verificado',
    'acciones'
  ];
  filtros = {
    busqueda: '',
    tipoVehiculo: '',
    especialidad: '',
    ciudad: '',
    haceRescate: null,
    verificado: null
  };
  verDetalle(prospecto: any): void {
    this.dialog.open(NegocioTallerDetalleDialog, {
      width: '900px',
      maxWidth: '95vw',
      data: prospecto
    });
  }
  dataSource = new MatTableDataSource([
    {
      nombre: 'Taller Central Motors',
      telefono1: 70123456,
      telefono2: 72123456,
      direccion: 'Av. Banzer 5to Anillo',
      ubLatitud: '-17.7421',
      ubLongitud: '-63.1524',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Automóvil',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Medio',
      ciudad: 'Santa Cruz de la Sierra'
    },
    {
      nombre: 'Electro Auto Service',
      telefono1: 70234567,
      telefono2: null,
      direccion: 'Av. Cristo Redentor',
      ubLatitud: '-17.7308',
      ubLongitud: '-63.1682',
      especialidad: 'Eléctrico',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Alto',
      ciudad: 'Santa Cruz de la Sierra'
    },
    {
      nombre: 'Moto Express',
      telefono1: 70345678,
      telefono2: null,
      direccion: 'Av. Santos Dumont',
      ubLatitud: '-17.8124',
      ubLongitud: '-63.1805',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Motocicleta',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Bajo',
      ciudad: 'Santa Cruz de la Sierra'
    },
    {
      nombre: 'Diesel Pro Warnes',
      telefono1: 70456789,
      telefono2: 72456789,
      direccion: 'Zona Industrial Warnes',
      ubLatitud: '-17.5162',
      ubLongitud: '-63.1743',
      especialidad: 'Diésel',
      tipoVehiculo: 'Automóvil',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Alto',
      ciudad: 'Warnes'
    },
    {
      nombre: 'Gomería El Rápido',
      telefono1: 70567890,
      telefono2: null,
      direccion: 'Av. Alemania',
      ubLatitud: '-17.7689',
      ubLongitud: '-63.1712',
      especialidad: 'Gomero',
      tipoVehiculo: 'Ambos',
      haceRescate: true,
      verificado: false,
      rangoPrecio: 'Bajo',
      ciudad: 'Santa Cruz de la Sierra'
    },
    {
      nombre: 'Chapistería Premium',
      telefono1: 70678901,
      telefono2: null,
      direccion: 'Av. Virgen de Cotoca',
      ubLatitud: '-17.7764',
      ubLongitud: '-63.1348',
      especialidad: 'Chapero',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Alto',
      ciudad: 'Montero'
    },
    {
      nombre: 'Gas Car Solutions',
      telefono1: 70789012,
      telefono2: 72789012,
      direccion: 'Doble Vía La Guardia',
      ubLatitud: '-17.8235',
      ubLongitud: '-63.2098',
      especialidad: 'Gas',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Medio',
      ciudad: 'Santa Cruz de la Sierra'
    },
    {
      nombre: 'Moto y Auto Center',
      telefono1: 70890123,
      telefono2: null,
      direccion: 'Zona Norte',
      ubLatitud: '-17.7054',
      ubLongitud: '-63.1401',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Ambos',
      haceRescate: true,
      verificado: false,
      rangoPrecio: 'Medio',
      ciudad: 'Cotoca'
    },
    {
      nombre: 'Rescate 24/7 Taller',
      telefono1: 70901234,
      telefono2: 72901234,
      direccion: 'Av. Mutualista',
      ubLatitud: '-17.7802',
      ubLongitud: '-63.1465',
      especialidad: 'Eléctrico',
      tipoVehiculo: 'Automóvil',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Medio',
      ciudad: 'Santa Cruz de la Sierra'
    },
    {
      nombre: 'Taller San Jorge',
      telefono1: 71012345,
      telefono2: null,
      ciudad: 'Santa Cruz de la Sierra',
      direccion: 'Av. Busch',
      ubLatitud: '-17.7831',
      ubLongitud: '-63.1825',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Electro Diesel Montero',
      telefono1: 71123456,
      telefono2: 73123456,
      ciudad: 'Montero',
      direccion: 'Barrio Centro',
      ubLatitud: '-17.3418',
      ubLongitud: '-63.2541',
      especialidad: 'Diésel',
      tipoVehiculo: 'Automóvil',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Alto'
    },
    {
      nombre: 'Moto Racing',
      telefono1: 71234567,
      telefono2: null,
      ciudad: 'Warnes',
      direccion: 'Zona Norte',
      ubLatitud: '-17.5211',
      ubLongitud: '-63.1738',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Motocicleta',
      haceRescate: false,
      verificado: false,
      rangoPrecio: 'Bajo'
    },
    {
      nombre: 'Gomería Cotoca',
      telefono1: 71345678,
      telefono2: null,
      ciudad: 'Cotoca',
      direccion: 'Plaza Principal',
      ubLatitud: '-17.8154',
      ubLongitud: '-63.0523',
      especialidad: 'Gomero',
      tipoVehiculo: 'Ambos',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Bajo'
    },
    {
      nombre: 'Taller El Campeón',
      telefono1: 71456789,
      telefono2: null,
      ciudad: 'Santa Cruz de la Sierra',
      direccion: 'Av. Paraguá',
      ubLatitud: '-17.7485',
      ubLongitud: '-63.1287',
      especialidad: 'Chapero',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Alto'
    },
    {
      nombre: 'Warnes Service Center',
      telefono1: 71567890,
      telefono2: 73567890,
      ciudad: 'Warnes',
      direccion: 'Carretera al Norte',
      ubLatitud: '-17.5102',
      ubLongitud: '-63.1806',
      especialidad: 'Gas',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Montero Auto Electric',
      telefono1: 71678901,
      telefono2: null,
      ciudad: 'Montero',
      direccion: 'Zona Sur',
      ubLatitud: '-17.3558',
      ubLongitud: '-63.2624',
      especialidad: 'Eléctrico',
      tipoVehiculo: 'Automóvil',
      haceRescate: true,
      verificado: false,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Cotoca Motors',
      telefono1: 71789012,
      telefono2: null,
      ciudad: 'Cotoca',
      direccion: 'Av. Virgen de Cotoca',
      ubLatitud: '-17.8091',
      ubLongitud: '-63.0485',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Ambos',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Taller Los Hermanos',
      telefono1: 71890123,
      telefono2: 73890123,
      ciudad: 'Santa Cruz de la Sierra',
      direccion: 'Plan 3000',
      ubLatitud: '-17.8415',
      ubLongitud: '-63.1468',
      especialidad: 'Diésel',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Alto'
    },
    {
      nombre: 'Auto Mecánica Integral',
      telefono1: 71901234,
      telefono2: null,
      ciudad: 'Santa Cruz de la Sierra',
      direccion: 'Av. Roca y Coronado',
      ubLatitud: '-17.8012',
      ubLongitud: '-63.1874',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Automóvil',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Diesel Master',
      telefono1: 72012345,
      telefono2: 74012345,
      ciudad: 'Warnes',
      direccion: 'Zona Industrial Norte',
      ubLatitud: '-17.5043',
      ubLongitud: '-63.1678',
      especialidad: 'Diésel',
      tipoVehiculo: 'Automóvil',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Alto'
    },
    {
      nombre: 'Moto Garage',
      telefono1: 72123456,
      telefono2: null,
      ciudad: 'Montero',
      direccion: 'Barrio Guabirá',
      ubLatitud: '-17.3491',
      ubLongitud: '-63.2482',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Motocicleta',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Bajo'
    },
    {
      nombre: 'Electro Car Center',
      telefono1: 72234567,
      telefono2: null,
      ciudad: 'Santa Cruz de la Sierra',
      direccion: 'Av. Beni',
      ubLatitud: '-17.7542',
      ubLongitud: '-63.1623',
      especialidad: 'Eléctrico',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Alto'
    },
    {
      nombre: 'Cotoca Diesel Service',
      telefono1: 72345678,
      telefono2: null,
      ciudad: 'Cotoca',
      direccion: 'Carretera Principal',
      ubLatitud: '-17.8138',
      ubLongitud: '-63.0561',
      especialidad: 'Diésel',
      tipoVehiculo: 'Automóvil',
      haceRescate: true,
      verificado: false,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Gomería La Rueda',
      telefono1: 72456789,
      telefono2: null,
      ciudad: 'Santa Cruz de la Sierra',
      direccion: 'Av. Tres Pasos al Frente',
      ubLatitud: '-17.7684',
      ubLongitud: '-63.1192',
      especialidad: 'Gomero',
      tipoVehiculo: 'Ambos',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Bajo'
    },
    {
      nombre: 'Chapistería Oriental',
      telefono1: 72567890,
      telefono2: 74567890,
      ciudad: 'Warnes',
      direccion: 'Barrio Satélite Norte',
      ubLatitud: '-17.4937',
      ubLongitud: '-63.1864',
      especialidad: 'Chapero',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Alto'
    },
    {
      nombre: 'Gas Motors',
      telefono1: 72678901,
      telefono2: null,
      ciudad: 'Montero',
      direccion: 'Zona Oeste',
      ubLatitud: '-17.3369',
      ubLongitud: '-63.2695',
      especialidad: 'Gas',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: false,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Servicio Técnico Universal',
      telefono1: 72789012,
      telefono2: 74789012,
      ciudad: 'Santa Cruz de la Sierra',
      direccion: 'Av. Cumavi',
      ubLatitud: '-17.8207',
      ubLongitud: '-63.1541',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Ambos',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Taller El Progreso',
      telefono1: 72890123,
      telefono2: null,
      ciudad: 'Santa Cruz de la Sierra',
      direccion: 'Av. Moscú',
      ubLatitud: '-17.7852',
      ubLongitud: '-63.1784',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Bajo'
    },
    {
      nombre: 'Moto Racing Center',
      telefono1: 72901234,
      telefono2: null,
      ciudad: 'Montero',
      direccion: 'Barrio Fabril',
      ubLatitud: '-17.3436',
      ubLongitud: '-63.2589',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Motocicleta',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Electro Warnes',
      telefono1: 73012345,
      telefono2: 75012345,
      ciudad: 'Warnes',
      direccion: 'Zona Central',
      ubLatitud: '-17.5188',
      ubLongitud: '-63.1724',
      especialidad: 'Eléctrico',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Gomería Cotoca Express',
      telefono1: 73123456,
      telefono2: null,
      ciudad: 'Cotoca',
      direccion: 'Av. Principal',
      ubLatitud: '-17.8104',
      ubLongitud: '-63.0507',
      especialidad: 'Gomero',
      tipoVehiculo: 'Ambos',
      haceRescate: true,
      verificado: false,
      rangoPrecio: 'Bajo'
    },
    {
      nombre: 'Diesel Heavy Service',
      telefono1: 73234567,
      telefono2: 75234567,
      ciudad: 'Santa Cruz de la Sierra',
      direccion: 'Parque Industrial',
      ubLatitud: '-17.7921',
      ubLongitud: '-63.0945',
      especialidad: 'Diésel',
      tipoVehiculo: 'Automóvil',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Alto'
    },
    {
      nombre: 'Chapistería El Maestro',
      telefono1: 73345678,
      telefono2: null,
      ciudad: 'Montero',
      direccion: 'Zona Norte',
      ubLatitud: '-17.3375',
      ubLongitud: '-63.2478',
      especialidad: 'Chapero',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Alto'
    },
    {
      nombre: 'Gas Auto Cotoca',
      telefono1: 73456789,
      telefono2: null,
      ciudad: 'Cotoca',
      direccion: 'Barrio 12 de Octubre',
      ubLatitud: '-17.8187',
      ubLongitud: '-63.0602',
      especialidad: 'Gas',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Taller Norte Motors',
      telefono1: 73567890,
      telefono2: 75567890,
      ciudad: 'Warnes',
      direccion: 'Satélite Norte',
      ubLatitud: '-17.4876',
      ubLongitud: '-63.1893',
      especialidad: 'Mecánico General',
      tipoVehiculo: 'Ambos',
      haceRescate: true,
      verificado: true,
      rangoPrecio: 'Medio'
    },
    {
      nombre: 'Auto Clínica Premium',
      telefono1: 73678901,
      telefono2: null,
      ciudad: 'Santa Cruz de la Sierra',
      direccion: 'Equipetrol',
      ubLatitud: '-17.7628',
      ubLongitud: '-63.1954',
      especialidad: 'Eléctrico',
      tipoVehiculo: 'Automóvil',
      haceRescate: false,
      verificado: true,
      rangoPrecio: 'Alto'
    }
  ]);
  ciudades = [
    ...new Set(
      this.dataSource.data.map(x => x.ciudad)
    )
  ].sort();
}
