import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Employee} from '../employee';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  public employee: Employee = {
    'id' : null,
    'first_name' : '',
    'last_name' : '',
    'title' : '',
    'date_of_birth' : '',
    'projects' : []
  } as Employee;
  error_message = '';
  success_message = '';
  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    this.api.getEmployeeId().subscribe( id => {
      this.getEmployee(id);
    });
  }

  getEmployee(id) {
    this.api.getEmployee(id).subscribe( data => {
      this.employee = data;
    });
  }

  updateOrCreateEmployee() {
    this.error_message = '';
    this.api.updateOrCreateEmployee(this.employee).subscribe(data => {
      if (data['success']) {
        this.error_message = '';
        this.success_message = data['message'];
        this.api.setEmployeeEvent();
      } else {
        this.success_message = '';
        this.error_message = data['message'];
      }
    }, error => {
      this.success_message = '';
      this.error_message = 'Something went wrong.';
    });
  }
  onSubmit(valid) {
    if (valid) {
      this.updateOrCreateEmployee();
    } else {
      this.error_message = 'Please fill required fields. (*)';
    }
  }
}
