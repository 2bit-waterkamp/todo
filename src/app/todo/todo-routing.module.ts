import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoComponent } from './components/todo/todo.component';
import { PendingChangesGuard } from './guards/pending-changes.guard';

const todoRoutes = [
    { path: '', component: TodoComponent },
    { path: 'add', canDeactivate: [PendingChangesGuard], component: TodoAddComponent }
];

@NgModule({
    imports: [RouterModule.forChild(todoRoutes)],
    exports: [RouterModule]
})
export class TodoRoutingModule { }