import { PageService } from './../core/services/page.service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {

  currentSlideNum = 0;
  gallery: any;
  showNavigationIndicators = false;
  topBanners: any = [];
  topBannerLoaded = false;
  homeCategories: any = [];
  homeCategoryLoaded = false;
  newsData: any = [];
  newsDataLoaded = false;

  galleryData: any = [];
  galleryDataLoaded = false;
  shopOpenHours: any = [];

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  slideConfigmobile = {
    dots: false,
    arrows: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  constructor(config: NgbCarouselConfig, private homeService: HomeService, private pageService: PageService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.loadBanners();
    this.loadCategories();
    this.loadNews();
    this.loadGalleryData();
    this.getShopTiming();
  }

  loadBanners() {
    this.homeService.getHomeBanners(localStorage.getItem('lang'))
      .subscribe(banners => {
        this.topBanners = banners;
        this.topBannerLoaded = true;
      });
  }

  getShopTiming() {
    this.pageService.getShopTiming(localStorage.getItem('lang'))
      .subscribe(shopTiming => {
        this.shopOpenHours = shopTiming.data;
      });
  }

  loadCategories() {
    this.homeService.getHomeCategories(localStorage.getItem('lang'))
    .subscribe(categories => {
      this.homeCategories = categories;
      this.homeCategoryLoaded = true;
    });
  }

  loadNews(page: number = 1, limit: number = 6)
  {
    this.homeService.getNewsAndEvents(localStorage.getItem('lang'), page, limit, 'home' )
    .subscribe(news => {
      this.newsData = news.data;
      this.newsDataLoaded = true;
    });
  }

  loadGalleryData()
  {
    this.homeService.getGallery(localStorage.getItem('lang'), 'home')
    .subscribe(gallery => {
      this.galleryData = gallery;      
      this.prepareGallery();
    }); 
  }

  prepareGallery()
  {    
    const gallerySet = this.galleryData['data'];
    const typeOne = gallerySet.filter(function(gallery) {
      return gallery['type'] == "type_1";
    });

    const typeTwo = gallerySet.filter(function(gallery) {
      return gallery['type'] == "type_2";
    });

    this.galleryDataLoaded = true;
    this.gallery = [
      [
         typeOne[0]['gallery_image'],
         typeTwo[0]['gallery_image'],
      ],
      [
        typeTwo[1]['gallery_image'],
        typeOne[1]['gallery_image'],
      ],
      [
        typeOne[2]['gallery_image'],
        typeTwo[2]['gallery_image'],
     ],
     [
       typeTwo[3]['gallery_image'],
       typeOne[3]['gallery_image'],
     ],
    ];

    this.homeService.getHomeCategories(localStorage.getItem('lang'))
      .subscribe(categories => {
        this.homeCategories = categories;
        this.homeCategoryLoaded = true;
      });

  }

  onSlide(slideData) {
    this.currentSlideNum = 1;
  }

  afterChange(e) {
  }

}
