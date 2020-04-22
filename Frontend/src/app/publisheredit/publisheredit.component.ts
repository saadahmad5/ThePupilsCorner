import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publisheredit',
  templateUrl: './publisheredit.component.html',
  styleUrls: ['./publisheredit.component.css']
})
export class PublishereditComponent implements OnInit {

  constructor(private services: Services, private router: Router) {
 
  }

   public DeletePublisher(publisher) {
    this.services.deletePublisher(publisher).subscribe(
      () => this.router.navigateByUrl('/publisherview')
    );
   }


   public EditPublisher(publisher) {
    this.services.putPublisher(publisher).subscribe(
      () => this.router.navigateByUrl('/publisherview')
    );
  }

  publisher: any;

  ngOnInit(): void {
    this.services.getPublisher().subscribe(
      instance => { this.publisher = instance}
    )
  }

}
