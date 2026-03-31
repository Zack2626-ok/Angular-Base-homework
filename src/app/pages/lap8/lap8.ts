import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lap8',
  imports: [ReactiveFormsModule],
  templateUrl: './lap8.html',
  styleUrl: './lap8.css',
})
export class Edit {
  id: any;
  editForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.editForm = this.fb.group({ title: [''], author: '', views: '' });
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      console.log('id co ton tai', this.id);
      this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
        next: (data: any) => {
          console.log(data);
          this.editForm.patchValue(data);
        },
      });
    }
  }

  submitForm() {
    if (!this.id) return;
    const data = this.editForm.value;

    // 4. Gọi API update
    this.http.put(`http://localhost:3000/stories/${this.id}`, data).subscribe({
      next: () => {
        this.router.navigateByUrl('/stories');
        alert('them thanh cong');
      },
      error: () => {
        alert('them that bai');
      },
    });
  }
}
