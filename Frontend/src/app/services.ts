import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class Services {

    private bookUrl: string = 'http://localhost:8080/api/book';
    private supplyUrl: string = 'http://localhost:8080/api/supply';
    private userUrl: string = 'http://localhost:8080/api/user';
    private employeeUrl: string = 'http://localhost:8080/api/employee';

    constructor(private http: HttpClient) {
        
    }

    public getBooks(): Observable<any[]> {
        return this.http.get<any[]>(this.bookUrl);
    }

    public getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.userUrl);
    }

    public getEmployees(): Observable<any[]> {
        return this.http.get<any[]>(this.employeeUrl);
    }

    public getSupplys(): Observable<any[]> {
        return this.http.get<any[]>(this.supplyUrl);
    }

    

}