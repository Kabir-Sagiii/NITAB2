import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazongridComponent } from './amazongrid.component';

describe('AmazongridComponent', () => {
  let component: AmazongridComponent;
  let fixture: ComponentFixture<AmazongridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazongridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazongridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
