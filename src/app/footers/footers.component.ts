import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.scss']
})
export class FootersComponent implements OnInit {
  footer = {};
  constructor(public footerservice:ConfigService) { }

  ngOnInit() {
    this.footer = this.getFooter();
  }

  getFooter(){
    return this.footerservice.getConfig().footer;
  }

}
