import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HellowordComponent } from './components/helloword/helloword.component';
import { TestComponent } from './components/test/test.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {BlogPageComponent} from '../app/components/blog-page/blog-page.component'
@NgModule({
  declarations: [
    AppComponent,
    HellowordComponent,
    TestComponent,
    HeaderComponent,   /* tự động import */
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
