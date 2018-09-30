import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, private blogService: BlogService) {

  }

  ngOnInit() {
    const blogId = this._route.snapshot.paramMap.get('blogId');
    console.log(typeof blogId);
    this.currentBlog = this.blogService.getBlogInfo(blogId);
  }

}
