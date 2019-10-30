import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meadia',
  templateUrl: './meadia.component.html',
  styleUrls: ['./meadia.component.scss']
})
export class MeadiaComponent implements OnInit {

  photo_gallery = [
    {
      des:'Snow WonderLand',
      img:'assets/gallery/snow.png'
    },
    {
      des:'Lorem Ipsum',
      img:'assets/gallery/g2.png'
    },
    {
      des:'Lorem Ipsum',
      img:'assets/gallery/g3.png'
    },
    {
      des:'Snow WonderLand',
      img:'assets/gallery/snow.png'
    },
    {
      des:'Lorem Ipsum',
      img:'assets/gallery/g2.png'
    },
    {
      des:'Lorem Ipsum',
      img:'assets/gallery/g3.png'
    },
    {
      des:'Snow WonderLand',
      img:'assets/gallery/snow.png'
    },
    {
      des:'Lorem Ipsum',
      img:'assets/gallery/g2.png'
    },
    {
      des:'Lorem Ipsum',
      img:'assets/gallery/g3.png'
    },


  ]




  blogs = [
    {
      img:'assets/hyattplaza-images/9.png',
      time: '3 Jan 1998',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/3.png',

      time: '3 May 1998',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/10.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/9.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/shopping/cat3.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/10.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    
  ]
  


  constructor() { }

  ngOnInit() {
  }
  showTab = 1;
  tabToggle(index){
    this.showTab =index;
  }

}
