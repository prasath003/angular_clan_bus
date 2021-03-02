import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectLandingComponent} from './project-landing.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ProjectLandingComponent', () => {
  let component: ProjectLandingComponent;
  let fixture: ComponentFixture<ProjectLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule,
        RouterTestingModule.withRoutes([])],
      declarations: [ProjectLandingComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the landing page', () => {
    // @ts-ignore
    const instance = new ProjectLandingComponent();
    instance.ngOnInit();
    instance.openDialog('nan');
    instance.translateService();
    expect(component).toBeTruthy();
  });

  it('should select a login/registeration',  () => {
    expect(component.openDialog('login')).toBeTruthy();
  });

});
