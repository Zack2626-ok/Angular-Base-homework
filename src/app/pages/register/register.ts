import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  resgister: FormGroup;
  constructor(private fb: FormBuilder) {
    this.resgister = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: '',
      password: '',
    });
  }

  get username() {
    return this.resgister.get('username');
  }

  submitForm = () => {
    console.log(this.resgister.value);
  };
}
