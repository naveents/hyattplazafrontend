import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {


  toggleContainer = true;

  loadButtonColor() {

    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn-cs");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
  }

  showSlider() {
    $(document).ready(function(){
      $("#brands").hide();
     $("#slider").hide();
    })
  }

  switchContainertrue(){
    this.toggleContainer = true;
  }
  switchContainerfalse(){
    this.toggleContainer = false;
  }

  loadButtonClass() {
    $(document).ready(function() {
     
     
      // $("#new_section").click(function() {
      //   $("#categories").hide();
      //   $("#blur").hide();
      //   $("#brands").show();
        
        
      // })

      // $("#photo_gallery").click(function(){
      //   $("#categories").show();
      //   $("#brands").hide();
      //   $("#slider").show();
         

      // })
 
    
      


    })
  }


  categories = [
    {
      title: 'Department Stores',
      image: 'assets/hyattplaza-images/shopping/cat1.png'
    },
    {
      title: 'Electronics',
      image: 'assets/hyattplaza-images/shopping/cat2.png'
    },
    {
      title: 'Entertainment',
      image: 'assets/hyattplaza-images/shopping/cat3.png'
    },
    {
      title: 'Fashion',
      image: 'assets/hyattplaza-images/shopping/cat4.png'
    },
    {
      title: 'Lrem Ipsum',
      image: 'assets/hyattplaza-images/shopping/cat1.png'
    },
    {
      title: 'Lrem Ipsum',
      image: 'assets/hyattplaza-images/shopping/cat3.png'
    },
    {
      title: 'Lrem Ipsum',
      image: 'assets/hyattplaza-images/shopping/cat4.png'
    },
    {
      title: 'Lrem Ipsum',
      image: 'assets/hyattplaza-images/shopping/cat2.png'
    },
    {
      title: 'Lrem Ipsum',
      image: 'assets/hyattplaza-images/shopping/cat4.png'
    },
    {
      title: 'Lrem Ipsum',
      image: 'assets/hyattplaza-images/shopping/cat2.png'
    }
  ];
 
 
  stories = [
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/shopping/sh1.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/shopping/sh2.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/shopping/sh3.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/shopping/sh4.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/shopping/sh5.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: 'assets/hyattplaza-images/shopping/sh6.png'
    }
  ];

  gallery_img =[
    {
      img : "assets/brands/gallery1.png"
    },
    {
      img : "assets/brands/gallery2.png"
    },
    {
      img : "assets/brands/gallery2.png"
    },
    {
      img : "assets/brands/gallery1.png"
    },
    {
      img : "assets/brands/gallery2.png"
    },
    {
      img : "assets/brands/gallery1.png"
    }
  ]
 
   

   

  brands_img =[

  {
    img : "assets/brands/victor.png"
  },
  {
    img : "assets/brands/rolex.png"
  },
  {
    img : "assets/brands/bell.png"
  },
  {
    img : "assets/brands/charriol.png"
  },
   
  {
    img : "assets/brands/666.png"
  },
  {
    img : "assets/brands/777.png"
  },
  {
    img : "assets/brands/888.png"
  },
  {
    img : "assets/brands/999.png"
  },
  {
    img : "assets/brands/111.png"
  },
  {
    img : "assets/brands/victor.png"
  },
  {
    img : "assets/brands/rolex.png"
  },
  {
    img : "assets/brands/bell.png"
  },
  {
    img : "assets/brands/charriol.png"
  },
  
  {
    img : "assets/brands/666.png"
  },
  {
    img : "assets/brands/777.png"
  },
  {
    img : "assets/brands/888.png"
  },
  {
    img : "assets/brands/999.png"
  },
  {
    img : "assets/brands/111.png"
  },
  {
    img : "assets/brands/666.png"
  },
  {
    img : "assets/brands/777.png"
  },
  {
    img : "assets/brands/888.png"
  },
  {
    img : "assets/brands/999.png"
  },
  {
    img : "assets/brands/111.png"
  },
  {
    img : "assets/brands/bell.png"
  },
  {
    img : "assets/brands/charriol.png"
  }

  ]

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 8
  };

  slideConfig2 = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 6
  };
 


  constructor() { 

    this.toggleContainer = true;

  }

  ngOnInit() {



// SCROLL UP
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth" 
});

// ENDSCROLL UP


    this.loadButtonColor();
    this.loadButtonClass();
     this.showSlider();
  }

}
