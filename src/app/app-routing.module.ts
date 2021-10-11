import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogPageComponent} from './components/blog-page/blog-page.component'
import {AboutUsComponent} from './components/about-us/about-us.component'
import {ContactUsComponent} from './components/contact-us/contact-us.component'
import {FAQComponent} from './components/faq/faq.component'
import {LoginComponent} from './components/login/login.component'
import {SinglBlogComponent} from './components/singl-blog/singl-blog.component'


const routes: Routes = [
  {
    path: "blog_page",
    component: BlogPageComponent
  },
  {
    path: "single_blog",
    component: SinglBlogComponent
  },
  {
    path: "about_us",
    component: AboutUsComponent
  },
  {
    path: "contact_us",
    component: ContactUsComponent
  },
  {
    path: "faq_page",
    component: FAQComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
