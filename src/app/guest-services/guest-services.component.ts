import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-services',
  templateUrl: './guest-services.component.html',
  styleUrls: ['./guest-services.component.scss']
})
export class GuestServicesComponent implements OnInit {


  employee_img  = [
    {
      img:'assets/hyattplaza-images/Guestservices/lar.png'
    },
    {
      img:'assets/hyattplaza-images/Guestservices/sml.png'
    },

  ]

  details = [
    {
      des:'No dolores aliquyam dolor amet ea dolor gubergren invidunt diam sed, sea no consetetur takimata sadipscing dolore.'
    },
    {
      name: 'NAME'
    },
    {
      month: 'MONTH'
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

  //   var privacy= [
  //     {
  //       content:"<p>Vero dolore amet et invidunt justo lorem sit, kasd dolores ut dolore invidunt eirmod amet voluptua</p>Lorem lorem ipsum tempor ut sit takimata ut at, nonumy amet diam dolor dolor amet vero labore, magna duo et diam ea est amet"
  //     }
  //  ] 

  //  var output = '';

  //  for(var i =0; i < privacy.length; i++){
  //    //console.log(terms[i].content);

  //    output += '<p>'+privacy[i].content+'<p>';

  //  }
  //  document.getElementById('privacy').innerHTML = output;



  }

}
