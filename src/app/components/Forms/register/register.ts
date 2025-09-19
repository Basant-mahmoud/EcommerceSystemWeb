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
  constructor(private formBuilder: FormBuilder) {
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
      this.registeredData = this.registerForm.value;
      console.log(this.registeredData);// حفظ البيانات
      this.registerForm.reset();   // يمسح الفورم بس
      this.submitted = false;                        // مسح البيانات من الفورم
    }
  }


}
