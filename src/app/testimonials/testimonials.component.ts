import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor(private testim: ConfigService) { }
 testimonial = {};
  ngOnInit() {
    this.testimonial= this.getTestimoniaData();
  }

  getTestimoniaData(){
    return this.testim.getConfig().testimonial;
  }
}
