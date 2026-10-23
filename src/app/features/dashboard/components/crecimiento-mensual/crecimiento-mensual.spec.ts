import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrecimientoMensual } from './crecimiento-mensual';

describe('CrecimientoMensual', () => {
  let component: CrecimientoMensual;
  let fixture: ComponentFixture<CrecimientoMensual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrecimientoMensual],
    }).compileComponents();

    fixture = TestBed.createComponent(CrecimientoMensual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
