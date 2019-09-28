import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {



  // storieso = [
  //   {
  //     "position": "0",
  //     "data": {
  //       "tag": "lorem ipsum",
  //       "title": "LOREM IPSUM<br>DOLOR SIT ",
  //       "image": "/assets/hyattplaza-images/4.png"
  //     }
  //   },
  //   {
  //     "position": "1",
  //     "data": {
  //       "tag": "lorem ipsum",
  //       "title": "LOREM IPSUM<br>DOLOR SIT ",
  //       "image": "/assets/hyattplaza-images/events/en2.jpg"
  //     }
  //   },
  //   {
  //     "position": "2",
  //     "data": {
  //       "tag": "lorem ipsum",
  //       "title": "LOREM IPSUM<br>DOLOR SIT ",
  //       "image": "/assets/hyattplaza-images/events/snow.jpg"
  //     }
  //   },
  //   {
  //     "position": "3",
  //     "data": {
  //       "tag": "lorem ipsum",
  //       "title": "LOREM IPSUM<br>DOLOR SIT ",
  //       "image": "/assets/hyattplaza-images/Entertainment/4.png"
  //     }
  //   },
  //   {
  //     "position": "0",
  //     "data": {
  //       "tag": "lorem ipsum",
  //       "title": "LOREM IPSUM<br>DOLOR SIT ",
  //       "image": "/assets/hyattplaza-images/4.png"
  //     },

  //   },
     
  // ];
   



  stories = [
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/events/1.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/events/2.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/events/3.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/events/4.png'
    }
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
