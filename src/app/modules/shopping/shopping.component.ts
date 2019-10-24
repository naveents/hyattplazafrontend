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

  stories = [
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-07.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-08.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-09.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-10.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-12.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-11.png'
    }
  ];

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
    this.genericService.getFeaturedShopOrDine('shopping', localStorage.getItem('lange'))
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
