import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeportaledit',
  templateUrl: './employeeportaledit.component.html',
  styleUrls: ['./employeeportaledit.component.css']
})
export class EmployeeportaleditComponent implements OnInit {

  employee: any;

  constructor(private services: Services, private router: Router) {
    
  }

  public UpdateMe(employee) {
    this.services.putEmployee(employee).subscribe(
      () => this.router.navigateByUrl('/employee')
    );
  }

  ngOnInit(): void {
    this.services.getEmployee().subscribe(
      instance => { this.employee = instance;}
     );
  }

}
