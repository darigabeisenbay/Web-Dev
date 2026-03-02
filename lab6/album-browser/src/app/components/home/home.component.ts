import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container">
      <h1>Welcome to Album Viewer</h1>
      <p>Manage your albums and photos easily.</p>
      <button routerLink="/albums">Browse Albums</button>
    </div>
  `
})
export class HomeComponent {}