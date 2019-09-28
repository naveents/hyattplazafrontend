import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stay-updated',
  templateUrl: './stay-updated.component.html',
  styleUrls: ['./stay-updated.component.scss']
})
export class StayUpdatedComponent2 implements OnInit {



  expired_blogs = [
    {
      img:'assets/hyattplaza-images/shopping/cat2.png',
      time: '3 Jan 1998',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/7.png',

      time: '3 May 1998',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/6.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/shopping/cat2.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/7.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    
  ]
 
  update =[
    {
      tag:"Justo kasd amet justo labore et elitr. Ipsum consetetur elitr justo sed sit amet erat kasd sanctus. Dolor. Aliquyam dolor diam ea lorem. Clita et ipsum labore dolore voluptua accusam amet."
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
