import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tdf1Component } from './tdf1.component';

describe('Tdf1Component', () => {
  let component: Tdf1Component;
  let fixture: ComponentFixture<Tdf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tdf1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tdf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
