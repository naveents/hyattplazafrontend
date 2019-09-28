import { Component, OnInit } from "@angular/core";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpClient } from '@angular/common/http';
// import {OnInit} from ''
declare var jQuery: any;
declare var $: any;

@Component({
  selector: "app-buy-online",
  templateUrl: "./buy-online.component.html",
  styleUrls: ["./buy-online.component.scss"]
})
export class BuyOnlineComponent implements OnInit {

  respose: any;
  radioHide() {
    $(document).ready(function() {
      $(".form-check-input").change(function() {
        $("#add-hide").toggle();
      });
    });
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    $("#add-hide").hide();

    this.radioHide();

    $(document).ready(function() {
      $("#qar200").keyup(function() {
       
        var x = $("#qar200").val();
        if(x < 0){
          $("#qar200").val(0);
        }

        $("#total_amount").val(
          $("#qar200").val() * 200 +
            $("#qar100").val() * 100 +
            $("#qar50").val() * 50 +
            " QAR"
        );
      });
      $("#qar100").keyup(function() {
       
        var x = $("#qar100").val();
        if(x < 0){
          $("#qar100").val(0);
        }



        //this.computeData();
        $("#total_amount").val(
          $("#qar200").val() * 200 +
            $("#qar100").val() * 100 +
            $("#qar50").val() * 50 +
            " QAR"
        );
      });
      $("#qar50").keyup(function() {

        var x = $("#qar50").val();
        if(x < 0){
          $("#qar50").val(0);
        }


        $("#total_amount").val(
          $("#qar200").val() * 200 +
            $("#qar100").val() * 100 +
            $("#qar50").val() * 50 +
            " QAR"
        );

        // this.computeData();
      });
    });
  }

  submitForm(value){
    console.log(JSON.stringify(value));
    this.http.post('http://socialynerds.com/api/giftvoucher/index.php',JSON.stringify(value)).subscribe( response => { this.respose = response;});
  }
}
