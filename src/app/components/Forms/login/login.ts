import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Authservice} from '../../../services/authservice';
import {LoginRequest} from '../../../Modules/LoginRequest';
import {RegisterRequest} from '../../../Modules/RegisterRequest';
import {AuthResponse} from '../../../Modules/AuthResponse';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

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
  constructor(private formBuilder: FormBuilder,private _Authservice:Authservice, private toastr: ToastrService,  private router: Router) {
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
      const request: LoginRequest = {
        email: this.LoginForm.get('email')?.value,
        password: this.LoginForm.get('password')?.value,
      };

      this._Authservice.login(request).subscribe({
        next: (res) => {
          this.LoginData = res;
          console.log(res);
          this._Authservice.saveToken(res.token);
          // ممكن تخزن بيانات تانية كمان زي الاسم أو الايميل
          localStorage.setItem('username', res.username);
          localStorage.setItem('email', res.email);
          this.toastr.success('Login successful!', 'Success');

          setTimeout(() => {
            this.router.navigate(['/products']);
          }, 1500);

          this.submitted = false;
          this.resetForm();
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.toastr.error(err.error?.RegistrationError?.join(', ') || 'Login failed');
          this.submitted = false;
        }
      });

      this.LoginData = this.LoginForm.value;
      this.resetForm();
    }
  }


}
