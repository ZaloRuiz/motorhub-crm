import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosCard } from './estados-card';

describe('EstadosCard', () => {
  let component: EstadosCard;
  let fixture: ComponentFixture<EstadosCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadosCard],
    }).compileComponents();

    fixture = TestBed.createComponent(EstadosCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
