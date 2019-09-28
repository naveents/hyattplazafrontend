import { Component } from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  loadButtonColor() {

    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn-cs");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
  }

  loadButtonClass() {
    $(document).ready(function() {
     
     
      $("#new_section").click(function() {
        $("#img").hide();
        $("#news").show();
        
      })

      $("#photo_gallery").click(function(){
        $("#img").show();
        $("#news").hide();

      })
 
    
      


    })
  }

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

// SCROLL UP
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth" 
});

// ENDSCROLL UP

    this.loadButtonClass();

  this.loadButtonColor();
  }

}
