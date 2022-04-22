import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayDBComponent } from './twoway-db.component';

describe('TwowayDBComponent', () => {
  let component: TwowayDBComponent;
  let fixture: ComponentFixture<TwowayDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowayDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
