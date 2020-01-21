import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ConfigService} from '../config.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
 post = {};
  constructor(private route: ActivatedRoute, 
    private articleService:ConfigService, private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.post = this.getPostById(id);
    console.log(this.post);
  }

 getPostById(id:number){
   return this.articleService.getPostsById(id);
 }

getBack(){
this.location.back();
}
 
}
