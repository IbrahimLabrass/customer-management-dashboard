import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements HttpInterceptor {
  private username = 'ibrahim';
  private password = 'labras';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
      },
    });

    return next.handle(authReq);
  }
}
