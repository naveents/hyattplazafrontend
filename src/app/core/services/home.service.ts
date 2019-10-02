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

  getHomeBanners(): Observable<any> {
      return this.apiService.post('/HomeBanner/loadHomeBanner')
        .pipe(map(data => data));    
  }
}