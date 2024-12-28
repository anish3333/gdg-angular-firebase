import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { TodosComponent } from './components/todos/todos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, TodosComponent],
  template: `
    <!-- <app-counter /> -->
    <app-todos />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'gdg-angular-firebase';
}
