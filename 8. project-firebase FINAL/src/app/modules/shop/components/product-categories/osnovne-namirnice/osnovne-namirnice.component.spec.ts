import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsnovneNamirniceComponent } from './osnovne-namirnice.component';

describe('OsnovneNamirniceComponent', () => {
  let component: OsnovneNamirniceComponent;
  let fixture: ComponentFixture<OsnovneNamirniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsnovneNamirniceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsnovneNamirniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
