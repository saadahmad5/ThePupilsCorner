import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SupplyComponent } from './supply/supply.component';
import { EmployeeComponent } from './employee/employee.component';
import { BookfavoriteComponent } from './bookfavorite/bookfavorite.component';
import { EmployeeportalComponent } from './employeeportal/employeeportal.component';
import { EmployeeportaleditComponent } from './employeeportaledit/employeeportaledit.component';
import { EmployeeportaladdComponent } from './employeeportaladd/employeeportaladd.component';
import { RecordsComponent } from './records/records.component';
import { SupplyfavoriteComponent } from './supplyfavorite/supplyfavorite.component';
import { AuthorviewComponent } from './authorview/authorview.component';
import { AuthoraddComponent } from './authoradd/authoradd.component';
import { AuthoreditComponent } from './authoredit/authoredit.component';
import { PublisherviewComponent } from './publisherview/publisherview.component';
import { PublisheraddComponent } from './publisheradd/publisheradd.component';
import { PublishereditComponent } from './publisheredit/publisheredit.component';
import { BookviewComponent } from './bookview/bookview.component';
import { BookaddComponent } from './bookadd/bookadd.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { SupplyviewComponent } from './supplyview/supplyview.component';
import { SupplyaddComponent } from './supplyadd/supplyadd.component';
import { SupplyeditComponent } from './supplyedit/supplyedit.component';
import { BookrentComponent } from './bookrent/bookrent.component';
import { BookpurchaseComponent } from './bookpurchase/bookpurchase.component';
import { SupplypurchaseComponent } from './supplypurchase/supplypurchase.component';

let routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'supply', component: SupplyComponent },
  { path: 'bookfavorite', component: BookfavoriteComponent },
  { path: 'bookrental', component: BookrentComponent },
  { path: 'bookpurchase', component: BookpurchaseComponent },
  { path: 'supplyfavorite', component: SupplyfavoriteComponent },
  { path: 'supplypurchase', component: SupplypurchaseComponent },
  { path: 'employeeportal', component: EmployeeportalComponent },
  { path: 'employeeedit', component: EmployeeportaleditComponent },
  { path: 'employeeadd', component: EmployeeportaladdComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'authorview', component: AuthorviewComponent },
  { path: 'authoradd', component: AuthoraddComponent },
  { path: 'authoredit', component: AuthoreditComponent },
  { path: 'publisherview', component: PublisherviewComponent },
  { path: 'publisheradd', component: PublisheraddComponent },
  { path: 'publisheredit', component: PublishereditComponent },
  { path: 'bookview', component: BookviewComponent },
  { path: 'bookadd', component: BookaddComponent },
  { path: 'bookedit', component: BookeditComponent },
  { path: 'supplyview', component: SupplyviewComponent },
  { path: 'supplyadd', component: SupplyaddComponent },
  { path: 'supplyedit', component: SupplyeditComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HomeComponent,
    UserComponent,
    SupplyComponent,
    EmployeeComponent,
    BookfavoriteComponent,
    EmployeeportalComponent,
    EmployeeportaleditComponent,
    EmployeeportaladdComponent,
    RecordsComponent,
    SupplyfavoriteComponent,
    AuthorviewComponent,
    AuthoraddComponent,
    AuthoreditComponent,
    PublisherviewComponent,
    PublisheraddComponent,
    PublishereditComponent,
    BookviewComponent,
    BookaddComponent,
    BookeditComponent,
    SupplyviewComponent,
    SupplyaddComponent,
    SupplyeditComponent,
    BookrentComponent,
    BookpurchaseComponent,
    SupplypurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    Ng2SearchPipeModule,
    RouterModule.forRoot(routes,
      {
        onSameUrlNavigation: 'reload'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
