import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class Services {

    private payrollGroupUrl: string = 'http://localhost:8080/api/books';
    Books: any;

    constructor(private http: HttpClient) {
        
    }

    public getPayrollGroups(): Observable<any[]> {
        return this.http.get<any[]>(this.payrollGroupUrl);
    }

}