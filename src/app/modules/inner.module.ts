import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping/shopping.component';
import { DiningComponent } from './dining/dining.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SlickModule } from 'ngx-slick';
import { GenericPageService } from '../core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingComponent,
    DiningComponent,
    EntertainmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SlickModule.forRoot()
  ],
  exports: [
    ShoppingComponent,
    DiningComponent,
    EntertainmentComponent
  ],
  providers: [
    GenericPageService
  ],
})
export class InnerModule { }
