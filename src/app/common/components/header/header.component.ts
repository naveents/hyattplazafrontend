import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  topCategories: Array<string> = [];
  topCategoriesLoaded: boolean = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getNavigationCategories()
    .subscribe(cats => {
      this.topCategories = cats;
      this.topCategoriesLoaded = true;
    });
  }

}
