import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkFormComponent } from './link-form/link-form.component';


const routes: Routes = [
	{ path: 'links', component: LinkListComponent },
	{ path: 'addLink', component: LinkFormComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
