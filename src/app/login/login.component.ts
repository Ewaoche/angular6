import { Component, OnInit , OnDestroy} from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private fb:FormBuilder) { }
    
  loginForm:FormGroup;

  ngOnInit() {
    this.loginForm =this.fb.group({
     'email': [null, Validators.required],
     'password':[null, Validators.required]
    });
  }

  ngOnDestroy(){
    
  }

  login(formData:NgForm){
    console.log(formData);
  }

}
