import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbudoPorVendedor } from './embudo-por-vendedor';

describe('EmbudoPorVendedor', () => {
  let component: EmbudoPorVendedor;
  let fixture: ComponentFixture<EmbudoPorVendedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbudoPorVendedor],
    }).compileComponents();

    fixture = TestBed.createComponent(EmbudoPorVendedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
