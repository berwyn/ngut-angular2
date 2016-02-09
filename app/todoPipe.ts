import { Pipe } from 'angular2/core';
import { Todo } from './todo';

@Pipe({ name: 'finished' })
export class TodoPipe {
    
    transform(value: Todo[], [done]) {
        return value.filter(t => t.done === (done === 'true'));
    }
    
}