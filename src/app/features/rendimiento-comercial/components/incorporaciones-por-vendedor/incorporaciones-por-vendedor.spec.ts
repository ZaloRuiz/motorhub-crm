import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorporacionesPorVendedor } from './incorporaciones-por-vendedor';

describe('IncorporacionesPorVendedor', () => {
  let component: IncorporacionesPorVendedor;
  let fixture: ComponentFixture<IncorporacionesPorVendedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncorporacionesPorVendedor],
    }).compileComponents();

    fixture = TestBed.createComponent(IncorporacionesPorVendedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
