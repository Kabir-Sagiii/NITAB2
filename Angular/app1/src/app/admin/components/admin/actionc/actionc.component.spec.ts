import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActioncComponent } from './actionc.component';

describe('ActioncComponent', () => {
  let component: ActioncComponent;
  let fixture: ComponentFixture<ActioncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActioncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActioncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
