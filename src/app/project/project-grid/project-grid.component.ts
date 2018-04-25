import { Component, OnInit } from '@angular/core';
import {GridDataResult, PageChangeEvent, RowArgs, SelectableSettings} from '@progress/kendo-angular-grid';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';
import {Project} from '../Project';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit {

  projects: Project[];

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
    this.api.projectEvent().subscribe(data => {
      this.loadProjects();
    })
    this.setSelectableSettings();
    this.loadProjects();
  }
  public mySelectionKey(context: RowArgs) {
    return context.index;
  }
  pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.loadProducts();
  }

  loadProjects() {
    this.api.getProjects().subscribe(data => {
      this.projects = data
      this.loadProducts();
    });
  }
  private loadProducts(): void {
    this.gridView = {
      data: this.projects.slice(this.skip, this.skip + this.pageSize),
      total: this.projects.length
    };
  }

  clickedCell(): void {
    const index = this.mySelection[0];
    this.api.setProjectId(this.projects[index].id);
  }

  public setSelectableSettings(): void {
    this.selectableSettings = {
      mode: 'single'
    };
  }
}
