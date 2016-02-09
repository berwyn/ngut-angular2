import { Component } from 'angular2/core';
import { NgFor, NgModel } from 'angular2/common';
import { Todo } from './todo';
import { TodoService } from './todoService';
import { TodoItem } from './todoItem';
import { TodoPipe } from './todoPipe';

@Component({
    selector: 'app',
    template: `
        <div class="ngut-app">
            <input type="text" [(ngModel)]="newTodo.text" />
            <input type="button" value="Create" (click)="createTodo()" />
            <select #sel (change)="sel.value">
                <option value="false">Incomplete</option>
                <option value="true">Finished</option>
            </select>
            <ul>
                <li *ngFor="#todo of todoService.getAll() | finished: sel.value">
                    <todo-item [todo]="todo" (toggle)="toggleTodo($event)"></todo-item>
                </li>
            </ul>
        </div>
    `,
    directives: [
        NgFor,
        NgModel,
        TodoItem
    ],
    pipes: [
        TodoPipe
    ]
})
export class App {
    
    newTodo: Todo;
    
    constructor(private todoService: TodoService) {
        this.newTodo = new Todo();
    }
    
    createTodo() {
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }
    
    toggleTodo(todo: Todo) {
        this.todoService.toggle(todo);
    }
}