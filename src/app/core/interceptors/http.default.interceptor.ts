  
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpDefaultInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
     // 'Content-Type': 'multipart/form-data;boundary='+Math.random(),
    //  'Content-Type': 'application/json',
    //  'Accept': 'application/json'
    };
    
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}