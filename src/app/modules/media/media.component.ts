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

  }

  loadGalleryAlbums()
  {
    this.homeService.getGallery(localStorage.getItem('lang'), 'gallery')
    .subscribe(gallery => {
      this.galleryData = gallery;     
      this.galleryDataLoaded = true;
    });

  }
}
