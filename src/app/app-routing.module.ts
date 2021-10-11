import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogPageComponent} from './components/blog-page/blog-page.component'
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';


const routes: Routes = [
  {
    path: "/",
    component: BlogPageComponent

  },

  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
