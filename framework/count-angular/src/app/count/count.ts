import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  imports: [],
  templateUrl: './count.html',
  styleUrl: './count.css',
})
export class Count {
  count = 0;
  
  increment() {
    this.count++;
  }

}
