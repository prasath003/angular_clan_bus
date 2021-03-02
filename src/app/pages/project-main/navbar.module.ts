import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavbarRoutingModule} from './navbar-routing.module';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './navbar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProjectOptionComponent} from './project-option/project-option.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LoadingSkeletonComponent} from '../../shared/loading-skeleton/loading-skeleton.component';
import {ProjectOption1Component} from './project-option1/project-option1.component';
import {ProjectTableComponent} from '../../shared/project-table/project-table.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    NavbarComponent,
    ProjectOptionComponent,
    ProjectOption1Component,
    ProjectTableComponent,
    LoadingSkeletonComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTooltipModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    CommonModule,
    NavbarRoutingModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    LoadingSkeletonComponent
  ],
  entryComponents: []
})
export class NavbarModule {
}
