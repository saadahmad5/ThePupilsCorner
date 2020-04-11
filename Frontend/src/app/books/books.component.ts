import { Component, OnInit } from '@angular/core';
import { Services } from '.././services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private services: Services, private router: Router) {
    
  }

  books: any[];
  searchText;
  ngOnInit(): void {
    this.services.getBooks().subscribe(
      {
        next: books => this.books = books
      }
    );
    
  }

}
