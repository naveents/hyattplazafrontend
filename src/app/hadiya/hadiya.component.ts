import { PageService } from './../core/services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hadiya',
  templateUrl: './hadiya.component.html',
  styleUrls: ['./hadiya.component.scss']
})
export class HadiyaComponent implements OnInit {

  banner = '';
  pageTitle = '';
  constructor(private pageService: PageService) { }

  ngOnInit() {

    this.pageService.getPageBanner('giftvoucher', localStorage.getItem('lang'))
      .subscribe(response => {
        console.log(response);
        this.banner = response.data.cover;
        this.pageTitle = response.data.title;
      });

    this.pageService.getOffers(localStorage.getItem('lang'))
      .subscribe(response => {
        // console.log(response);
        // this.offers = response.data;
      });
  }

}
