import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';
import { Book } from '../Classes/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {
  registerView = 'regView1';
  constructor(private services: Services, private router: Router) { 
    this.book = new Book();
  }

  //to get how many authors since a book can have more than one author
  authorCount: number;

  //to populate dropdown for authors
  authors: any[];

  //to populate dropdown for publishers
  publishers: any[];

  //to get selected publisher from dropdown
  publisherID: number = 0;

  //to get the selected authors from dropdowns
  authorsID: number[];

  //to get the date published of the book
  datePublished: Date;

  addedbook: any[];
  book: Book;
  
  SetAuthorCount(authorCount){
    this.authorCount = authorCount;
    this.authorsID = new Array(authorCount);
    this.book.Authors = new Array(authorCount);
    this.datePublished = new Date();
    for (var i = 0; i < authorCount; i++) {
      this.authorsID[i] = 0;
    }
    this.registerView = 'regView2';
  }

  async AddBook(book) {

    this.book.PublisherID = this.publisherID;

    for(let i = 0; i< this.authorCount; i++){
      this.book.Authors[i] = this.authorsID[i];
    }

    //parse the selected date into a string to insert into the publisher table
    let shortDate = new Date(this.datePublished);
    let selectedDate = new Date(shortDate.getFullYear(), shortDate.getMonth(), shortDate.getDay());
    this.book.DatePublished = selectedDate.toLocaleDateString();
    var splitted = this.book.DatePublished.split('/', 3);
    this.book.DatePublished = splitted[0] + "-" + splitted[1] + "-" + splitted[2];

    console.log(book);

    //first add book
    const val = await this.services.postBook(this.book).toPromise();

    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec

    //get the book's ID by it's name
    this.services.getBookByName(this.book.ItemName).subscribe(
      
      value => { this.addedbook = value;
                 this.book.ItemID = this.addedbook[0].ItemId;

                 //now add the book's publisher
                this.services.postBookPublisher(this.book).subscribe(
                  
                  //now add the book's author
                  async value => {
                    for(let i=0; i < this.authorCount ; i++){
                      this.book.authorID_being_processed = this.book.Authors[i];
                        await this.services.postBookAuthor(this.book).toPromise();
                        await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec

                   }
                   //go back to books page
                   this.router.navigateByUrl('/bookview');
                  }
                );
              }
    );  
  }


  
  ngOnInit(): void {
    
    this.services.getPublishers().subscribe(
      value => {this.publishers = value;
        this.services.getAuthors().subscribe(
          value => {this.authors = value}
        );
      }
    );
  }

}
