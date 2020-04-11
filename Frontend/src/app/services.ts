import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class Services {

    private bookUrl: string = 'http://localhost:8080/api/book';
    private booksUrl: string = 'http://localhost:8080/api/books';
    private bookfavoriteUrl: string = 'http://localhost:8080/api/bookfavorite';
    private supplyUrl: string = 'http://localhost:8080/api/supply';
    private supplysUrl: string = 'http://localhost:8080/api/supplys';
    private supplyfavoriteUrl: string = 'http://localhost:8080/api/supplyfavorite';
    private userUrl: string = 'http://localhost:8080/api/user';
    private employeeUrl: string = 'http://localhost:8080/api/employee';
    private employeephoneUrl: string  = 'http://localhost:8080/api/employeephone';
    private bookfavorite: string = 'http://localhost:8080/api/bookfavorite';
    private bookrental: string = 'http://localhost:8080/api/bookrental';
    private bookpurchase: string = 'http://localhost:8080/api/bookpurchase';
    private supplyfavorite: string = 'http://localhost:8080/api/supplyfavorite';
    private supplypurchase: string = 'http://localhost:8080/api/supplypurchase';
    private clearrecords: string = 'http://localhost:8080/api/clearrecords';

    private EmpId: number = 0;

    constructor(private http: HttpClient) {
        
    }

    public getEmpId(EmpId) {
        this.EmpId = EmpId;
    }

    public getBooks(): Observable<any[]> {
        return this.http.get<any[]>(this.bookUrl);
    }

    public getBooksName(): Observable<any[]> {
        return this.http.get<any[]>(this.booksUrl);
    }

    public getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.userUrl);
    }

    public getEmployee(): Observable<any> {
        return this.http.get<any>(this.employeeUrl + '/' + this.EmpId);
    }

    public getEmployees(): Observable<any[]> {
        return this.http.get<any[]>(this.employeeUrl);
    }

    public getPhoneNumbers(): Observable<any[]> {
        return this.http.get<any[]>(this.employeephoneUrl + '/' + this.EmpId);
    }

    public getSupplys(): Observable<any[]> {
        return this.http.get<any[]>(this.supplyUrl);
    }

    public getSupplysName(): Observable<any[]> {
        return this.http.get<any[]>(this.supplysUrl);
    }

    public getBookFavorite(): Observable<any[]> {
        return this.http.get<any[]>(this.bookfavorite);
    }

    public getBookRental(): Observable<any[]> {
        return this.http.get<any[]>(this.bookrental);
    }

    public getBookPurchase(): Observable<any[]> {
        return this.http.get<any[]>(this.bookpurchase);
    }

    public getSupplyFavorite(): Observable<any[]> {
        return this.http.get<any[]>(this.supplyfavorite);
    }

    public getSupplyPurchase(): Observable<any[]> {
        return this.http.get<any[]>(this.supplypurchase);
    }

    public postBookFavorite(Object: any): Observable<any>{
        return this.http.post<any>(this.bookfavoriteUrl, Object);
    }

    public postSupplyFavorite(Object: any): Observable<any>{
        return this.http.post<any>(this.supplyfavoriteUrl, Object);
    }

    public postEmployee(Object: any): Observable<any>{
        return this.http.post<any>(this.employeeUrl, Object);
    }
    
    public putEmployee(Object: any): Observable<any>{
        return this.http.put<any>(this.employeeUrl + '/' + Object.PersonID, Object);
    }

    public deleteEmployee(EmpId): Observable<any>{
        return this.http.delete<any>(this.employeeUrl + '/' + EmpId);
    }

    public clearRecords(): Observable<any>{
        return this.http.delete<any>(this.clearrecords);
    }
}