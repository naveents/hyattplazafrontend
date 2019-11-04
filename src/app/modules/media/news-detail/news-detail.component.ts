import { PageService } from './../../../core/services/page.service';
import { CommonService } from './../../../core/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  newsID: number;
  newsDetail: any;
  relatedNews: any = [];
  pageBannerImage = '';
  pageBannerTitle = '';
  pageBannerLoaded = true;


  constructor(
    private router: Router,
    private commonService: CommonService,
    private pageService: PageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.newsID = routeParams.id;
    });
    this.loadNewsDetail();
    this.loadRelatedNewsDetail();
    this.commonService.getPageBanner('news')
      .subscribe(banner => {
        this.pageBannerImage = banner.data.cover;
        this.pageBannerTitle = banner.data.title;
        this.pageBannerLoaded = true;
      });
  }

  loadNewsDetail() {
    this.pageService.getNewsDetail(this.newsID, localStorage.getItem('lang'))
      .subscribe(shop => {
        this.newsDetail = shop.data[0];
      });
  }

  loadRelatedNewsDetail() {
    this.pageService.getRelatedNewsDetail(this.newsID, localStorage.getItem('lang'))
      .subscribe(related => {
        this.relatedNews = related.data;
      });
  }

}
