import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';


@Component({
  selector: 'headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})

export class HeadersComponent implements OnInit {
  header ={};
  
  constructor(private conf: ConfigService) { }

     ngOnInit() {
    this.header = this.getHeader();
     }
   getHeader(){
      return this.conf.getConfig().header
   }
  }
