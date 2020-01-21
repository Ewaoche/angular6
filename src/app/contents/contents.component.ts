import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  service= {};

  constructor(private serve: ConfigService) { }

  ngOnInit() {
   this.service= this.getServiceData();
  }

  getServiceData(){
    return  this.serve.getConfig().service;
  }
}
