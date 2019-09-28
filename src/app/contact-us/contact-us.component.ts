import { Component } from "@angular/core";

import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import "../../assets/js/flagstrap.js";
import { HttpClient } from '@angular/common/http';

declare const flagTest: any;

declare var jQuery: any;
declare var $: any;

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {

  respose: any;
  enquiry = [
    {
      name: "OMAR SABAHIE",
      pos: "Marketing Executive",
      Tel: "44999657",
      mail: "omar@hyattplaza.com"
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    flagTest();

    // SCROLL UP
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

    // ENDSCROLL UP
  }

  submitContact(data){
    this.http.post('http://socialynerds.com/api/contact_us/index.php',JSON.stringify(data)).subscribe( response => this.respose = response);
  }
}
