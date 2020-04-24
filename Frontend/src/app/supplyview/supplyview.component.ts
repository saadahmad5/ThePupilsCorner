import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplyview',
  templateUrl: './supplyview.component.html',
  styleUrls: ['./supplyview.component.css']
})
export class SupplyviewComponent implements OnInit {

  constructor(private services: Services, private router: Router) { }
  
  supplies: any[];
  
  sendOfficeSupplyID(ItemID) {
    console.log(ItemID);
    this.services.getOfficeSupplyId(ItemID);
    this.router.navigateByUrl('/supplyedit');
  }

  ngOnInit(): void {
    this.services.getSupplys().subscribe(
        instances => { this.supplies = instances} 
    )
  }
  
}
