import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCComponent } from './client-c.component';

describe('ClientCComponent', () => {
  let component: ClientCComponent;
  let fixture: ComponentFixture<ClientCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
