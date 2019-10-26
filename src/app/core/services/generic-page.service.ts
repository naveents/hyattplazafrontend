import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class GenericPageService {
  constructor (
    private apiService: ApiService
  ) {}

  getInnerPageCategories(catId: number, lang: string = 'en'): Observable<any> {
      return this.apiService.get('/Category/loadSubCategorisByCatID?categoryID=' + catId + '&language=' + lang)
        .pipe(map(data => data));
  }

  getFeaturedShopOrDine(key: string, lang: string = 'en'): Observable<any> {
     return this.apiService.get('/Brands/loadFeaturedStoreORResturent?language=' + lang + '&categoryKey=' + key)
        .pipe(map(data => data));
  }

  getFeaturedEntertainments(lang: string = 'en'): Observable<any> {
     return this.apiService.get('/Brands/loadAllEntertainmentWithDetails?language=' + lang)
        .pipe(map(data => data));
  }

  getFeaturedEvents(page: number, limit: number, lang: string = 'en'): Observable<any> {
    return this.apiService.get('/Category/loadAllEventList?language=' + lang + '&limitFrom=' + page + '&limitTo=' + limit)
       .pipe(map(data => data));
  }
}
