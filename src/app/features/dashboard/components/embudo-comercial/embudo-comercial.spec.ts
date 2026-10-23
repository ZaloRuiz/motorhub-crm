import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbudoComercial } from './embudo-comercial';

describe('EmbudoComercial', () => {
  let component: EmbudoComercial;
  let fixture: ComponentFixture<EmbudoComercial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbudoComercial],
    }).compileComponents();

    fixture = TestBed.createComponent(EmbudoComercial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
