import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from './project.component';
import {ProjectBasicInfoComponent} from './project-basic-info/project-basic-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects/basic-info', pathMatch: 'full' },
  {
    path: 'projects',
    component: ProjectComponent,
    children: [
      { path: 'basic-info', component: ProjectBasicInfoComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
