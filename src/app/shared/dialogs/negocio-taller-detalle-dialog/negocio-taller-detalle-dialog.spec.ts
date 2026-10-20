import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioTallerDetalleDialog } from './negocio-taller-detalle-dialog';

describe('NegocioTallerDetalleDialog', () => {
  let component: NegocioTallerDetalleDialog;
  let fixture: ComponentFixture<NegocioTallerDetalleDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegocioTallerDetalleDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(NegocioTallerDetalleDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
