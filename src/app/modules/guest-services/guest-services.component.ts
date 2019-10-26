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
  }

}
