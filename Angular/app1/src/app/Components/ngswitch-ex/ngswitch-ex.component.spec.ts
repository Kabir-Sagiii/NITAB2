import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchEXComponent } from './ngswitch-ex.component';

describe('NgswitchEXComponent', () => {
  let component: NgswitchEXComponent;
  let fixture: ComponentFixture<NgswitchEXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchEXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
