import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-card',
  templateUrl: './vip-card.component.html',
  styleUrls: ['./vip-card.component.scss']
})
export class VipCardComponent implements OnInit {


  blogs = [
    {
      img:'assets/hyattplaza-images/shopping/cat2.png',
      time: 'Buy 1 get 1',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/7.png',

      time: 'Buy 1 get 1',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',

      time: 'Buy 1 get 1',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/6.png',

      time: 'Buy 1 get 1',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/shopping/cat2.png',

      time: 'Buy 1 get 1',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/7.png',

      time: 'Buy 1 get 1',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',

      time: 'Buy 1 get 1',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/6.png',

      time: 'Buy 1 get 1',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/shopping/cat2.png',

      time: 'Buy 1 get 1',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
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

  //   var terms= [
  //     {
  //       content:"Enjoy 20% off discount on all purchases.Lorem ipsum dor sit amet. consectetur adipiscing elit.Ut hendrenint ahtijna"
  //     }
  //  ] 

  //  var output = '';

  //  for(var i =0; i < terms.length; i++){
  //    //console.log(terms[i].content);

  //    output += '<p>'+terms[i].content+'<p>';

  //  }
  //  document.getElementById('terms').innerHTML = output;
  //  var doc  = document.getElementsByClassName('off-del');

 



  }

}
