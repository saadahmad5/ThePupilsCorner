import { Component, OnInit } from '@angular/core';
import { SupplyPurchase } from '../Classes/supplypurchase';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplypurchase',
  templateUrl: './supplypurchase.component.html',
  styleUrls: ['./supplypurchase.component.css']
})
export class SupplypurchaseComponent implements OnInit {

  constructor(private services: Services, private router: Router) {
      this.object = new SupplyPurchase();

  }

  supplys: any[];
  users: any[];
  ItemID: number = 0;
  UserID: number = 0;
  Date: string = '2020-01-01';

  object: SupplyPurchase;

  markAsPurchase()
  {
    this.object.ItemID = this.ItemID;
    this.object.PersonID = this.UserID;
    this.object.Date = this.Date;
    window.alert("The User:" + this.UserID + " purchase this Supply: " + this.ItemID + " on " + this.Date );
    this.services.postSupplyPurchase(this.object).subscribe();
  }


  ngOnInit(): void {
    this.services.getSupplysName().subscribe(
      value => {this.supplys = value;
        this.services.getUsers().subscribe(
          value => {this.users = value}
        );
      }
    );

  }

}
