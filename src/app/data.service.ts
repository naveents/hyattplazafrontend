import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Observable  } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('http://socialynerds.com/api_web/home.php');
  //return this.http.get('https://jsonplaceholder.typicode.com/users');
     
  }

  
}
