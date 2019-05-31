import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

// we are not using this by selector
// so we don't need a selector
// but we need a template
@Component({
  templateUrl: './error.component.html'
})

export class ErrorComponent {
  // message = 'An unknown error occurred!';
  // we accept data from the error interceptor
  // with the @Inject decorator
  // this allows you to specify a special token important to the
  // dependancy injection system for Angular to identify
  // this data you are passing around.  it is required due to
  // the special way this error component is getting created
  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string}) {}
}
