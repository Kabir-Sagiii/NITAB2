import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCComponent } from './bootstrap-c.component';

describe('BootstrapCComponent', () => {
  let component: BootstrapCComponent;
  let fixture: ComponentFixture<BootstrapCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
