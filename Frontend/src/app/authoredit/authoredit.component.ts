import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authoredit',
  templateUrl: './authoredit.component.html',
  styleUrls: ['./authoredit.component.css']
})
export class AuthoreditComponent implements OnInit {

  constructor(private services: Services, private router: Router) {


   }

   public DeleteAuthor(author) {
    this.services.deleteAuthor(author).subscribe(
      () => this.router.navigateByUrl('/authorview')
    );
   }


   public EditAuthor(author) {
    this.services.putAuthor(author).subscribe(
      () => this.router.navigateByUrl('/authorview')
    );
  }

  author: any;

  ngOnInit(): void {
    this.services.getAuthor().subscribe(
      instance => { this.author = instance}
    )
  }

}
