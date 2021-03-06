import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogHttpService } from './blog-http.service';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'blog/:blogId',
        component: BlogViewComponent
      },
      {
        path: 'edit/:blogId',
        component: BlogEditComponent
      },
      {
        path: 'create',
        component: BlogCreateComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [BlogService, BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // tslint:disable-next-line:max-line-length
  // api key: MzE2ODI3YWM1OWRmMTNjYzRjYjEzNzUxZDhkZjUxZGM2Mjk4NGJkNGY2NTJmOWVmNmNlNzc1M2I0NDRkNTk5Yjk1NDQ2ZDZiNzY3MzYyNzFiMWY2ZTAyNWY2ZmRiMzdlNDcwY2QyYzBiMGM4ODEyMTFlZjI5ODA1MTMyMDI0NWZiYw==
 }
