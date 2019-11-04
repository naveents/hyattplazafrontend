import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PageService {
  constructor(
    private apiService: ApiService
  ) {}

  getVipcards(lang: string = 'en'): Observable<any> {
      return this.apiService.get('/Category/loadVipParticipants?language=' + lang)
        .pipe(map(data => data));
  }

  getOffers(lang: string = 'en'): Observable<any> {
    return this.apiService.get('/Offers/loadOffers?language=' + lang)
      .pipe(map(data => data));
  }

  getPageBanner(page: string = 'aboutus', lang: string = 'en'): Observable<any> {
    return this.apiService.get('/PageBanner/loadPageBanner?language=' + lang + '&pageKey=' + page)
      .pipe(map(data => data));
  }

  getGuestServices(lang: string = 'en'): Observable<any> {
    return this.apiService.get('/Brands/loadGustService?language=' + lang )
      .pipe(map(data => data));
  }

  getHadiyaStores(lang: string = 'en'): Observable<any> {
    return this.apiService.get('/Category/loadHadiyaStores?language=' + lang )
      .pipe(map(data => data));
  }

  postLeasingForm(formData) {
    return this.apiService.formDataPost (
      '/Category/LeasingMail', formData
    );
  }

  getNewsDetail(newsID: number = 0, lang: string = 'en'): Observable<any> {
    return this.apiService.get('/News/loadNewsDetails?language=' + lang + '&newsID=' + newsID )
      .pipe(map(data => data));
  }

  getRelatedNewsDetail(newsID: number = 0, lang: string = 'en'): Observable<any> {
    return this.apiService.get('/News/loadRelatedNews?language=' + lang + '&newsID=' + newsID )
      .pipe(map(data => data));
  }

  getCMSContent(field: string = '', lang: string = 'en'): Observable<any> {
    return this.apiService.get('/Brands/cmsContentShow?language=' + lang + '&field=' + field )
      .pipe(map(data => data));
  }

  getHistory(lang: string = 'en'): Observable<any> {
    return this.apiService.get('/Category/history?language=' + lang )
      .pipe(map(data => data));
  }

  getMarketingData(lang: string = 'en'): Observable<any> {
    return this.apiService.get('/Category/history?language=' + lang )
      .pipe(map(data => data));
  }

  getShopTiming(lang: string = 'en'): Observable<any> {
    return this.apiService.get('/ShopTimings/loadShopTimings?language=' + lang )
      .pipe(map(data => data));
  }
}
