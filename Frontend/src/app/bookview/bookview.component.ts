import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {

  constructor(private services: Services, private router: Router) { }
  
  books: any[];
  
  sendBookID(ItemID) {
    console.log(ItemID);
    this.services.getBookId(ItemID);
    this.router.navigateByUrl('/bookedit');
  }

  ngOnInit(): void {
    this.services.getBooks().subscribe(
        instances => { this.books = instances} 
    )
  }
  
}
