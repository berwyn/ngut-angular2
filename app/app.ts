import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';

@Component({
    selector: 'app',
    template: `
        <div class="ngut-app">
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
    
    todos: any[] = [
        { text: 'Fight Crime', done: false },
        { text: 'Clean Batcave', done: false },
        { text: 'Fix hole in cowl', done: false }
    ];
    
}