import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {
  gallery={};
  constructor(private galleries:ConfigService) { }

  ngOnInit() {
this.gallery=this.getGallery();
  }
getGallery(){
return this.galleries.getConfig().gallery;
 }

}
