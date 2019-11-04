import { Component, OnInit } from '@angular/core';

import { CommonService, HyattBlogService } from 'src/app/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  pageBanner: any = [];
  pageBannerLoaded: boolean = false;
  featuredBlogs: any = [];
  featuredBlogsLoaded : boolean = false;
  blogLists: any = [];
  blogListsLoaded: boolean = false;

  constructor(
     private commonService: CommonService,
     private blogService: HyattBlogService
     ) { }

  ngOnInit() {
       this.commonService.getPageBanner('blog')
        .subscribe(banner => {
          this.pageBanner = banner.data;
          this.pageBannerLoaded = true;
        });
        this.loadFeaturedBlogs();
        this.loadAllBlogs();
  }

  loadFeaturedBlogs()
  {
    this.blogService.getFeaturedBlogsList(localStorage.getItem('lang'))
    .subscribe( featuredBlog => {
        this.featuredBlogs = featuredBlog.data;
        this.featuredBlogsLoaded = true;
    });
  }

  loadAllBlogs()
  {
    this.blogService.getBlogList(localStorage.getItem('lang'))
    .subscribe( blogs => {
        this.blogLists = blogs.data;
        this.blogListsLoaded = true;
    });
  }
}
