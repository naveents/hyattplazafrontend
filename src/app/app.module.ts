import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 


import { SlickModule } from 'ngx-slick';
//import { SlickCarouselModule } from 'ngx-slick-carousel';

// import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

// import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryMwComponent } from './components/gallery-mw/gallery-mw.component';
import { FooterComponent} from './common/components/footer/footer.component';

 
//import { ShoppingComponent } from './shopping/shopping.component';

//import { MultiImgSliderComponent } from './shopping/multi-img-slider/multi-img-slider.component';
import { DiningComponent } from './dining/dining.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
//import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LeasingComponent } from './leasing/leasing.component';
import {TapsComponent} from './leasing/taps/taps.component';
import { GiftVoucherComponent } from './gift-voucher/gift-voucher.component';
import { BuyOnlineComponent } from './gift-voucher/buy-online/buy-online.component';
import { GuestServicesComponent } from './guest-services/guest-services.component';
import { VipCardComponent } from './vip-card/vip-card.component';
//import { TestParComponent } from './test-par/test-par.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HistoryComponent } from './about-us/history/history.component';
//import { StoreViewComponent } from './shopping/store-view/store-view.component';
import { CareersComponent } from './careers/careers.component';
import { HeaderComponent } from './common/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import {EntertainmentComponent } from './entertainment/entertainment.component'; 
import {EventsComponent }from './events/events.component';
import { StayUpdatedComponent } from './events/stay-updated/stay-updated.component';
import {EventsDetailsComponent} from './events/events-details/events-details.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { AllOffersComponent } from './all-offers/all-offers.component';
import { StayUpdatedComponent2 } from './all-offers/stay-updated/stay-updated.component';
import { MediaComponent } from './media/media.component';
import { MediaDetailsComponent } from './media/media-details/media-details.component';
import { BrandsSliderComponent } from './categories/brands-slider/brands-slider.component';
import { DetailsPageComponent } from './entertainment/details-page/details-page.component';
import { ErrorComponent } from './error/error.component';
import { CategoryComponent } from './categories/category/category.component';

import {HttpClientModule} from '@angular/common/http';
import { StoreviewHypermarketComponent } from './categories/storeview-hypermarket/storeview-hypermarket.component';
import { ShopStoreviewComponent } from './categories/shop-storeview/shop-storeview.component';
import { ShopViewComponent } from './categories/shop-view/shop-view.component';
import { SnowWonderlandComponent } from './media/snow-wonderland/snow-wonderland.component';
import { DiningListComponent } from './dining/dining-list/dining-list.component';
import { DiningStoreComponent } from './dining/dining-store/dining-store.component';
import { MoreEventsComponent } from './events/more-events/more-events.component';
import { FormsModule } from '@angular/forms';
 
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryMwComponent,
    
    FooterComponent,
  
    // ShoppingComponent,
    // MultiImgSliderComponent,
    DiningComponent,
    ContactUsComponent,
    EntertainmentComponent,
    EventsComponent,
    StayUpdatedComponent,
    EventsDetailsComponent,
    TermsComponent,
    PrivacyComponent,
    LeasingComponent,
    TapsComponent,
    GiftVoucherComponent,
    BuyOnlineComponent,
    GuestServicesComponent,
    VipCardComponent,
    
    AboutUsComponent,
    HistoryComponent,
  //  StoreViewComponent,
    CareersComponent,
    HeaderComponent,
    HomeComponent,
    CategoriesComponent,
    BlogComponent,
    BlogDetailsComponent,
    AllOffersComponent,
    StayUpdatedComponent2,
    MediaComponent,
    MediaDetailsComponent,
    BrandsSliderComponent,
    DetailsPageComponent,
    ErrorComponent,
    CategoryComponent,
    StoreviewHypermarketComponent,
    ShopStoreviewComponent,
    ShopViewComponent,
    SnowWonderlandComponent,
    DiningListComponent,
    DiningStoreComponent,
    MoreEventsComponent,
    SpinnerComponent,
    
   
    
   
  ],
  imports: [
   // SlickCarouselModule,
    SlickModule.forRoot(),
   // MDBBootstrapModulesPro.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
    
  ],
  providers: [
    // MDBSpinningPreloader
  ],
  bootstrap: [AppComponent]
})


 

export class AppModule { }
