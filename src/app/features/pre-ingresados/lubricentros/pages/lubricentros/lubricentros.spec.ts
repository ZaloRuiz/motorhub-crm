import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lubricentros } from './lubricentros';

describe('Lubricentros', () => {
  let component: Lubricentros;
  let fixture: ComponentFixture<Lubricentros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lubricentros],
    }).compileComponents();

    fixture = TestBed.createComponent(Lubricentros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
