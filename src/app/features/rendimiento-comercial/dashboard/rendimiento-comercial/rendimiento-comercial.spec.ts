import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimientoComercial } from './rendimiento-comercial';

describe('RendimientoComercial', () => {
  let component: RendimientoComercial;
  let fixture: ComponentFixture<RendimientoComercial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendimientoComercial],
    }).compileComponents();

    fixture = TestBed.createComponent(RendimientoComercial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
