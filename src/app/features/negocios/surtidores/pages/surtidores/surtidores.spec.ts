import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Surtidores } from './surtidores';

describe('Surtidores', () => {
  let component: Surtidores;
  let fixture: ComponentFixture<Surtidores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Surtidores],
    }).compileComponents();

    fixture = TestBed.createComponent(Surtidores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
