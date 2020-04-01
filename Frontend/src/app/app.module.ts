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

let routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'supply', component: SupplyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HomeComponent,
    UserComponent,
    SupplyComponent,
    EmployeeComponent
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
