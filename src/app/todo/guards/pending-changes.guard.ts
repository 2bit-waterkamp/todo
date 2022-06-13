import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoAddComponent } from '../components/todo-add/todo-add.component';

@Injectable({
  providedIn: 'root'
})
export class PendingChangesGuard implements CanDeactivate<TodoAddComponent> {
  constructor(private snackBar: MatSnackBar) { }

  canDeactivate(
    component: TodoAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (component.todoForm.dirty) {
      this.snackBar.open('Änderungen müssen zuerst gespeichert werden.', undefined, { duration: 2000 });
    }

    return !component.todoForm.dirty;
  }

}
