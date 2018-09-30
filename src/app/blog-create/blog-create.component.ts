import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  currentBlog = {
    title : '',
    description: '',
    blogBody: '',
    category: ''
  };

  validCategories: Array<string> = ['Comedy', 'Drama', 'Television', 'Technology'];
  response;

  constructor(private blogHttpService: BlogHttpService) { }

  ngOnInit() {
  }
  createPost() {
    this.response = this.blogHttpService.createBlogPost(this.currentBlog).subscribe(
      data => {
        console.log('post created successfully');
      },
      error => {
        console.log('post failed');
      }
    );
  }

}
