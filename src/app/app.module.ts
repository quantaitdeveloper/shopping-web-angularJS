import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HellowordComponent } from './components/helloword/helloword.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {BlogPageComponent} from '../app/components/blog-page/blog-page.component';
import { SinglBlogComponent } from './components/singl-blog/singl-blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FAQComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerNavigationComponent } from './components/container-navigation/container-navigation.component';
import { FeatureProductComponent } from './components/blog-page/feature-product/feature-product.component'
@NgModule({
  declarations: [
    AppComponent,
    HellowordComponent,
    HeaderComponent,
    BlogPageComponent, SinglBlogComponent, AboutUsComponent, ContactUsComponent, FAQComponent, LoginComponent, PageNotFoundComponent, FooterComponent, ContainerNavigationComponent, FeatureProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
