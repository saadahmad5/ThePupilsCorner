import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookFavorite } from '../Classes/bookfavorite';

@Component({
  selector: 'app-bookfavorite',
  templateUrl: './bookfavorite.component.html',
  styleUrls: ['./bookfavorite.component.css']
})
export class BookfavoriteComponent implements OnInit {

  constructor(private services: Services, private router: Router, private http: HttpClient) {
    this.object = new BookFavorite();
  }

  books: any[];
  users: any[];
  ItemID: number = 0;
  UserID: number = 0;

  object: BookFavorite;


  markAsFavorite()
  {
    this.object.ItemID = this.ItemID;
    this.object.PersonID = this.UserID;
    window.alert("The User:" + this.UserID + " favorite this Book: " + this.ItemID );
    this.services.postBookFavorite(this.object).subscribe();
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

}
