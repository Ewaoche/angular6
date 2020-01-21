import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'pricings',
  templateUrl: './pricings.component.html',
  styleUrls: ['./pricings.component.scss']
})
export class PricingsComponent implements OnInit {
  pricings={};
  constructor(private pricingservice:ConfigService) { }

  ngOnInit() {
    this.pricings= this.getClientData();
  }

  getClientData(){
    return this.pricingservice.getConfig().pricings;
   }

}


 