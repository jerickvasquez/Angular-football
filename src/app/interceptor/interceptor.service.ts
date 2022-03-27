import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class MyInterceptor implements HttpInterceptor {
  apiKey = 'L+pu66DQyYBhiA242nLTPgrCMdrqe234Gnm9Yo8FJXHZP59LzI//DRgjF6AJBia5';
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let formattedRequest = request;
    if (!request.headers.has('Accept')) {
      formattedRequest = request.clone({
        headers: request.headers
          .set('Accept', 'application/json, text/plain, */*')
          .set('Authorization', `Bearer ${this.apiKey}`),
      });
    }
    console.log(formattedRequest);
    return next.handle(formattedRequest);
  }
}
