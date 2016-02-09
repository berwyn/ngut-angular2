import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { Todo } from './todo';
import { TodoService } from './todoService';

@Component({
    selector: 'app',
    template: `
        <div class="ngut-app">
            <input type="text" [value]="newTodo.text" (keyup)="setText($event.target.value)" />
            <input type="button" value="Create" (click)="createTodo()" />
            <ul>
                <li *ngFor="#todo of todos">{{ todo.text }}</li>
            </ul>
        </div>
    `,
    directives: [
        NgFor
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
    
    setText(text: string) {
        this.newTodo.text = text;
    }
}