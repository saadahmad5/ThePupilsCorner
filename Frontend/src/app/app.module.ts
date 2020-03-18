import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

let routes = [
  { path: 'books', component: BooksComponent },
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes,
      {
        onSameUrlNavigation: 'reload'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
