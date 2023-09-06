import { Component } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  public items: Array<TodoItem> = [
    { id: 1, checked: false, description: 'Erste Angular Applikation erstellen' },
    { id: 2, checked: false, description: 'Todo Komponente erstellen' },
    { id: 3, checked: false, description: 'Todos anzeigen' },
    { id: 4, checked: false, description: 'Todos hinzufügen' },
    { id: 5, checked: false, description: 'Todos erledigen' }
  ]


  public onAdded(todo: TodoItem) {
    this.items.push(todo);
  }


}
