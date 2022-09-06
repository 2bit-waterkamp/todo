import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.services';
import { TodoItem } from '../../../models/todo-items';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  constructor(private todoService: TodoService) { }

  public todoForm: FormGroup = new FormGroup({
    description: new FormControl(null, [Validators.required])
  });

  public onAdd(form: FormGroupDirective) {
    if (this.todoForm.valid && this.todoForm.dirty) {
      this.todoService.add(this.todoForm.value.description);

      form.resetForm();
    }
  }

}
