import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storeview-hypermarket',
  templateUrl: './storeview-hypermarket.component.html',
  styleUrls: ['./storeview-hypermarket.component.scss']
})
export class StoreviewHypermarketComponent implements OnInit {


  events = [
    {
      event_date:'01/04/2019- 05/05/2019',
      event_time:'10:00 AM - 10:00 PM',
      event_location:'Lorem Ipsum',
      events_heading:'LOREM IPSUM',
      events_details:"Et eirmod ea sea lorem sea aliquyam sed sea sea, invidunt magna sed et dolores et, amet sed stet takimata sadipscing stet. Sanctus magna invidunt dolor dolor kasd sit lorem. Ipsum amet diam ipsum eirmod sed dolor sea justo accusam, sit erat sit labore."
      
    }
  ]
  events_images = [
    {
      event_img:'assets/events/797.png',
      event_map:'assets/events/MAP.png',
    }
  ]

   
  categories =[
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

 





  offers = [
    {
      image: 'assets/hyattplaza-images/shopping/offers.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/offers.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/offers.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/offers.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/offers.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/offers.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/offers.png'
    },
    {
      image: 'assets/hyattplaza-images/shopping/offers.png'
    }
  ]

 

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
  };


  slideConfig2 = {
    dots: false,
    arrows: true,
    speed:300,
    slidesToShow:4,
    slidesToScroll: 4,
  }


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
