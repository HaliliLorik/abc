import { Component, OnInit } from '@angular/core';
import {PageChangeEvent, GridDataResult, SelectableSettings, RowArgs} from '@progress/kendo-angular-grid';
import {Router} from '@angular/router';
import {Employee} from '../employee';
import {Project} from '../../project/Project';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  employee: Employee;

  public gridView: GridDataResult;
  public buttonCount = 5;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSizes = true;
  public previousNext = true;
  public selectableSettings: SelectableSettings;
  public pageSize = 5;
  public skip = 0;
  public mySelection = []
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getEmployeeId().subscribe( id => {
      this.getEmployee(id);
    });
    this.setSelectableSettings();
  }
  public mySelectionKey(context: RowArgs) {
    return context.index;
  }
  pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.loadProjects();
  }

  getEmployee(id) {
    this.api.getEmployee(id).subscribe( data => {
      this.employee = data;
      this.loadProjects();
    });
  }
  private loadProjects(): void {
    this.gridView = {
      data: this.employee.projects.slice(this.skip, this.skip + this.pageSize),
      total: this.employee.projects.length
    };
  }

  public setSelectableSettings(): void {
    this.selectableSettings = {
      mode: 'single'
    };
  }
}
