import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping/shopping.component';
import { DiningComponent } from './dining/dining.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SlickModule } from 'ngx-slick';
import { GenericPageService } from '../core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingDetailComponent } from './shopping/detail/shopping-detail.component';

import { EventsComponent } from './events/events.component';
import { GuestservicesComponent } from './guestservices/guestservices.component';
import { EntertainmentDetailComponent } from './entertainment/entertainment-detail/entertainment-detail.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { MeadiaDetailComponent } from './meadia/meadia-detail/meadia-detail.component';
import { MediaComponent } from './media/media.component';
import { MeadiaComponent } from './meadia/meadia.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    DiningComponent,
    EntertainmentComponent,
    ShoppingDetailComponent,
    EventsComponent,
    MediaComponent,
    GuestservicesComponent,
    EntertainmentDetailComponent,
    EventDetailComponent,
    MeadiaComponent,
    MeadiaDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SlickModule.forRoot()
  ],
  exports: [
    ShoppingComponent,
    DiningComponent,
    EntertainmentComponent,
    ShoppingDetailComponent,
    EventsComponent,
    MediaComponent
  ],
  providers: [
    GenericPageService
  ],
})
export class InnerModule { }
