import { Component, OnInit } from '@angular/core';
//import { DataService} from '../../data.service';
import { Observable } from 'rxjs/';
import { EmployeeService } from 'src/app/employee.service';

declare var jQuery: any;
declare var $: any;

 
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  

})
export class CategoryComponent implements OnInit {
 
 
// APIREQUEST
//users: Array<any>;

// ENDAPI



 
  mens_fasion= [
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',
      store_name:'LOREM IPSUM'
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

  category = [
    {
      cat_id:'1',
      cat_name:'mens_fashion',
      cat_value:'1'
    },
    {

      cat_id:'2',
      cat_name:'Cat2',
      cat_value:'2'
    },
    {

      cat_id:'3',
      cat_name:'Cat3',
      cat_value:'3'
    },
    {

      cat_id:'4',
      cat_name:'Cat4',
      cat_value:'4'
    },
    {

      cat_id:'5',
      cat_name:'Cat5',
      cat_value:'5'
    },
  ]


 
//public employees =[];
employees:Object;
cover_img:String;
cover_name:String;


  constructor( private _employeeService: EmployeeService) { }
  // constructor( ) { }


  ngOnInit() {

// SCROLL UP
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth" 
});

// ENDSCROLL UP


    // SECONDAPICALL
    this._employeeService.getEmployees()
    .subscribe(data => {
      this.cover_img = data['cover_img'];
      this.cover_name = data['cover_name'];
      this.employees = data['store_list'];

    
  });

    // END API

    // API

// this.dataServ.getUsers().subscribe (
//   data => this.users =data[0]
// )
// console.log("Hello this is what u hav: "+ this.dataServ[name]);
// ED API




    // $(document).ready(function () {
    //   $("#cat").change(function(){

    //    alert($('#cat').val());
    //   })
    // })
  
 
  }

}
