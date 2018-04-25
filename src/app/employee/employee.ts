import {Project} from '../project/Project';

export class Employee {

  id: number;
  first_name: string;
  last_name: string;
  title: string;
  date_of_birth: string;
  projects: Project[];
}
