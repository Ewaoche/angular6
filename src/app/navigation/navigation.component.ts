import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  activetab = 'home';
  constructor() { }

  ngOnInit() {
    
  } 
  getActiveTab(tabname: string){
    this.activetab = tabname;

  }
}
