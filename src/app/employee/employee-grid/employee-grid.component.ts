import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {Project} from '../../project/Project';
import {PageChangeEvent, GridDataResult, SelectableSettings, RowArgs} from '@progress/kendo-angular-grid';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss']
})
export class EmployeeGridComponent implements OnInit {
  employees: Employee[];

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
    this.api.employeeEvent().subscribe(data => {
      this.loadEmployees();
    })
    this.setSelectableSettings();
    this.loadEmployees();
  }
  public mySelectionKey(context: RowArgs) {
    return context.index;
  }
  pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.loadProducts();
  }

  loadEmployees() {
    this.api.getEmployees().subscribe(data => {
      this.employees = data
      this.loadProducts();
    });
  }
  private loadProducts(): void {
    this.gridView = {
      data: this.employees.slice(this.skip, this.skip + this.pageSize),
      total: this.employees.length
    };
  }

  clickedCell(): void {
    const index = this.mySelection[0];
    this.api.setEmployeeId(this.employees[index].id);
  }

  public setSelectableSettings(): void {
    this.selectableSettings = {
      mode: 'single'
    };
  }
}
