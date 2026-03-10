import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  name = 'bao toan';
  number = 120;

  myfun = () => {
    console.log('hello');
    alert(`hello ${this.name}`);
  };
}
console.log();
