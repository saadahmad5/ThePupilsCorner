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
  
  ngOnInit(): void {
    this.services.getPayrollGroups().subscribe(
      {
        next: books => this.books = books
      }
    );
    console.log(this.books);
  }

}
