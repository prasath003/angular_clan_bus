import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar.component';
import {CommonModule} from '@angular/common';
import {ProjectOptionComponent} from './project-option/project-option.component';
import {ProjectOption1Component} from './project-option1/project-option1.component';

const routes: Routes = [{
  path: '',
  component: NavbarComponent,
  data: {admin: 'admin'},
  children: [{
    path: '',
    component: ProjectOptionComponent
  },
    {
      path: 'books',
      component: ProjectOptionComponent
    },
    {
      path: 'users',
      component: ProjectOption1Component
    }]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule {
}
