import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
    
  contactForm:FormGroup;

  ngOnInit() {
    this.contactForm =this.fb.group({

      'firstName':[null, Validators.required],
      'lastName':[null, Validators.required],
     'email': [null, Validators.required],
     'message':[null, Validators.required]
    });
  }

  
  submit(formData:NgForm){
    console.log(formData);
  }
}
