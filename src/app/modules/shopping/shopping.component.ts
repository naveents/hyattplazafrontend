import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService } from '../../core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  pageBanner: Array<string> = [];
  dropDownCategories: Array<string> = [];
  pageBannerLoaded: boolean = false;
  selectedCategory = '';
  categoryBlock: boolean = true;
  brandBlock: boolean = false;
  featuredItems: Array<string> = [];

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
 this.commonService.getPageBanner('shopping')
    .subscribe(banner => {
      this.pageBanner = banner.data;
      this.pageBannerLoaded = true;
    });

    this.loadCategories();
    this.loadFeaturedItems();
  }

  loadCategories()
  {
    this.genericService.getInnerPageCategories(1, localStorage.getItem('lang'))
      .subscribe( category =>{
          this.dropDownCategories = category;
    });
  }

  loadFeaturedItems()
  {
    this.genericService.getFeaturedShopOrDine('shopping', localStorage.getItem('lang'))
      .subscribe( featuredItem => {
          this.featuredItems = featuredItem.data;
      });
  }

  toggleBlock( section: string)
  {
      if(section == 'category-block'){
        this.brandBlock = false;
        this.categoryBlock = true;
      }
      else {        
        this.categoryBlock = false;
        this.brandBlock = true;
      }
  }

}
