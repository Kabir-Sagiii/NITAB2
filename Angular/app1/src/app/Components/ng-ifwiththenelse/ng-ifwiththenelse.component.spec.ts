import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIFwiththenelseComponent } from './ng-ifwiththenelse.component';

describe('NgIFwiththenelseComponent', () => {
  let component: NgIFwiththenelseComponent;
  let fixture: ComponentFixture<NgIFwiththenelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIFwiththenelseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIFwiththenelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
