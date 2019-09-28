import { Component } from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navHide() {
    $(document).ready(function () {
  
      'use strict';
      
       var c, currentScrollTop = 0,
       container = $('nashop-header');
    
       $(window).scroll(function () {
          var a = $(window).scrollTop();
          var b = container.height();
         
          currentScrollTop = a;
         
          if (c < currentScrollTop && a > b + b) {
            container.addClass("scrollUp");
          } else if (c > currentScrollTop && !(a <= b)) {
            container.removeClass("scrollUp");
          }
          c = currentScrollTop;
      });
      
    });
  }

megaMenu(){
  $(document).ready(function()  {
    $('#menu').hover(function() {
      $(this).find('#mega-nav').stop(true, true).delay(200).slideDown(500);
    }, function() {
      $(this).find('#mega-nav').stop(true, true).delay(200).slideUp(333);
    });

    $('#menu2').hover(function() {
      $(this).find('#mega-nav').stop(true, true).delay(200).slideDown(500);
    }, function() {
      $(this).find('#mega-nav').stop(true, true).delay(200).slideUp(333);
    });

    $('#menu3').hover(function() {
      $(this).find('#mega-nav').stop(true, true).delay(200).slideDown(500);
    }, function() {
      $(this).find('#mega-nav').stop(true, true).delay(200).slideUp(333);
    });

  })

}

  constructor() { }

  ngOnInit() {

    this.navHide();
    this.megaMenu();
  }

}
