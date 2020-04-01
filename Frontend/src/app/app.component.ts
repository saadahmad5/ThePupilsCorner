import { Component, OnInit } from '@angular/core';
import { Services } from './services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private services: Services, private router: Router) {
    
  }

  books: any[];


  ngOnInit(): void {
    
  }
  title = 'The Pupils Corner';
}
