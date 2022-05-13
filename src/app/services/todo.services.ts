import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, tap } from 'rxjs';
import { TodoItem } from '../models/todo-items';

@Injectable({ providedIn: 'root' })
export class TodoService {
    constructor(private http: HttpClient, private snackbar: MatSnackBar) {
        this.load();
    }

    public items: TodoItem[] = [];

    private load(): void {
        this.http.get<TodoItem[]>('assets/todos.json').pipe(
            tap(() => this.snackbar.open('Todos successfully loaded', undefined, { duration: 2000 })),
            catchError((e) => {
                console.error(e);
                this.snackbar.open('Could not load todos', 'OK');
                return [];
            })
        ).subscribe(todos => this.items = todos);
    }

    public add(description: string) {
        this.items.push({
            id: this.items.length + 1,
            description,
            checked: false
        })
    }
}