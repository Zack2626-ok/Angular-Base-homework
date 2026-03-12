import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {}
