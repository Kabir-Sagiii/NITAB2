import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchconceptComponent } from './ngswitchconcept.component';

describe('NgswitchconceptComponent', () => {
  let component: NgswitchconceptComponent;
  let fixture: ComponentFixture<NgswitchconceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchconceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
