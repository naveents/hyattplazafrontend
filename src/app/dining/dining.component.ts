import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss']
})
export class DiningComponent implements OnInit {

  categories = [
    {
      title: 'Sweet and Confectionery',
      image: 'assets/hyattplaza-images/dining/dsl1.png'
    },
    {
      title: 'Restaurants & cafe',
      image: 'assets/hyattplaza-images/dining/dsl2.png'
    },
    {
      title: 'Fruits & Shake',
      image: 'assets/hyattplaza-images/dining/dsl3.png'
    },
    {
      title: 'Mc Donalds',
      image: 'assets/hyattplaza-images/dining/dsl4.png'
    },
    {
      title: 'Lrem Ipsum',
      image: 'assets/hyattplaza-images/dining/dsl3.png'
    },
    {
      title: 'Lrem Ipsum',
      image: 'assets/hyattplaza-images/dining/dsl4.png'
    },
    {
      title: 'Lrem Ipsum',
      image: 'assets/hyattplaza-images/dining/dsl1.png'
    },
    {
      title: 'Lrem Ipsum',
      image: 'assets/hyattplaza-images/dining/dsl2.png'
    }
  ];
  
  
  restaurants = [
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/dining/fr1.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/dining/fr2.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/dining/fr3.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/dining/fr4.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/dining/fr5.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/dining/fr6.png'
    }
  ];

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
  };
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
