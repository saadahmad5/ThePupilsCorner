import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  bookfavorite: any[];
  bookrental: any[];
  bookpurchase: any[];
  supplyfavorite: any[];
  supplypurchase: any[];

  public ClearRecords() {
    this.services.clearRecords().subscribe();
    window.alert("System-wide records cleared");
  }

  constructor(private services: Services, private router: Router) {
    
  }

  ngOnInit(): void {
    this.services.getBookFavorite().subscribe(
      instance1 => { this.bookfavorite = instance1;
      this.services.getBookRental().subscribe(
        instance2 => { this.bookrental = instance2;
          this.services.getBookPurchase().subscribe(
            instance3 => { this.bookpurchase = instance3;
              this.services.getSupplyFavorite().subscribe(
                instance4 => { this.supplyfavorite = instance4;
                  this.services.getSupplyPurchase().subscribe(
                    instance5 => { this.supplypurchase = instance5}
                  )}
              )}
          )

      })}
    )
  }

}
