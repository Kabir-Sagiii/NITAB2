import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleCComponent } from './ng-style-c.component';

describe('NgStyleCComponent', () => {
  let component: NgStyleCComponent;
  let fixture: ComponentFixture<NgStyleCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
