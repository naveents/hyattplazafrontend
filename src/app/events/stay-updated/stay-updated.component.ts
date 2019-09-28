import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stay-updated',
  templateUrl: './stay-updated.component.html',
  styleUrls: ['./stay-updated.component.scss']
})
export class StayUpdatedComponent implements OnInit {

  stories= [
 
{
  tag: 'LOREM IPSUM',
  title: 'LOREM IPSUM<br>DOLOR SIT',
  image: 'assets/hyattplaza-images/events/1.png'
},
{
  tag: 'LOREM IPSUM',
  title: 'LOREM IPSUM<br>DOLOR SIT',
  image: 'assets/hyattplaza-images/events/2.png'
}
  ]
  update =[
    {
      tag:"Justo kasd amet justo labore et elitr. Aliquyam dolor diam ea lorem. Clita et ipsum labore dolore voluptua accusam amet."
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
