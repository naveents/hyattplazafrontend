import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gift-voucher",
  templateUrl: "./gift-voucher.component.html",
  styleUrls: ["./gift-voucher.component.scss"]
})
export class GiftVoucherComponent implements OnInit {

  gift_card = [
    {
      card_img:'assets/hyattplaza-images/gifcard.png',
      des: 'Sed ea sea ipsum et diam. Et kasd lorem et sit sit tempor clita. Sed stet et no duo sadipscing, tempor no voluptua amet clita kasd sadipscing et. Voluptua eos dolore accusam stet eirmod eos, diam diam ipsum dolores elitr labore diam diam voluptua. Eos eirmod sadipscing ipsum invidunt labore sit, sit sadipscing kasd amet rebum consetetur et magna. Sed aliquyam.'
    }
  ]

  shops = [
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUM'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    }
    ,
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    }
    ,
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUMC'

    }
  ]
   

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
