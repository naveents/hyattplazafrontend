import { PageService } from './../core/services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vipcard',
  templateUrl: './vipcard.component.html',
  styleUrls: ['./vipcard.component.scss']
})
export class VipcardComponent implements OnInit {

  constructor(private pageService: PageService) { }
  vipcards: Array<string> = [];
  banner: any = '';
  pageTitle: any = '';

  ngOnInit() {
    this.pageService.getVipcards(localStorage.getItem('lang'))
      .subscribe(response => {
        console.log(response);
        this.vipcards = response.data;
      });

    this.pageService.getPageBanner('vipcards', localStorage.getItem('lang'))
      .subscribe(response => {
        this.banner = response.data.cover;
        this.pageTitle = response.data.title;
      });
  }

}
