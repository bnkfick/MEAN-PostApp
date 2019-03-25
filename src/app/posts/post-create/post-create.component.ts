import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  newPost = 'NO CONTENT';
  enteredValue = '';
  onAddPost(postInput: HTMLTextAreaElement) {
    console.dir();
    this.newPost = this.enteredValue;
  }
}
/* template binding
   event binding
   string interpolation
   property binding with square brackets
   two way binding */
