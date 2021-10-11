import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HellowordComponent } from './components/helloword/helloword.component';
import { TestComponent } from './components/test/test.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {BlogPageComponent} from '../app/components/blog-page/blog-page.component';
import { SinglBlogComponent } from './components/singl-blog/singl-blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FAQComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    HellowordComponent,
    TestComponent,
    HeaderComponent,   /* tự động import */
    BlogPageComponent, SinglBlogComponent, AboutUsComponent, ContactUsComponent, FAQComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
