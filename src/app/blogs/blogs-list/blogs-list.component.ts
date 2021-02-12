import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit {
  blogs: Blog[] = [
    new Blog(
      'A Test Blog',
      'This is a simple test',
      'https://assets.vogue.com/photos/5f5fac8b7d9362f52d645560/16:9/w_1280,c_limit/social-holding.jpg'
    ),
    new Blog(
      'A Test Blog',
      'This is a simple test',
      'https://assets.vogue.com/photos/5f5fac8b7d9362f52d645560/16:9/w_1280,c_limit/social-holding.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
