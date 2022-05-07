import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildccComponent } from './childcc.component';

describe('ChildccComponent', () => {
  let component: ChildccComponent;
  let fixture: ComponentFixture<ChildccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
