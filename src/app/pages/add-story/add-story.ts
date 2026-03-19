import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      author: '',
      views: '',
    });
  }

  get title() {
    return this.addForm.get('title');
  }

  submitForm() {
    this.loading = true;
    const data = this.addForm.value;
    this.http.post(`http://localhost:3000/stories`, data).subscribe({
      next: () => {
        alert('them thanh cong');
        this.loading = false;
      },
      error: () => {
        alert('them that bai');
      },
    });
  }
}
