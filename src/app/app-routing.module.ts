import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
 

//import { ShoppingComponent } from './shopping/shopping.component';
 import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LeasingComponent } from './leasing/leasing.component';
import { GiftVoucherComponent } from './gift-voucher/gift-voucher.component';
import { BuyOnlineComponent } from './gift-voucher/buy-online/buy-online.component';
import { GuestServicesComponent } from './guest-services/guest-services.component';
import { VipCardComponent } from './vip-card/vip-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
//import { StoreViewComponent } from './shopping/store-view/store-view.component';
import { CareersComponent } from './careers/careers.component';
 import { from } from 'rxjs';
 
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiningComponent } from './dining/dining.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { EventsComponent } from './events/events.component';
import { StayUpdatedComponent } from './events/stay-updated/stay-updated.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { AllOffersComponent } from './all-offers/all-offers.component';
import { StayUpdatedComponent2} from './all-offers/stay-updated/stay-updated.component';
import { MediaComponent } from './media/media.component';
import { MediaDetailsComponent } from './media/media-details/media-details.component';
import { DetailsPageComponent } from './entertainment/details-page/details-page.component';
import { ErrorComponent } from './error/error.component';
import { CategoryComponent } from './categories/category/category.component';
import { StoreviewHypermarketComponent } from './categories/storeview-hypermarket/storeview-hypermarket.component';
import { ShopStoreviewComponent } from './categories/shop-storeview/shop-storeview.component';
import { ShopViewComponent} from './categories/shop-view/shop-view.component';
import { SnowWonderlandComponent } from './media/snow-wonderland/snow-wonderland.component';
import { DiningListComponent } from './dining/dining-list/dining-list.component';
import { DiningStoreComponent } from './dining/dining-store/dining-store.component';
import { MoreEventsComponent } from './events/more-events/more-events.component';

  //import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
 {path:'', component: HomeComponent},
 {path: 'shopping', component: CategoriesComponent},
 {path: 'shopping/category', component: CategoryComponent},
 {path: 'shopping/storeview_hypermarket' , component: StoreviewHypermarketComponent},
 {path: 'shopping/shop_storeview', component: ShopStoreviewComponent},
 {path: 'shopping/shop_view', component: ShopViewComponent},
 {path:'dining', component: DiningComponent},
 {path: 'dining/dining_list' , component: DiningListComponent },
 {path : 'dining/dining_store', component: DiningStoreComponent},
 {path:'entertainment', component: EntertainmentComponent},
 {path:'entertainment/details_page', component: DetailsPageComponent},
 {path:'events', component: EventsComponent},
 {path:'events/stay-updated', component: StayUpdatedComponent},
 {path:'events/events_details', component: EventsDetailsComponent},
 {path: 'events/explore_more' , component : MoreEventsComponent},
 {path:'blog', component: BlogComponent},
 {path:'blog/blog_details', component: BlogDetailsComponent},
 {path: 'all-offers', component: AllOffersComponent},
 {path:'all-offers/stay-updated', component:StayUpdatedComponent2 },
 {path:'media', component: MediaComponent},
 {path: 'media/media_details', component: MediaDetailsComponent},
  { path: 'media/snow_wonderland', component: SnowWonderlandComponent },
 
  // {path:'shoppingold', component: ShoppingComponent},
   {path: 'contact-us' ,component: ContactUsComponent},
   {path:'privacy', component: PrivacyComponent},
  {path:'terms', component: TermsComponent},
  {path:'leasing', component: LeasingComponent},
  {path:'gift-voucher', component: GiftVoucherComponent},
  {path:'gift-voucher/buy-online' , component: BuyOnlineComponent},
  {path:'guest-services', component: GuestServicesComponent},
  {path:'vip-card', component: VipCardComponent},
  {path:'about-us', component: AboutUsComponent},
  // {path:'shopping/store-view', component: StoreViewComponent},
  {path:'careers', component: CareersComponent},
  
  {path: 'error', component: ErrorComponent},
   
 
  //{path: '/*path', component: ErrorComponent}


  { path: '**', redirectTo: '/error' },

  // { path: '/error', 
  //   redirectTo: '/error',
    
  // },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
