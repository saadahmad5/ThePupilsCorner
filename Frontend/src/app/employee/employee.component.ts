import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private services: Services, private router: Router) {
    
  }

  EmpID: number = 0;
  employees: any[];

  sendEmpID(empID)
  {
    this.EmpID = empID;
    this.services.getEmpId(this.EmpID);
    this.router.navigate(['/employeeportal'],{skipLocationChange: true})
  }

  ngOnInit(): void {
    this.services.getEmployees().subscribe(
      {
        next: instance => this.employees = instance
      }
    );
    
  }

}
