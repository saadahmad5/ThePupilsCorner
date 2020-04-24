import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookRentPurchase } from '../Classes/bookrent-purchase';

@Component({
  selector: 'app-bookrent',
  templateUrl: './bookrent.component.html',
  styleUrls: ['./bookrent.component.css']
})
export class BookrentComponent implements OnInit {

  constructor(private services: Services, private router: Router, private http: HttpClient) {
    this.object = new BookRentPurchase();
  }


  ngOnInit(): void {
    this.services.getBooksName().subscribe(
      value => {this.books = value;
        this.services.getUsers().subscribe(
          value => {this.users = value}
        );
      }
    );
  }

  books: any[];
  users: any[];
  ItemID: number = 0;
  UserID: number = 0;
  Date: any = '2020-01-01';

  object: BookRentPurchase;


  markAsRent()
  {
    this.object.ItemID = this.ItemID;
    this.object.PersonID = this.UserID;
    this.object.Date = this.Date;
    window.alert("The User:" + this.UserID + " rented this Book: " + this.ItemID + " on " + this.Date );
    this.services.postBookRental(this.object).subscribe();
  }

}
