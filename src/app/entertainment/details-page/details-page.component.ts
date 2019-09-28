import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-details-page",
  templateUrl: "./details-page.component.html",
  styleUrls: ["./details-page.component.scss"]
})
export class DetailsPageComponent implements OnInit {
  events = [
    {
      event_date: "01/04/2019- 05/05/2019",
      event_time: "10:00 AM - 05:00 PM",
      event_location: "Lorem Ipsum",
      events_heading: "LOREM IPSUM",
      events_details:
        "Et eirmod Said and whose a that echo back i, not will or quoth is i nevermore soul. Door there again i gently the felt saintly, my soul i if a. Sure my ominous more with to that. The hopes and and nights this bird door. ea sea lorem sea aliquyam sed sea sea, invidunt magna sed et dolores et, amet sed stet takimata sadipscing stet. Sanctus magna invidunt dolor dolor kasd sit lorem. Ipsum amet diam ipsum eirmod sed dolor sea justo accusam, sit erat sit labore."
    }
  ];
  events_images = [
    {
      event_img: "assets/events/797.png",
      event_map: "assets/events/MAP.png"
    }
  ];

  categories = [
    {
      image: "assets/hyattplaza-images/Entertainment/1.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/2.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/3.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/4.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/3.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/4.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/1.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/2.png"
    }
  ];

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4
  };

  constructor() {}

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
