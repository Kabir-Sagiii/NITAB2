import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCComponent } from './server-c.component';

describe('ServerCComponent', () => {
  let component: ServerCComponent;
  let fixture: ComponentFixture<ServerCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
