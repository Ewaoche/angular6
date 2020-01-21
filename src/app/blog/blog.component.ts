import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-blog', 
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: any = {};
  allItems: any[];
  pages: any[];
  pageSize = 3;
  pager: any = {};

  constructor(private configservice:ConfigService,
    private pageservice: PagerService) { }

  ngOnInit() {
    this.blogs = this.getBlogs();
    this.allItems = this.blogs.posts;
    this.setPage(1);
  }

  getBlogs(){
    return this.configservice.getConfig().blog;
  }

  setPage(pageNumber:number){
  //create a pager using paging service
  this.pager = this.pageservice.getPager(this.allItems.length, pageNumber, this.pageSize);
  // current page post 
   this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
 
  }

  
}
