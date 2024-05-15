import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, map, take } from 'rxjs';
interface API {
  data: any;
  errorMessage: string;
  isSuccess: boolean;
  statusCode: number;
  successMessage: string;
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public urlApiFile = environment;
  private BaseUrls: any = new Map();
  constructor(private _HttpClient:HttpClient) { 
    this.BaseUrls.set('user',environment.APIURL)
  }
 
 getUser(page:number):Observable<any>{
 
  return this._HttpClient.get(`https://reqres.in/api/users?page=${page}`)
 }
 getUserDetails(id:Number):Observable<any>{
  return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
 }

}
