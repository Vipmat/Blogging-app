import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsListComponent } from './blogs/blogs-list/blogs-list.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { BlogItemComponent } from './blogs/blogs-list/blog-item/blog-item.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './add-blog/edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogsComponent,
    BlogsListComponent,
    BlogDetailComponent,
    BlogItemComponent,
    AddBlogComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
