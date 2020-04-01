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


  employees: any[];

  ngOnInit(): void {
    this.services.getEmployees().subscribe(
      {
        next: instance => this.employees = instance
      }
    );
    console.log(this.employees);
  }

}
