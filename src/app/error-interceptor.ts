import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ErrorComponent } from './error/error.component';

// register the interceptor in app module
// now every outgoing http request
// will have this interceptor attached to it
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // handle gives us back the response observable stream
    // hook into that stream and listen to events
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        // must return an observable here inside of catch error
        // due to auth service and post service
        // expecting to receive an observable
        // now do error handling here
        let errorMessage = 'An unknown error occurred!';
        if (error.error.message) {
            errorMessage = error.error.message;
            // for email already in use -
            // error.error.error.message
            // from mongoose unique validator
            // adds another error object nested in there
        }
        this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
        return throwError(error); // will generate a new observable
      })
    );
  }
}
