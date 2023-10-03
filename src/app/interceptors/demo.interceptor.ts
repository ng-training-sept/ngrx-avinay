import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DemoInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Calling url ${req.url}`);
    const updatedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer token_value')
    });
    return next.handle(updatedReq);
  }

}
