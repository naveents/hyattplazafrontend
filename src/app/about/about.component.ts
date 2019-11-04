import { PageService } from './../core/services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private pageService: PageService) { }

  slideConfig = {
    dots: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false
  };
  banner = '';
  pageTitle = '';
  content: any;
  history: any = [];
  marketing: any;
  leasingInfoData: any;

  switchVisible() {
    if (document.getElementById('Div1')) {

      if (document.getElementById('Div1').style.display == 'none') {
        document.getElementById('Div1').style.display = 'block';
        document.getElementById('Div2').style.display = 'none';
      } else {
        document.getElementById('Div1').style.display = 'none';
        document.getElementById('Div2').style.display = 'block';
      }
    }

    window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.pageService.getPageBanner('aboutus', localStorage.getItem('lang'))
      .subscribe(response => {
        this.banner = response.data.cover;
        this.pageTitle = response.data.title;
      });

    this.pageService.getCMSContent('about', localStorage.getItem('lang'))
      .subscribe(response => {
        // console.log(response);
        this.content = response.data[0];
      });

    this.pageService.getCMSContent('marketing_info', localStorage.getItem('lang'))
      .subscribe(response => {
        // console.log(response);
        this.marketing = response.data[0];
      });

    this.pageService.getCMSContent('leasing_info', localStorage.getItem('lang'))
      .subscribe(leasingresponse => {
        console.log(leasingresponse);
        this.leasingInfoData = leasingresponse.data[0];
      });


    this.pageService.getHistory(localStorage.getItem('lang'))
      .subscribe(hresponse => {
        // console.log(response);
        this.history = hresponse.data;
      });
  }


}
