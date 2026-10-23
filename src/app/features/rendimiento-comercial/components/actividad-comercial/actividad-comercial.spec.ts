import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadComercial } from './actividad-comercial';

describe('ActividadComercial', () => {
  let component: ActividadComercial;
  let fixture: ComponentFixture<ActividadComercial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadComercial],
    }).compileComponents();

    fixture = TestBed.createComponent(ActividadComercial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
