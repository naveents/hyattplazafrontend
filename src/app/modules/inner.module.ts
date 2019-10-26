import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping/shopping.component';
import { DiningComponent } from './dining/dining.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SlickModule } from 'ngx-slick';
import { GenericPageService } from '../core';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { OffersComponent } from './offers/offers.component';
import { GuestServicesComponent } from './guest-services/guest-services.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    DiningComponent,
    EntertainmentComponent,
    EventsComponent,
    OffersComponent,
    GuestServicesComponent
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
