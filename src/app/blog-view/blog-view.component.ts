import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  // tslint:disable-next-line:max-line-length
  constructor(private _route: ActivatedRoute, private router: Router, private blogService: BlogService, private blogHttpService: BlogHttpService, private location: Location) {

  }

  ngOnInit() {
    const blogId = this._route.snapshot.paramMap.get('blogId');
    this.currentBlog = this.blogHttpService.getBlogPost(blogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data['data'];
        console.log(this.currentBlog);
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }

  deletePost() {
    this.currentBlog = this.blogHttpService.deleteBlogPost(this.currentBlog.blogId).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }

  goBack() {
    this.location.back();
  }

}
