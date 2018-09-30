import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private allBlogs = [
    {
      blogId: 1,
      lastModified: '04/04/2018',
      tags: ['welcome', 'hello'],
      author: 'Ashish Patel',
      title: 'Welcome to my blog',
      body: 'This is my first blog post. Thank you for visiting!',
      image: 'https://i.iheart.com/v3/re/new_assets/59ef8623219fe106dc1b0659'
    },
    {
      blogId: 2,
      lastModified: '08/08/2018',
      tags: [],
      author: 'Ashish Patel',
      title: 'Full Stack Web Developer',
      body: 'Full stack web developer works across front-end, back-end and cloud deployment stacks.',
      image: 'https://cdn-images-1.medium.com/max/2000/1*qBNlFWQ9G_RPVm7tbZaXOw.jpeg'
    }
  ];

  constructor() { }

  getAllBlogs() {
    return this.allBlogs;
  }

  getBlogInfo(blogId) {
    for (const blog of this.allBlogs) {
      // tslint:disable-next-line:triple-equals
      if (blog.blogId == blogId) {
        return blog;
      }
    }
  }
}
