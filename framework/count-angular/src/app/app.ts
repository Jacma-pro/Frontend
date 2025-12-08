import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Count } from './count/count';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Count],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('count-angular');
}
