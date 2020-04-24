import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplyedit',
  templateUrl: './supplyedit.component.html',
  styleUrls: ['./supplyedit.component.css']
})
export class SupplyeditComponent implements OnInit {

  constructor(private services: Services, private router: Router) {
 
  }

   public DeleteSupply(officesuppplyID) {
    this.services.deleteOfficeSupply(officesuppplyID).subscribe(
      () => this.router.navigateByUrl('/supplyview')
    );
   }

   public EditSupply(officesuppply) {
    this.services.putOfficeSupply(officesuppply).subscribe(
      () => this.router.navigateByUrl('/supplyview')
    );
  }

  officesupply: any;
  officesupplyTypes: any[];

  ngOnInit(): void {
    this.services.getOfficeSupply().subscribe(
      instance => { this.officesupply = instance;
      this.services.getSupplyTypes().subscribe(
        value => this.officesupplyTypes = value
      );
    }
    )
  }

}

