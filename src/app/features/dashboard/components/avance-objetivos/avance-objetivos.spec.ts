import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceObjetivos } from './avance-objetivos';

describe('AvanceObjetivos', () => {
  let component: AvanceObjetivos;
  let fixture: ComponentFixture<AvanceObjetivos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvanceObjetivos],
    }).compileComponents();

    fixture = TestBed.createComponent(AvanceObjetivos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
