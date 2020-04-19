import { Component, OnInit } from '@angular/core';
import { Author } from '../Classes/author'
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authoradd',
  templateUrl: './authoradd.component.html',
  styleUrls: ['./authoradd.component.css']
})
export class AuthoraddComponent implements OnInit {

  constructor(private services: Services, private router: Router) { 
    this.author = new Author();
  }

  author: Author;

  AddAuthor(author) {
    console.log(author);
    this.services.postAuthor(this.author).subscribe(
      () => this.router.navigateByUrl('/authorview')
    );
  }

  

  ngOnInit(): void {
    
  }

}
