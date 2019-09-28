import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"]
})
export class AboutUsComponent implements OnInit {

  respose: any;

  switchVisible() {
    if (document.getElementById('Div1')) {

        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'block';
            document.getElementById('Div2').style.display = 'none';
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
        }
    }
}
  
   
   
  constructor(private http: HttpClient) {  
  }

  
   

  loadContent(){

     


    var content = [
      {
        privacy:"du  Eos at Dolores Eirmod sed ea amet lorem lorem elitr erat at dolor eos. Ut stet sea consetetur lorem et. Aliquyam diam et labore dolore sea magna. Dolores at ea diam gubergren diam, kasd vero kasd clita gubergren accusam et stet sea. Sed  ",
        marketing:"du sanken nicht schon herzen gedanken. Da und der du perlet verschwiegen nebelferne. Du sie dahinten in warum ort deine bist nun, schaust des werden du deinen die deiner gestehe, du helle gar sonder geliebet klingt nicht. Denkst zürnen hab  ",
        leasing:"Eos ipsum nonumy amet diam amet sea gubergren tempor justo justo. Eirmod et ipsum sit eirmod aliquyam sit, est gubergren clita lorem amet nonumy clita. Est accusam voluptua aliquyam et sea et eirmod elitr. Vero tempor sit amet no amet. Nonumy  ",
       marketing_des:"Magna rebum lorem et dolores amet et magna. Takimata sadipscing ut amet labore dolor tempor. Elitr at sed duo et rebum sanctus dolor clita, sea stet amet dolore consetetur eirmod diam ipsum sea dolore. Sed invidunt dolor elitr duo sit vero  "
      }
    ];

    document.getElementById("privacy").innerHTML = "<p>" + content[0].privacy + "</p>";
    document.getElementById("marketing").innerHTML = "<p>" + content[0].marketing + "</p>";
    document.getElementById("leasing").innerHTML = "<p>" + content[0].leasing + "</p>";
    document.getElementById("marketing_des").innerHTML="<p>" + content[0].marketing_des+ "</p>"

  }

  ngOnInit() {

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth" 
    });

  this.loadContent();
  }

  submitForm(data){
    this.http.post('http://socialynerds.com/api/marketing_enquiry/index.php',JSON.stringify(data)).subscribe(response => this.respose = response);
  }
  
}
