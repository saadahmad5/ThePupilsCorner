import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent implements OnInit {

  
  constructor(private services: Services, private router: Router){
  }

  public DeleteBook(book) {

    //before deleting book, we must first delete Book Publisher record and book author record(s)
    //becsuse we have foreign key of book ItemID in those taables
    this.services.deleteBookPublisher(book).subscribe(
      value => {
        this.services.deleteBookAuthor(book).subscribe(
            value => {
              this.services.deleteBook(book).subscribe(
                () => this.router.navigateByUrl('/bookview')
              );
            }
        );
      }
    );
  }

  //to edit a book, we must also edit the book author and publisher
  public EditBook(book) {
    
    //parse the selected date into a string to insert into the publisher table
    let shortDate = new Date(this.datePublished);
    let selectedDate = new Date(shortDate.getFullYear(), shortDate.getMonth(), shortDate.getDay());
    this.book.DatePublished = selectedDate.toLocaleDateString();
    var splitted = this.book.DatePublished.split('/', 3);
    book.DatePublished = this.book[0].datePublished = splitted[0] + "-" + splitted[1] + "-" + splitted[2];
    this.services.putBook(book).subscribe(

    //start with editing publisher
    async value => {
      this.services.putBookPublisher(this.book[0]).subscribe(

        //edit author(s) of this book
         async value => {
          for(let i=0; i < this.bookauthors.length ; i++){
              book.authorID_being_processed = this.bookauthors[i].AuthorID;
              book.bookAuthorID = this.bookauthors[i].BookAuthorID;
              await this.services.putBookAuthor(book).toPromise();
              await new Promise(resolve => setTimeout(resolve, 3000)); // 2 sec
          }
        }
      );

      //return to book view
     this.router.navigateByUrl('/bookview');
    }
    );
  }

  book: any;
  bookauthors: any[];    //to hold selected authors for the book
  publishers: any[];
  authors: any[];
  datePublished: any;
  
  ngOnInit(): void {

    //get publishers for dropdown menu
    this.services.getPublishers().subscribe(
      value => {this.publishers = value;

        //get authors for dropdown menu(s)
        this.services.getAuthors().subscribe(
          value => {this.authors = value

            //get book instance from DB that we want to edit
            this.services.getBook().subscribe(
              instance => { this.book = instance;

                //get datePublished and turn into date
                var splitted = this.book[0].Date.split("T");
                var firstPieces = splitted[0].split("-");
              this.datePublished = splitted[0];
                console.log(this.datePublished);
                //get author(s) of the book we want to edit
              this.services.getAuthorsByBookID().subscribe(
                value => {this.bookauthors = value;
                }
              );
            }
          );
        }
      );
    }
  );}
}


