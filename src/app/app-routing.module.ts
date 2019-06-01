import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'} // lazy load auth routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

// here we have to connect the root router to the auth child router
// and we do that by loading the entire child module - the auth module
// which in turn is aware of relevant routes
// because we're importing the AuthRoutingModule
// where we are clearly saying which routes matter for this auth child module
// So this module knows which routes it needs and
// therefore can connect it to our AppRoutingModule


