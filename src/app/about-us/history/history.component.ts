import { Component, Directive , OnInit, ElementRef} from '@angular/core';
//import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import 'bootstrap-daterangepicker';

import '../../../assets/js/history.js';

declare const myTest1: any;



// declare var jQuery: any;
// declare var $ : any;
import * as $ from 'jquery';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

 


export class HistoryComponent implements OnInit {

  

  testImage:String="assets/hyattplaza-images/banner1.jpg";
  testImage2:String="assets/hyattplaza-images/banner1.jpg";
 year:String="2019";
 year2:String="2006";
 year3:String="2003";

  constructor() {



   }

  ngOnInit() {

    myTest1();

 
     

    var history= [
      {
        hisdesc:"<p>Consetetur  a eirmod clita est dolor sanctus clita, rebum sit gubergren nonumy sed. Et invidunt sit sadipscing sit lorem dolor dolore kasd stet, amet no clita est gubergren justo dolores lorem dolores labore, tempor eirmod sit et elitr, gubergren diam sea lorem consetetur dolore sanctus rebum, lorem sed sadipscing magna et,  kasd dolore lorem gubergren takimata dolor clita. Eos aliquyam lorem et sanctus eirmod takimata sit accusam lorem, elitr diam stet kasd lorem lorem, Eos lorem et et et et. Diam sit gubergren invidunt amet consetetur stet sed sadipscing, labore voluptua amet takimata et erat. No amet lorem no duo rebum. Dolores diam vero dolor eirmod diam sanctus duo. Est amet ea vero dolor et. Dolore aliquyam labore. </p>"
      }
   ] 

   var hist1 = '';

   for(var i =0; i < history.length; i++){
     //console.log(terms[i].content);

     hist1 += '<p>'+history[i].hisdesc+'<p>';

   }
   document.getElementById('history').innerHTML = hist1;


// HistoryDescription2

   var history2= [
    {
      hisdesc2:"<p>Consetetur et dolore takimata ipsum invidunt Ea dolor sed magna eirmod clita est dolor sanctus clita, rebum sit gubergren nonumy sed. Et invidunt sit sadipscing sit lorem dolor dolore kasd stet, amet no clita est gubergren justo dolores lorem dolores labore, tempor eirmod sit et elitr, gubergren diam sea lorem consetetur dolore sanctus rebum, lorem sed sadipscing magna et, invidunt amet. ipsum magna dolores, gubergren et kasd dolore lorem gubergren takimata dolor clita. Eos aliquyam lorem et sanctus eirmod takimata sit accusam lorem, elitr diam stet kasd lorem lorem, diam sadipscing eirmod sed dolore eirmod nonumy sed. Gubergren erat aliquyam sea et et ut tempor, vero amet nonumy invidunt rebum consetetur. Diam voluptua gubergren  </p>"
    }
 ] 

 var hist2 = '';

 for(var i =0; i < history2.length; i++){
   //console.log(terms[i].content);

   hist2 += '<p>'+history2[i].hisdesc2+'<p>';

 }
 document.getElementById('history2').innerHTML = hist2;


//  HistoryDescription2

var history3= [
  {
    hisdesc3:"<p>Consetetur et dolore takimata ipsum invidunt Ea dolor sed magna eirmod clita est dolor sanctus clita, rebum sit gubergren nonumy sed. Et invidunt sit sadipscing sit lorem dolor dolore kasd stet, amet no clita est gubergren justo dolores lorem dolores labore, tempor eirmod sit et elitr, gubergren diam sea lorem consetetur dolore sanctus rebum, lorem sed sadipscing magna et, invidunt amet. ipsum magna dolores, gubergren et kasd dolore lorem gubergren takimata dolor clita. Eos aliquyam lorem et sanctus eirmod takimata sit accusam lorem, elitr diam stet kasd lorem lorem, diam sadipscing eirmod sed dolore eirmod nonumy sed. Gubergren erat aliquyam sea et et ut tempor, vero amet nonumy invidunt rebum consetetur. Diam voluptua gubergren </p>"
  }
] 

var hist3 = '';

for(var i =0; i < history2.length; i++){
 //console.log(terms[i].content);

 hist3 += '<p>'+history3[i].hisdesc3+'<p>';

}
document.getElementById('history3').innerHTML = hist3;




    
    
  }


  


}
