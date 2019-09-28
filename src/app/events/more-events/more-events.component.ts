import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-events',
  templateUrl: './more-events.component.html',
  styleUrls: ['./more-events.component.scss']
})

export class MoreEventsComponent implements OnInit {


  blogs = [
    {
      img:'assets/hyattplaza-images/events/1.png',
      time: '3 Jan 1998',
      des: 'Enjoy SNOW WONDERLAND Num ere symeonnok walasth en kynzassal urodum fyodumtul. Num ere symeonnok walasth en kynzassal urodum fyodumtul.'
    },
    {
      img:'assets/hyattplaza-images/events/2.png',

      time: '3 May 1998',
      des: 'Enjoy SNOW WONDERLAND Num ere symeonnok walasth en kynzassal urodum fyodumtul.'
    },
    {
      img:'assets/hyattplaza-images/events/3.png',

      time: '22 Jan 2019',
      des: 'Enjoy SNOW WONDERLAND Num ere symeonnok walasth en kynzassal urodum fyodumtul.'
    },
    {
      img:'assets/hyattplaza-images/events/4.png',

      time: '22 Jan 2019',
      des: 'Enjoy SNOW WONDERLAND Num ere symeonnok walasth en kynzassal urodum fyodumtul.'
    },
    {
      img:'assets/hyattplaza-images/events/4.png',

      time: '22 Jan 2019',
      des: 'Enjoy SNOW WONDERLAND Num ere symeonnok walasth en kynzassal urodum fyodumtul.'
    },
    {
      img:'assets/hyattplaza-images/events/2.png',

      time: '22 Jan 2019',
      des: 'Enjoy SNOW WONDERLAND Num ere symeonnok walasth en kynzassal urodum fyodumtul.'
    },
    {
      img:'assets/hyattplaza-images/events/1.png',

      time: '22 Jan 2019',
      des: 'Enjoy SNOW WONDERLAND Num ere symeonnok walasth en kynzassal urodum fyodumtul.'
    },
    {
      img:'assets/hyattplaza-images/events/3.png',

      time: '22 Jan 2019',
      des: 'Enjoy SNOW WONDERLAND Num ere symeonnok walasth en kynzassal urodum fyodumtul.'
    },
    {
      img:'assets/hyattplaza-images/events/2.png',

      time: '22 Jan 2019',
      des: 'Enjoy SNOW WONDERLAND Num ere symeonnok walasth en kynzassal urodum fyodumtul. '
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
