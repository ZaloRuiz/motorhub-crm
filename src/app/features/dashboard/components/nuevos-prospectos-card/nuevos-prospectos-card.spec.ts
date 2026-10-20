import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosProspectosCard } from './nuevos-prospectos-card';

describe('NuevosProspectosCard', () => {
  let component: NuevosProspectosCard;
  let fixture: ComponentFixture<NuevosProspectosCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevosProspectosCard],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevosProspectosCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
