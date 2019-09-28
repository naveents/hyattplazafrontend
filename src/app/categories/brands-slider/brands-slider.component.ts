import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands-slider',
  templateUrl: './brands-slider.component.html',
  styleUrls: ['./brands-slider.component.scss']
})
export class BrandsSliderComponent implements OnInit {



  
  // categories = [
  //   {
  //     image : "../../../assets/brands/victor.png"
  //   },
  //   {
  //     image : "../../../assets/brands/rolex.png"
  //   },
  //   {
  //     image : "../../../assets/brands/bell.png"
  //   },
  //   {
  //     image : "../../../assets/brands/charriol.png"
  //   },
  //   // {
  //   //   image : "../../../assets/brands/breitling.png"
  //   // },
  //   // {
  //   //   image : "../../../assets/brands/666.png"
  //   // },
  //   // {
  //   //   image : "../../../assets/brands/777.png"
  //   // },
  //   // {
  //   //   image : "../../../assets/brands/888.png"
  //   // },
  //   // {
  //   //   image : "../../../assets/brands/999.png"
  //   // },
  //   // {
  //   //   image : "../../../assets/brands/111.png"
  //   // },
  //   // {
  //   //   image : "../../../assets/brands/victor.png"
  //   // }
     

  // ];
 
 

 
  // slideConfig4 = {
  //   dots: false,
  //   arrows: true,
  //   speed:300,
  //   slidesToShow:2,
  //   slidesToScroll: 4,
  // }

  rel_shop =[
    {
      image: 'assets/hyattplaza-images/shopping/relsh.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/relsh.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/relsh.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/relsh.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/relsh.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/relsh.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/relsh.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/relsh.png'
    },
  ]

 

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
  };



  constructor() { }

  ngOnInit() {
  }

}
