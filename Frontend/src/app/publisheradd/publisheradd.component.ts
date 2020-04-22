import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';
import { Publisher } from '../Classes/publisher';

@Component({
  selector: 'app-publisheradd',
  templateUrl: './publisheradd.component.html',
  styleUrls: ['./publisheradd.component.css']
})
export class PublisheraddComponent implements OnInit {

  constructor(private services: Services, private router: Router) { 
    this.publisher = new Publisher();
  }

  publisher: Publisher;
  
  AddPublisher(publisher) {
    console.log(publisher);
    this.services.postPublisher(this.publisher).subscribe(
      () => this.router.navigateByUrl('/publisherview')
    );
  }

  ngOnInit(): void {
    
  }
}
