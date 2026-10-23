import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosNegociosPeriodo } from './nuevos-negocios-periodo';

describe('NuevosNegociosPeriodo', () => {
  let component: NuevosNegociosPeriodo;
  let fixture: ComponentFixture<NuevosNegociosPeriodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevosNegociosPeriodo],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevosNegociosPeriodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
