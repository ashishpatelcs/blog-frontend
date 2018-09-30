import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  private APIURL = 'https://blogapp.edwisor.com/api/v1/blogs';
  // tslint:disable-next-line:max-line-length
  private authToken = 'MzE2ODI3YWM1OWRmMTNjYzRjYjEzNzUxZDhkZjUxZGM2Mjk4NGJkNGY2NTJmOWVmNmNlNzc1M2I0NDRkNTk5Yjk1NDQ2ZDZiNzY3MzYyNzFiMWY2ZTAyNWY2ZmRiMzdlNDcwY2QyYzBiMGM4ODEyMTFlZjI5ODA1MTMyMDI0NWZiYw==';

  constructor(private http: HttpClient) { }

  getAllBlogs() {
    return this.http.get('/all?authToken=' + this.authToken);
  }

  private HandleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
