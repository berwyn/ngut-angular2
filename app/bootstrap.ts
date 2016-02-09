import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import {TodoService} from './todoService';

bootstrap(App, [TodoService]);