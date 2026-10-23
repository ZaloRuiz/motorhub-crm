import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenVendedores } from './resumen-vendedores';

describe('ResumenVendedores', () => {
  let component: ResumenVendedores;
  let fixture: ComponentFixture<ResumenVendedores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenVendedores],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumenVendedores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
