import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor(private intro: ConfigService) { }
  about = {};

  ngOnInit() {
    this.about = this.getIntro();
  }
  
  getIntro(){
   return  this.intro.getConfig().about;
  }
}
