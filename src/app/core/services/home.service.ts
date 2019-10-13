import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {
  constructor (
    private apiService: ApiService
  ) {}

  getHomeBanners(lang: string = 'en'): Observable<any> {
      return this.apiService.get('/HomeBanner/loadHomeBanner?pageKey=Home&language=' + lang)
        .pipe(map(data => data));    
  }

  getHomeCategories(lang: string = 'en'): Observable<any> {
    return this.apiService.get('/Category/loadAllCategoris?language=' + lang)
    .pipe(map(data => data)); 
  }
}