import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'hyattplaza';
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();

// SCROLL UP
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth" 
});

// ENDSCROLL UP


    }, 3333);
  }
  
 

  
}
  
  

 



