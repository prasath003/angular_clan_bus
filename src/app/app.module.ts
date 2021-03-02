import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectLoginComponent} from './shared/project-login/project-login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProjectRegisterationComponent} from './shared/project-registeration/project-registeration.component';
import {ProjectLandingComponent} from './pages/project-landing/project-landing.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavbarModule} from './pages/project-main/navbar.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AlertComponent } from './shared/alert/alert.component';
import {
  MatBadgeModule, MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSelectModule, MatStepperModule,
  MatTooltipModule
} from '@angular/material';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    ProjectLoginComponent,
    ProjectRegisterationComponent,
    ProjectLandingComponent,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatTooltipModule,
    MatSelectModule,
    MatStepperModule,
    MatDatepickerModule,
    NavbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  entryComponents: [
    AlertComponent
  ],
  providers: [],
  exports: [
    LoadingSpinnerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
