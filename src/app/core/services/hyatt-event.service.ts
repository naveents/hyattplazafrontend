import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class HyattEventService {
  constructor (
    private apiService: ApiService
  ) {}

  getEventDetail(eventId: number, lang: string = 'en'): Observable<any> {
      return this.apiService.get('/Category/loadEventDetail?eventID=' + eventId + '&language=' + lang)
        .pipe(map(data => data));    
  }
}