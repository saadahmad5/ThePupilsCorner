import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publisherview',
  templateUrl: './publisherview.component.html',
  styleUrls: ['./publisherview.component.css']
})
export class PublisherviewComponent implements OnInit {

  constructor(private services: Services, private router: Router) { }
  publishers: any[];

  sendPublisherID(PublisherID) {
    console.log(PublisherID);
    this.services.getPublisherId(PublisherID);
    this.router.navigateByUrl('/publisheredit');
  }
  
  ngOnInit(): void {
    this.services.getPublishers().subscribe(
      instances => { this.publishers = instances} 
    )
  }

}
