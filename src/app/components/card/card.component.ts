import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <img [src]="imageUrl" [alt]="title" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        margin-bottom: 30px;
      }
      .card-img-top {
        height: 200px;
        object-fit: cover;
        height: 300px;
      }
    `
  ]
})
export class CardComponent {

  constructor() {
    this.title = '';
    this.description = '';
    this.imageUrl = '';
  }
  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
}
