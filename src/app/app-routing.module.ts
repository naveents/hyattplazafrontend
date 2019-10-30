import { LeasingComponent } from './leasing/leasing.component';
import { HadiyaComponent } from './hadiya/hadiya.component';
import { OffersComponent } from './offers/offers.component';
import { VipcardComponent } from './vipcard/vipcard.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './modules/shopping/shopping.component';
import { DiningComponent } from './modules/dining/dining.component';
import { EntertainmentComponent } from './modules/entertainment/entertainment.component';
import { ShoppingDetailComponent } from './modules/shopping/detail/shopping-detail.component';
import { EventsComponent } from './modules/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: 'dining',
    component: DiningComponent
  },
  {
    path: 'entertainment',
    component: EntertainmentComponent
  },
  {
    path: 'shopping/detail/:id',
    component: ShoppingDetailComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'vipcard',
    component: VipcardComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
  {
    path: 'gift-voucher',
    component: HadiyaComponent
  },
  {
    path: 'leasing',
    component: LeasingComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
