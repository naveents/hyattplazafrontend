import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService } from '../../core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit { 

  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService
     ) { }

  ngOnInit() { 
  }
}
