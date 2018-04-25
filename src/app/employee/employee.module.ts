import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { EmployeeComponent } from './employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeRoutingModule } from './employee-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    EmployeeRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BasicInfoComponent, ProjectsComponent, EmployeeGridComponent, EmployeeComponent]
})
export class EmployeeModule { }
