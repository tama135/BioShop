import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigijenaIKozmetikaComponent } from './higijena-i-kozmetika.component';

describe('HigijenaIKozmetikaComponent', () => {
  let component: HigijenaIKozmetikaComponent;
  let fixture: ComponentFixture<HigijenaIKozmetikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigijenaIKozmetikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigijenaIKozmetikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
