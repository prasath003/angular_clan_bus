import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectOptionComponent} from './project-option.component';
import {
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule, MatInputModule,
  MatPaginatorModule, MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ProjectOptionComponent', () => {
  let component: ProjectOptionComponent;
  let fixture: ComponentFixture<ProjectOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        BrowserModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatInputModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [ProjectOptionComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
