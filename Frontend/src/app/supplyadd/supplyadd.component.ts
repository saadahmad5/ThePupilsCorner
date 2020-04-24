import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';
import { OfficeSupply } from '../Classes/officesupply';

@Component({
  selector: 'app-supplyadd',
  templateUrl: './supplyadd.component.html',
  styleUrls: ['./supplyadd.component.css']
})
export class SupplyaddComponent implements OnInit {
  
  constructor(private services: Services, private router: Router) { 
    this.supply = new OfficeSupply();
  }

  supply: OfficeSupply;
  officesupplyTypes: any[];
  officeTypeID: any;

  AddSupply(supply) {
    supply.TypeID = this.officeTypeID;
    window.alert("val is " + this.officeTypeID + "  " + supply.TypeID);
    console.log(supply);
    this.services.postOfficeSupply(supply).subscribe(
      () => this.router.navigateByUrl('/supplyview')
    );
  }

  ngOnInit(): void {
    this.services.getSupplyTypes().subscribe(
      value => this.officesupplyTypes = value
    );
  }

}
