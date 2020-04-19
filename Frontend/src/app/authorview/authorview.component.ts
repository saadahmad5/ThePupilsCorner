import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorview',
  templateUrl: './authorview.component.html',
  styleUrls: ['./authorview.component.css']
})
export class AuthorviewComponent implements OnInit {

  constructor(private services: Services, private router: Router) { }

  authors: any[];

  sendAuthorID(AuthorID) {
    console.log(AuthorID);
    this.services.getAuthorId(AuthorID);
    this.router.navigateByUrl('/authoredit');
  }

  ngOnInit(): void {
    this.services.getAuthors().subscribe(
       instances => { this.authors = instances} 
    )
  }

}
