import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayDBComponent } from './oneway-db.component';

describe('OnewayDBComponent', () => {
  let component: OnewayDBComponent;
  let fixture: ComponentFixture<OnewayDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnewayDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewayDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
