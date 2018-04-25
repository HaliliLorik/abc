import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../api.service';
import {Project} from '../Project';
@Component({
  selector: 'app-project-basic-info',
  templateUrl: './project-basic-info.component.html',
  styleUrls: ['./project-basic-info.component.scss']
})
export class ProjectBasicInfoComponent implements OnInit {
  public project: Project = {
    'id' : null,
    'name' : '',
    'start_date' : '',
    'end_date' : '',
    'status' : '',
  } as Project;
  error_message = '';
  success_message = '';
  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    this.api.getProjectId().subscribe( id => {
      if (id > 0) {
        this.getProject(id);
      }
    });
  }

  getProject(id) {
    this.api.getProject(id).subscribe( data => {
      this.project = data;
    });
  }

  endDateChange() {
    const date = new Date(this.project.end_date);
    const date_now = Date.now();
    this.project.status = date.getTime() > date_now ? 'ACTIVE' : 'NOT_ACTIVE';
  }
  updateOrCreateProject() {
    this.error_message = '';
    this.api.updateOrCreateProject(this.project).subscribe(data => {
      if (data['success']) {
        this.error_message = '';
        this.success_message = data['message'];
        this.api.setProjectEvent();
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
      this.updateOrCreateProject();
    } else {
      this.error_message = 'Please fill required fields. (*)';
    }
  }

}
