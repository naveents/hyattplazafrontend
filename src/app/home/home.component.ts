import { Component, OnInit } from '@angular/core';
 
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig] 

})
export class HomeComponent implements OnInit {

  banners = [
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur. `,
      scheduleTitle: 'Geant Hypermarket',
      schedule: '12:30 PM - 12:00 PM',
      image: 'assets/hyattplaza-images/banner1.jpg'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur`,
      scheduleTitle: 'Retail outlets',
      schedule: '02:00 PM - 11:00 PM',
      image: 'assets/hyattplaza-images/banner1.jpg'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur`,
      scheduleTitle: 'Food Court',
      schedule: '09:00 AM - 12:00 AM',
      image: 'assets/hyattplaza-images/banner1.jpg'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur`,
      scheduleTitle: 'F&B Outlets',
      schedule: '12:30 PM - 12:00 PM',
      image: 'assets/hyattplaza-images/banner1.jpg'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur`,
      scheduleTitle: 'Cafes',
      schedule: '02:00 PM - 11:00 PM',
      image: 'assets/hyattplaza-images/banner1.jpg'
    }
  ];
  currentSlideNum = 0;
  images = [
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/new-images/sunglass.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/new-images/cake.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/Group696.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/new-images/thattam.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/Group695.png'
    }
  ];
  events = [
    {
      title: 'LOREM IPSUM',
      date: '22/Jan',
      image: 'assets/hyattplaza-images/9.png'
    },
    {
      title: 'LOREM IPSUM',
      date: '23/Jan',
      image: 'assets/hyattplaza-images/3.png'
    },
    {
      title: 'LOREM IPSUM',
      date: '24/Jan',
      image: 'assets/hyattplaza-images/10.png'
    },
    {
      title: 'LOREM IPSUM',
      date: '22/Jan',
      image: 'assets/hyattplaza-images/9.png'
    },
    {
      title: 'LOREM IPSUM',
      date: '23/Jan',
      image: 'assets/hyattplaza-images/10.png'
    },
    {
      title: 'LOREM IPSUM',
      date: '24/Jan',
      image: 'assets/hyattplaza-images/3.png'
    }
  ];
  gallery = [
    [
      'assets/hyattplaza-images/2.png',
      'assets/images/14.png'
    ],
    [
      'assets/hyattplaza-images/3.png',
      'assets/hyattplaza-images/4.png',
    ],
    [
    'assets/hyattplaza-images/1.png',
    'assets/hyattplaza-images/6.png',
    ],
    [
    'assets/hyattplaza-images/8.png',
    'assets/hyattplaza-images/5.png'
    ]
  ];
  showNavigationIndicators = false;


  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    //  nextArrow: '<i class="fal fa-chevron-right"></i>',
    // prevArrow: '<a class="carousel-control-prev" role="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="sr-only">Prev</span></a>',
  };

  

  constructor(config: NgbCarouselConfig) { 
    config.interval = 1000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;

  }

  ngOnInit() {
  }

  onSlide(slideData) {
    this.currentSlideNum = 1;
  }

  afterChange(e) {
  } 


}
