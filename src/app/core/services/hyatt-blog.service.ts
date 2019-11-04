import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class HyattBlogService {
  constructor (
    private apiService: ApiService
  ) {}

  getBlogList(lang: string = 'en'): Observable<any> {
      return this.apiService.get('/News/loadBlog?langauge=' + lang)
        .pipe(map(data => data));    
  }

  getFeaturedBlogsList(lang: string = 'en'): Observable<any> {
    return this.apiService.get('/News/loadFeaturedBlog?langauge=' + lang)
      .pipe(map(data => data));    
  }

  getBlogDetail(blogId:number, lang: string = 'en'): Observable<any> {
    return this.apiService.get('/News/loadBlogDetail?langauge=' + lang + '&blogID=' + blogId)
      .pipe(map(data => data));    
  }

}