import { Component, OnInit } from '@angular/core';
import { Employee } from '../Classes/employee';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeportaladd',
  templateUrl: './employeeportaladd.component.html',
  styleUrls: ['./employeeportaladd.component.css']
})
export class EmployeeportaladdComponent implements OnInit {

  constructor(private services: Services, private router: Router) { 
    this.employee = new Employee;
  }

  employee: Employee;

  public AddEmployee(emp) {
    //console.log(emp);
    this.services.postEmployee(emp).subscribe(
      () => this.router.navigateByUrl('/employee')
    );
  }

  ngOnInit(): void {
  }

}
