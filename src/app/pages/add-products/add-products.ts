import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  imports: [ReactiveFormsModule],
  templateUrl: './add-products.html',
  styleUrl: './add-products.css',
})
export class AddProducts {
  addProduct: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addProduct = this.fb.group({
      name: '',
      price: 0,
      category: '',
    });
  }

  submitForm = () => {
    console.log(this.addProduct.value);
  };
}
