import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  currentBlog = {
    title : '',
    description: '',
    bodyHtml: '',
    category: ''
  };

  validCategories: Array<string> = ['Comedy', 'Drama', 'Television', 'Technology'];
  response;

  constructor(private blogHttpService: BlogHttpService, private router: Router) {
   }

  ngOnInit() {
  }
  createPost() {
    this.response = this.blogHttpService.createBlogPost(this.currentBlog).subscribe(
      data => {
        setTimeout(() => {
          this.router.navigate(['/blog/' + data['data'].blogId]);
        }, 2000);
      },
      error => {
        console.log('post failed');
      }
    );
  }

}
