import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stories',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories: any = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get(`http://localhost:3000/stories`).subscribe({
      next: (data) => {
        // console.log(data);
        this.stories = data;
      },
    });
  }

  handleClick(id: number) {
    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((item: any) => item.id !== id);
      },
    });
  }
}
