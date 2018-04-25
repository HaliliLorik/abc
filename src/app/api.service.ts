import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee/employee';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Project} from './project/Project';
@Injectable()
export class ApiService {

  public employee_id = new BehaviorSubject<number>(0)
  public project_id = new BehaviorSubject<number>(0)
  public project_event = new BehaviorSubject<boolean>(false)
  public employee_event = new BehaviorSubject<boolean>(false)
  private api_url = 'http://abc-api.modul-academy.org'
  constructor(private http: HttpClient) { }

  getEmployeeId() {
    return this.employee_id.asObservable();
  }
  getProjectId() {
    return this.project_id.asObservable();
  }
  setProjectId(id) {
    this.project_id.next(id);
  }
  employeeEvent() {
    return this.employee_event.asObservable();
  }
  projectEvent() {
    return this.project_event.asObservable();
  }
  setEmployeeEvent() {
    this.employee_event.next(true);
  }
  setProjectEvent() {
    this.project_event.next(true);
  }
  setEmployeeId(id) {
    this.employee_id.next(id);
  }
  updateOrCreateEmployee(body) {
    const url = `${this.api_url}/abc/employee/${body.id}`;
    return this.http.post(url, body);
  }
  getEmployees(): Observable<Employee[]> {
    const url = `${this.api_url}/abc/employees`;
    return this.http.get<Employee[]>(url);
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.api_url}/abc/employee/${id}`;
    return this.http.get<Employee>(url);
  }
  getProjects(): Observable<Project[]> {
    const url = `${this.api_url}/abc/projects`;
    return this.http.get<Project[]>(url);
  }
  getProject(id: number): Observable<Project> {
    const url = `${this.api_url}/abc/project/${id}`;
    return this.http.get<Project>(url);
  }
  updateOrCreateProject(body){
    const url = `${this.api_url}/abc/project/${body.id}`;
    return this.http.post(url, body);
  }
}
