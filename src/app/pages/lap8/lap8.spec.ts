import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap8 } from './lap8';

describe('Lap8', () => {
  let component: Lap8;
  let fixture: ComponentFixture<Lap8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lap8],
    }).compileComponents();

    fixture = TestBed.createComponent(Lap8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
