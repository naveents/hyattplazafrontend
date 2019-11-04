import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService, HomeService } from '../../core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService,
     private homeService: HomeService
     ) { }

  pageBanner: any = [];
  pageBannerLoaded = false;
  galleryData: any = [];
  galleryDataLoaded = false;
  newsData: any = [];
  newsDataLoaded = false;
  showTab = 1;

  ngOnInit() {

    this.commonService.getPageBanner('gallery')
        .subscribe(banner => {
          this.pageBanner = banner.data;
          this.pageBannerLoaded = true;
        }
    );

    this.loadGalleryAlbums();
    this.loadNews();

  }
  tabToggle(index) {
    this.showTab = index;
  }

  loadGalleryAlbums() {
    this.homeService.getGallery(localStorage.getItem('lang'), 'gallery')
    .subscribe(gallery => {
      this.galleryData = gallery;
      this.galleryDataLoaded = true;
    });

  }
  loadNews() {
    this.homeService.getNewsAndEvents(localStorage.getItem('lang'), 0, 15, 'news')
    .subscribe(res => {
      this.newsData = res.data;
      console.log(this.newsData);
      this.newsDataLoaded = true;
    });

  }

}
