import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentccComponent } from './parentcc.component';

describe('ParentccComponent', () => {
  let component: ParentccComponent;
  let fixture: ComponentFixture<ParentccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
