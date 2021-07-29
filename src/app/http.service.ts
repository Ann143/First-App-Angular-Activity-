import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  id: number;

  private userUrl = 'https://jsonplaceholder.typicode.com/users';
   
  constructor(private http: HttpClient) { }

  getUser():Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }

}

