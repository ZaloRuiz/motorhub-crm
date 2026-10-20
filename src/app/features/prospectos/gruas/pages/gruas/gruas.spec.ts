import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gruas } from './gruas';

describe('Gruas', () => {
  let component: Gruas;
  let fixture: ComponentFixture<Gruas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gruas],
    }).compileComponents();

    fixture = TestBed.createComponent(Gruas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
