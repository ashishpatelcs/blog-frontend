import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  validCategories: Array<string> = ['Comedy', 'Drama', 'Television', 'Technology'];


  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const blogId = this._route.snapshot.paramMap.get('blogId');
    this.currentBlog = this.blogHttpService.getBlogPost(blogId).subscribe(
      data => {
        this.currentBlog = data['data'];
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }

  editPost() {
    this.blogHttpService.editBlogPost(this.currentBlog).subscribe(
      data => {
        console.log(data);
        setTimeout(() => {
          this.router.navigate(['/blog/' + this.currentBlog.blogId]);
        }, 1000);
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }

}
