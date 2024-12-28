import { Injectable, signal } from '@angular/core';
import { TodoItem } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos = signal<TodoItem[]>([{
    "id": "1",
    "title": "Buy milk",
    "isCompleted": false
  }]);
  constructor() {}
  addTodo(title: string) {
    const id = crypto.randomUUID();
    const newTodo: TodoItem = {
      id,
      title,
      isCompleted: false,
    };
    this.todos.update((prev) => [...prev, newTodo]);
  }
  removeTodo(id: string) {
    this.todos.update((prev) => prev.filter((todo) => todo.id !== id));
  }
  toggleTodo(id: string) {
    this.todos.update((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }
}
