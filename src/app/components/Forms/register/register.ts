import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {Authservice} from '../../../services/authservice';
import {RegisterRequest} from '../../../Modules/RegisterRequest';
import {AuthResponse} from '../../../Modules/AuthResponse';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  protected readonly onsubmit = onsubmit;
  registerForm: FormGroup;
  submitted = false;
  registeredData:any = null;

  constructor(private formBuilder: FormBuilder,private authService: Authservice, private toastr: ToastrService,  private router: Router ) {
    this.registerForm = this.formBuilder.group({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),   // الحد الأدنى 5
        Validators.maxLength(15)   // الحد الأقصى 15
      ]),      email:new FormControl('',[Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern(/^01[0-9]{9}$/)
      ]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  resetForm(){
    this.registerForm.reset();
    this.submitted = false;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      const request: RegisterRequest = {
        name: this.registerForm.get('fullName')?.value,
        username: this.registerForm.get('email')?.value.split('@')[0], // هنا ممكن تعملي username زي ما تحبي
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        role: 'User'
      };
      this.authService.register(request).subscribe({
        next: (res:AuthResponse) => {
          this.toastr.success('Registration successful! Redirecting to login...', 'Success');
          this.registeredData=res;
          console.log(res);
          setTimeout(() => {
            this.router.navigate(['/login']);  // redirect
          }, 1500);
          this.submitted = false;
          this.resetForm();
        },
        error: (err) => {
          console.error(' Registration failed:', err);
          this.toastr.error(err.error?.RegistrationError?.join(', ') || 'Registration failed');
          this.submitted = false;
        }
      });
    }
  }


}
