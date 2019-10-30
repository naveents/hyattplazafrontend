import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService, HomeService } from '../../core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  pageBanner: Array<string> = [];
  pageBannerLoaded: boolean = false;
  galleryData: Array<string> = [];
  galleryDataLoaded: boolean = false;
  newsBlock: boolean = false;
  galleryBlock: boolean = true;
  newsData: Array<string> = [];
  newsDataLoaded: boolean = false;

  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService,
     private homeService: HomeService
     ) { }

  ngOnInit() {

    this.commonService.getPageBanner('media')
        .subscribe(banner => {
          this.pageBanner = banner.data;
          this.pageBannerLoaded = true;
        }
    );

    this.loadGalleryAlbums();
    this.loadNews();

  }

  loadNews(page: number = 1, limit: number = 6 )
  {
    this.homeService.getNewsAndEvents(localStorage.getItem('lang'), page, limit, 'home' )
    .subscribe(news => {
      this.newsData = news.data;
      this.newsDataLoaded = true;
    });
  }

  loadGalleryAlbums()
  {
    this.homeService.getGallery(localStorage.getItem('lang'), 'gallery')
    .subscribe(gallery => {
      this.galleryData = gallery;     
      this.galleryDataLoaded = true;
    });

  }

  toggleBlock( section: string)
  {
      if(section == 'gallery-block'){
        this.newsBlock = false;
        this.galleryBlock = true;
      }
      else {        
        this.galleryBlock = false;
        this.newsBlock = true;
        
      }
  }

}
