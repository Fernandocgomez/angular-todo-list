import { Injectable } from '@angular/core';
import { TodoInterface } from './interfaces/todo.interface'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: TodoInterface[] = [
    {
      title: "first", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat", 
      status: false
    }, 
    {
      title: "second", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat", 
      status: false
    }, 
    {
      title: "third", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat", 
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
