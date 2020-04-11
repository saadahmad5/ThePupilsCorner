import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeportal',
  templateUrl: './employeeportal.component.html',
  styleUrls: ['./employeeportal.component.css']
})
export class EmployeeportalComponent implements OnInit {

  employee: any;
  employees: any[];
  phonenumbers: any[];

  constructor(private services: Services, private router: Router) {
    
  }

  public resign(empId) {
    //console.log("Resigning:",empId);
    this.services.deleteEmployee(empId).subscribe(
      () => this.router.navigateByUrl('/employee')
    )
    
  }

  public fire(empId) {
    //console.log("Firing:",empId);
    this.services.deleteEmployee(empId).subscribe();
  }

  

  ngOnInit(): void {
    this.services.getEmployee().subscribe(
     instance => { this.employee = instance;
      this.services.getEmployees().subscribe(
        employees => {this.employees = employees;
          this.services.getPhoneNumbers().subscribe(
            instance => {this.phonenumbers = instance}
          )
        }
      )
    }
    );
    
  }

}
