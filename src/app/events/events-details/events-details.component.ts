import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {

  events = [
    {
      event_date:'01/04/2019- 05/05/2019',
      event_time:'10:00 AM - 05:00 PM',
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

  categories = [
    {
       
      image: 'assets/hyattplaza-images/events/1.png'
    },
    {
      
      image: 'assets/hyattplaza-images/events/2.png'
    },
    {
      
      image: 'assets/hyattplaza-images/events/3.png'
    },
    {
      
      image: 'assets/hyattplaza-images/events/4.png'
    },
    {
       
      image: 'assets/hyattplaza-images/events/1.png'
    },
    {
       
      image: 'assets/hyattplaza-images/events/4.png'
    },
    {
       
      image: 'assets/hyattplaza-images/events/3.png'
    },
    {
       
      image: 'assets/hyattplaza-images/events/2.png'
    }
  ];
 

 

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
  };

  constructor() { }

  ngOnInit() {


    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script',));


// SCROLL UP
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth" 
});

// ENDSCROLL UP
  }

}
