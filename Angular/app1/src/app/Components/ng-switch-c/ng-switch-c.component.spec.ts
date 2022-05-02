import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchCComponent } from './ng-switch-c.component';

describe('NgSwitchCComponent', () => {
  let component: NgSwitchCComponent;
  let fixture: ComponentFixture<NgSwitchCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
