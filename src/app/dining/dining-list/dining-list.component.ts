import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dining-list',
  templateUrl: './dining-list.component.html',
  styleUrls: ['./dining-list.component.scss']
})
export class DiningListComponent implements OnInit {

dinig_list =[
  {
    title: 'Sweet and Confectionery',
    image: 'assets/hyattplaza-images/dining/dsl1.png'
  },
  
  {
    title: 'Fruits & Shake',
    image: 'assets/hyattplaza-images/dining/dsl3.png'
  },
  {
    title: 'Mc Donalds',
    image: 'assets/hyattplaza-images/dining/dsl4.png'
  },
  {
    title: 'Sweet and Confectionery',
    image: 'assets/hyattplaza-images/dining/dsl1.png'
  },
   
  {
    title: 'Fruits & Shake',
    image: 'assets/hyattplaza-images/dining/dsl3.png'
  },
  {
    title: 'Mc Donalds',
    image: 'assets/hyattplaza-images/dining/dsl4.png'
  },
  {
    title: 'Sweet and Confectionery',
    image: 'assets/hyattplaza-images/dining/dsl1.png'
  },
  {
    title: 'Fruits & Shake',
    image: 'assets/hyattplaza-images/dining/dsl3.png'
  },
  {
    title: 'Mc Donalds',
    image: 'assets/hyattplaza-images/dining/dsl4.png'
  },
  {
    title: 'Sweet and Confectionery',
    image: 'assets/hyattplaza-images/dining/dsl1.png'
  },
  {
    title: 'Fruits & Shake',
    image: 'assets/hyattplaza-images/dining/dsl3.png'
  },
  {
    title: 'Mc Donalds',
    image: 'assets/hyattplaza-images/dining/dsl4.png'
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
