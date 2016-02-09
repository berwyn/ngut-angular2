import { Component } from 'angular2/core';
import { NgFor, NgModel } from 'angular2/common';
import { Todo } from './todo';
import { TodoService } from './todoService';
import { TodoItem } from './todoItem';

@Component({
    selector: 'app',
    template: `
        <div class="ngut-app">
            <input type="text" [(ngModel)]="newTodo.text" />
            <input type="button" value="Create" (click)="createTodo()" />
            <ul>
                <li *ngFor="#todo of todos">
                    <todo-item [todo]="todo"></todo-item>
                </li>
            </ul>
        </div>
    `,
    directives: [
        NgFor,
        NgModel,
        TodoItem
    ]
})
export class App {
    
    todos: Todo[];
    newTodo: Todo;
    
    constructor(private todoService: TodoService) {
        this.todos = this.todoService.getAll();
        this.newTodo = new Todo();
    }
    
    createTodo() {
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }
}