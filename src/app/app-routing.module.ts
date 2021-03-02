import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectLandingComponent} from './pages/project-landing/project-landing.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectLandingComponent
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/project-main/navbar.module').then(m => m.NavbarModule)
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
