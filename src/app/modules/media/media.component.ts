import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService } from '../../core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  pageBanner: Array<string> = [];
  pageBannerLoaded: boolean = false;

  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService
     ) { }

  ngOnInit() {

    this.commonService.getPageBanner('media')
        .subscribe(banner => {
          this.pageBanner = banner.data;
          this.pageBannerLoaded = true;
        }
    );

    this.loadGalleryImages();

  }

  loadGalleryImages()
  {
    //localStorage.getItem('lang')

  }
}
