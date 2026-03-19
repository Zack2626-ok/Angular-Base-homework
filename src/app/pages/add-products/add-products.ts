import { HttpClient } from '@angular/common/http';
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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addProduct = this.fb.group({
      name: '',
      price: 0,
    });
  }

  submitForm = () => {
    console.log(this.addProduct.value);
    this.http.post(`http://localhost:3000/products`, this.addProduct.value).subscribe({
      next: () => {
        alert('them san pham thanh cong');
      },
      error: () => {
        alert('them san pham that bai');
      },
    });
  };
}
