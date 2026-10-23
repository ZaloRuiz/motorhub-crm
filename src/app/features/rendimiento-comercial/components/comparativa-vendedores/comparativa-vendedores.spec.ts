import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativaVendedores } from './comparativa-vendedores';

describe('ComparativaVendedores', () => {
  let component: ComparativaVendedores;
  let fixture: ComponentFixture<ComparativaVendedores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparativaVendedores],
    }).compileComponents();

    fixture = TestBed.createComponent(ComparativaVendedores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
