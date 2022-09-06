import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { TodoItem } from '../../../models/todo-items';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  @Input()
  currentMaxId: number = 0;
  @Output()
  added: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();


  public todoForm: FormGroup = new FormGroup({
    description: new FormControl(null, [Validators.required])
  });

  public onAdd(form: FormGroupDirective) {
    if (this.todoForm.valid && this.todoForm.dirty) {
      this.added.emit({
        id: this.currentMaxId + 1,
        description: this.todoForm.value.description,
        checked: false
      });

      form.resetForm();
    }
  }

}
