import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService, HomeService } from '../../../core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-images',
  templateUrl: './media-images.component.html',
  styleUrls: ['./media-images.component.scss']
})
export class MediaImagesComponent implements OnInit {

  pageBanner: Array<string> = [];
  pageBannerLoaded: boolean = false;
  albumImages: Array<string> = [];
  albumImagesLoaded: boolean = false;
  albumId: number;

  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService,
     private homeService: HomeService,
     private activatedRoute: ActivatedRoute
     ) { }

  ngOnInit() {

    this.commonService.getPageBanner('media')
        .subscribe( banner  => {
          this.pageBanner = banner.data;
          this.pageBannerLoaded = true;
        }
    );

    this.activatedRoute.params.subscribe(routeParams => {
        this.albumId = routeParams.id;
        this.loadAlbumImages();
    });    

  }

  loadAlbumImages()
  {
    this.genericService.getAlbumImages(this.albumId)
    .subscribe( images => {
      this.albumImages = images;     
      this.albumImagesLoaded = true;
    });

  }
}
