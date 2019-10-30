import { PageService } from './../../core/services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guestservices',
  templateUrl: './guestservices.component.html',
  styleUrls: ['./guestservices.component.scss']
})
export class GuestservicesComponent implements OnInit {

  constructor(private pageService: PageService) { }
  services: Array<string> = [];
  awards: Array<string> = [];
  ngOnInit() {
    this.pageService.getGuestServices(localStorage.getItem('lang'))
      .subscribe(response => {
        console.log(response);
        this.services = response.data.services;
        this.awards = response.data.awards;
      });
  }

}
