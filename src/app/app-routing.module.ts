import { CategoriesComponent } from './categories/categories.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './modules/shopping/shopping.component';
import { DiningComponent } from './modules/dining/dining.component';
import { EntertainmentComponent } from './modules/entertainment/entertainment.component';

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
    path: 'shop-details',
    component: ShopDetailsComponent
  },
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
