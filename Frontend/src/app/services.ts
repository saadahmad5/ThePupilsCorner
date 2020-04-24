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
    private authorUrl: string = 'http://localhost:8080/api/author';
    private publisherUrl: string = 'http://localhost:8080/api/publisher';
    private bookpublisherUrl: string = 'http://localhost:8080/api/bookpublisher';
    private bookauthorrUrl: string = 'http://localhost:8080/api/bookauthor';
    private supplytypes: string = 'http://localhost:8080/api/supplytypes';
    private addedbookUrl: string = 'http://localhost:8080/api/addedbook'

    private EmpId: number = 0;
    private AuthorId: number = 0;
    private PublisherId: number = 0;
    public BookId: number = 0;
    private OfficeSupplyId: number = 0;
    private itemName:string = "";

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

    public getBookId(bookId){
        this.BookId = bookId;
    }

    public getOfficeSupplyId(officeSupplyId){
        this.OfficeSupplyId = officeSupplyId;
    }

    public getBookByName(bookName): Observable<any>{
        this.itemName = bookName;
        return this.http.get<any>(this.addedbookUrl + '/' + this.itemName);
    }

    public getAuthorsByBookID(): Observable<any>{
        return this.http.get<any[]>(this.bookauthorrUrl + '/' + this.BookId);
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

    public getBook(): Observable<any> {
        return this.http.get<any>(this.bookUrl + '/' + this.BookId);
    }

    public getOfficeSupply(): Observable<any> {
        return this.http.get<any>(this.supplyUrl + '/' + this.OfficeSupplyId);
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

    public getSupplyTypes(): Observable<any[]>{
        return this.http.get<any[]>(this.supplytypes);
    }

    public postAuthor(Object: any): Observable<any> {
        return this.http.post<any>(this.authorUrl, Object);
    }

    public postPublisher(Object: any): Observable<any>{
        return this.http.post<any>(this.publisherUrl, Object);
    }

    public postBook(Object: any): Observable<any>{
        return this.http.post<any>(this.bookUrl, Object);
    }

    public postBookPublisher(Object: any):Observable<any>{
        return this.http.post<any>(this.bookpublisherUrl, Object);
    }

    public postBookAuthor(Object: any):Observable<any>{
        return this.http.post<any>(this.bookauthorrUrl, Object);
    }

    public postOfficeSupply(Object: any): Observable<any>{
        return this.http.post<any>(this.supplyUrl, Object);
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

    public putAuthor(Object: any): Observable<any>{
        return this.http.put<any>(this.authorUrl + '/' + Object.AuthorID, Object);
    }

    public putPublisher(Object: any): Observable<any>{
        return this.http.put<any>(this.publisherUrl + '/' + Object.PublisherID, Object);
    }

    public putBook(Object: any): Observable<any>{
        return this.http.put<any>(this.bookUrl + '/' + this.BookId, Object);
    }

    public putBookPublisher(Object: any): Observable<any>{
        return this.http.put<any>(this.bookpublisherUrl + '/' + this.BookId, Object);
    }

    public putBookAuthor(Object: any): Observable<any>{
        return this.http.put<any>(this.bookauthorrUrl + '/' + this.BookId, Object);
    }

    public putOfficeSupply(Object: any): Observable<any>{
        return this.http.put<any>(this.supplyUrl + '/' + this.OfficeSupplyId, Object);
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

    public deleteBook(BookID): Observable<any>{
        return this.http.delete<any>(this.bookUrl + '/' + BookID);
    }

    public deleteBookPublisher(BookID): Observable<any>{
        return this.http.delete<any>(this.bookpublisherUrl + '/' + BookID);
    }

    public deleteBookAuthor(BookID): Observable<any>{
        return this.http.delete<any>(this.bookauthorrUrl + '/' + BookID);
    }

    public deleteOfficeSupply(SupplyID): Observable<any>{
        return this.http.delete<any>(this.supplyUrl + '/' + SupplyID);
    }

    public clearRecords(): Observable<any>{
        return this.http.delete<any>(this.clearrecords);
    }
}