import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  LoginForm: FormGroup;
  submitted: boolean = false;
  LoginData: any;
  constructor(private formBuilder: FormBuilder) {
    this.LoginForm = formBuilder.group({
      email:new FormControl('',[Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    })
  }


  resetForm(){
    this.LoginForm.reset();
    //this.registeredData = null;
    this.submitted = false;
  }
  onSubmit() {
    this.submitted = true;

    if (this.LoginForm.valid) {
      this.LoginData = this.LoginForm.value;   // حفظ البيانات
      this.resetForm();                        // مسح البيانات من الفورم
    }
  }

}
