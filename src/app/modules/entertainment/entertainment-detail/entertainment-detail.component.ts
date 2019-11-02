import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericPageService } from 'src/app/core';

@Component({
  selector: 'app-entertainment-detail',
  templateUrl: './entertainment-detail.component.html',
  styleUrls: ['./entertainment-detail.component.scss']
})
export class EntertainmentDetailComponent implements OnInit {

  allEntertainments: Array<string> = [];
  activeEntertainment: Array<string> = [];
  mapObject = [];
  vipObject = [];
  images = [];
  entertainmentId: number;

  categories = [
    {
      image: "assets/hyattplaza-images/Entertainment/1.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/2.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/3.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/4.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/3.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/4.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/1.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/2.png"
    }
  ];

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private genericService: GenericPageService
    ) { }
  ngOnInit() {

    this.activatedRoute.params.subscribe(routeParams => {
      this.entertainmentId = routeParams.id;
      this.loadEntertainmentData();
    });    

  }

  loadEntertainmentData()
  {
    this.genericService.getFeaturedEntertainments(localStorage.getItem('lang'))
    .subscribe( featuredItem => {
        this.allEntertainments = featuredItem.data;
        const entertainmentId = this.entertainmentId;
        this.activeEntertainment = this.allEntertainments.filter(function(entertainment) {
          return entertainment['id'] == entertainmentId;
        });
            
    });

  }

}
