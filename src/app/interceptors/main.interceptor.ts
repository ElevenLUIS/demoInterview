// src/app/auth/token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
        url: `http://localhost:8080/api/${request.url}`,
        setHeaders: {
            api_key: 'g00dLuCk'
        }
    });
    return next.handle(request);
  }
}
