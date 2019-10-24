import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService } from '../../core';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss']
})
export class DiningComponent implements OnInit {

  pageBanner: Array<string> = [];
  dropDownCategories: Array<string> = [];
  pageBannerLoaded: boolean = false;
  selectedCategory = '';

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
  };


  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService
     ) { }

  ngOnInit() {
 this.commonService.getPageBanner('dining')
    .subscribe(banner => {
      this.pageBanner = banner.data;
      this.pageBannerLoaded = true;
    });

    this.loadCategories();
  }

  loadCategories()
  {
    this.genericService.getInnerPageCategories(2, localStorage.getItem('lang'))
      .subscribe( category =>{
          this.dropDownCategories = category;
    });
  }

}