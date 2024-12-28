import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <p>
      counter = {{count()}}
    </p>
    <button (click)="increment($event)">+</button>
    <button (click)="decrement()">-</button>
  `,
  styles: `
  p{
    color: white;
  }
  
  `
})
export class CounterComponent {
  count = signal(1);
  increment(event: any){
    console.log(event);
    this.count.update((prev) => prev + 1);
  }
  decrement(){
    this.count.update((prev) => prev - 1);
  }
}
