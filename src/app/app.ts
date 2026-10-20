import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getSpanishPaginatorIntl } from './shared/paginator-es';
import { inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [MatSidenavModule, RouterOutlet, RouterLink,
    MatListModule, MatIconModule, MatExpansionModule, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    {provide: MatPaginatorIntl,
      useValue: getSpanishPaginatorIntl()
    }
  ]
})
export class App {
  protected readonly title = signal('motorhub-web');
  private readonly breakpointObserver = inject(BreakpointObserver);

  esEscritorio = false;
  sidenavAbierto = false;

  get modoSidenav(): 'side' | 'over' {
    return this.esEscritorio ? 'side' : 'over';
  }

  constructor() {
    this.breakpointObserver
      .observe('(min-width: 1024px)')
      .pipe(takeUntilDestroyed())
      .subscribe(({ matches }) => {
        this.esEscritorio = matches;
        this.sidenavAbierto = matches;
      });
  }

  alternarMenu(): void {
    this.sidenavAbierto = !this.sidenavAbierto;
  }

  cerrarMenuSiMovil(): void {
    if (!this.esEscritorio) {
      this.sidenavAbierto = false;
    }
  }
}
