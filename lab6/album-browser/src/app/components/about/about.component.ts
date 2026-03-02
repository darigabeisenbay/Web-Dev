import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container">
      <h1>About This Project</h1>
      <p>Created by: [Твое Имя]</p>
      <p>Course: Web Development</p>
    </div>
  `
})
export class AboutComponent {}