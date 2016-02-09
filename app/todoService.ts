import { Injectable } from 'angular2/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
    
    private todos: Todo[] = [
        { text: 'Fight Crime', done: false },
        { text: 'Clean Batcave', done: false },
        { text: 'Fix hole in cowl', done: false }
    ];
    
    getAll(): Todo[] {
        return this.todos;
    }
    
    addTodo(todo: Todo) {
        this.todos = [...this.todos, todo];
    }
    
    toggle(todo: Todo) {
        let idx = this.todos.indexOf(todo);
        todo.done = !todo.done;
        this.todos = [
            ...this.todos.slice(0, idx),
            todo,
            ...this.todos.slice(idx+1)
        ];
    }
}