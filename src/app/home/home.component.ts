import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {

  banners = [
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur. No qui magna doming oportere, mutat`,
      scheduleTitle: 'Lorem ipsum dolor',
      schedule: '12:30 PM - 12:00 PM',
      image: '/assets/images/home-banner-1.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur. No qui magna doming oportere, mutat`,
      scheduleTitle: 'Lorem ipsum dolor',
      schedule: '02:00 PM - 11:00 PM',
      image: '/assets/images/home-banner-2.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur. No qui magna doming oportere, mutat`,
      scheduleTitle: 'Lorem ipsum dolor',
      schedule: '09:00 AM - 12:00 AM',
      image: '/assets/images/home-banner-3.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur. No qui magna doming oportere, mutat`,
      scheduleTitle: 'Lorem ipsum dolor',
      schedule: '12:30 PM - 12:00 PM',
      image: '/assets/images/home-banner-1.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur. No qui magna doming oportere, mutat`,
      scheduleTitle: 'Lorem ipsum dolor',
      schedule: '02:00 PM - 11:00 PM',
      image: '/assets/images/home-banner-2.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'Lorem ipsum dolor sit amet, meis idque petentium mel',
      shortDesc: `Lorem ipsum dolor sit amet, meis idque petentium mel ex,
                  usu an wisi delectus appellantur. No qui magna doming oportere, mutat`,
      scheduleTitle: 'Lorem ipsum dolor',
      schedule: '09:00 AM - 12:00 AM',
      image: '/assets/images/home-banner-3.png'
    }
  ];
  currentSlideNum = 0;
  images = [
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/02.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/03.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/04.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/05.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/06.png'
    }
  ];
  events = [
    {
      title: 'LOREM IPSUM',
      date: '22/Jan',
      image: '/assets/images/07.png'
    },
    {
      title: 'LOREM IPSUM',
      date: '23/Jan',
      image: '/assets/images/08.png'
    },
    {
      title: 'LOREM IPSUM',
      date: '24/Jan',
      image: '/assets/images/09.png'
    },
    {
      title: 'LOREM IPSUM',
      date: '22/Jan',
      image: '/assets/images/07.png'
    },
    {
      title: 'LOREM IPSUM',
      date: '23/Jan',
      image: '/assets/images/08.png'
    },
    {
      title: 'LOREM IPSUM',
      date: '24/Jan',
      image: '/assets/images/09.png'
    }
  ];
  gallery = [
    [
      '/assets/images/10.png',
      '/assets/images/14.png'
    ],
    [
      '/assets/images/11.png',
      '/assets/images/15.png',
    ],
    [
    '/assets/images/12.png',
    '/assets/images/16.png',
    ],
    [
    '/assets/images/13.png',
    '/assets/images/17.png'
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
    // customize default values of carousels used by this component tree
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
