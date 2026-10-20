import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectosTiendaRepuestosComponent as TiendaRepuestos } from './tienda-repuestos';

describe('Tienda-Repuestos', () => {
  let component: TiendaRepuestos;
  let fixture: ComponentFixture<TiendaRepuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaRepuestos],
    }).compileComponents();

    fixture = TestBed.createComponent(TiendaRepuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
