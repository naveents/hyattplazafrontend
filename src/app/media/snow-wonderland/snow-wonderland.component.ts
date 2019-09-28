import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snow-wonderland',
  templateUrl: './snow-wonderland.component.html',
  styleUrls: ['./snow-wonderland.component.scss']
})
export class SnowWonderlandComponent implements OnInit {



  photo_gallery = [
    {
      des:'Snow WonderLand',
      img:'assets/gallery/snow.png'
    },
    {
      des:'Lorem Ipsum',
      img:'assets/gallery/sw2.png'
    },
    {
      des:'Snow WonderLand',
      img:'assets/gallery/sw3.png'
    },
    {
      des:'Snow WonderLand',
      img: 'assets/gallery/snow.png'
    },
    {
      des:'Snow WonderLand',
      img:'assets/gallery/sw2.png'
    },
    {
      des:'Snow WonderLand',
      img:'assets/gallery/sw3.png'
    },
    {
      des:'Snow WonderLand',
      img:'assets/gallery/snow.png'
    },
    {
      des:'Snow WonderLand',
      img:'assets/gallery/sw2.png'
    },
    {
      des:'Snow WonderLand',
      img:'assets/gallery/sw3.png'
    },


  ]




  constructor() { }

  ngOnInit() {

// SCROLL UP
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth" 
});

// ENDSCROLL UP
  }

}
