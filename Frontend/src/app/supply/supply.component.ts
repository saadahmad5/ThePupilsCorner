import { Component, OnInit } from '@angular/core';
import { Services } from '.././services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {

  constructor(private services: Services, private router: Router) {
    
  }


  supplys: any[];
  searchText;
  ngOnInit(): void {
    this.services.getSupplys().subscribe(
      {
        next: instance => this.supplys = instance
      }
    );
    console.log(this.supplys);
  }

}
