import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
   
    

  constructor() { }


  ngOnInit() {

    var full=false;

function fill(){
  full=!full;
  document.getElementById("logocontainer").style.backgroundColor=full?"#3ebffa":"transparent";
}
    
  }

}
