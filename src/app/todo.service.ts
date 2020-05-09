import { Injectable } from '@angular/core';
import { TodoInterface } from './interfaces/todo.interface'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: TodoInterface[] = [
    {
      title: "first", 
      description: "first", 
      status: false
    }, 
    {
      title: "second", 
      description: "second", 
      status: false
    }, 
    {
      title: "third", 
      description: "third", 
      status: true
    }, 
  ];

  constructor() {}

  updateStatus(index: number){
    this.todos[index].status = !this.todos[index].status
  }

  removeTodo(index: number) {
    this.todos.splice(index,1)
  }

  addNewTodo(title: string, description: string){
    this.todos.unshift({title: title, description, status: false})
  }


}
