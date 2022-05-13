import { Component } from '@angular/core';
import { TodoItem } from '../../../models/todo-items';
import { TodoService } from '../../../services/todo.services';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor(private todoService: TodoService) { }

  get items(): TodoItem[] {
    return this.todoService.items;
  }

  public onAdded(todo: TodoItem) {
    this.items.push(todo);
  }
}
