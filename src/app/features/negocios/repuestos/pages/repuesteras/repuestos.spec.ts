import { ComponentFixture, TestBed } from '@angular/core/testing';

import { repuestos } from './repuestos';

describe('repuestos', () => {
  let component: repuestos;
  let fixture: ComponentFixture<repuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [repuestos],
    }).compileComponents();

    fixture = TestBed.createComponent(repuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
