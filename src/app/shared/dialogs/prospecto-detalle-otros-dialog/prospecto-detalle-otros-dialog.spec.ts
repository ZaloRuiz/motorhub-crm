import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectoDetalleOtrosDialog } from './prospecto-detalle-otros-dialog';

describe('ProspectoDetalleOtrosDialog', () => {
  let component: ProspectoDetalleOtrosDialog;
  let fixture: ComponentFixture<ProspectoDetalleOtrosDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProspectoDetalleOtrosDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectoDetalleOtrosDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
