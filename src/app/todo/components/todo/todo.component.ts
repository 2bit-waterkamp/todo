import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../../models/todo-item';
import { TodoService } from '../../../services/todo.services';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  public items: Array<TodoItem> = [];


  public onAdded(todo: TodoItem) {
    this.items.push(todo);
  }

  public ngOnInit(): void {
    this.todoService.load().subscribe(todos => this.items = todos);
  }


}
