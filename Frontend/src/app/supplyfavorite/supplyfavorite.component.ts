import { Component, OnInit } from '@angular/core';
import { SupplyFavorite } from '../Classes/supplyfavorite';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplyfavorite',
  templateUrl: './supplyfavorite.component.html',
  styleUrls: ['./supplyfavorite.component.css']
})
export class SupplyfavoriteComponent implements OnInit {

  constructor(private services: Services, private router: Router) {
    this.object = new SupplyFavorite();
  }

  supplys: any[];
  users: any[];
  ItemID: number = 0;
  UserID: number = 0;

  object: SupplyFavorite;

  markAsFavorite()
  {
    this.object.ItemID = this.ItemID;
    this.object.PersonID = this.UserID;
    window.alert("The User:" + this.UserID + " favorite this Supply: " + this.ItemID );
    this.services.postSupplyFavorite(this.object).subscribe();
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
