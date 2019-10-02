import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CommonService {
  constructor (
    private apiService: ApiService
  ) {}

  getNavigationCategories(): Observable<any> {
      return this.apiService.post('/Category/loadAllCategoris')
        .pipe(map(data => data));    
  }
}