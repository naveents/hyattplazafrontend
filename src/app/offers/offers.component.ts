import { PageService } from './../core/services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(private pageService: PageService) { }
  offers: Array<string> = [];
  banner = '';
  pageTitle = '';
  ngOnInit() {

    this.pageService.getPageBanner('offers', localStorage.getItem('lang'))
      .subscribe(response => {
        console.log(response);
        this.banner = response.data.cover;
        this.pageTitle = response.data.title;
      });

    this.pageService.getOffers(localStorage.getItem('lang'))
      .subscribe(response => {
        // console.log(response);
        this.offers = response.data;
      });
  }

}
