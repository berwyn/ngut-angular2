import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-item',
    template: `
        <input type="checkbox" [ngModel]="todo.done" (click)="toggle.emit(todo)" />
        <span class="todo-text" [class.done]="todo.done">{{ todo.text }}</span>
    `,
    styles: [
        `
        .todo-text.done {
            text-decoration: line-through;
        }
        `
    ],
})
export class TodoItem {
    
    @Input() todo: Todo;
    @Output() toggle = new EventEmitter();
    
}