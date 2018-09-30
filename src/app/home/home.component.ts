import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBlogs;

  constructor(private blogService: BlogService, private blogHttpService: BlogHttpService) { }

  ngOnInit() {
    this.allBlogs = this.blogService.getAllBlogs();
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data => {
        this.allBlogs = data['data'];
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }

}
