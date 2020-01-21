import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
    
  signupForm:FormGroup;

  ngOnInit() {
    this.signupForm =this.fb.group({
     'email': [null, Validators.required],
     'firstName':[null, Validators.required],
     'lastName':[null, Validators.required],
    });
  }

  
  signup(formData:NgForm){
    console.log(formData);
  }


}
