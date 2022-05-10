import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../models/todo-items';

@Pipe({ name: 'todos' })
export class TodosPipe implements PipeTransform {
    transform(value: TodoItem[], done: boolean) {
        return value?.length ? value.filter(item => item.checked === done) : value;
    }
}