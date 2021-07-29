import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { User } from './../models';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private http: HttpService) { }

  users: User[];
  user: User;

  isShown = false;

  ngOnInit(): void {
    this.http.getUser().subscribe(users => {
     this.users = users.map(user => {
        user.show = false;
        return user;
     }) as User[];
     console.log(this.users );
    })
  }

  showDetail(user) {
    this.isShown = true;
    this.user = user;
    }

  hideDetail(){
    this.isShown = false;
  }
 
  

}
