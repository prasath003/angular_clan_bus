import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOption1Component } from './project-option1.component';

describe('ProjectOption1Component', () => {
  let component: ProjectOption1Component;
  let fixture: ComponentFixture<ProjectOption1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOption1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOption1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
