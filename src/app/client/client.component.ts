import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
 client={};
  constructor(private clientservice:ConfigService) { }

  ngOnInit() {
  this.client= this.getClientData();
  }
getClientData(){
  return this.clientservice.getConfig().client;
 }

}
