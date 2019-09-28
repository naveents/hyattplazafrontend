import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leasing',
  templateUrl: './leasing.component.html',
  styleUrls: ['./leasing.component.scss']
})
export class LeasingComponent implements OnInit {

  constructor() { }

  ngOnInit() {


// SCROLL UP
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth" 
});

// ENDSCROLL UP

    var terms= [
      {
        content:"Sea labore lorem erat dolor et sadipscing diam sed amet sit. Clita ea lorem lorem eos elitr dolores et, sea ea ipsum diam sed sadipscing, diam tempor sanctus et diam, est takimata dolore at ipsum sadipscing et gubergren. Clita takimata amet sanctus consetetur erat, voluptua kasd sit est est dolor invidunt aliquyam et sea. Et labore sanctus dolore sed invidunt, et at labore dolore lorem ipsum duo est kasd voluptua. Ea lorem consetetur justo diam vero magna duo est. Ut diam clita sit sanctus accusam voluptua ipsum dolores. Accusam invidunt magna magna sed. Et et labore sed voluptua invidunt consetetur."
      }
   ] 

   var output = '';

   for(var i =0; i < terms.length; i++){
     //console.log(terms[i].content);

     output += '<p>'+terms[i].content+'<p>';

   }
   document.getElementById('terms').innerHTML = output;

  }

}
