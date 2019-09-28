import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  respose: any;
  subscription(value) {
    this.http.post('http://socialynerds.com/api/subscribe/index.php',JSON.stringify(value)).subscribe( response => this.respose = response);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
