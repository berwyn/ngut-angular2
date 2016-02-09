import { Todo } from './todo';

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
        this.todos.push(todo);
    }
    
}