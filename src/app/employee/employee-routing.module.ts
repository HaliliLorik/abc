import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {ProjectsComponent} from './projects/projects.component';
import {EmployeeComponent} from './employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees/basic-info', pathMatch: 'full' },
  {
    path: 'employees',
    component: EmployeeComponent,
    children: [
      { path: 'basic-info', component: BasicInfoComponent },
      { path: 'employee-projects', component: ProjectsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
