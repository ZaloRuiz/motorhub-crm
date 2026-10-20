import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubrosCard } from './rubros-card';

describe('RubrosCard', () => {
  let component: RubrosCard;
  let fixture: ComponentFixture<RubrosCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RubrosCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RubrosCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
