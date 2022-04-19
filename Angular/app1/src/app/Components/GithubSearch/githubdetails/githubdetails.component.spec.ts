import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubdetailsComponent } from './githubdetails.component';

describe('GithubdetailsComponent', () => {
  let component: GithubdetailsComponent;
  let fixture: ComponentFixture<GithubdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
