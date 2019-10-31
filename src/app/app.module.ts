import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './common/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickModule } from 'ngx-slick';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { InnerModule } from './modules/inner.module';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { VipcardComponent } from './vipcard/vipcard.component';
import { OffersComponent } from './offers/offers.component';
import { HadiyaComponent } from './hadiya/hadiya.component';
import { LeasingComponent } from './leasing/leasing.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    ShopDetailsComponent,
    VipcardComponent,
    OffersComponent,
    HadiyaComponent,
    LeasingComponent,
    ContactComponent,
    AboutComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CoreModule,
    SharedModule,
    InnerModule,
    AppRoutingModule,
    SlickModule.forRoot(),
    AngularFontAwesomeModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
