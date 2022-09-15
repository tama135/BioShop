import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekovitiDodaciComponent } from './lekoviti-dodaci.component';

describe('LekovitiDodaciComponent', () => {
  let component: LekovitiDodaciComponent;
  let fixture: ComponentFixture<LekovitiDodaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekovitiDodaciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LekovitiDodaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
