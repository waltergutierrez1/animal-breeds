import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(
    private http: HttpClient
  ) {}

  public getMethod(path: string, headers: any = {}): Observable<any> {
    return this.http.get<any>(`${path}`, headers);
  }

  //public postMethod(
  //  path: string,
  //  body: any,
  //  options: any = {}
  //): Observable<any> {
  //  return this.http.post<any>(`${path}`, body, options);
  //}
//
  //public putMethod(
  //  path: string,
  //  body: any,
  //  options: any = {}
  //): Observable<any> {
  //  return this.http.put<any>(`${this.apiUrl}${path}`, body, options);
  //}
}

