import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectoDetalleDialog } from './prospecto-detalle-dialog';

describe('ProspectoDetalleDialog', () => {
  let component: ProspectoDetalleDialog;
  let fixture: ComponentFixture<ProspectoDetalleDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProspectoDetalleDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ProspectoDetalleDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
