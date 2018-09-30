import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  allBlogs = [
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
      tags: ['full-stack', 'development'],
      author: 'Ashish Patel',
      title: 'Full Stack Web Developer',
      body: 'Full stack web developer works across front-end, back-end and cloud deployment stacks.',
      image: 'https://cdn-images-1.medium.com/max/2000/1*qBNlFWQ9G_RPVm7tbZaXOw.jpeg'
    }
  ];

  constructor(private _route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    const blogId = this._route.snapshot.paramMap.get('blogId');
    console.log(typeof blogId);
    this.getBlogInfo(blogId);
  }

  getBlogInfo(blogId) {
    for (const blog of this.allBlogs) {
      // tslint:disable-next-line:triple-equals
      if (blog.blogId == blogId) {
        this.currentBlog = blog;
      }
    }
  }

}
