import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectBasicInfoComponent } from './project-basic-info/project-basic-info.component';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import { ProjectRoutingModule } from './project-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmployeeRoutingModule} from '../employee/employee-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GridModule} from '@progress/kendo-angular-grid';
@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProjectComponent, ProjectBasicInfoComponent, ProjectGridComponent]
})
export class ProjectModule { }
