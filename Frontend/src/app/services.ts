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
    private userUrl: string = 'http://localhost:8080/api/user';
    private employeeUrl: string = 'http://localhost:8080/api/employee';
    private employeephoneUrl: string  = 'http://localhost:8080/api/employeephone';
    private bookrentalUrl: string = 'http://localhost:8080/api/bookrental';
    private bookpurchaseUrl: string = 'http://localhost:8080/api/bookpurchase';
    private supplyfavoriteUrl: string = 'http://localhost:8080/api/supplyfavorite';
    private supplypurchaseUrl: string = 'http://localhost:8080/api/supplypurchase';
    private clearrecords: string = 'http://localhost:8080/api/clearrecords';
    private authorUrl: string = 'http://localhost:8080/api/author';
    private publisherUrl: string = 'http://localhost:8080/api/publisher';

    private EmpId: number = 0;
    private AuthorId: number = 0;
    private PublisherId: number = 0;

    constructor(private http: HttpClient) {
        
    }

    public getEmpId(EmpId) {
        this.EmpId = EmpId;
    }

    public getAuthorId(authorId) {
        this.AuthorId = authorId;
    }

    public getPublisherId(publisherId){
        this.PublisherId = publisherId;
    }

    public getBooks(): Observable<any[]> {
        return this.http.get<any[]>(this.bookUrl);
    }

    public getAuthors(): Observable<any[]> {
        return this.http.get<any[]>(this.authorUrl);
    }

    public getPublishers(): Observable<any[]> {
        return this.http.get<any[]>(this.publisherUrl);
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

    public getAuthor(): Observable<any> {
        return this.http.get<any>(this.authorUrl + '/' + this.AuthorId);
    }
    public getPublisher(): Observable<any> {
        return this.http.get<any>(this.publisherUrl + '/' + this.PublisherId);
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
        return this.http.get<any[]>(this.bookfavoriteUrl);
    }

    public getBookRental(): Observable<any[]> {
        return this.http.get<any[]>(this.bookrentalUrl);
    }

    public getBookPurchase(): Observable<any[]> {
        return this.http.get<any[]>(this.bookpurchaseUrl);
    }

    public getSupplyFavorite(): Observable<any[]> {
        return this.http.get<any[]>(this.supplyfavoriteUrl);
    }

    public getSupplyPurchase(): Observable<any[]> {
        return this.http.get<any[]>(this.supplypurchaseUrl);
    }

    public postAuthor(Object: any): Observable<any> {
        return this.http.post<any>(this.authorUrl, Object);
    }

    public postPublisher(Object: any): Observable<any>{
        return this.http.post<any>(this.publisherUrl, Object);
    }

    public postBookFavorite(Object: any): Observable<any>{
        return this.http.post<any>(this.bookfavoriteUrl, Object);
    }

    public postBookRental(Object: any): Observable<any>{
        return this.http.post<any>(this.bookrentalUrl, Object);
    }

    public postBookPurchase(Object: any): Observable<any>{
        return this.http.post<any>(this.bookpurchaseUrl, Object);
    }

    public postSupplyFavorite(Object: any): Observable<any>{
        return this.http.post<any>(this.supplyfavoriteUrl, Object);
    }

    public postSupplyPurchase(Object: any): Observable<any>{
        return this.http.post<any>(this.supplypurchaseUrl, Object);
    }

    public postEmployee(Object: any): Observable<any>{
        return this.http.post<any>(this.employeeUrl, Object);
    }
    
    public putEmployee(Object: any): Observable<any>{
        return this.http.put<any>(this.employeeUrl + '/' + Object.PersonID, Object);
    }

    public putAuthor(Object: any): Observable<any>{
        return this.http.put<any>(this.authorUrl + '/' + Object.AuthorID, Object);
    }

    public putPublisher(Object: any): Observable<any>{
        return this.http.put<any>(this.publisherUrl + '/' + Object.PublisherID, Object);
    }
    
    public deleteEmployee(EmpId): Observable<any>{
        return this.http.delete<any>(this.employeeUrl + '/' + EmpId);
    }

    public deleteAuthor(AuthorID): Observable<any> {
        return this.http.delete<any>(this.authorUrl + '/' + AuthorID);
    }

    public deletePublisher(PublisherID): Observable<any>{
        return this.http.delete<any>(this.publisherUrl + '/' + PublisherID);
    }

    public clearRecords(): Observable<any>{
        return this.http.delete<any>(this.clearrecords);
    }
}