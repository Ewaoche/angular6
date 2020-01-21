import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  socialresult = {};

  constructor(private socialservice:ConfigService) { }

  ngOnInit() {
    this.socialresult = this.getSocialData();
  }

  getSocialData(){
    return this.socialservice.getConfig().socialsites;
  }

}
