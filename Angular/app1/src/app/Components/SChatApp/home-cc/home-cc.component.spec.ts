import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCCComponent } from './home-cc.component';

describe('HomeCCComponent', () => {
  let component: HomeCCComponent;
  let fixture: ComponentFixture<HomeCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
