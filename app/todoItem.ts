import { Component, Input } from 'angular2/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-item',
    template: `
        <input type="checkbox" [(ngModel)]="todo.done" />
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
    
}